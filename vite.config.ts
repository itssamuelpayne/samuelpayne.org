import { defineConfig, loadEnv, type Connect, type ViteDevServer } from 'vite'
import path from 'path'
import type { IncomingMessage, ServerResponse } from 'http'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Map of routes the dev server should serve from the /api directory.
// Mirror this here when you add new endpoints. Vercel handles routing
// in prod automatically based on the filesystem.
const API_ROUTES: Record<string, string> = {
  '/api/unlock': '/api/unlock.ts',
  '/api/projects': '/api/projects.ts',
}

// Vite dev middleware that adapts Node req/res into Web Request/Response
// and invokes the same edge-runtime handlers we deploy to Vercel.
function vercelApiPlugin() {
  return {
    name: 'vercel-api-dev',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(
        async (req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
          if (!req.url) return next()
          const url = new URL(req.url, `http://${req.headers.host ?? 'localhost'}`)
          const modulePath = API_ROUTES[url.pathname]
          if (!modulePath) return next()

          try {
            let body: Buffer | undefined
            if (req.method && req.method !== 'GET' && req.method !== 'HEAD') {
              const chunks: Buffer[] = []
              for await (const chunk of req) chunks.push(chunk as Buffer)
              body = Buffer.concat(chunks)
            }

            const webHeaders = new Headers()
            for (const [k, v] of Object.entries(req.headers)) {
              if (typeof v === 'string') webHeaders.set(k, v)
              else if (Array.isArray(v)) webHeaders.set(k, v.join(', '))
            }

            const webReq = new Request(url.toString(), {
              method: req.method,
              headers: webHeaders,
              body: body && body.length ? body : undefined,
            })

            const mod = await server.ssrLoadModule(modulePath)
            const handler = mod.default as (r: Request) => Promise<Response>
            if (typeof handler !== 'function') {
              res.statusCode = 500
              res.end(`No default export from ${modulePath}`)
              return
            }

            const webRes = await handler(webReq)
            res.statusCode = webRes.status

            // Set-cookie needs special handling: Headers.forEach concatenates
            // multiple set-cookie values with a comma, which corrupts them.
            // Use getSetCookie() to get the raw array.
            const setCookies =
              typeof (webRes.headers as Headers & { getSetCookie?: () => string[] }).getSetCookie ===
              'function'
                ? (webRes.headers as Headers & { getSetCookie: () => string[] }).getSetCookie()
                : []

            webRes.headers.forEach((value, key) => {
              if (key.toLowerCase() === 'set-cookie') return
              res.setHeader(key, value)
            })
            if (setCookies.length) res.setHeader('set-cookie', setCookies)

            const buf = Buffer.from(await webRes.arrayBuffer())
            res.end(buf)
          } catch (err) {
            // eslint-disable-next-line no-console
            console.error(`[api] ${url.pathname} failed:`, err)
            res.statusCode = 500
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ error: 'internal_error' }))
          }
        }
      )
    },
  }
}

export default defineConfig(({ mode }) => {
  // Load every .env var (not just VITE_*) into process.env so the
  // edge handlers can read WORK_PASSWORD and COOKIE_SECRET in dev.
  const env = loadEnv(mode, process.cwd(), '')
  for (const key of ['WORK_PASSWORD', 'COOKIE_SECRET'] as const) {
    if (!process.env[key] && env[key]) process.env[key] = env[key]
  }

  return {
    plugins: [
      // The React and Tailwind plugins are both required for Make, even if
      // Tailwind is not being actively used – do not remove them
      react(),
      tailwindcss(),
      vercelApiPlugin(),
    ],
    resolve: {
      alias: {
        // Alias @ to the src directory
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
