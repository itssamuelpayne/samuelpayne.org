import { Header } from './Header';
import { Footer } from './Footer';

export function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      
      <main className="max-w-2xl mx-auto px-16 py-20">
        <section className="mb-12">
          <h1 className="text-[2.75rem] leading-[0.98] tracking-tight mb-8 font-['Playfair_Display',_serif] text-gray-900" style={{ fontWeight: 600 }}>
            Contact
          </h1>
          <div className="leading-relaxed font-['Playfair_Display',_serif] text-gray-700 space-y-4">
            <p>
              The best way to reach me is through <a href="https://www.linkedin.com/in/samuelpayne/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:opacity-60 transition-opacity">LinkedIn</a> or <a href="https://www.threads.net/@itssamuelpayne" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:opacity-60 transition-opacity">Threads</a>. I typically respond within a few days.
            </p>
            <p>
              For speaking inquiries, please email <a href="mailto:speaking@samuelpayne.org" className="text-gray-900 underline hover:opacity-60 transition-opacity">speaking@samuelpayne.org</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}