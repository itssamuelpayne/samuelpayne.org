import { Link, useOutletContext } from 'react-router-dom';
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
        <section className="max-w-5xl px-16 pt-20 pb-24">
          <ul className="space-y-10">
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
      className="group block relative overflow-hidden max-w-[806px]"
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
        {isVideo ? (
          <video
            src={project.thumbnail}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label={project.title}
            className="w-full h-full object-cover block"
          />
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        )}
      </div>

      {/* Dark wash, fades in on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-500" />

      {/* Year — quiet, top-left, fades in with the wash */}
      <p className="absolute top-6 left-6 text-[10px] font-['Space_Mono',_monospace] text-white/80 tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {project.year}
      </p>

      {/* Title — large serif, centered, fades up */}
      <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
        <h2
          className="text-center text-white text-[2.5rem] leading-[1.05] tracking-tight font-['Playfair_Display',_serif] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
          style={{ fontWeight: 500 }}
        >
          {project.title}
        </h2>
      </div>
    </Link>
  );
}
