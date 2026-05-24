import FacilitiesGrid from "../components/sections/FacilitiesGrid";
import PageHero from "../components/sections/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { images } from "../data/gymData";

function About() {
  return (
    <>
      <PageHero
        eyebrow="About VANTA"
        title="A gym built like a discipline system."
        copy="A premium training floor, a coaching culture, and a visual identity made for people who want the work to feel serious."
        image={images.about}
      />
      <section className="section-padding">
        <div className="container-vanta grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Story"
            title="Born from early mornings and non-negotiable standards."
            copy="VANTA FITNESS started as a simple idea: build a room where training feels cinematic, measurable, and impossible to treat casually. Every detail, from rack spacing to lighting temperature, supports focus."
          />
          <Reveal className="grid gap-5 sm:grid-cols-2">
            <div className="border border-white/10 bg-white/[0.035] p-6">
              <p className="font-display text-5xl text-vanta-lime">01</p>
              <h3 className="mt-4 text-2xl font-black uppercase tracking-[0.08em]">Mission</h3>
              <p className="mt-4 leading-7 text-white/62">Help ambitious people build durable bodies through disciplined training systems.</p>
            </div>
            <div className="border border-white/10 bg-white/[0.035] p-6">
              <p className="font-display text-5xl text-vanta-lime">02</p>
              <h3 className="mt-4 text-2xl font-black uppercase tracking-[0.08em]">Standard</h3>
              <p className="mt-4 leading-7 text-white/62">Premium coaching, clean programming, and a room that rewards consistency.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-padding border-y border-white/10 bg-[#090909]">
        <div className="container-vanta">
          <SectionHeader
            eyebrow="Facilities"
            title="Equipment that earns its floor space."
            copy="Every zone is built around actual training flow: heavy lifts, athletic conditioning, recovery, and transformation tracking."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="image-overlay min-h-[32rem] border border-white/10">
              <img src={images.equipment} alt="Premium gym equipment" className="h-full w-full object-cover grayscale" />
            </Reveal>
            <FacilitiesGrid />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
