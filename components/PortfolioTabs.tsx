"use client";
// CONTENT: /data/site.ts. Content panels are composed on the server in /app/page.tsx.
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type KeyboardEvent,
} from "react";
import { navLinks } from "@/data/site";
export default function PortfolioTabs({ children }: { children: ReactNode[] }) {
  const [active, setActive] = useState("work");
  const tabs = useRef<(HTMLAnchorElement | null)[]>([]);
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      setActive(navLinks.some((tab) => tab.id === hash) ? hash : "work");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  function select(id: string) {
    setActive(id);
    if (window.location.hash !== `#${id}`) window.location.hash = id;
  }
  function keyboard(event: KeyboardEvent, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % navLinks.length;
    else if (event.key === "ArrowLeft")
      next = (index + navLinks.length - 1) % navLinks.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = navLinks.length - 1;
    else return;
    event.preventDefault();
    select(navLinks[next].id);
    tabs.current[next]?.focus();
  }
  return (
    <>
      <div
        role="tablist"
        aria-label="Explore my portfolio"
        className="flex gap-5 border-b border-divider sm:gap-9"
      >
        {navLinks.map((tab, index) => (
          <a
            key={tab.id}
            ref={(el) => {
              tabs.current[index] = el;
            }}
            href={`#${tab.id}`}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={active === tab.id ? 0 : -1}
            onClick={(event) => {
              event.preventDefault();
              select(tab.id);
            }}
            onKeyDown={(event) => keyboard(event, index)}
            className={`-mb-px border-b-2 py-4 text-[13px] font-medium sm:text-sm ${active === tab.id ? "border-accent text-accent" : "border-transparent text-muted hover:text-foreground"}`}
          >
            {tab.label}
          </a>
        ))}
      </div>
      {navLinks.map((tab, index) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={active !== tab.id}
          tabIndex={0}
          className="pt-2"
        >
          {children[index]}
        </div>
      ))}
    </>
  );
}
