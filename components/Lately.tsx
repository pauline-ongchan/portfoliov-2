// CONTENT: /data/lately.ts
import Image from "next/image";
import { lately } from "@/data/lately";
export default function Lately() {
  return (
    <section aria-labelledby="lately-title">
      <h2 id="lately-title" className="section-label">
        Lately
      </h2>
      <div
        tabIndex={0}
        role="region"
        aria-label="Recent photos, scroll horizontally for more"
        className="mt-5 flex snap-x snap-proximity gap-5 overflow-x-auto pb-5"
      >
        {lately.map((item) => (
          <article key={item.title} className="w-[220px] shrink-0 snap-start">
            <div className="relative h-[150px] bg-placeholder">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              )}
            </div>
            <h3 className="mt-3 text-sm font-medium">{item.title}</h3>
            <p className="mt-1 text-xs leading-5 text-muted">
              {item.date} · {item.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
