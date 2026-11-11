// CONTENT: /data/community.ts
import Image from "next/image";
import { featured, more } from "@/data/community";
export default function Community() {
  return (
    <div>
      {featured.map((item) => (
        <article
          key={item.id}
          className="flex flex-col gap-6 border-b border-divider py-7 sm:flex-row"
        >
          {item.imageSrc && (
            <Image
              src={item.imageSrc}
              alt={`${item.org} community`}
              width={144}
              height={112}
              sizes="144px"
              className="h-28 w-36 shrink-0 object-cover"
            />
          )}
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-medium">
                <a href={item.linkUrl} className="hover:text-accent">
                  {item.org} ↗
                </a>
              </h2>
              <p className="text-xs text-muted">{item.dateRange}</p>
            </div>
            <p className="mt-1 text-sm">{item.role}</p>
            {item.bullets.map((bullet) => (
              <p key={bullet} className="mt-2 text-sm leading-6 text-muted">
                {bullet}
              </p>
            ))}
          </div>
        </article>
      ))}
      <details className="mt-6">
        <summary className="w-fit cursor-pointer text-sm text-accent underline underline-offset-4">
          View more
        </summary>
        <ul className="mt-4">
          {more.map((item) => (
            <li
              key={item.id}
              className="flex flex-col justify-between gap-2 border-b border-divider py-4 sm:flex-row sm:gap-8"
            >
              <span className="text-sm">
                {item.linkUrl ? (
                  <a href={item.linkUrl} className="hover:text-accent">
                    {item.label} ↗
                  </a>
                ) : (
                  item.label
                )}
              </span>
              <span className="shrink-0 text-xs leading-5 text-muted">
                {item.dateRange}
              </span>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
