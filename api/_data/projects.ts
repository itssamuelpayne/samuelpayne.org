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
      'I lead ecosystem design at Meta Reality Labs. We design the tools and systems that let third parties create AI experiences for our wearables.',
    thumbnail: 'https://picsum.photos/seed/wearables-thumb/1600/1000',
    hero: {
      kind: 'image',
      src: 'https://picsum.photos/seed/wearables-hero/2400/1400',
      alt: 'FPO — Wearables Ecosystem hero',
    },
    overview: [
      'I built the team from scratch. I defined the headcount, set the location strategy with leadership, hired, then mapped people’s skills to the work. As the team matured, I created leadership roles for the strongest people and handed them efforts to lead on their own. We design the tooling and the systems that underpin third-party experiences. We also build directly with high-profile partners. This work shows what the platform can do and pushes the technology forward.',
      'We design across surfaces. Meta Ray-Ban Display glasses bring visual UI to glasses for the first time. It’s a hard modality, where voice and visual have to work together. The screenless Ray-Bans are voice-first. A pendant is something different again. Each surface has its own rules, and experiences need to move between them. That continuity, one experience holding together across modalities, is a core part of what we do.',
      'We help partners two ways. We build experiences alongside them, and we define the components and design-system patterns underneath. We invent a pattern, ship it with a partner in the OS, then scale it across the system. The ecosystem opens in 2026. Much of this work goes straight to partners; my team is also building the public-facing infrastructure to support it.',
      'I oversee the AI Developer Center and the Wearables Developer Center. These are where partners build agents, add third-party skills to the AI ecosystem, and ship wearables integrations through our SDK and Web Apps.',
      'The whole thing is zero to one. Google and Apple inherited their app stores. That’s an advantage, but it’s also a constraint. We get to decide what the ecosystem should be, then build it.',
      'I like being close to the work. The best teams I’ve run have little hierarchy and build together. The flip side of that is making room for your best people to lead, so I’ve created those roles on purpose, at Google and at Meta.',
    ],
    sections: [],
  },
  {
    slug: 'google-play-console',
    title: 'Google Play Console',
    client: 'Google',
    year: '2024',
    summary:
      'Play Console is where developers and businesses run their apps and games on Google Play, a $50 billion business with three billion users. It’s the economic engine of the ecosystem: distribution, marketing, payments, security, integrity, analytics. I was brought in to do two things at once: steady a struggling design team spread across four time zones, and modernize a legacy web product.',
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
        body: 'We rebuilt the information architecture from the ground up. We prioritized new go-to-market features, and helped the business adopt user-facing ones too, like short videos that let developers promote their apps and games right on the store.',
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
        body: 'We built responsive dashboards that adapt to whoever’s looking. Play Console serves everyone from marketers to engineers to CEOs. The redesign lifted frequency of use, developer satisfaction, and the revenue metrics tied to both.',
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
        caption: 'Dashboard: app health at a glance',
      },
      {
        type: 'commentary',
        body: 'I rebuilt the team while the product work was underway. I flattened the structure and took more than 20 people as direct reports, so we could rework the roadmap from the ground up without layers in the way. Once the approach was set and our cross-functional partners were behind it, I grew managers from inside the team to run efforts on their own. They went on to bigger roles and more impact.',
      },
      {
        type: 'commentary',
        body: 'Alongside the rebuild, we brought Gemini into third-party workflows, speeding up tasks like localization and analytics.',
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
        caption: 'Store listings: AI-assisted localization with Gemini',
      },
    ],
  },
  {
    slug: 'google-creative-shop',
    title: 'Google Creative Shop',
    client: 'Google',
    year: '2022',
    summary:
      'Google Play runs one of the largest product editorial programs in the world. I built and led Creative Shop, the global team of designers, art directors, creative directors, and animators who made 40,000 original creative assets a year.',
    thumbnail: '/portfoliomedia/Creative%20%26%20Content/creativeshop-feed.mp4',
    hero: {
      kind: 'video',
      src: '/portfoliomedia/Creative%20%26%20Content/creativeshop.mp4',
      poster: '/portfoliomedia/Creative%20%26%20Content/creativeshop-poster.jpg',
      alt: 'Creative Shop — a reel of Creative & Content craft work',
    },
    overview: [
      'This had been a problem the business couldn’t solve. It kept hiring creative directors, and they kept burning out. There was no process, no rigor. The team swung at briefs instead of building systems. I was asked to turn it into a true horizontal function: one team that could serve more than 200 designers across the org.',
      'I rebuilt it in six months. We borrowed from agile and sprint methods, kept the group small and senior, and gave it an operating rhythm it could sustain. I ran the agency and partnership budgets and set the terms, and built a network of outside collaborators who brought their own illustration and animation styles. The function got faster and cost the business less.',
      'The team won internal and external awards for craft, innovation, and product impact.',
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
        caption: 'Editorial craft: one of tens of thousands of original assets made each year',
      },
    ],
  },
  {
    slug: 'material-you-widgets',
    title: 'Material You Widgets',
    client: 'Google',
    year: '2021',
    summary:
      'Android 12 needed 18 first-party widgets in six months. The timeline was a hail mary from senior product leadership. We’d just built Google’s widgets across iOS, and the company wanted the same on Android. I helped stand up the team, and we shipped, working alongside the Material Design group behind Material You.',
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
        body: 'We evolved the dynamic sizing constraints across the OS, and designed new interaction patterns for both locked and unlocked home screens.',
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
    year: '2019',
    summary:
      'I shaped Google’s strategy for its apps on iOS. When I started, Google was reluctant to invest in the platform. I made the case to the first-party teams, then defined the systems approach we’d use: shared components that could work across all 114 Google apps. We designed, built, and shipped coherent features across every one of them.',
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
        body: 'We worked with Apple ahead of each iOS release, then brought the headline features to every Google app. Widgets are a good example. We designed, built, and tested the concepts centrally, then partnered with each product team to make the most of what iOS offered.',
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
        caption: 'Chrome: search, voice, and Lens a tap away',
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
            caption: 'A home screen: Drive, Calendar, and Gmail',
          },
          {
            media: {
              kind: 'image',
              src: '/portfoliomedia/iOS%20at%20Google/morning.png',
              alt: 'iPhone Home Screen on a teal wallpaper — Google Photos, Fit, Maps, and YouTube Music widgets',
            },
            caption: 'A morning screen: Photos, Fit, Maps, Music',
          },
          {
            media: {
              kind: 'image',
              src: '/portfoliomedia/iOS%20at%20Google/student.png',
              alt: 'iPhone Home Screen on a pink wallpaper — Google Search, Tasks, Calendar, and Gmail widgets for a student',
            },
            caption: 'A student’s screen: Search, Tasks, Calendar, Gmail',
          },
        ],
      },
      {
        type: 'commentary',
        body: 'From there we expanded the widgets, adding functionality as we learned how people used them, then extended the work to Lock Screen widgets and other new iOS features. I worked with marketing and PR to shape the story inside and outside Google. The platform went from an afterthought to a priority, and that shift is what led Google to ask for the same on Android.',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/iOS%20at%20Google/LSW.png',
          alt: 'Lock Screen close-up with a Google Search pill, quick actions, and live Google widget cards',
        },
        caption: 'Search, Lens, and live cards a tap from the Lock Screen',
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
      'I led a small, senior team working with partners across Asia Pacific. From Sydney we covered the region, from Mumbai across to Tokyo and down to Auckland, building hundreds of prototypes that helped partners embed Google’s technology in their own businesses.',
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
        body: 'Disney Book Ears was one of them. These were the early days of voice interaction design. Google had just acquired API.AI, soon renamed Dialogflow, and we were experimenting with the natural-language processing that would feed the first Google Assistant.',
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
        caption: 'Book Ears: the case study film',
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
        body: 'We used a collection of Google technologies to bring Te Reo Māori into Google Translate, then built an app that turned anything you pointed your camera at into its Te Reo Māori word. A small way to help preserve a language at risk.',
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
        caption: 'Kupu: the case study film',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Partner%20Innovation/kupu.png',
          alt: 'Kupu — an illustrated portrait with camera focus brackets framing a moko kauae',
        },
        caption: 'Kupu: point your camera, learn the Te Reo Māori word',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Partner%20Innovation/kupu%20ui.png',
          alt: 'Kupu app flow across five iPhones — splash screen, camera viewfinder, loading, and translations of a sky into the Te Reo Māori words tahatū and kapua',
        },
        caption: 'The app: splash, camera, and live translation',
      },
      {
        type: 'media',
        size: 'wide',
        media: {
          kind: 'image',
          src: '/portfoliomedia/Partner%20Innovation/kupu%20ui2.png',
          alt: 'Kupu translating a lake-and-forest landscape — the Te Reo Māori word “wai” labelled over water',
        },
        caption: 'Point the camera at the world: “wai”, water',
      },
      {
        type: 'commentary',
        body: 'The technology we built scaled through Google Arts & Culture, and now helps preserve hundreds of oral languages around the world.',
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
