'use client';

// CONTENT: This component renders the Build section. Change copy in /data/projects.ts

import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';
import BuildProjectChapter from '@/components/BuildProjectChapter';

export default function Build() {
  const [selectedSlug, setSelectedSlug] = useState(projects[0]?.slug ?? '');

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === selectedSlug) ?? projects[0],
    [selectedSlug]
  );

  return (
    <div className="grid gap-8 md:grid-cols-[28%_1fr] md:gap-12">
      <div className="md:sticky md:top-[80px]">
        <div className="flex gap-2 overflow-x-auto pb-2 text-sm text-muted md:block md:space-y-2 md:overflow-visible">
          {projects.map((project) => {
            const isActive = selectedSlug === project.slug;
            return (
              <button
                key={project.slug}
                type="button"
                className={`min-h-[44px] shrink-0 rounded-full border px-4 py-2 text-left transition-colors duration-200 focus-ring md:w-full md:rounded-none md:border-0 md:border-l-2 md:px-0 md:py-2 md:pl-4 ${
                  isActive
                    ? 'border-accent text-foreground'
                    : 'border-white/15 text-muted hover:text-foreground md:border-transparent'
                }`}
                onClick={() => setSelectedSlug(project.slug)}
              >
                <span className="flex min-w-0 items-center justify-between gap-2">
                  <span className="truncate">{project.title}</span>
                  {project.isWinner ? (
                    <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/60 transition-colors duration-200 hover:border-white/30 hover:text-white/70">
                      WINNER
                    </span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="rounded-card border border-white/10 bg-black/20 p-6 md:p-8">
        {selectedProject ? (
          <BuildProjectChapter project={selectedProject} />
        ) : (
          <div className="text-subtitle">No project selected.</div>
        )}
      </div>
    </div>
  );
}
