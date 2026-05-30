import { Header } from './Header';
import { Footer } from './Footer';

export function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      <main>
        <h1 className="sr-only">Contact</h1>

        <section className="max-w-2xl px-16 pt-12 pb-16">
          <div className="space-y-4">
            <p className="text-[17px] leading-[1.45] font-['Playfair_Display',_serif] text-gray-700">
              You can message me on{' '}
              <a
                href="https://www.linkedin.com/in/samuelpayne/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:opacity-60 transition-opacity"
              >
                LinkedIn
              </a>{' '}
              or{' '}
              <a
                href="https://www.threads.com/@samuelpayneesq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:opacity-60 transition-opacity"
              >
                Threads
              </a>
              . I typically respond within a day or two.
            </p>
            <p className="text-[17px] leading-[1.45] font-['Playfair_Display',_serif] text-gray-700">
              For speaking inquiries, please email{' '}
              <a
                href="mailto:speaking@samuelpayne.org"
                className="text-gray-900 underline hover:opacity-60 transition-opacity"
              >
                speaking@samuelpayne.org
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
