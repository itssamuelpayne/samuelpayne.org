
  # www.samuelpayne.org

  This is a code bundle for www.samuelpayne.org. The original project is available at https://www.figma.com/design/mFU5hTM7nYJDlzHx3TZQ5D/www.samuelpayne.org.

  ## Running the code

  Run `npm i` to install the dependencies.

  Copy `.env.example` to `.env.local` and fill in `WORK_PASSWORD` and `COOKIE_SECRET`
  (generate the secret with `openssl rand -hex 32`).

  Run `npm run dev` to start the development server.

  ## Deploying to Vercel

  The `/work` portfolio is gated by a password verified server-side. In the Vercel
  dashboard under Settings → Environment Variables, set:

  - `WORK_PASSWORD` — the password visitors enter at `/work`
  - `COOKIE_SECRET` — a long random string used to sign the session cookie
    (generate with `openssl rand -hex 32`)

  Both should be set for the Production environment at minimum. Rotating
  `COOKIE_SECRET` signs everyone out (they'll need to re-enter the password).
  