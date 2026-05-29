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
        <section className="max-w-7xl mx-auto px-8 pt-24 pb-24">
          <ul className="space-y-32">
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
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-16 items-start"
    >
      {/* Thumbnail — animated if the file is a video, still otherwise */}
      <figure className="md:col-span-7 overflow-hidden">
        {/\.(mp4|webm)$/i.test(project.thumbnail) ? (
          <video
            src={project.thumbnail}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={project.title}
            className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        )}
      </figure>

      {/* Copy */}
      <div className="md:col-span-5 md:pt-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase mb-5">
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.role}</span>
          {project.tags.length > 0 && (
            <>
              <span>•</span>
              <span>{project.tags.join(' / ')}</span>
            </>
          )}
        </div>

        <h2
          className="text-[2.25rem] leading-[1.1] tracking-tight font-['Playfair_Display',_serif] text-gray-900 mb-5 group-hover:opacity-60 transition-opacity"
          style={{ fontWeight: 600 }}
        >
          {project.title}
        </h2>

        <p className="font-['Playfair_Display',_serif] text-gray-700 leading-relaxed mb-8">
          {project.summary}
        </p>

        <span className="inline-flex items-center gap-2 text-[10px] font-['Space_Mono',_monospace] text-gray-900 tracking-[0.25em] uppercase border-b border-gray-900 pb-1 group-hover:opacity-60 transition-opacity">
          Read the case study
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}
