import type { Project } from '../../src/content/types';

// This module is server-only. It must NOT be imported by any code in src/.
// Vercel exposes only top-level files in /api as routes; files in /api/_data
// are private (the leading underscore tells Vercel to ignore them).

// All overview/section copy below is FPO. Replace with your real narrative.

export const projects: Project[] = [
  {
    slug: 'wearables-ecosystem',
    title: 'Wearables Ecosystem',
    client: 'Meta Reality Labs',
    role: 'Director of Ecosystem Design',
    year: '2024 — present',
    tags: ['Product', 'Wearables', 'AI'],
    summary:
      'Leading ecosystem design at Meta Reality Labs — the tools that let people create AI experiences for wearables.',
    thumbnail: 'https://picsum.photos/seed/wearables-thumb/1600/1000',
    hero: {
      kind: 'image',
      src: 'https://picsum.photos/seed/wearables-hero/2400/1400',
      alt: 'FPO — Wearables Ecosystem hero',
    },
    overview: {
      what: '[What you did]',
      why: '[Why it mattered]',
      outcome: '[Why it worked]',
    },
    sections: [],
  },
  {
    slug: 'ios-at-google',
    title: 'iOS at Google',
    client: 'Google',
    role: 'Design Director',
    year: '2023',
    tags: ['Product', 'iOS'],
    summary:
      'Led iOS design for Google’s core consumer apps — making each app feel native to iPhone while staying true to Google’s product voice.',
    thumbnail: '/portfoliomedia/Final-Hero-High-Res.mp4',
    hero: {
      kind: 'video',
      src: '/portfoliomedia/Final-Hero-High-Res.mp4',
      poster: '/portfoliomedia/Final-Hero-Poster.jpg',
      alt: 'iOS at Google product highlights',
    },
    overview: {
      what: '[What you did]',
      why: '[Why it mattered]',
      outcome: '[Why it worked]',
    },
    sections: [],
  },
  {
    slug: 'android-12-widgets',
    title: 'Android 12 Widgets',
    client: 'Google',
    role: 'Design Lead',
    year: '2021',
    tags: ['Product', 'OS'],
    summary:
      'Designed home-screen widgets for Android 12 — surfacing live information without forcing app-switching, scalable across device sizes.',
    thumbnail: '/portfoliomedia/Hero%20Android%20Widget.png',
    hero: {
      kind: 'image',
      src: '/portfoliomedia/Hero%20Android%20Widget.png',
      alt: 'Android 12 widgets on a home screen',
    },
    overview: {
      what: '[What you did]',
      why: '[Why it mattered]',
      outcome: '[Why it worked]',
    },
    sections: [
      {
        type: 'media',
        size: 'bleed',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/Tablet%203.png',
          alt: 'Android 12 widgets on a tablet — Material You theming with warm yellows and greens',
        },
      },
      {
        type: 'commentary',
        heading: 'An ecosystem, not a sticker pack',
        body: '[Add commentary on the system-wide rethink: Material You theming, dynamic color, the relationship between the OS and each app surface.]',
      },
      {
        type: 'pair',
        left: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/Keep.png',
          alt: 'Google Keep widget showing notes and a quick-action customize panel',
        },
        right: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/drive.png',
          alt: 'Google Drive widgets — quick actions and recent files',
        },
        leftCaption: 'Keep — notes and quick capture',
        rightCaption: 'Drive — search and recents',
      },
      {
        type: 'pair',
        left: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/Fi.png',
          alt: 'Google Fi data widget showing remaining gigabytes',
        },
        right: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/YT%20Music.png',
          alt: 'YouTube Music widget — currently playing track and recents',
        },
        leftCaption: 'Fi — at-a-glance data',
        rightCaption: 'YouTube Music — now playing',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/maps.png',
          alt: 'Google Maps widget — quick destinations: home, work, gas, restaurant, groceries, coffee',
        },
        caption: 'Maps — saved destinations as taps',
      },
      {
        type: 'commentary',
        heading: 'How they respond',
        body: '[Add commentary on the responsive grammar: resize behavior, in-widget actions, scrollable surfaces — widgets that behave like first-class app moments.]',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/Drive-Resize.gif',
          alt: 'Drive widget being resized — drag handles appear at the corners',
        },
        caption: 'Resize — widgets grow with the grid',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/Gmail-Archive_1.gif',
          alt: 'Gmail widget — a thread being archived directly from the home screen',
        },
        caption: 'Gmail — act without launching the app',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/Keep-Scroll.gif',
          alt: 'Keep widget — notes list scrolled inside the widget surface',
        },
        caption: 'Keep — scrollable content, in place',
      },
      {
        type: 'pair',
        left: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/Tablet%201.png',
          alt: 'Android 12 widgets on a tablet — warm theming',
        },
        right: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/tablet%202.png',
          alt: 'Android 12 widgets on a tablet — cool theming',
        },
        leftCaption: 'Warm — Material You adapts',
        rightCaption: 'Cool — same surfaces, different mood',
      },
    ],
  },
  {
    slug: 'google-play-console',
    title: 'Google Play Console',
    client: 'Google',
    role: 'Design Director',
    year: '2019 — 2022',
    tags: ['Product', 'Developer Tools'],
    summary:
      'Led design for the Google Play developer ecosystem — the tools and surfaces a global app developer community uses every day.',
    thumbnail: 'https://picsum.photos/seed/play-console-thumb/1600/1000',
    hero: {
      kind: 'image',
      src: 'https://picsum.photos/seed/play-console-hero/2400/1400',
      alt: 'FPO — Google Play Console hero',
    },
    overview: {
      what: '[What you did]',
      why: '[Why it mattered]',
      outcome: '[Why it worked]',
    },
    sections: [],
  },
  {
    slug: 'creative-and-content-team',
    title: 'Creative & Content Team',
    client: 'Google',
    role: 'Group Creative Director',
    year: '2018 — 2022',
    tags: ['Leadership', 'Brand', 'Content'],
    summary:
      'Ran the Creative & Content org behind a product used by three billion people.',
    thumbnail: 'https://picsum.photos/seed/creative-content-thumb/1600/1000',
    hero: {
      kind: 'image',
      src: 'https://picsum.photos/seed/creative-content-hero/2400/1400',
      alt: 'FPO — Creative & Content Team hero',
    },
    overview: {
      what: '[What you did]',
      why: '[Why it mattered]',
      outcome: '[Why it worked]',
    },
    sections: [],
  },
  {
    slug: 'partner-innovation',
    title: 'Partner Innovation',
    client: 'Google',
    role: 'Design Lead',
    year: '2017 — 2019',
    tags: ['Product', '0→1', 'Prototyping'],
    summary:
      '0→1 prototypes built with external partners — testing what comes next before it has a name.',
    thumbnail: 'https://picsum.photos/seed/partner-innovation-thumb/1600/1000',
    hero: {
      kind: 'image',
      src: 'https://picsum.photos/seed/partner-innovation-hero/2400/1400',
      alt: 'FPO — Partner Innovation hero',
    },
    overview: {
      what: '[What you did]',
      why: '[Why it mattered]',
      outcome: '[Why it worked]',
    },
    sections: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
