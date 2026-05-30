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
    thumbnail: '/portfoliomedia/iOS%20at%20Google/iOS%20header.png',
    hero: {
      kind: 'image',
      src: '/portfoliomedia/iOS%20at%20Google/iOS%20header.png',
      alt: 'iOS at Google — a gallery of Google widgets across Home and Lock Screen',
    },
    overview: {
      what: 'Led iOS design for Google’s flagship consumer apps, bringing Home Screen and Lock Screen widgets to iPhone — Search, Drive, Gmail, Calendar, Maps, Translate, Meet, and more — each one native to iOS while unmistakably Google.',
      why: 'iOS 14 and iOS 16 opened the Home Screen and Lock Screen to third-party widgets for the first time. It was a rare chance to put Google’s most-used products one glance away — but only if they felt like they belonged on iPhone rather than ported from Android.',
      outcome: 'Designing to Apple’s widget grammar — its sizes, materials, and interaction patterns — while keeping each product instantly recognizable, the widgets read as genuinely native. Google showed up on the iPhone Home and Lock Screen as a first-class citizen.',
    },
    sections: [
      {
        type: 'commentary',
        heading: 'Home Screen widgets',
        body: '[Add commentary on the Home Screen widget system: glanceable utility, the Google stack, and designing each app to Apple’s widget sizes and materials.]',
      },
      {
        type: 'media',
        size: 'inset',
        media: {
          kind: 'image',
          src: '/portfoliomedia/iOS%20at%20Google/Work.png',
          alt: 'iPhone Home Screen with stacked Google widgets — Drive search, Calendar, and Gmail',
        },
        caption: 'Home Screen — Drive, Calendar, and Gmail in a single glance',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/iOS%20at%20Google/Drive%20Translate.png',
          alt: 'Google Drive and Google Translate widgets — searchable files and a Spanish-to-French translation',
        },
        caption: 'Drive and Translate — search files and translate on the spot',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/iOS%20at%20Google/gmail%20meet.png',
          alt: 'Gmail and Google Meet widgets — an inbox preview beside a two-person video call',
        },
        caption: 'Gmail and Meet — triage the inbox and join a call without opening the app',
      },
      {
        type: 'commentary',
        heading: 'Lock Screen widgets',
        body: '[Add commentary on iOS 16 Lock Screen widgets: glanceable info and quick actions before you unlock, working within Apple’s tinted, space-constrained slots.]',
      },
      {
        type: 'media',
        size: 'bleed',
        media: {
          kind: 'image',
          src: '/portfoliomedia/iOS%20at%20Google/Hero%20lsw.png',
          alt: 'Five iPhones showing Google Lock Screen widgets across different wallpapers',
        },
        caption: 'Lock Screen widgets — Google across the lineup',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/iOS%20at%20Google/LSW.png',
          alt: 'Lock Screen close-up with a Google Search pill, quick actions, and live Google widget cards',
        },
        caption: 'Search, Lens, and live cards — a tap from the Lock Screen',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/iOS%20at%20Google/LSW%20iphone.png',
          alt: 'iPhone Lock Screen showing Gmail unread count and a suggested Drive widget',
        },
        caption: 'Gmail and Drive — surfaced before you unlock',
      },
    ],
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
    thumbnail: '/portfoliomedia/Final-Hero-High-Res.mp4',
    hero: {
      kind: 'video',
      src: '/portfoliomedia/Final-Hero-High-Res.mp4',
      poster: '/portfoliomedia/Final-Hero-Poster.jpg',
      alt: 'Android 12 widgets — hero animation',
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
        type: 'media',
        size: 'wide',
        media: {
          kind: 'video',
          src: '/portfoliomedia/Android%2012%20Widgets/Drive-Resize.mp4',
          poster: '/portfoliomedia/Android%2012%20Widgets/Drive-Resize-poster.jpg',
          alt: 'Drive widget being resized — drag handles appear at the corners',
          ambient: true,
        },
        caption: 'Resize — widgets grow with the grid',
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
        type: 'media',
        size: 'wide',
        media: {
          kind: 'video',
          src: '/portfoliomedia/Android%2012%20Widgets/Gmail-Archive_1.mp4',
          poster: '/portfoliomedia/Android%2012%20Widgets/Gmail-Archive_1-poster.jpg',
          alt: 'Gmail widget — a thread being archived directly from the home screen',
          ambient: true,
        },
        caption: 'Gmail — act without launching the app',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/Tablet%201.png',
          alt: 'Android 12 widgets on a tablet — warm theming',
        },
        caption: 'Tablet — at scale',
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
          kind: 'video',
          src: '/portfoliomedia/Android%2012%20Widgets/Keep-Scroll.mp4',
          poster: '/portfoliomedia/Android%2012%20Widgets/Keep-Scroll-poster.jpg',
          alt: 'Keep widget — notes list scrolled inside the widget surface',
          ambient: true,
        },
        caption: 'Keep — scrollable content, in place',
      },
      {
        type: 'media',
        size: 'bleed',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/tablet%202.png',
          alt: 'Android 12 widgets on a tablet — cool theming',
        },
      },
      {
        type: 'media',
        size: 'bleed',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Hero%20Android%20Widget.png',
          alt: 'Android 12 widgets — closing composition',
        },
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
    thumbnail: '/portfoliomedia/Creative%20%26%20Content/creativeshop-poster.jpg',
    hero: {
      kind: 'video',
      src: '/portfoliomedia/Creative%20%26%20Content/creativeshop.mp4',
      poster: '/portfoliomedia/Creative%20%26%20Content/creativeshop-poster.jpg',
      alt: 'Creative Shop — a reel of Creative & Content craft work',
    },
    overview: {
      what: '[A short, simple line on what the team made and the craft on display in the reel above.]',
      why: '[A short line on why this work mattered.]',
      outcome: '[A short line on the impact.]',
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
