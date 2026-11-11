// CONTENT: /data/site.ts
import { site } from "@/data/site";
export default function Footer() {
  return (
    <footer className="mt-16 flex gap-6 pb-10 text-xs text-muted">
      <a href={`mailto:${site.email}`} className="hover:text-accent">
        Email ↗
      </a>
      <a
        href={site.githubUrl}
        className="hover:text-accent"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>
      <a
        href={site.linkedinUrl}
        className="hover:text-accent"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>
    </footer>
  );
}
