import { Header } from './Header';
import { Footer } from './Footer';

export function SpeakerPage() {
  const logos = [
    { src: '/logos/ces.png', alt: 'CES' },
    { src: '/logos/wsj.png', alt: 'Wall Street Journal' },
    { src: '/logos/dad.png', alt: 'D&AD' },
    { src: '/logos/yale.png', alt: 'Yale School of Management' },
    { src: '/logos/google.png', alt: 'Google' },
  ];

  const topics = [
    {
      title: 'The Intention Economy',
      description:
        'As AI drives the cost of execution to zero, value shifts entirely to direction. This talk explores why taste — the ability to distill specific intention into something unique — is the single most critical skill for the post-AI designer.',
    },
    {
      title: 'Why Don’t We Design the Process?',
      description:
        'We obsess over pixel-perfect user flows yet accept broken meetings and aimless brainstorms. This session treats how we work as a design problem, offering frameworks to sprint effectively and lead with generosity.',
    },
    {
      title: 'Open-Ended UX',
      description:
        'Modern software optimizes for frictionless progress, yet humans thrive on serendipity. Drawing on urbanist Jane Jacobs, this talk challenges us to build digital spaces that prioritize texture and messiness over algorithmic efficiency.',
    },
  ];

  const testimonials = [
    {
      quote:
        'thank you again! your talk was exceptionally well-received by all participants within and beyond Yale — and your panel on AI’s impact to tech an absolute highlight!',
      author: 'Jack Xuhui',
      org: 'Yale School of Management',
    },
    {
      quote:
        'it was great to hear from a creative leader like yourself. Your points on psychological safety, smart experimentation, and the power of technology to deliver at scale were just fantastic.',
      author: 'Fahad Ahmed',
      org: 'Experience Director, The CMO Program, Deloitte',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      <main>
        <h1 className="sr-only">Speaking</h1>

        <section className="max-w-5xl mx-auto px-8 pt-20 pb-24">
          {/* Intro */}
          <div className="max-w-2xl space-y-4 mb-20">
            <p className="text-[17px] leading-[1.45] font-['Playfair_Display',_serif] text-gray-700">
              Please email{' '}
              <a
                href="mailto:speaking@samuelpayne.org"
                className="underline hover:text-gray-900 transition-colors"
              >
                speaking@samuelpayne.org
              </a>{' '}
              to inquire about booking Sam to speak at your event.
            </p>
            <p className="text-[17px] leading-[1.45] font-['Playfair_Display',_serif] text-gray-700">
              Sam speaks regularly at design and technology conferences, addressing a wide range of audiences: the Wall Street Journal, Google, the Yale School of Management, and D&amp;AD. He enjoys industry panels, though insists on a mix of gender, perspective, and background — it’s more fun that way.
            </p>
          </div>

          {/* Logos — left aligned strip */}
          <div className="mb-24 flex flex-wrap items-center gap-x-12 gap-y-6">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-7 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>

          {/* Sample talks — matches writing-page row treatment */}
          <ul className="space-y-14 mb-24">
            {topics.map((topic) => (
              <li key={topic.title} className="max-w-3xl">
                <h2
                  className="text-[1.375rem] leading-[1.2] tracking-tight font-['Playfair_Display',_serif] text-gray-900 mb-3"
                  style={{ fontWeight: 400 }}
                >
                  {topic.title}
                </h2>
                <p className="text-[14px] leading-[1.6] font-['Playfair_Display',_serif] text-gray-600">
                  {topic.description}
                </p>
              </li>
            ))}
          </ul>

          {/* Testimonials */}
          <ul className="space-y-10">
            {testimonials.map((t, i) => (
              <li key={i} className="max-w-3xl">
                <blockquote className="text-[17px] leading-[1.5] font-['Playfair_Display',_serif] text-gray-700 italic mb-3">
                  “{t.quote}”
                </blockquote>
                <div className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase">
                  {t.author} · {t.org}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
