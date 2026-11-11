// CONTENT: /data/posts.ts
import Image from "next/image";
import { writing } from "@/data/posts";
export default function Writing() {
  const post = writing.highlight;
  return (
    <section aria-labelledby="writing-title">
      <h2 id="writing-title" className="section-label">
        Writing · Substack
      </h2>
      <a
        href={post.url}
        target="_blank"
        rel="noreferrer"
        className="group mt-6 grid items-center gap-6 sm:grid-cols-[220px_1fr]"
      >
        <Image
          src={post.image}
          alt=""
          width={440}
          height={300}
          sizes="(max-width: 640px) 100vw, 220px"
          className="aspect-[22/15] w-full object-cover"
        />
        <div>
          <p className="text-xs uppercase tracking-wider text-accent">
            {post.month} · Highlight
          </p>
          <h3 className="mt-3 font-serif text-3xl group-hover:underline decoration-1 underline-offset-4">
            {post.title} ↗
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{post.teaser}</p>
        </div>
      </a>
      <p className="mt-4 text-xs text-muted">{writing.placeholderNote}</p>
      <ul className="mb-6 mt-6">
        {writing.past.map((post) => (
          <li key={post.month} className="border-t border-divider py-4">
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-2 text-sm hover:text-accent sm:flex-row sm:gap-8"
            >
              <span className="w-36 shrink-0 text-muted">{post.month}</span>
              <span>{post.title} ↗</span>
            </a>
          </li>
        ))}
      </ul>
      <a
        href={writing.substackUrl}
        className="text-link text-sm"
        target="_blank"
        rel="noreferrer"
      >
        Read everything on Substack ↗
      </a>
    </section>
  );
}
