import {
  buildSessionCookie,
  passwordsMatch,
  readEnv,
  signSession,
} from './_lib/auth';

export const config = { runtime: 'edge' };

function json(body: unknown, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  headers.set('content-type', 'application/json');
  headers.set('cache-control', 'no-store');
  return new Response(JSON.stringify(body), { ...init, headers });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return json({ error: 'method_not_allowed' }, { status: 405 });
  }

  const env = readEnv();
  if (!env) {
    return json({ error: 'server_not_configured' }, { status: 500 });
  }

  let submitted = '';
  try {
    const body = (await req.json()) as { password?: unknown };
    if (typeof body.password === 'string') submitted = body.password.trim();
  } catch {
    return json({ error: 'bad_request' }, { status: 400 });
  }

  if (!submitted) {
    return json({ ok: false }, { status: 401 });
  }

  const ok = await passwordsMatch(submitted, env.password);
  if (!ok) {
    return json({ ok: false }, { status: 401 });
  }

  const token = await signSession(env.secret);
  const headers = new Headers();
  headers.set('content-type', 'application/json');
  headers.set('cache-control', 'no-store');
  headers.append('set-cookie', buildSessionCookie(token));
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
}
