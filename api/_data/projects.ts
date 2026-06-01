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
        aspect: '484/1560',
        maxWidth: '778px',
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
        maxWidth: '806px',
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
        maxWidth: '806px',
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
      'Google Play has one of the largest product editorial programs in the world. I built the global team of designers, art directors, creative directors and animators who made upwards of 40,000 unique creative assets every year.',
    thumbnail: '/portfoliomedia/Creative%20%26%20Content/creativeshop-loop.mp4',
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
    slug: 'android-12',
    title: 'Android 12',
    client: 'Google',
    role: 'Design Lead',
    year: '2021',
    tags: ['Product', 'OS'],
    summary:
      'To support the launch of Android 12, I was part of a cross-Google team tasked with shipping 18 first-party widgets in six months. We used our experience running the cross-Google iOS team to stand up a new group doing the same job for Android, working closely with the Material Design team who shipped Material You as part of Android 12.',
    thumbnail: '/portfoliomedia/Final-Hero-High-Res.mp4',
    hero: {
      kind: 'video',
      src: '/portfoliomedia/Final-Hero-High-Res.mp4',
      poster: '/portfoliomedia/Final-Hero-Poster.jpg',
      alt: 'Android 12 widgets — hero animation',
    },
    overview: [],
    sections: [
      {
        type: 'commentary',
        body: 'A large part of the work was evolving the dynamic sizing constraints across the Android OS, along with new interaction patterns suited to both locked and unlocked home screens.',
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
        caption: 'Building a dynamic resizing system that gives people more choice',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Android%2012%20Widgets/maps.png',
          alt: 'Google Maps widget — quick destinations: home, work, gas, restaurant, groceries, coffee',
        },
        caption: 'Creating one-tap actions for the home screen',
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
        caption: 'Designing new confirmation patterns for archiving from the home screen',
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
        caption: 'Exploring scrolling behavior inside embeddable widgets',
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
      'I was part of a small team of senior ICs who shaped Google’s app experience on iOS. We designed, built, and shipped coherent features across all 100+ Google apps. That meant working across the entire company, collaborating with design teams and cross-functional partners in every product area.',
    thumbnail: '/portfoliomedia/iOS%20at%20Google/Drive%20Translate.png',
    hero: {
      kind: 'image',
      src: '/portfoliomedia/iOS%20at%20Google/Drive%20Translate.png',
      alt: 'Google Drive and Google Translate widgets on iOS — a searchable file list beside a Spanish-to-French translation',
    },
    overview: [],
    sections: [
      {
        type: 'commentary',
        body: 'Our approach was to work with Apple ahead of each iOS release, then bring the headline features to every Google app. Widgets are a good example: we designed, built, and tested the concepts centrally, partnering with each product team to make the most of what iOS now offered.',
      },
      {
        type: 'media',
        size: 'wide',
        maxWidth: '627px',
        media: {
          kind: 'image',
          src: '/portfoliomedia/iOS%20at%20Google/Chrome%20Widget.png',
          alt: 'Chrome widgets on iOS — a search bar with voice and Lens, beside the Chrome Dino quick-launch',
        },
        caption: 'Chrome — search, voice, and Lens a tap away',
      },
      {
        type: 'trio',
        maxWidth: '778px',
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
        type: 'commentary',
        body: 'From there we expanded the widgets, adding functionality as we learned how people actually used them, then extended the work to Lock Screen widgets and other new iOS features.',
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
        size: 'bleed',
        media: {
          kind: 'image',
          src: '/portfoliomedia/iOS%20at%20Google/Hero%20lsw.png',
          alt: 'Five iPhones showing Google Lock Screen widgets across different wallpapers',
        },
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
    thumbnail: '/portfoliomedia/Partner%20Innovation/kupu%20ui.png',
    hero: {
      kind: 'image',
      src: '/portfoliomedia/Partner%20Innovation/book-ears-casestudy-poster.png',
      alt: 'Book Ears — a parent and child reading a Disney storybook beside a Google Home speaker',
    },
    overview: [],
    sections: [
      {
        type: 'commentary',
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
