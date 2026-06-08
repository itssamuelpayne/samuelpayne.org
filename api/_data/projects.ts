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
    year: '2024–present',
    summary:
      'Leading ecosystem design at Meta Reality Labs — building the tools and systems that let people create AI experiences for wearables.',
    thumbnail: '/portfoliomedia/Wearables%20Ecosystem/glasses-hero.jpg',
    hero: {
      kind: 'image',
      src: '/portfoliomedia/Wearables%20Ecosystem/glasses-hero.jpg',
      alt: 'Meta Ray-Ban smart glasses in tortoiseshell, viewed head-on against a warm gradient',
    },
    overview: [
      'I lead ecosystem design at Meta Reality Labs. My team defines how developers and creators build for our wearables. We design the tooling and the systems that underpin third-party experiences. We also build experiences directly with high-profile partners. These collaborations are designed to demonstrate the capabilities of the platform and build momentum for the whole ecosystem.',
      'We design across surfaces. Meta Ray-Ban Display glasses bring visual UI to a transparent surface — my team is responsible for defining the patterns for third parties that can scale as the ecosystem grows.',
      'A core part of our work is to create a design system that can scale across modalities. Switching from visual UI for transparent surfaces, to voice-only interactions and soon more ambient interaction patterns.',
      'I also oversee the AI Developer Center and the Wearables Developer Center. These are where partners build agents, add third-party skills to the AI ecosystem, and ship wearables integrations through our SDK and Web Apps.',
      'Our efforts are 0→1 insofar as there has never been a notable wearables ecosystem and Meta has historically shipped products over platforms. It makes for exciting design work. We’re often asked to support broader company efforts with practical and pragmatic design solutions, but also define long-term vision for a new and emergent hardware and software ecosystem.',
    ],
    sections: [
      {
        type: 'media',
        size: 'bleed',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Wearables%20Ecosystem/display-system.jpg',
          alt: 'Wearables display design system — content cards, list components, and action buttons for the transparent display surface',
        },
        caption: 'The display system — the components and patterns third parties build on',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Wearables%20Ecosystem/brand-color.jpg',
          alt: 'A grid of third-party skill cards — Lyft, Expedia, Tripadvisor, Spotify, Amazon, and DoorDash — rendered through shared wearables system components',
        },
        caption: 'Third-party skills, expressed through shared system components',
      },
      {
        type: 'trio',
        aspect: '8/5',
        items: [
          {
            media: {
              kind: 'image',
              src: '/portfoliomedia/Wearables%20Ecosystem/aidc-build.jpg',
              alt: 'AI Developer Center — a node-based canvas for building a restaurant-booking agent, previewed on AI glasses with a display',
            },
            caption: 'Building an agent',
          },
          {
            media: {
              kind: 'image',
              src: '/portfoliomedia/Wearables%20Ecosystem/aidc-tools.jpg',
              alt: 'AI Developer Center — a tools table mapping each capability to its supported surfaces and output type',
            },
            caption: 'Defining tools and supported surfaces',
          },
          {
            media: {
              kind: 'image',
              src: '/portfoliomedia/Wearables%20Ecosystem/aidc-agent.jpg',
              alt: 'AI Developer Center — an agent tool configured with a model, prompts, and variables, previewed live on glasses',
            },
            caption: 'Tuning against a live glasses preview',
          },
        ],
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Wearables%20Ecosystem/device-access-kit.jpg',
          alt: 'Wearables Developer Center — the Device Access Kit landing page: quick start, setup, integration guides, and troubleshooting',
        },
        caption: 'The Wearables Developer Center — the Device Access Kit and SDK',
      },
      {
        type: 'pair',
        left: {
          kind: 'image',
          src: '/portfoliomedia/Wearables%20Ecosystem/voice-first.jpg',
          alt: 'Wearables Developer Center documentation — a Voice-First Design page with a table of wake-word, contextual, and follow-up interaction patterns',
        },
        right: {
          kind: 'image',
          src: '/portfoliomedia/Wearables%20Ecosystem/accessibility.jpg',
          alt: 'Wearables Developer Center documentation — an Accessibility principles page describing the navigation rail and screen-reader behavior',
        },
        leftCaption: 'Voice-first interaction patterns',
        rightCaption: 'Accessibility as a baseline, not a checklist',
      },
    ],
  },
  {
    slug: 'google-play-console',
    title: 'Google Play Console',
    client: 'Google',
    year: '2024',
    summary:
      'Play Console is where developers and businesses run their apps and games on Google Play — the economic engine of the platform, driving distribution, marketing, payments, security, integrity, and analytics. I was brought in to do two things at once: steady a struggling design team spread across four time zones, and modernize a legacy web product.',
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
        body: 'We took on a significant redesign, reorganizing the Play Console from the ground up. We prioritized new go-to-market features and helped the business adopt user-facing ones too — like short videos that let developers promote their apps and games right on the store.',
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
            caption: 'Exploration of task-based IA',
          },
          {
            media: {
              kind: 'image',
              src: '/portfoliomedia/Google%20Play%20Console/menu-iteration-2.jpg',
              alt: 'Navigation exploration — refined task-based grouping',
            },
            caption: 'Refined task-based IA',
          },
          {
            media: {
              kind: 'video',
              src: '/portfoliomedia/Google%20Play%20Console/menu.mp4',
              poster: '/portfoliomedia/Google%20Play%20Console/menu-poster.jpg',
              alt: 'Console left navigation grouped by developer task',
              ambient: true,
            },
            caption: 'Shipped task-based IA',
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
        caption: 'Responsive dashboard provide unique insights to each user',
      },
      {
        type: 'commentary',
        body: 'We brought Gemini into third-party workflows, speeding up essential tasks like localization and analytics. And we did all of this while restructuring the team across time zones — adding designers in India and bringing on global partners who could help us land changes of this scale on a product developers depend on every day.',
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
        caption: 'AI-assisted localization with Gemini integrated into workflow',
      },
    ],
  },
  {
    slug: 'google-creative-shop',
    title: 'Google Creative Shop',
    client: 'Google',
    year: '2022',
    summary:
      'Google Play has one of the largest product editorial programs in the world. I built the global team of designers, art directors, creative directors and animators who made upwards of 40,000 unique creative assets every year.',
    thumbnail: '/portfoliomedia/Creative%20%26%20Content/creativeshop-feed.mp4',
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
        size: 'wide',
        media: {
          kind: 'video',
          src: '/portfoliomedia/Creative%20%26%20Content/creativeshop-reel.mp4',
          poster:
            '/portfoliomedia/Creative%20%26%20Content/creativeshop-reel-poster.jpg',
          alt: 'Creative Shop reel — a fast-cut montage of Google Play editorial assets across illustration, animation, and brand work',
        },
        caption: 'The reel — a year of editorial craft',
      },
      {
        type: 'media',
        size: 'bleed',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Creative%20%26%20Content/Kenni%20Chaffee%20Header.png',
          alt: 'Creative & Content editorial craft — a hero composition from the Google Play editorial program',
        },
        caption: 'Creative Shop is the editorial image engine of the Google Play Store',
      },
    ],
  },
  {
    slug: 'android-12',
    title: 'Android 12',
    client: 'Google',
    year: '2021',
    summary:
      'To support the launch of Android 12, I was part of a cross-Google team tasked with shipping 18 first-party widgets in six months. We used our experience running the cross-Google iOS program to stand up a new group doing the same job for Android, working closely with the Material Design team who shipped Material You as part of Android 12.',
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
        caption: 'Designing new confirmation patterns that work with one tap',
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
    year: '2019',
    summary:
      'I was part of a small team of senior ICs who shaped Google’s app experience on iOS. We designed, built, and shipped coherent features across all 114 Google iOS apps. That meant working across the entire company, collaborating with design teams and cross-functional partners in every product area.',
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
    year: '2017',
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
          kind: 'video',
          src: '/portfoliomedia/Partner%20Innovation/kupu-casestudy.mp4',
          poster:
            '/portfoliomedia/Partner%20Innovation/kupu-casestudy-poster.jpg',
          alt: 'Kupu case study film — pointing a phone camera at the world to learn its Te Reo Māori word',
        },
        caption: 'Kupu — the case study film',
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
