"use client";
// CONTENT: /data/books.json. Placeholder books can be replaced independently.
import { useState } from "react";
import Image from "next/image";
import books from "@/data/books.json";
const colors = [
  "bg-[#d7d2bf]",
  "bg-[#d9b9a7]",
  "bg-[#bcc9c0]",
  "bg-[#cdc5d6]",
  "bg-[#d5c79f]",
  "bg-[#bccbd2]",
];
export default function Bookshelf() {
  const [side, setSide] = useState("fiction");
  const selected = books.filter((book) => book.side === side);
  const genres = Array.from(new Set(selected.map((book) => book.genre)));
  return (
    <section aria-labelledby="books-title">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 id="books-title" className="section-label">
          Bookshelf
        </h2>
        <div role="group" aria-label="Book category" className="flex gap-2">
          {["fiction", "nonfiction"].map((value) => (
            <button
              type="button"
              key={value}
              aria-pressed={side === value}
              onClick={() => setSide(value)}
              className={`rounded-full border px-4 py-2 text-xs ${side === value ? "border-foreground bg-foreground text-white" : "border-divider text-muted hover:border-foreground"}`}
            >
              {value === "fiction" ? "Fiction" : "Non-fiction"}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 text-xs text-muted">
        A placeholder reading collection, ready for my own picks.
      </p>
      <div className="mt-8 space-y-9">
        {genres.map((genre) => (
          <section key={genre} aria-label={genre}>
            <h3 className="mb-3 font-serif text-2xl">{genre}</h3>
            <div
              tabIndex={0}
              role="region"
              aria-label={`${genre} books, scroll horizontally for more`}
              className="overflow-x-auto pb-4"
            >
              <div className="min-w-[800px]">
                <div className="grid grid-cols-6 gap-5 border-b-[7px] border-[#7c5d3b] bg-[#f1e9db] px-6 pt-10 shadow-[inset_0_-12px_0_#a9835a]">
                  {selected
                    .filter((book) => book.genre === genre)
                    .map((book, index) => (
                      <a
                        key={book.title}
                        href={book.goodreadsUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${book.title} by ${book.author} on Goodreads (opens in new tab)`}
                        className="group relative mx-auto mb-3 block h-[150px] w-[100px] origin-bottom transition-transform duration-200 hover:-translate-y-[18px] hover:-rotate-3 hover:scale-[1.04] focus-visible:-translate-y-[18px] focus-visible:-rotate-3 focus-visible:scale-[1.04] motion-reduce:transform-none"
                      >
                        <span
                          className={`relative flex h-full w-full flex-col justify-between overflow-hidden border-l-[3px] border-black/15 p-3 shadow-[2px_2px_5px_#0002] group-hover:shadow-[4px_14px_18px_#0003] group-focus-visible:shadow-[4px_14px_18px_#0003] ${colors[index % colors.length]}`}
                        >
                          {book.coverImage ? (
                            <Image
                              src={book.coverImage}
                              alt=""
                              fill
                              sizes="100px"
                              className="object-cover"
                            />
                          ) : (
                            <>
                              <span className="text-[8px] uppercase tracking-widest">
                                Reading collection
                              </span>
                              <span className="font-serif text-xl leading-tight">
                                {book.title}
                              </span>
                              <span className="text-[8px]">{book.author}</span>
                            </>
                          )}
                        </span>
                      </a>
                    ))}
                </div>
                <div className="grid grid-cols-6 gap-5 px-6 pt-3">
                  {selected
                    .filter((book) => book.genre === genre)
                    .map((book) => (
                      <div key={book.title} className="mx-auto w-[100px]">
                        <p className="text-xs font-medium leading-5">
                          {book.title}
                        </p>
                        <p className="mt-1 text-[11px] leading-4 text-muted">
                          {book.author}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
