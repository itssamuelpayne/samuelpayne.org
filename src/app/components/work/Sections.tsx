import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { MediaAsset, Section } from '../../../content/types';

function VideoPlayer({
  src,
  poster,
  alt,
}: {
  src: string;
  poster: string;
  alt: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    setStarted(true);
    v.play();
  };

  return (
    <div className="group relative w-full overflow-hidden bg-black">
      <video
        ref={ref}
        controls={started}
        preload="metadata"
        playsInline
        poster={poster}
        aria-label={alt}
        onEnded={() => setStarted(false)}
        className="w-full h-auto block"
      >
        <source src={src} />
      </video>

      <AnimatePresence>
        {!started && (
          <motion.button
            type="button"
            onClick={play}
            aria-label={`Play video: ${alt}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center cursor-pointer focus:outline-none"
          >
            <span className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/25" />
            <motion.span
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/85 backdrop-blur-[2px] shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 translate-x-[2px] text-gray-900"
                fill="currentColor"
                aria-hidden
              >
                <path d="M5 3.5v17a1 1 0 0 0 1.53.85l13-8.5a1 1 0 0 0 0-1.7l-13-8.5A1 1 0 0 0 5 3.5z" />
              </svg>
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function Media({
  asset,
  className,
}: {
  asset: MediaAsset;
  /** Override the default `w-full h-auto block` sizing (e.g. for the
   *  equal-height proportional-width `pair` layout). */
  className?: string;
}) {
  if (asset.kind === 'image') {
    return (
      <img
        src={asset.src}
        alt={asset.alt}
        className={className ?? 'w-full h-auto block'}
        loading="lazy"
      />
    );
  }

  // Ambient: GIF-style autoplay / loop / muted. Otherwise: click-to-play.
  if (asset.ambient) {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={asset.poster}
        aria-label={asset.alt}
        className={className ? `${className} bg-black` : 'w-full h-auto block bg-black'}
      >
        <source src={asset.src} />
      </video>
    );
  }

  return <VideoPlayer src={asset.src} poster={asset.poster} alt={asset.alt} />;
}

const sizeWrapper: Record<NonNullable<Extract<Section, { type: 'media' }>['size']>, string> = {
  bleed: 'w-full',
  wide: 'max-w-4xl mx-auto px-8',
  inset: 'max-w-2xl mx-auto px-8',
};

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.15em] uppercase max-w-2xl mx-auto px-8 text-center">
      {children}
    </p>
  );
}

function Commentary({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 max-w-2xl mx-auto px-8 font-['Playfair_Display',_serif] text-gray-800 leading-relaxed text-center">
      {children}
    </p>
  );
}

export function SectionBlock({ section }: { section: Section }) {
  switch (section.type) {
    case 'media': {
      const size = section.size ?? 'wide';
      return (
        <section className="my-12">
          <div className={sizeWrapper[size]}>
            <Media asset={section.media} />
          </div>
          {section.caption && <Caption>{section.caption}</Caption>}
          {section.commentary && <Commentary>{section.commentary}</Commentary>}
        </section>
      );
    }

    case 'pair': {
      // Equal media heights with proportional widths so a tall portrait nav
      // rail can sit beside a wide landscape dashboard without either being
      // stretched. Stacks full-width on mobile.
      const fit =
        'block w-full h-auto sm:w-auto sm:h-[52vh] sm:max-h-[560px] sm:min-h-[320px] sm:max-w-full object-contain';
      return (
        <section className="my-12 max-w-6xl mx-auto px-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-center gap-6 md:gap-10">
            <figure className="flex flex-col items-center">
              <Media asset={section.left} className={fit} />
              {section.leftCaption && (
                <figcaption className="mt-4 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.15em] uppercase text-center">
                  {section.leftCaption}
                </figcaption>
              )}
            </figure>
            <figure className="flex flex-col items-center">
              <Media asset={section.right} className={fit} />
              {section.rightCaption && (
                <figcaption className="mt-4 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.15em] uppercase text-center">
                  {section.rightCaption}
                </figcaption>
              )}
            </figure>
          </div>
        </section>
      );
    }

    case 'trio': {
      return (
        <section
          className="my-12 mx-auto px-8"
          style={{ maxWidth: section.maxWidth ?? '72rem' }}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6 items-start">
            {section.items.map((item, i) => (
              <figure key={i}>
                {section.aspect ? (
                  <div
                    className="w-full overflow-hidden"
                    style={{ aspectRatio: section.aspect }}
                  >
                    <Media
                      asset={item.media}
                      className="block w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <Media asset={item.media} />
                )}
                {item.caption && (
                  <figcaption className="mt-4 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.15em] uppercase text-center">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      );
    }

    case 'mediaText': {
      // A (typically tall) media asset beside a paragraph, vertically
      // centered so a portrait nav rail reads elegantly next to the text.
      const side = section.mediaSide ?? 'left';
      return (
        <section className="my-12 max-w-4xl mx-auto px-8">
          <div
            className={`flex flex-col gap-8 md:gap-12 md:items-center ${
              side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <figure className="shrink-0 flex w-full md:w-auto justify-center">
              <Media
                asset={section.media}
                className="block w-auto h-auto max-h-[60vh] md:max-h-[520px] object-contain"
              />
            </figure>
            <div className="flex-1">
              {section.eyebrow && (
                <p className="mb-4 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase">
                  {section.eyebrow}
                </p>
              )}
              <p className="font-['Playfair_Display',_serif] text-gray-800 leading-relaxed text-lg">
                {section.body}
              </p>
            </div>
          </div>
        </section>
      );
    }

    case 'commentary': {
      return (
        <section className="my-12 max-w-2xl mx-auto px-8">
          {section.heading && (
            <h3
              className="text-[1.5rem] leading-tight tracking-tight mb-4 font-['Playfair_Display',_serif] text-gray-900"
              style={{ fontWeight: 600 }}
            >
              {section.heading}
            </h3>
          )}
          <p className="font-['Playfair_Display',_serif] text-gray-800 leading-relaxed">
            {section.body}
          </p>
        </section>
      );
    }

    case 'stats': {
      return (
        <section className="my-12 max-w-4xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {section.items.map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-[2.5rem] leading-none tracking-tight font-['Playfair_Display',_serif] text-gray-900 mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {item.value}
                </div>
                <div className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }

    case 'quote': {
      return (
        <section className="my-12 max-w-2xl mx-auto px-8 text-center">
          <blockquote
            className="text-[1.75rem] leading-snug tracking-tight font-['Playfair_Display',_serif] text-gray-900"
            style={{ fontWeight: 500 }}
          >
            “{section.quote}”
          </blockquote>
          {section.attribution && (
            <div className="mt-6 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase">
              {section.attribution}
            </div>
          )}
        </section>
      );
    }
  }
}
