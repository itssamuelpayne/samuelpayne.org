import { Header } from './Header';
import { Footer } from './Footer';

export function SpeakerPage() {
  const testimonials = [
    {
      quote:
        'thank you again! your talk was exceptionally well-received by all participants within and beyond Yale — and your panel on AI’s impact to tech an absolute highlight!',
      author: 'Jack Xuhui',
      org: 'Yale School of Management (AI for Business Leaders Conference)',
    },
    {
      quote:
        'it was great to hear from a creative leader like yourself. Your points on psychological safety, smart experimentation, and the power of technology to deliver at scale were just fantastic.',
      author: 'Fahad Ahmed',
      org: 'Experience Director, The CMO Program, Deloitte (CES 2025)',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      <main>
        <h1 className="sr-only">Speaking</h1>

        <section className="max-w-2xl px-16 pt-20 pb-24">
          {/* Intro */}
          <div className="space-y-4 mb-20">
            <p className="text-[17px] leading-[1.45] font-['Playfair_Display',_serif] text-gray-800">
              I regularly speak at design and technology conferences and enjoy talking about design, AI, and the creative process. Email{' '}
              <a
                href="mailto:speaking@samuelpayne.org"
                className="underline hover:text-gray-900 transition-colors"
              >
                speaking@samuelpayne.org
              </a>{' '}
              for more information.
            </p>
          </div>

          {/* CES panel */}
          <img
            src="/portfoliomedia/cespanel.png"
            alt="Sam on a panel at CES"
            className="w-full h-auto block mb-20"
            loading="lazy"
          />

          {/* Testimonials */}
          <ul className="space-y-10">
            {testimonials.map((t, i) => (
              <li key={i}>
                <blockquote className="text-[17px] leading-[1.5] font-['Playfair_Display',_serif] text-gray-800 italic mb-3">
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
