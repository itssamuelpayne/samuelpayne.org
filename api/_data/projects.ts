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
      'Play Console is where developers and businesses run their apps and games on Google Play — the economic engine of the ecosystem, driving distribution, marketing, payments, security, integrity, and analytics. I was brought in to do two things at once: steady a struggling design team spread across four time zones, and modernize a legacy web product.',
    thumbnail: '/portfoliomedia/Google%20Play%20Console/play-console-hero.mp4',
    hero: {
      kind: 'video',
      src: '/portfoliomedia/Google%20Play%20Console/play-console-hero.mp4',
      poster:
        '/portfoliomedia/Google%20Play%20Console/play-console-hero-poster.jpg',
      alt: 'Animated Android, Gemini, Google Play, and Wear OS brand marks',
    },
    overview: [],
    sections: [
      {
        type: 'commentary',
        body: 'We took on a significant redesign, reorganizing the information architecture from the ground up. We prioritized new go-to-market features and helped the business adopt user-facing ones too — like short videos that let developers promote their apps and games right on the store.',
      },
      {
        type: 'trio',
        items: [
          {
            media: {
              kind: 'image',
              src: '/portfoliomedia/Google%20Play%20Console/menu-iteration-1.jpg',
              alt: 'Navigation exploration — early grouping of console tasks',
            },
            caption: 'Iteration 1',
          },
          {
            media: {
              kind: 'image',
              src: '/portfoliomedia/Google%20Play%20Console/menu-iteration-2.jpg',
              alt: 'Navigation exploration — refined task-based grouping',
            },
            caption: 'Iteration 2',
          },
          {
            media: {
              kind: 'video',
              src: '/portfoliomedia/Google%20Play%20Console/menu.mp4',
              poster: '/portfoliomedia/Google%20Play%20Console/menu-poster.jpg',
              alt: 'Console left navigation grouped by developer task',
              ambient: true,
            },
            caption: 'Shipped',
          },
        ],
      },
      {
        type: 'commentary',
        body: 'We prioritized recommendations and built responsive dashboards that adapt to whoever’s looking — Play Console is used by everyone from marketers to software engineers to CEOs. That lifted frequency of use, developer satisfaction, and the metrics tied to developer revenue.',
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
        type: 'commentary',
        body: 'We brought Gemini into third-party workflows, speeding up essential tasks like localization and analytics. And we did all of it while restructuring the team across time zones — adding designers in India and bringing on global partners who could help us land changes of this scale on a product developers depend on every day.',
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
      'Google Play has one of the largest product editorial programs in the world. I built the global team of designers, art directors, creative directors and animators who made upwards of 40,000 unique creative assets every year.',
    thumbnail: '/portfoliomedia/Creative%20%26%20Content/Kenni%20Chaffee%20Header.png',
    hero: {
      kind: 'video',
      src: '/portfoliomedia/Creative%20%26%20Content/creativeshop.mp4',
      poster: '/portfoliomedia/Creative%20%26%20Content/creativeshop-poster.jpg',
      alt: 'Creative Shop — a reel of Creative & Content craft work',
    },
    overview: [
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
      'Led iOS design for Google’s flagship consumer apps, bringing Home Screen and Lock Screen widgets to iPhone — Search, Drive, Gmail, Calendar, Maps, Translate, Chrome, and more — each one native to iOS while unmistakably Google.',
    thumbnail: '/portfoliomedia/iOS%20at%20Google/Drive%20Translate.png',
    hero: {
      kind: 'image',
      src: '/portfoliomedia/iOS%20at%20Google/Drive%20Translate.png',
      alt: 'Google Drive and Google Translate widgets on iOS — a searchable file list beside a Spanish-to-French translation',
    },
    overview: [
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
      'I led a small, senior team working with partners across Asia Pacific. From Sydney we covered the region — Mumbai across to Tokyo, down to Auckland — building hundreds of prototypes that helped them embed Google’s technology in their own businesses.',
    thumbnail: '/portfoliomedia/Partner%20Innovation/book-ears-casestudy-poster.png',
    hero: {
      kind: 'image',
      src: '/portfoliomedia/Partner%20Innovation/book-ears-casestudy-poster.png',
      alt: 'Book Ears — a parent and child reading a Disney storybook beside a Google Home speaker',
    },
    overview: [],
    sections: [
      {
        type: 'commentary',
        heading: 'Disney Book Ears',
        body: 'Disney Book Ears was one of them. These were the early days of voice interaction design: Google had just acquired API.AI — soon renamed Dialogflow — and we were experimenting with the natural-language processing that would feed the first Google Assistant.',
      },
      {
        type: 'commentary',
        body: 'We built a companion for parents. Pick any Disney storybook, switch on Book Ears through a Google Home, and the speaker plays sound effects in time as you read aloud.',
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
        body: 'Te Reo Māori is the native language of New Zealand. Because it’s a purely oral language, it’s at risk of disappearing as fewer people learn it.',
      },
      {
        type: 'commentary',
        body: 'We used a collection of Google technologies to bring Te Reo Māori into Google Translate, then built an app that could turn anything you pointed your camera at into its Te Reo Māori word — a small way to help preserve a language at risk.',
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
        body: 'The technology we built here went on to scale through the Google Arts & Culture program, and now helps preserve hundreds of purely oral languages around the world.',
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
