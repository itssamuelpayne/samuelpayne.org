import type { Project } from '../../src/content/types';

// This module is server-only. It must NOT be imported by any code in src/.
// Vercel exposes only top-level files in /api as routes; files in /api/_data
// are private (the leading underscore tells Vercel to ignore them).

export const projects: Project[] = [
  {
    slug: 'anders-interiors',
    title: 'Anders Interiors',
    client: 'Anders Studio',
    role: 'Design Lead',
    year: '2024',
    tags: ['Brand', 'Digital'],
    summary:
      'A digital catalog capturing the essence of a luxury furniture brand — typography, stillness, and a quiet sense of confidence.',
    thumbnail: 'https://picsum.photos/seed/anders-thumb/800/600',
    hero: {
      kind: 'image',
      src: 'https://picsum.photos/seed/anders-hero/2400/1400',
      alt: 'Anders Interiors brand hero',
    },
    overview: {
      what: 'Redesigned the brand system and shipped a digital catalog for Anders’ spring collection — typography, motion language, and a small library of templated layouts the team can extend.',
      why: 'The existing site read as inventory. The pieces themselves carry the brand; the surface needed to step back and let them do the work.',
      outcome: 'Time-on-page roughly doubled. The internal team adopted the templates without asking for layout help — the strongest signal that the system holds.',
    },
    sections: [
      {
        type: 'commentary',
        heading: 'Starting from the room',
        body: 'We began by photographing six interiors in natural light, no styling, no retouching. Everything that followed — type, color, the way the catalog breathes — came out of how those rooms actually felt.',
      },
      {
        type: 'media',
        size: 'bleed',
        media: {
          kind: 'image',
          src: 'https://picsum.photos/seed/anders-room/2400/1400',
          alt: 'Anders living room composition',
        },
        caption: 'A single room, photographed unstyled.',
      },
      {
        type: 'pair',
        left: {
          kind: 'image',
          src: 'https://picsum.photos/seed/anders-type/1200/900',
          alt: 'Typography specimen',
        },
        right: {
          kind: 'image',
          src: 'https://picsum.photos/seed/anders-palette/1200/900',
          alt: 'Color palette',
        },
        leftCaption: 'Display: a custom cut of Söhne for the wordmark.',
        rightCaption: 'Four warm neutrals, one dark, one accent.',
      },
      {
        type: 'commentary',
        heading: 'Motion as restraint',
        body: 'Most luxury sites overcompensate with parallax and reveal animations. We did the opposite — the only motion in the catalog is a slow ease as you scroll past each piece, the way you’d walk through a showroom.',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'video',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          poster: 'https://picsum.photos/seed/anders-video/2000/1200',
          alt: 'Catalog walkthrough',
        },
        caption: 'A 40-second walkthrough of the catalog.',
        commentary:
          'The cursor is the only thing moving on screen for a beat — the work is about getting out of the customer’s way.',
      },
      {
        type: 'stats',
        items: [
          { value: '2.1×', label: 'Time on page' },
          { value: '38%', label: 'Catalog-to-inquiry rate' },
          { value: '6 wks', label: 'From kickoff to launch' },
        ],
      },
      {
        type: 'quote',
        quote: 'It finally feels like our showroom on a screen.',
        attribution: 'Founder, Anders Studio',
      },
    ],
  },
  {
    slug: 'range-crazy',
    title: 'Range Crazy',
    client: 'Range Crazy',
    role: 'Design Director',
    year: '2023',
    tags: ['Brand', 'Editorial'],
    summary:
      'A magazine and identity for a community of long-distance runners. Bold, plainspoken, built to print well and read fast.',
    thumbnail: 'https://picsum.photos/seed/range-thumb/800/600',
    hero: {
      kind: 'image',
      src: 'https://picsum.photos/seed/range-hero/2400/1400',
      alt: 'Range Crazy magazine spread',
    },
    overview: {
      what: 'Built the visual identity, editorial system, and first print issue of Range Crazy — a quarterly for ultrarunners.',
      why: 'The category is saturated with gear-marketing aesthetics. The audience wanted something that respected their attention and read like a real magazine.',
      outcome: 'First print run sold through in nine days. The grid carried cleanly into the web and Instagram surfaces with almost no adaptation.',
    },
    sections: [
      {
        type: 'commentary',
        heading: 'A grid you can run on',
        body: 'The whole system is one 12-column grid with three text sizes. That’s it. Everything we made — covers, features, race recaps, web — sits on it without modification.',
      },
      {
        type: 'media',
        size: 'bleed',
        media: {
          kind: 'image',
          src: 'https://picsum.photos/seed/range-spread/2400/1400',
          alt: 'Editorial spread',
        },
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
