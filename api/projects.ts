import { isAuthenticated, readEnv } from './_lib/auth';
import { projects } from './_data/projects';

export const config = { runtime: 'edge' };

function json(body: unknown, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  headers.set('content-type', 'application/json');
  // Never cache content responses — they're gated and personalised by cookie.
  headers.set('cache-control', 'private, no-store');
  return new Response(JSON.stringify(body), { ...init, headers });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'GET') {
    return json({ error: 'method_not_allowed' }, { status: 405 });
  }

  const env = readEnv();
  if (!env) {
    return json({ error: 'server_not_configured' }, { status: 500 });
  }

  const ok = await isAuthenticated(req, env.secret);
  if (!ok) {
    return json({ error: 'unauthorized' }, { status: 401 });
  }

  return json({ projects });
}
