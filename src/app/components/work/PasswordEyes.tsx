import { motion } from 'motion/react';

export type EyeState = 'open' | 'closed' | 'wide' | 'blinking';

interface PasswordEyesProps {
  state: EyeState;
  /** 0..1 — drifts the pupils horizontally as the user types */
  gaze?: number;
}

// Chunky cartoon proportions. Big white eyeballs with thick black stroke,
// large pupils with a small white catchlight.
const EYE_RX = 38;
const EYE_RY_OPEN = 38;
const EYE_RY_CLOSED = 3;
const STROKE = 5;

const PUPIL_R_OPEN = 16;
const PUPIL_R_WIDE = 7;
const HIGHLIGHT_R = 3.5;
const HIGHLIGHT_OFFSET = { x: 5, y: -5 };

// Eye centers inside the viewBox (240 × 100).
const LEFT_EYE = { cx: 50, cy: 50 };
const RIGHT_EYE = { cx: 190, cy: 50 };

// Per-state pupil offsets from each eye center.
// - open:    looking down at the input field below
// - closed:  cross-eyed, both pupils pointed inward and down (focused, intense)
// - wide:    pupils centered (alarmed)
// - blinking: doesn't matter (pupils hidden mid-blink)
function pupilTargets(state: EyeState, gaze: number) {
  const drift = (gaze - 0.5) * 3;
  switch (state) {
    case 'open':
      return {
        left: { dx: drift, dy: 9 },
        right: { dx: drift, dy: 9 },
      };
    case 'closed':
      return {
        left: { dx: 14, dy: 8 },
        right: { dx: -14, dy: 8 },
      };
    case 'wide':
      return {
        left: { dx: 0, dy: 0 },
        right: { dx: 0, dy: 0 },
      };
    case 'blinking':
      return {
        left: { dx: 0, dy: 0 },
        right: { dx: 0, dy: 0 },
      };
  }
}

export function PasswordEyes({ state, gaze = 0.5 }: PasswordEyesProps) {
  const { left, right } = pupilTargets(state, gaze);

  const ryAnimate =
    state === 'blinking'
      ? [EYE_RY_OPEN, EYE_RY_CLOSED, EYE_RY_OPEN]
      : EYE_RY_OPEN;

  const pupilOpacity = state === 'blinking' ? [1, 0, 1] : 1;
  const pupilR = state === 'wide' ? PUPIL_R_WIDE : PUPIL_R_OPEN;

  const lidTransition =
    state === 'blinking'
      ? { duration: 1.4, repeat: Infinity, ease: 'easeInOut' as const }
      : { type: 'spring' as const, stiffness: 350, damping: 22 };

  const pupilTransition =
    state === 'blinking'
      ? { duration: 1.4, repeat: Infinity, ease: 'easeInOut' as const }
      : state === 'wide'
        ? { type: 'spring' as const, stiffness: 600, damping: 14 }
        : { type: 'spring' as const, stiffness: 400, damping: 20 };

  const wrapperAnim = state === 'wide' ? { x: [0, -6, 6, -3, 3, 0] } : { x: 0 };

  return (
    <motion.svg
      width="240"
      height="100"
      viewBox="0 0 240 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      animate={wrapperAnim}
      transition={state === 'wide' ? { duration: 0.5 } : { duration: 0 }}
      style={{ display: 'block', margin: '0 auto' }}
    >
      <Eye
        center={LEFT_EYE}
        ryAnimate={ryAnimate}
        lidTransition={lidTransition}
        pupilDx={left.dx}
        pupilDy={left.dy}
        pupilR={pupilR}
        pupilOpacity={pupilOpacity}
        pupilTransition={pupilTransition}
      />
      <Eye
        center={RIGHT_EYE}
        ryAnimate={ryAnimate}
        lidTransition={lidTransition}
        pupilDx={right.dx}
        pupilDy={right.dy}
        pupilR={pupilR}
        pupilOpacity={pupilOpacity}
        pupilTransition={pupilTransition}
      />
    </motion.svg>
  );
}

// Helper: one cartoon eye (white ball + pupil + catchlight).
function Eye({
  center,
  ryAnimate,
  lidTransition,
  pupilDx,
  pupilDy,
  pupilR,
  pupilOpacity,
  pupilTransition,
}: {
  center: { cx: number; cy: number };
  ryAnimate: number | number[];
  lidTransition: object;
  pupilDx: number;
  pupilDy: number;
  pupilR: number;
  pupilOpacity: number | number[];
  pupilTransition: object;
}) {
  return (
    <>
      <motion.ellipse
        cx={center.cx}
        cy={center.cy}
        rx={EYE_RX}
        ry={EYE_RY_OPEN}
        initial={false}
        animate={{ ry: ryAnimate }}
        transition={lidTransition}
        fill="white"
        stroke="#111827"
        strokeWidth={STROKE}
      />
      <motion.circle
        cx={center.cx}
        cy={center.cy}
        r={PUPIL_R_OPEN}
        initial={false}
        animate={{
          cx: center.cx + pupilDx,
          cy: center.cy + pupilDy,
          r: pupilR,
          opacity: pupilOpacity,
        }}
        transition={pupilTransition}
        fill="#111827"
      />
      <motion.circle
        cx={center.cx + HIGHLIGHT_OFFSET.x}
        cy={center.cy + HIGHLIGHT_OFFSET.y}
        r={HIGHLIGHT_R}
        initial={false}
        animate={{
          cx: center.cx + pupilDx + HIGHLIGHT_OFFSET.x,
          cy: center.cy + pupilDy + HIGHLIGHT_OFFSET.y,
          opacity: pupilOpacity,
        }}
        transition={pupilTransition}
        fill="white"
      />
    </>
  );
}
