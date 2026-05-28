import { useEffect, useRef, useState, type FormEvent } from 'react';
import { PasswordEyes, type EyeState } from './PasswordEyes';

interface PasswordGateProps {
  // Called after the server accepts the password and sets the session cookie.
  // The parent re-fetches /api/projects and swaps to the content view.
  onUnlocked: () => void | Promise<void>;
}

type SubmitState = 'idle' | 'submitting' | 'wrong' | 'error';

export function PasswordGate({ onUnlocked }: PasswordGateProps) {
  const [value, setValue] = useState('');
  const [state, setState] = useState<SubmitState>('idle');
  const wideTimer = useRef<number | null>(null);
  const [forceWide, setForceWide] = useState(false);

  // When a wrong-password lands, pop the eyes wide for a beat, then settle
  // back to the input-driven state.
  useEffect(() => {
    if (state !== 'wrong') return;
    setForceWide(true);
    if (wideTimer.current) window.clearTimeout(wideTimer.current);
    wideTimer.current = window.setTimeout(() => setForceWide(false), 700);
    return () => {
      if (wideTimer.current) window.clearTimeout(wideTimer.current);
    };
  }, [state]);

  const eyeState: EyeState = forceWide
    ? 'wide'
    : state === 'submitting'
      ? 'blinking'
      : value.length > 0
        ? 'closed'
        : 'open';

  // Pupil gaze nudges right as the field fills, so the eyes "watch" the
  // caret. Capped so it never reads as bug-eyed.
  const gaze = Math.min(value.length / 12, 1);

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
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="mb-14">
          <PasswordEyes state={eyeState} gaze={gaze} />
        </div>

        <form onSubmit={submit} className="w-full">
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (state === 'wrong' || state === 'error') setState('idle');
            }}
            placeholder="Password"
            autoFocus
            autoComplete="off"
            spellCheck={false}
            disabled={submitting}
            aria-label="Password"
            className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-gray-900 focus:outline-none text-center font-['Playfair_Display',_serif] text-lg text-gray-900 pb-3 pt-2 placeholder:text-gray-300 placeholder:font-normal placeholder:transition-opacity placeholder:duration-200 focus:placeholder:opacity-0 transition-colors disabled:opacity-60"
          />

          <div className="h-4 mt-4 text-center">
            {message && (
              <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.15em] uppercase">
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
