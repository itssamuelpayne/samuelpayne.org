import { useRef, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PasswordGateProps {
  // Called after the server accepts the password and sets the session cookie.
  // The parent re-fetches /api/projects and swaps to the content view.
  onUnlocked: () => void | Promise<void>;
}

type SubmitState = 'idle' | 'submitting' | 'wrong' | 'error';

export function PasswordGate({ onUnlocked }: PasswordGateProps) {
  const [value, setValue] = useState('');
  const [state, setState] = useState<SubmitState>('idle');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
  const wrong = state === 'wrong';
  const accent = '#FF4000';

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-8">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <form onSubmit={submit} className="w-full">
          <motion.div
            className="relative w-full border-b transition-colors"
            style={{
              borderColor: wrong
                ? accent
                : focused
                  ? '#111827'
                  : '#e5e7eb',
            }}
            animate={wrong ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => inputRef.current?.focus()}
          >
            {/* Real input captures keystrokes but is visually transparent —
                we render our own masked dots + caret below. */}
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (state === 'wrong' || state === 'error') setState('idle');
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              autoFocus
              autoComplete="off"
              spellCheck={false}
              disabled={submitting}
              aria-label="Password"
              className="absolute inset-0 h-full w-full cursor-text bg-transparent text-transparent caret-transparent outline-none"
            />

            <div
              className="pointer-events-none flex min-h-[52px] select-none items-center justify-center gap-2 pb-3 pt-3"
              aria-hidden
            >
              {value.length === 0 ? (
                <div className="flex items-center gap-2">
                  <span className="font-['Playfair_Display',_serif] text-lg text-gray-300">
                    Password
                  </span>
                  {focused && !submitting && <Caret wrong={wrong} />}
                </div>
              ) : (
                <div className="flex items-center gap-2.5">
                  <AnimatePresence initial={false}>
                    {Array.from(value).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                        }}
                        className="block h-2 w-2 rounded-full"
                        style={{ backgroundColor: wrong ? accent : '#111827' }}
                      />
                    ))}
                  </AnimatePresence>
                  {focused && !submitting && <Caret wrong={wrong} />}
                </div>
              )}
            </div>
          </motion.div>

          <div className="mt-4 h-4 text-center">
            <AnimatePresence mode="wait">
              {message && (
                <motion.p
                  key={message}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="font-['Space_Mono',_monospace] text-[10px] uppercase tracking-[0.15em] text-gray-400"
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </div>
  );
}

// Soft-pulsing caret — a gentle opacity fade rather than the OS hard blink.
function Caret({ wrong }: { wrong: boolean }) {
  return (
    <motion.span
      className="block h-5 w-px"
      style={{ backgroundColor: wrong ? '#FF4000' : '#111827' }}
      animate={{ opacity: [1, 0.15, 1] }}
      transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
