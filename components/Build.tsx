// CONTENT: /data/projects.ts
import Image from "next/image";
import { projects, type Project } from "@/data/projects";
function Links({ project }: { project: Project }) {
  const labels: Record<string, string> = {
    github: "GitHub",
    devpost: "Devpost",
    demo: "Demo",
    figma: "Figma",
    slides: "Slides",
  };
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
      {Object.entries(project.links).map(([label, url]) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-link"
          aria-label={`${project.title} on ${labels[label]} (opens in new tab)`}
        >
          {labels[label]} ↗
        </a>
      ))}
    </div>
  );
}
export default function Build() {
  const [featured, ...rest] = projects;
  return (
    <div>
      <article className="grid items-center gap-7 border-b border-divider py-8 md:grid-cols-2 md:gap-10">
        <div className="relative aspect-[16/10] overflow-hidden bg-placeholder">
          {featured.images?.[0] ? (
            <Image
              src={featured.images[0]}
              alt="FlowProof interface"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3">
              <span className="font-serif text-5xl">FlowProof</span>
              <span className="text-xs text-muted">
                Project preview coming soon
              </span>
            </div>
          )}
        </div>
        <div>
          <p className="section-label">{featured.subtitle}</p>
          <h2 className="mt-3 font-serif text-4xl">{featured.title}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            {featured.overview}
          </p>
          <p className="mb-5 mt-4 text-xs leading-6 text-muted">
            {featured.tech.join(" · ")}
          </p>
          <Links project={featured} />
        </div>
      </article>
      {rest.map((project) => (
        <article
          key={project.slug}
          className="grid gap-4 border-b border-divider py-6 sm:grid-cols-[1fr_auto] sm:gap-8"
        >
          <div>
            <h2 className="font-medium">
              {project.title}
              {project.isWinner && (
                <span className="ml-3 text-[10px] tracking-widest text-accent">
                  WINNER
                </span>
              )}
            </h2>
            <p className="mt-2 max-w-[650px] text-sm leading-6 text-muted">
              {project.overview}
            </p>
          </div>
          <Links project={project} />
        </article>
      ))}
    </div>
  );
}
