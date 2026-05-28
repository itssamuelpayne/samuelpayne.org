import { useState, type FormEvent } from 'react';

interface PasswordGateProps {
  // Called after the server accepts the password and sets the session cookie.
  // The parent re-fetches /api/projects and swaps to the content view.
  onUnlocked: () => void | Promise<void>;
}

type SubmitState = 'idle' | 'submitting' | 'wrong' | 'error';

export function PasswordGate({ onUnlocked }: PasswordGateProps) {
  const [value, setValue] = useState('');
  const [state, setState] = useState<SubmitState>('idle');

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (state === 'submitting' || !value) return;
    setState('submitting');
    try {
      const res = await fetch('/api/unlock', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ password: value }),
      });
      if (res.status === 200) {
        await onUnlocked();
        return;
      }
      if (res.status === 401) {
        setState('wrong');
        return;
      }
      setState('error');
    } catch {
      setState('error');
    }
  }

  const message =
    state === 'wrong'
      ? 'That’s not it. Try again.'
      : state === 'error'
        ? 'Couldn’t check. Try again in a moment.'
        : '';

  const submitting = state === 'submitting';

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-8">
      <div className="w-full max-w-md text-center">
        <div className="mb-12">
          <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase mb-6">
            Selected Work
          </p>
          <h1
            className="text-[2.25rem] leading-[1.1] tracking-tight font-['Playfair_Display',_serif] text-gray-900"
            style={{ fontWeight: 600 }}
          >
            A small collection of design work, kept quiet.
          </h1>
          <p className="mt-6 font-['Playfair_Display',_serif] text-gray-500 leading-relaxed">
            Enter the password to view.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (state === 'wrong' || state === 'error') setState('idle');
            }}
            autoFocus
            autoComplete="off"
            spellCheck={false}
            disabled={submitting}
            aria-label="Password"
            className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-gray-900 focus:outline-none text-center font-['Playfair_Display',_serif] text-lg text-gray-900 pb-3 pt-2 transition-colors disabled:opacity-60"
          />

          <div className="h-4">
            {message && (
              <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.15em] uppercase">
                {message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting || !value}
            className="mt-4 text-[10px] font-['Space_Mono',_monospace] text-gray-900 tracking-[0.25em] uppercase border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {submitting ? 'Checking' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  );
}
