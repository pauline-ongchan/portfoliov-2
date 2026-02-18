import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Build from '@/components/Build';
import Leadership from '@/components/Leadership';
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
        <Section id="build" title="01 - Build" heading="Build" minHeight="min-h-[80svh]">
          <Build />
        </Section>
        <Section
          id="leadership"
          title="02 - Leadership"
          heading="Leadership"
          minHeight="min-h-[80svh]"
        >
          <Leadership />
        </Section>
        <Section id="lately" title="03 - Lately" heading="Lately" minHeight="min-h-[80svh]">
          <Lately />
        </Section>
        <Section id="about" title="05 - About" heading="About" minHeight="min-h-screen">
          <About />
        </Section>
      </main>
    </div>
  );
}
