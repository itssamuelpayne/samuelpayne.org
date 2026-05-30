import type { MediaAsset, Section } from '../../../content/types';

function Media({ asset }: { asset: MediaAsset }) {
  if (asset.kind === 'image') {
    return (
      <img
        src={asset.src}
        alt={asset.alt}
        className="w-full h-auto block"
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
        className="w-full h-auto block bg-black"
      >
        <source src={asset.src} />
      </video>
    );
  }

  return (
    <video
      controls
      preload="metadata"
      poster={asset.poster}
      aria-label={asset.alt}
      className="w-full h-auto block bg-black"
    >
      <source src={asset.src} />
    </video>
  );
}

const sizeWrapper: Record<NonNullable<Extract<Section, { type: 'media' }>['size']>, string> = {
  bleed: 'w-full',
  wide: 'max-w-6xl mx-auto px-8',
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
    <p className="mt-6 max-w-2xl mx-auto px-8 font-['Playfair_Display',_serif] text-gray-700 leading-relaxed text-center">
      {children}
    </p>
  );
}

export function SectionBlock({ section }: { section: Section }) {
  switch (section.type) {
    case 'media': {
      const size = section.size ?? 'wide';
      return (
        <section className="my-20">
          <div className={sizeWrapper[size]}>
            <Media asset={section.media} />
          </div>
          {section.caption && <Caption>{section.caption}</Caption>}
          {section.commentary && <Commentary>{section.commentary}</Commentary>}
        </section>
      );
    }

    case 'pair': {
      return (
        <section className="my-20 max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure>
              <Media asset={section.left} />
              {section.leftCaption && (
                <figcaption className="mt-4 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.15em] uppercase">
                  {section.leftCaption}
                </figcaption>
              )}
            </figure>
            <figure>
              <Media asset={section.right} />
              {section.rightCaption && (
                <figcaption className="mt-4 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.15em] uppercase">
                  {section.rightCaption}
                </figcaption>
              )}
            </figure>
          </div>
        </section>
      );
    }

    case 'commentary': {
      return (
        <section className="my-20 max-w-2xl mx-auto px-8">
          {section.heading && (
            <h3
              className="text-[1.5rem] leading-tight tracking-tight mb-4 font-['Playfair_Display',_serif] text-gray-900"
              style={{ fontWeight: 600 }}
            >
              {section.heading}
            </h3>
          )}
          <p className="font-['Playfair_Display',_serif] text-gray-700 leading-relaxed">
            {section.body}
          </p>
        </section>
      );
    }

    case 'stats': {
      return (
        <section className="my-20 max-w-4xl mx-auto px-8">
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
        <section className="my-20 max-w-2xl mx-auto px-8 text-center">
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
