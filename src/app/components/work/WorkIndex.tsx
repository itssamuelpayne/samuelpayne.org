import { Link, useOutletContext } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import type { WorkOutletContext } from './WorkLayout';

export function WorkIndex() {
  const { projects } = useOutletContext<WorkOutletContext>();

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      <main>
        <section className="max-w-2xl mx-auto px-16 py-20 pb-12 border-b border-gray-100">
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

        <section className="max-w-5xl mx-auto px-8 py-16">
          <ul className="space-y-20">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  to={`/work/${project.slug}`}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 group"
                >
                  <div className="md:col-span-5 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase mb-4">
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
                      className="text-[2rem] leading-tight tracking-tight mb-4 font-['Playfair_Display',_serif] text-gray-900 group-hover:opacity-60 transition-opacity"
                      style={{ fontWeight: 600 }}
                    >
                      {project.title}
                    </h2>
                    <p className="font-['Playfair_Display',_serif] text-gray-700 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
