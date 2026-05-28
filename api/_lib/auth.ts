// Edge-runtime safe auth helpers. Uses Web Crypto only.
// Server-only — never imported by client code.

const SESSION_COOKIE = 'work_session';
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const SIG_LABEL = 'unlocked';

function bytesToHex(bytes: Uint8Array): string {
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += bytes[i].toString(16).padStart(2, '0');
  return s;
}

async function hmacHex(secret: string, message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(message));
  return bytesToHex(new Uint8Array(sig));
}

// Constant-time string comparison. Inputs must be the same length to
// avoid leaking length info via timing; we hash before comparing to
// guarantee that property when comparing secrets of arbitrary length.
function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

async function sha256Hex(message: string): Promise<string> {
  const enc = new TextEncoder();
  const digest = await crypto.subtle.digest('SHA-256', enc.encode(message));
  return bytesToHex(new Uint8Array(digest));
}

export async function passwordsMatch(submitted: string, actual: string): Promise<boolean> {
  // Hash both sides so the constant-time compare runs on fixed-length values.
  const [a, b] = await Promise.all([sha256Hex(submitted), sha256Hex(actual)]);
  return constantTimeEqual(a, b);
}

export async function signSession(secret: string): Promise<string> {
  const expiry = Date.now() + ONE_WEEK_MS;
  const payload = `${SIG_LABEL}.${expiry}`;
  const sig = await hmacHex(secret, payload);
  return `${payload}.${sig}`;
}

export async function verifySession(secret: string, token: string): Promise<boolean> {
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [label, expiryStr, sig] = parts;
  if (label !== SIG_LABEL) return false;
  const expiry = Number(expiryStr);
  if (!Number.isFinite(expiry) || expiry < Date.now()) return false;
  const expected = await hmacHex(secret, `${label}.${expiryStr}`);
  return constantTimeEqual(expected, sig);
}

export function parseCookies(header: string | null): Record<string, string> {
  if (!header) return {};
  const out: Record<string, string> = {};
  for (const part of header.split(';')) {
    const trimmed = part.trim();
    const eq = trimmed.indexOf('=');
    if (eq <= 0) continue;
    const k = trimmed.slice(0, eq);
    const v = trimmed.slice(eq + 1);
    try {
      out[k] = decodeURIComponent(v);
    } catch {
      out[k] = v;
    }
  }
  return out;
}

export function buildSessionCookie(value: string): string {
  const maxAge = Math.floor(ONE_WEEK_MS / 1000);
  // Secure works on localhost too (browsers treat localhost as a secure context).
  return `${SESSION_COOKIE}=${encodeURIComponent(value)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${maxAge}`;
}

export function buildClearCookie(): string {
  return `${SESSION_COOKIE}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`;
}

export async function isAuthenticated(req: Request, secret: string): Promise<boolean> {
  const cookies = parseCookies(req.headers.get('cookie'));
  const token = cookies[SESSION_COOKIE];
  if (!token) return false;
  return verifySession(secret, token);
}

export function readEnv(): { password: string; secret: string } | null {
  const password = process.env.WORK_PASSWORD;
  const secret = process.env.COOKIE_SECRET;
  if (!password || !secret) return null;
  return { password, secret };
}
