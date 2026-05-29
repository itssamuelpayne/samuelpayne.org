import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import type { WorkOutletContext } from './WorkLayout';
import type { Project } from '../../../content/types';

export function WorkIndex() {
  const { projects } = useOutletContext<WorkOutletContext>();

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      {/* Visually-hidden page heading for screen readers / page hierarchy */}
      <h1 className="sr-only">Selected Work</h1>

      <main>
        <section className="max-w-7xl px-16 pt-12 pb-24">
          <ul className="space-y-16">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectRow project={project} />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const isVideo = /\.(mp4|webm)$/i.test(project.thumbnail);

  return (
    <Link
      to={`/work/${project.slug}`}
      className="group grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-10 items-start"
    >
      {/* Thumbnail — cropped 4:3 to match the writing rows */}
      <figure className="md:col-span-5 overflow-hidden">
        <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
          {isVideo ? (
            <video
              src={project.thumbnail}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={project.title}
              className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          )}
        </div>
      </figure>

      {/* Copy */}
      <div className="md:col-span-7 md:pt-1">
        <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase mb-3">
          {project.year}
        </p>

        <h2
          className="text-[1.375rem] leading-[1.2] tracking-tight font-['Playfair_Display',_serif] text-gray-900 mb-3 group-hover:opacity-60 transition-opacity"
          style={{ fontWeight: 400 }}
        >
          {project.title}
        </h2>

        <p className="text-[14px] leading-[1.6] font-['Playfair_Display',_serif] text-gray-600 mb-5">
          {project.summary}
        </p>

        <span className="inline-flex items-center gap-2 text-[10px] font-['Space_Mono',_monospace] text-gray-900 tracking-[0.25em] uppercase border-b border-gray-900 pb-1 group-hover:opacity-60 transition-opacity">
          More
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}
