import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import type { WorkOutletContext } from './WorkLayout';
import type { Project } from '../../../content/types';

export function WorkIndex() {
  const { projects } = useOutletContext<WorkOutletContext>();

  // With 1–2 projects the page reads better when both get the full-bleed
  // treatment. With 3+ we feature the first and grid the rest, so the page
  // has rhythm instead of becoming a tall stack.
  const useGrid = projects.length >= 3;
  const featuredProjects = useGrid ? projects.slice(0, 1) : projects;
  const gridProjects = useGrid ? projects.slice(1) : [];

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      <main>
        {/* Editorial intro */}
        <section className="max-w-2xl mx-auto px-16 py-20 pb-12">
          <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase mb-6">
            Selected Work
          </p>
          <h1
            className="text-[2.75rem] leading-[1.05] tracking-tight mb-8 font-['Playfair_Display',_serif] text-gray-900"
            style={{ fontWeight: 600 }}
          >
            A few projects I’ve been close to.
          </h1>
          <p className="leading-relaxed font-['Playfair_Display',_serif] text-gray-700">
            Not a full archive — just the pieces I keep coming back to, with the thinking that surrounded them.
          </p>
        </section>

        {/* Full-bleed featured project(s) */}
        {featuredProjects.map((project, i) => (
          <div key={project.slug} className={i > 0 ? 'mt-24' : ''}>
            <FeaturedProject project={project} />
          </div>
        ))}

        {/* Grid of remaining projects, only when there are enough to fill it */}
        {gridProjects.length > 0 && (
          <section className="max-w-7xl mx-auto px-8 pt-24 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24">
              {gridProjects.map((project) => (
                <GridProject key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Link to={`/work/${project.slug}`} className="block group">
      <figure className="w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="eager"
          className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
      </figure>

      <div className="max-w-2xl mx-auto px-8 pt-10 pb-4 text-center">
        <MetaStrip project={project} />
        <h2
          className="text-[3rem] leading-[1.05] tracking-tight font-['Playfair_Display',_serif] text-gray-900 mb-6 group-hover:opacity-60 transition-opacity"
          style={{ fontWeight: 600 }}
        >
          {project.title}
        </h2>
        <p className="font-['Playfair_Display',_serif] text-lg text-gray-700 leading-relaxed mb-8">
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

function GridProject({ project }: { project: Project }) {
  return (
    <Link to={`/work/${project.slug}`} className="block group">
      <figure className="w-full overflow-hidden mb-6">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </figure>

      <div className="px-1">
        <MetaStrip project={project} align="left" />
        <h3
          className="text-[1.75rem] leading-tight tracking-tight font-['Playfair_Display',_serif] text-gray-900 mb-3 group-hover:opacity-60 transition-opacity"
          style={{ fontWeight: 600 }}
        >
          {project.title}
        </h3>
        <p className="font-['Playfair_Display',_serif] text-gray-700 leading-relaxed">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}

function MetaStrip({
  project,
  align = 'center',
}: {
  project: Project;
  align?: 'center' | 'left';
}) {
  const justify = align === 'center' ? 'justify-center' : 'justify-start';
  return (
    <div
      className={`flex items-center ${justify} gap-3 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase mb-4`}
    >
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
  );
}
