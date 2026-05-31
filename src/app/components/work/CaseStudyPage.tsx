import { Link, useOutletContext, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SectionBlock } from './Sections';
import type { WorkOutletContext } from './WorkLayout';

export function CaseStudyPage() {
  const { projects } = useOutletContext<WorkOutletContext>();
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen w-full bg-white">
        <Header />
        <main className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 font-['Space_Mono',_monospace] text-xs tracking-[0.2em] uppercase">
              Project not found
            </p>
            <Link
              to="/work"
              className="mt-6 inline-block text-[10px] font-['Space_Mono',_monospace] text-gray-900 tracking-[0.25em] uppercase border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity"
            >
              Back to work
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      <main>
        <div className="max-w-6xl mx-auto px-8 pb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-['Space_Mono',_monospace] text-[10px] tracking-[0.2em] uppercase"
          >
            <ArrowLeft className="w-3 h-3" />
            All Work
          </Link>
        </div>

        <header className="max-w-2xl mx-auto px-8 pt-8 pb-12 text-center">
          <div className="flex items-center justify-center gap-3 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase mb-6">
            <span>{project.year}</span>
            {project.client && (
              <>
                <span>•</span>
                <span>{project.client}</span>
              </>
            )}
          </div>
          <h1
            className="text-[3.25rem] leading-[1.05] tracking-tight font-['Playfair_Display',_serif] text-gray-900 mb-8"
            style={{ fontWeight: 600 }}
          >
            {project.title}
          </h1>
          <p className="text-lg font-['Playfair_Display',_serif] text-gray-800 leading-relaxed">
            {project.summary}
          </p>
        </header>

        <section className="w-full">
          {project.hero.kind === 'image' ? (
            <img
              src={project.hero.src}
              alt={project.hero.alt}
              className="w-full max-h-[70vh] object-cover block"
            />
          ) : (
            // Heroes autoplay-loop-muted (cinematic). Section videos in the
            // body retain controls / click-to-play. Capped to a band so they
            // don't dominate the fold on wide monitors.
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={project.hero.poster}
              aria-label={project.hero.alt}
              className="w-full max-h-[70vh] object-cover block bg-black"
            >
              <source src={project.hero.src} />
            </video>
          )}
        </section>

        {project.overview.length > 0 && (
          <section className="max-w-2xl mx-auto px-8 py-16">
            <div className="space-y-6">
              {project.overview.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-['Playfair_Display',_serif] text-gray-800 leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        <div className="border-t border-gray-100" />

        <div>
          {project.sections.map((section, i) => (
            <SectionBlock key={i} section={section} />
          ))}
        </div>

        <section className="max-w-2xl mx-auto px-8 py-16 mt-8 border-t border-gray-100">
          <Link to={`/work/${next.slug}`} className="group block text-center">
            <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase mb-4">
              Next
            </p>
            <h2
              className="text-[2rem] leading-tight tracking-tight font-['Playfair_Display',_serif] text-gray-900 group-hover:opacity-60 transition-opacity inline-flex items-center gap-3"
              style={{ fontWeight: 600 }}
            >
              {next.title}
              <ArrowRight className="w-5 h-5" />
            </h2>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
