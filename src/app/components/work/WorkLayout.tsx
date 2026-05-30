import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import type { Project } from '../../../content/types';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { PasswordGate } from './PasswordGate';
import { Loading } from '../ui/Loading';

type Status = 'loading' | 'locked' | 'ready' | 'error';

export interface WorkOutletContext {
  projects: Project[];
  refresh: () => Promise<void>;
}

export function WorkLayout() {
  const [status, setStatus] = useState<Status>('loading');
  const [projects, setProjects] = useState<Project[]>([]);

  const load = useCallback(async () => {
    setStatus((s) => (s === 'ready' ? s : 'loading'));
    try {
      const res = await fetch('/api/projects', {
        credentials: 'same-origin',
        headers: { accept: 'application/json' },
      });
      if (res.status === 401) {
        setStatus('locked');
        return;
      }
      if (!res.ok) {
        setStatus('error');
        return;
      }
      const data = (await res.json()) as { projects: Project[] };
      setProjects(data.projects);
      setStatus('ready');
    } catch {
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  if (status === 'locked') {
    return <PasswordGate onUnlocked={load} />;
  }

  if (status === 'error') {
    return <WorkErrorState onRetry={load} />;
  }

  if (status === 'loading') {
    return <WorkLoadingState />;
  }

  const ctx: WorkOutletContext = { projects, refresh: load };
  return <Outlet context={ctx} />;
}

function WorkLoadingState() {
  // Delay rendering the label so fast fetches don't produce a flash.
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 250);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div
          className="transition-opacity duration-300"
          style={{ opacity: show ? 1 : 0 }}
        >
          <Loading />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function WorkErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="text-center max-w-md">
          <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase mb-6">
            Something went sideways
          </p>
          <p className="font-['Playfair_Display',_serif] text-gray-800 mb-8 leading-relaxed">
            Couldn’t reach the server. Check your connection and try again.
          </p>
          <button
            type="button"
            onClick={onRetry}
            className="text-[10px] font-['Space_Mono',_monospace] text-gray-900 tracking-[0.25em] uppercase border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity"
          >
            Retry
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
