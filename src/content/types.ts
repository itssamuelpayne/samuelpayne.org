export type MediaAsset =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; poster: string; alt: string };

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
  overview: {
    what: string;
    why: string;
    outcome: string;
  };
  sections: Section[];
}
