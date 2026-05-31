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
  role: string;
  year: string;
  tags: string[];
  summary: string;
  thumbnail: string;
  hero: MediaAsset;
  /** Narrative intro paragraphs, shown beneath the hero. */
  overview: string[];
  sections: Section[];
}
