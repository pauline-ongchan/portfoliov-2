// CONTENT: /data/work.ts
import { work } from "@/data/work";
export default function WorkTimeline() {
  return (
    <div>
      {work.map((entry) => (
        <article
          key={entry.id}
          className="grid gap-3 border-b border-divider py-7 md:grid-cols-[1fr_180px] md:gap-8"
        >
          <div>
            <h2 className="text-[16px] font-medium leading-7">
              {entry.role}
              <span className="text-muted">, </span>
              {entry.company}
            </h2>
            <p className="mt-2 max-w-[660px] text-sm leading-6 text-muted">
              {entry.summary}
            </p>
          </div>
          <p className="text-sm leading-6 text-muted md:text-right">
            {entry.location}
            <br />
            {entry.dates}
          </p>
        </article>
      ))}
    </div>
  );
}
