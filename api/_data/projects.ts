import type { Project } from '../../src/content/types';

// This module is server-only. It must NOT be imported by any code in src/.
// Vercel exposes only top-level files in /api as routes; files in /api/_data
// are private (the leading underscore tells Vercel to ignore them).

// Projects are listed newest-first; the work menu and "next project" links
// follow this array order.

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
    overview: ['[Overview copy coming soon.]'],
    sections: [],
  },
  {
    slug: 'google-play-console',
    title: 'Google Play Console',
    client: 'Google',
    role: 'Design Director',
    year: '2024',
    tags: ['Product', 'Developer Tools'],
    summary:
      'Led design for the Google Play developer ecosystem — the tools and surfaces a global app developer community uses every day.',
    thumbnail: '/portfoliomedia/Google%20Play%20Console/play-console-hero.mp4',
    hero: {
      kind: 'video',
      src: '/portfoliomedia/Google%20Play%20Console/play-console-hero.mp4',
      poster:
        '/portfoliomedia/Google%20Play%20Console/play-console-hero-poster.jpg',
      alt: 'Animated Android, Gemini, Google Play, and Wear OS brand marks',
    },
    overview: [
      'Console allows developers and businesses to manage their apps and games on Google Play. It’s the economic engine of the ecosystem, driving distribution, marketing, payments, security, integrity and analytics. I was asked to fix a struggling design team split across four time zones, and modernize a legacy web product.',
      'We undertook a significant redesign of the product, completely reorganizing the information architecture. We prioritized new go-to-market features, and helped the business adopt new user-facing features like short videos to promote app and game content.',
      'We also introduced Gemini to third-party workflows, speeding up essential features like localization and analytics. We undertook all this work whilst restructuring the team across time-zones. Adding designers in India and introducing global partners who could help us implement such significant changes across an essential product.',
    ],
    sections: [
      {
        type: 'media',
        size: 'inset',
        media: {
          kind: 'video',
          src: '/portfoliomedia/Google%20Play%20Console/menu.mp4',
          poster: '/portfoliomedia/Google%20Play%20Console/menu-poster.jpg',
          alt: 'Console left navigation grouped by developer task',
          ambient: true,
        },
        caption: 'Navigation — a task-based information architecture',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'video',
          src: '/portfoliomedia/Google%20Play%20Console/dashboard.mp4',
          poster: '/portfoliomedia/Google%20Play%20Console/dashboard-poster.jpg',
          alt: 'App dashboard surfacing releases, vitals, growth, and revenue',
          ambient: true,
        },
        caption: 'Dashboard — app health at a glance',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'video',
          src: '/portfoliomedia/Google%20Play%20Console/user-growth.mp4',
          poster:
            '/portfoliomedia/Google%20Play%20Console/user-growth-poster.jpg',
          alt: 'Grow users — acquisition and retention charts explored with AI',
          ambient: true,
        },
        caption: 'Grow users — acquisition insights, explorable with AI',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'video',
          src: '/portfoliomedia/Google%20Play%20Console/localization-ai.mp4',
          poster:
            '/portfoliomedia/Google%20Play%20Console/localization-ai-poster.jpg',
          alt: 'Store listing localization with Gemini-generated descriptions',
          ambient: true,
        },
        caption: 'Store listings — AI-assisted localization with Gemini',
      },
    ],
  },
  {
    slug: 'google-creative-shop',
    title: 'Google Creative Shop',
    client: 'Google',
    role: 'Group Creative Director',
    year: '2022',
    tags: ['Leadership', 'Brand', 'Content'],
    summary:
      'Ran the Creative & Content org behind a product used by three billion people.',
    thumbnail: '/portfoliomedia/Creative%20%26%20Content/Kenni%20Chaffee%20Header.png',
    hero: {
      kind: 'video',
      src: '/portfoliomedia/Creative%20%26%20Content/creativeshop.mp4',
      poster: '/portfoliomedia/Creative%20%26%20Content/creativeshop-poster.jpg',
      alt: 'Creative Shop — a reel of Creative & Content craft work',
    },
    overview: [
      'Google Play has one of the largest product editorial programs in the world. I built the global team of designers, art directors, creative directors and animators who made upwards of 40,000 unique creative assets every year.',
      'In addition to creating the assets ourselves, we built a network of collaborators who could contribute their unique illustration or animation style. I was responsible for multi-million dollar agency and partnership budgets, as well as the overall terms of the partner agreements.',
      'Creating a smooth operational rhythm for this team was a significant challenge, and we borrowed from agile and sprint methods to create a fast-moving group of senior ICs who all really enjoyed creating such fun work.',
      'The team was recognized with internal and external awards for craft, innovation and product impact.',
    ],
    sections: [
      {
        type: 'media',
        size: 'bleed',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Creative%20%26%20Content/Kenni%20Chaffee%20Header.png',
          alt: 'Creative & Content editorial craft — a hero composition from the Google Play editorial program',
        },
        caption: 'Editorial craft — one of tens of thousands of original assets made each year',
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
    thumbnail: '/portfoliomedia/Android%2012%20Widgets/Material%20You.png',
    hero: {
      kind: 'video',
      src: '/portfoliomedia/Final-Hero-High-Res.mp4',
      poster: '/portfoliomedia/Final-Hero-Poster.jpg',
      alt: 'Android 12 widgets — hero animation',
    },
    overview: ['[Overview copy coming soon.]'],
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
    slug: 'google-on-ios',
    title: 'Google on iOS',
    client: 'Google',
    role: 'Design Director',
    year: '2019',
    tags: ['Product', 'iOS'],
    summary:
      'Led iOS design for Google’s core consumer apps — making each app feel native to iPhone while staying true to Google’s product voice.',
    thumbnail: '/portfoliomedia/iOS%20at%20Google/Drive%20Translate.png',
    hero: {
      kind: 'image',
      src: '/portfoliomedia/iOS%20at%20Google/Drive%20Translate.png',
      alt: 'Google Drive and Google Translate widgets on iOS — a searchable file list beside a Spanish-to-French translation',
    },
    overview: [
      'Led iOS design for Google’s flagship consumer apps, bringing Home Screen and Lock Screen widgets to iPhone — Search, Drive, Gmail, Calendar, Maps, Translate, Chrome, and more — each one native to iOS while unmistakably Google.',
      'iOS 14 and iOS 16 opened the Home Screen and Lock Screen to third-party widgets for the first time. It was a rare chance to put Google’s most-used products one glance away — but only if they felt like they belonged on iPhone rather than ported from Android.',
      'Designing to Apple’s widget grammar — its sizes, materials, and interaction patterns — while keeping each product instantly recognizable, the widgets read as genuinely native. Google showed up on the iPhone Home and Lock Screen as a first-class citizen.',
    ],
    sections: [
      {
        type: 'commentary',
        heading: 'Home Screen widgets',
        body: '[Add commentary on the Home Screen widget system: glanceable utility, the Google stack, and designing each app to Apple’s widget sizes and materials.]',
      },
      {
        type: 'trio',
        items: [
          {
            media: {
              kind: 'image',
              src: '/portfoliomedia/iOS%20at%20Google/Work.png',
              alt: 'iPhone Home Screen with stacked Google widgets — Drive search, Calendar, and Gmail',
            },
            caption: 'A home screen — Drive, Calendar, and Gmail',
          },
          {
            media: {
              kind: 'image',
              src: '/portfoliomedia/iOS%20at%20Google/morning.png',
              alt: 'iPhone Home Screen on a teal wallpaper — Google Photos, Fit, Maps, and YouTube Music widgets',
            },
            caption: 'A morning screen — Photos, Fit, Maps, Music',
          },
          {
            media: {
              kind: 'image',
              src: '/portfoliomedia/iOS%20at%20Google/student.png',
              alt: 'iPhone Home Screen on a pink wallpaper — Google Search, Tasks, Calendar, and Gmail widgets for a student',
            },
            caption: 'A student’s screen — Search, Tasks, Calendar, Gmail',
          },
        ],
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
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/iOS%20at%20Google/Chrome%20Widget.png',
          alt: 'Chrome widgets on iOS — a search bar with voice and Lens, beside the Chrome Dino quick-launch',
        },
        caption: 'Chrome — search, voice, and Lens a tap away',
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
    ],
  },
  {
    slug: 'partner-innovation',
    title: 'Google Partner Innovation',
    client: 'Google',
    role: 'Design Lead',
    year: '2017',
    tags: ['Product', '0→1', 'Prototyping'],
    summary:
      '0→1 prototypes built with external partners — testing what comes next before it has a name.',
    thumbnail: '/portfoliomedia/Partner%20Innovation/book-ears-casestudy-poster.png',
    hero: {
      kind: 'image',
      src: '/portfoliomedia/Partner%20Innovation/book-ears-casestudy-poster.png',
      alt: 'Book Ears — a parent and child reading a Disney storybook beside a Google Home speaker',
    },
    overview: [
      'I led a small, senior team working with more than 50 partners across Asia Pacific. From Sydney, we covered the region — Mumbai across to Tokyo, down to Auckland. We built hundreds of prototypes, helping partners embed Google’s technology in their businesses.',
    ],
    sections: [
      {
        type: 'commentary',
        heading: 'Disney Book Ears',
        body: 'Disney Book Ears was one of them. It was early days for voice interaction design. Google had just acquired API.AI — soon renamed Dialogflow — and was experimenting with the natural language processing that fed into the first Google Assistant.',
      },
      {
        type: 'commentary',
        body: 'We built a companion for parents. They could pick any Disney storybook, turn on Book Ears through their Google Home, and hear sound effects play from the speaker as they read aloud.',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'video',
          src: '/portfoliomedia/Partner%20Innovation/book-ears-casestudy.mp4',
          poster:
            '/portfoliomedia/Partner%20Innovation/book-ears-casestudy-poster.png',
          alt: 'Book Ears case study film',
        },
        caption: 'Book Ears — the case study film',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'video',
          src: '/portfoliomedia/Partner%20Innovation/book-ears-prototype.mp4',
          poster:
            '/portfoliomedia/Partner%20Innovation/book-ears-prototype-poster.jpg',
          alt: 'Book Ears working prototype walkthrough',
        },
        caption: 'The working prototype',
      },
      {
        type: 'commentary',
        heading: 'Te Reo Māori',
        body: 'Te Reo Māori is the native language of New Zealand. It’s a purely oral language and as such, is at risk of disappearing as people no longer learn it.',
      },
      {
        type: 'commentary',
        body: 'We used a collection of Google technologies to ingest Te Reo Māori into the Google Translate system, create a unique app experience that could translate any picture into the Te Reo Māori word, and help preserve an at-risk language.',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Partner%20Innovation/kupu.png',
          alt: 'Kupu — an illustrated portrait with camera focus brackets framing a moko kauae',
        },
        caption: 'Kupu — point your camera, learn the Te Reo Māori word',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Partner%20Innovation/kupu%20ui.png',
          alt: 'Kupu app flow across five iPhones — splash screen, camera viewfinder, loading, and translations of a sky into the Te Reo Māori words tahatū and kapua',
        },
        caption: 'The app — splash, camera, and live translation',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Partner%20Innovation/kupu%20ui2.png',
          alt: 'Kupu translating a lake-and-forest landscape — the Te Reo Māori word “wai” labelled over water',
        },
        caption: 'Point the camera at the world — “wai”, water',
      },
      {
        type: 'commentary',
        body: 'The technology we built for this project was scaled via the Google Arts & Culture Program and has now gone on to help preserve hundreds of purely oral languages around the world.',
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
