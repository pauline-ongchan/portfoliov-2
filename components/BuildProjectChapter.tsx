// CONTENT: This component renders a project chapter. Change copy in /data/projects.ts

import type { Project } from '@/data/projects';

type BuildProjectChapterProps = {
  project: Project;
};

export default function BuildProjectChapter({ project }: BuildProjectChapterProps) {
  return (
    <article className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
        <p className="mt-1 text-sm leading-snug text-white/60">{project.subtitle}</p>
        <p className="mt-4 text-meta">{project.overview}</p>
      </div>
      {project.images && project.images.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {project.images.map((imagePath) => (
            <div
              key={imagePath}
              className="overflow-hidden rounded-card border border-white/10 bg-black/20"
            >
              <div className="aspect-video w-full">
                <img
                  src={imagePath}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-card border border-dashed border-white/15 bg-black/15">
          <div className="aspect-video w-full p-4">
            <div className="flex h-full items-center justify-center rounded-xl border border-white/10 bg-black/20 text-center">
              <p className="max-w-xs text-meta">
                Add project image paths in <code>/data/projects.ts</code> using the
                <code> images</code> field.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/15 px-3 py-1 text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 text-xs text-white/60 underline-offset-4 transition-colors duration-200 hover underline focus-ring">
        {project.links.github && (
          <a
            className="transition-colors duration-200 hover:text-foreground focus-ring"
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        )}
        {project.links.demo && (
          <a
            className="transition-colors duration-200 hover:text-foreground focus-ring"
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            Demo ↗
          </a>
        )}
        {project.links.devpost && (
          <a
            className="transition-colors duration-200 hover:text-foreground focus-ring"
            href={project.links.devpost}
            target="_blank"
            rel="noreferrer"
          >
            Devpost ↗
          </a>
        )}
        {project.links.figma && (
          <a
            className="transition-colors duration-200 hover:text-foreground focus-ring"
            href={project.links.figma}
            target="_blank"
            rel="noreferrer"
          >
            Figma ↗
          </a>
        )}
        {project.links.slides && (
          <a
            className="transition-colors duration-200 hover:text-foreground focus-ring"
            href={project.links.slides}
            target="_blank"
            rel="noreferrer"
          >
            Slide Deck ↗
          </a>
        )}
      </div>
    </article>
  );
}
