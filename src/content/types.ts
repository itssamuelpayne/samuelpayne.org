export type MediaAsset =
  | { kind: 'image'; src: string; alt: string }
  | {
      kind: 'video';
      src: string;
      poster: string;
      alt: string;
      /** Ambient = autoplay/loop/muted (replaces a GIF). Default behavior
       *  is click-to-play with controls. */
      ambient?: boolean;
    };

export type Section =
  | {
      type: 'media';
      media: MediaAsset;
      size?: 'bleed' | 'wide' | 'inset';
      /** CSS max-width override for the asset (e.g. '627px'). Takes
       *  precedence over `size` to render a single asset smaller. */
      maxWidth?: string;
      caption?: string;
      commentary?: string;
    }
  | {
      type: 'pair';
      left: MediaAsset;
      right: MediaAsset;
      leftCaption?: string;
      rightCaption?: string;
    }
  | {
      type: 'trio';
      items: { media: MediaAsset; caption?: string }[];
      /** Force a uniform aspect ratio on every item (e.g. '484/1600') so
       *  mismatched source sizes render at equal height and the captions
       *  align. Items are cropped from the bottom (object-top). Omit to use
       *  each asset's natural size. */
      aspect?: string;
      /** CSS max-width for the row (e.g. '864px'; default '72rem'). Use a
       *  narrower value to render the trio smaller. */
      maxWidth?: string;
    }
  | {
      type: 'mediaText';
      media: MediaAsset;
      body: string;
      /** Small mono eyebrow above the body. */
      eyebrow?: string;
      /** Which side the media sits on (default left). */
      mediaSide?: 'left' | 'right';
    }
  | { type: 'commentary'; heading?: string; body: string }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'quote'; quote: string; attribution?: string };

export interface Project {
  slug: string;
  title: string;
  client?: string;
  year: string;
  summary: string;
  thumbnail: string;
  hero: MediaAsset;
  /** Narrative intro paragraphs, shown beneath the hero. */
  overview: string[];
  sections: Section[];
}
