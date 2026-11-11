// CONTENT: Introduction and navigation in /data/site.ts; each panel references its own data.
import { hero, site } from "@/data/site";
import PortfolioTabs from "@/components/PortfolioTabs";
import WorkTimeline from "@/components/WorkTimeline";
import Build from "@/components/Build";
import Community from "@/components/Community";
import Lately from "@/components/Lately";
import Writing from "@/components/Writing";
import Bookshelf from "@/components/Bookshelf";
import About from "@/components/About";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="mx-auto max-w-[1104px] px-5 pt-12 sm:px-8 sm:pt-20">
      <header className="mb-8">
        <h1 className="font-serif text-[56px] leading-[1.05] tracking-[-0.025em] sm:text-[72px]">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-[900px] text-lg leading-[1.65] text-muted sm:text-[22px]">
          {site.heroSubline}
          <a href="#work" className="text-link">
            {site.introCompany}
          </a>
          . {site.introInterest}{" "}
          <a href="#build" className="text-link">
            {site.introLink}
          </a>
          .
        </p>
      </header>
      <PortfolioTabs>
        <WorkTimeline />
        <Build />
        <Community />
        <div className="space-y-14 py-7 sm:space-y-16">
          <Lately />
          <Writing />
          <Bookshelf />
        </div>
        <About />
      </PortfolioTabs>
      <Footer />
    </main>
  );
}
