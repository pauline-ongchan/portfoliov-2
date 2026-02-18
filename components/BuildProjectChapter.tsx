// CONTENT: This component renders a project chapter. Change copy in /data/projects.ts

import type { Project } from '@/data/projects';

type BuildProjectChapterProps = {
  project: Project;
};

export default function BuildProjectChapter({ project }: BuildProjectChapterProps) {
  return (
    <article className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
        <p className="text-base leading-7 text-muted">{project.overview}</p>
      </div>
      <div className="grid gap-5">
        <div>
          <div className="text-sm uppercase tracking-wider text-muted">Context</div>
          <p className="mt-2 text-base leading-7 text-foreground/90">
            {project.context}
          </p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-wider text-muted">Approach</div>
          <p className="mt-2 text-base leading-7 text-foreground/90">
            {project.approach}
          </p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-wider text-muted">What I learned</div>
          <p className="mt-2 text-base leading-7 text-foreground/90">
            {project.learned}
          </p>
        </div>
      </div>
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
      <div className="flex flex-wrap gap-4 text-sm text-muted">
        {project.links.github && (
          <a
            className="transition-colors duration-200 hover:text-foreground focus-ring"
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
        {project.links.demo && (
          <a
            className="transition-colors duration-200 hover:text-foreground focus-ring"
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        )}
        {project.links.devpost && (
          <a
            className="transition-colors duration-200 hover:text-foreground focus-ring"
            href={project.links.devpost}
            target="_blank"
            rel="noreferrer"
          >
            Devpost
          </a>
        )}
        {project.links.figma && (
          <a
            className="transition-colors duration-200 hover:text-foreground focus-ring"
            href={project.links.figma}
            target="_blank"
            rel="noreferrer"
          >
            Figma
          </a>
        )}
      </div>
    </article>
  );
}
