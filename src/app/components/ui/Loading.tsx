import { motion } from 'motion/react';

interface LoadingProps {
  label?: string;
  className?: string;
}

// Minimal indeterminate loader: a thin track with a sweeping highlight,
// matching the site's editorial / Space Mono aesthetic.
export function Loading({ label = 'Loading', className = '' }: LoadingProps) {
  return (
    <div
      className={`flex flex-col items-center gap-4 ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="relative h-px w-28 overflow-hidden bg-gray-100">
        <motion.span
          className="absolute inset-y-0 left-0 block w-1/3 bg-gray-900"
          animate={{ x: ['-120%', '360%'] }}
          transition={{ duration: 1.15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      {label && (
        <span className="text-[10px] font-['Space_Mono',_monospace] text-gray-300 tracking-[0.25em] uppercase">
          {label}
        </span>
      )}
    </div>
  );
}
