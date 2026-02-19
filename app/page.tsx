import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import WorkTimeline from '@/components/WorkTimeline';
import Build from '@/components/Build';
import Community from '@/components/Community';
import Lately from '@/components/Lately';
import About from '@/components/About';

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <main className="pt-[56px] overflow-x-hidden sm:snap-y sm:snap-mandatory sm:scroll-smooth">
        <Section id="top" minHeight="min-h-[90svh]" className="pt-24">
          <Hero />
        </Section>
        <Section
          id="work"
          title="01 - WORK"
          heading="Work"
          subtitle="Recent roles and projects that shaped how I build."
          minHeight="min-h-[80svh]"
        >
          <WorkTimeline />
        </Section>
        <Section id="build" title="02 - Build" heading="Build" minHeight="min-h-[80svh]">
          <Build />
        </Section>
        <Section
          id="community"
          title="03 - Community"
          heading="Community"
          minHeight="min-h-[80svh]"
        >
          <Community />
        </Section>
        <Section id="lately" title="04 - Lately" heading="Lately" subtitle="Random sidequests and fun stuff!" minHeight="min-h-[80svh]">
          <Lately />
        </Section>
        <Section id="about" title="05 - About" heading="About" minHeight="min-h-screen">
          <About />
        </Section>
      </main>
    </div>
  );
}
