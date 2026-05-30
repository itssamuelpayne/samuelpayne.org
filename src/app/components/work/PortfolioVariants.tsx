// TEMPORARY — three image-forward layout variants for /work.
// Rendered at /work-preview behind the existing PasswordGate so we can
// compare side-by-side. Delete this file (and its route in App.tsx)
// once a direction is picked.

import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import type { WorkOutletContext } from './WorkLayout';
import type { Project } from '../../../content/types';

export function PortfolioVariants() {
  const { projects } = useOutletContext<WorkOutletContext>();

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main>
        <VariantHeader label="Variant A · Cinematic — dark gradient + centered title on hover" />
        <VariantA projects={projects} />

        <VariantHeader label="Variant B · Bottom slide — title band rises from below on hover" />
        <VariantB projects={projects} />

        <VariantHeader label="Variant C · Typographic — title fades over image, no overlay" />
        <VariantC projects={projects} />

        <div className="py-16" />
      </main>
      <Footer />
    </div>
  );
}

function VariantHeader({ label }: { label: string }) {
  return (
    <div className="max-w-5xl px-16 pt-20 pb-4">
      <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-300 tracking-[0.25em] uppercase border-b border-gray-100 pb-3">
        {label}
      </p>
    </div>
  );
}

// Renders the right thumbnail kind. We keep videos paused until hover for
// the preview variants so the page isn't a wall of motion.
function Thumb({
  project,
  hoverPlays = false,
}: {
  project: Project;
  hoverPlays?: boolean;
}) {
  const isVideo = /\.(mp4|webm)$/i.test(project.thumbnail);

  if (isVideo) {
    return (
      <video
        src={project.thumbnail}
        autoPlay={!hoverPlays}
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={project.title}
        className="w-full h-full object-cover block"
        onMouseEnter={hoverPlays ? (e) => e.currentTarget.play().catch(() => {}) : undefined}
        onMouseLeave={hoverPlays ? (e) => e.currentTarget.pause() : undefined}
      />
    );
  }

  return (
    <img
      src={project.thumbnail}
      alt={project.title}
      loading="lazy"
      className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
  );
}

// ─── A. Cinematic ───────────────────────────────────────────────────
function VariantA({ projects }: { projects: Project[] }) {
  return (
    <section className="max-w-5xl px-16 pt-4 pb-12">
      <ul className="space-y-10">
        {projects.map((project) => (
          <li key={`a-${project.slug}`}>
            <Link to={`/work/${project.slug}`} className="group block relative overflow-hidden">
              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                <Thumb project={project} hoverPlays />
              </div>

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-500" />

              {/* Year, tucked top-left, always present, very quiet */}
              <p className="absolute top-6 left-6 text-[10px] font-['Space_Mono',_monospace] text-white/80 tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.year}
              </p>

              {/* Centered title */}
              <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                <h2
                  className="text-center text-white text-[2.5rem] leading-[1.05] tracking-tight font-['Playfair_Display',_serif] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                  style={{ fontWeight: 500 }}
                >
                  {project.title}
                </h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ─── B. Bottom slide ────────────────────────────────────────────────
function VariantB({ projects }: { projects: Project[] }) {
  return (
    <section className="max-w-5xl px-16 pt-4 pb-12">
      <ul className="space-y-10">
        {projects.map((project) => (
          <li key={`b-${project.slug}`}>
            <Link to={`/work/${project.slug}`} className="group block relative overflow-hidden">
              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                <Thumb project={project} hoverPlays />
              </div>

              {/* Band that rises from below the bottom edge on hover */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="bg-gradient-to-t from-black/80 via-black/55 to-transparent px-8 pt-10 pb-6 flex items-end justify-between gap-8">
                  <div>
                    <p className="text-[10px] font-['Space_Mono',_monospace] text-white/70 tracking-[0.2em] uppercase mb-2">
                      {project.year}
                    </p>
                    <h2
                      className="text-white text-[1.75rem] leading-[1.1] tracking-tight font-['Playfair_Display',_serif]"
                      style={{ fontWeight: 500 }}
                    >
                      {project.title}
                    </h2>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-2 text-[10px] font-['Space_Mono',_monospace] text-white tracking-[0.25em] uppercase border-b border-white pb-1">
                    More
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ─── C. Typographic ─────────────────────────────────────────────────
function VariantC({ projects }: { projects: Project[] }) {
  return (
    <section className="max-w-5xl px-16 pt-4 pb-12">
      <ul className="space-y-10">
        {projects.map((project) => (
          <li key={`c-${project.slug}`}>
            <Link to={`/work/${project.slug}`} className="group block relative overflow-hidden">
              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                <Thumb project={project} hoverPlays />
              </div>

              {/* Title in lower-left over image, no overlay band */}
              <div className="absolute left-0 right-0 bottom-0 px-8 pb-8 pointer-events-none">
                <div className="w-12 h-px bg-white mb-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <h2
                  className="text-white text-[2rem] leading-[1.1] tracking-tight font-['Playfair_Display',_serif] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                  style={{
                    fontWeight: 500,
                    textShadow: '0 1px 18px rgba(0,0,0,0.45)',
                  }}
                >
                  {project.title}
                </h2>
                <p
                  className="text-[10px] font-['Space_Mono',_monospace] text-white tracking-[0.2em] uppercase mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75"
                  style={{ textShadow: '0 1px 12px rgba(0,0,0,0.55)' }}
                >
                  {project.year}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
