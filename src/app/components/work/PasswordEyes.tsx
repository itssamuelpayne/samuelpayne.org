import { motion } from 'motion/react';

export type EyeState = 'open' | 'closed' | 'wide' | 'blinking';

interface PasswordEyesProps {
  state: EyeState;
  /** 0..1 — used to gently steer the pupils as the user types */
  gaze?: number;
}

// Layout: each eye sits in a 60-wide column, 28 of gap between.
// Pupils ride at cy 30. Moving them ±2.5 in x reads as "looking";
// any more becomes goofy.
const EYE_RY_OPEN = 14;
const EYE_RY_CLOSED = 1.2;
const EYE_RY_WIDE = 17;

const PUPIL_R_OPEN = 4.5;
const PUPIL_R_WIDE = 3.2;

function gazeOffset(g: number) {
  const clamped = Math.max(0, Math.min(1, g));
  return (clamped - 0.5) * 5;
}

export function PasswordEyes({ state, gaze = 0.5 }: PasswordEyesProps) {
  const dx = gazeOffset(gaze);

  // Resting targets per state.
  const ryTarget =
    state === 'closed' ? EYE_RY_CLOSED : state === 'wide' ? EYE_RY_WIDE : EYE_RY_OPEN;
  const pupilRTarget =
    state === 'closed' ? 0 : state === 'wide' ? PUPIL_R_WIDE : PUPIL_R_OPEN;
  const pupilOpacityTarget = state === 'closed' ? 0 : 1;

  // Blink loop while submitting.
  const ryAnimate =
    state === 'blinking' ? [EYE_RY_OPEN, EYE_RY_CLOSED, EYE_RY_OPEN] : ryTarget;
  const pupilOpacityAnimate =
    state === 'blinking' ? [1, 0, 1] : pupilOpacityTarget;

  const lidTransition =
    state === 'blinking'
      ? { duration: 1.4, repeat: Infinity, ease: 'easeInOut' as const }
      : state === 'wide'
        ? { type: 'spring' as const, stiffness: 600, damping: 14 }
        : { type: 'spring' as const, stiffness: 500, damping: 28 };

  // Pupil shrink uses a tween — springs would overshoot into negative radius,
  // which SVG rejects.
  const pupilTransition =
    state === 'blinking'
      ? { duration: 1.4, repeat: Infinity, ease: 'easeInOut' as const }
      : { duration: 0.18, ease: 'easeOut' as const };

  // Small head-shake when surprised.
  const wrapperAnim = state === 'wide' ? { x: [0, -4, 4, -2, 2, 0] } : { x: 0 };

  return (
    <motion.svg
      width="148"
      height="60"
      viewBox="0 0 148 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      animate={wrapperAnim}
      transition={state === 'wide' ? { duration: 0.4 } : { duration: 0 }}
      style={{ display: 'block', margin: '0 auto' }}
    >
      {/* Left eye */}
      <motion.ellipse
        cx={30}
        cy={30}
        rx={26}
        ry={EYE_RY_OPEN}
        initial={false}
        animate={{ ry: ryAnimate }}
        transition={lidTransition}
        fill="white"
        stroke="#111827"
        strokeWidth={1.5}
      />
      <motion.circle
        cx={30 + dx}
        cy={30}
        r={PUPIL_R_OPEN}
        initial={false}
        animate={{ r: pupilRTarget, opacity: pupilOpacityAnimate }}
        transition={pupilTransition}
        fill="#111827"
      />

      {/* Right eye */}
      <motion.ellipse
        cx={118}
        cy={30}
        rx={26}
        ry={EYE_RY_OPEN}
        initial={false}
        animate={{ ry: ryAnimate }}
        transition={lidTransition}
        fill="white"
        stroke="#111827"
        strokeWidth={1.5}
      />
      <motion.circle
        cx={118 + dx}
        cy={30}
        r={PUPIL_R_OPEN}
        initial={false}
        animate={{ r: pupilRTarget, opacity: pupilOpacityAnimate }}
        transition={pupilTransition}
        fill="#111827"
      />
    </motion.svg>
  );
}
