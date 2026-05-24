import AboutPreview from "../components/home/AboutPreview";
import HeroSection from "../components/home/HeroSection";
import CtaBanner from "../components/sections/CtaBanner";
import MembershipCards from "../components/sections/MembershipCards";
import ScrollingText from "../components/sections/ScrollingText";
import Testimonials from "../components/sections/Testimonials";
import TrainerCards from "../components/sections/TrainerCards";
import TransformationShowcase from "../components/sections/TransformationShowcase";
import SectionHeader from "../components/ui/SectionHeader";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <section className="section-padding">
        <div className="container-vanta">
          <SectionHeader
            eyebrow="Membership"
            title="Choose your pressure level."
            copy="From self-led consistency to elite transformation coaching, every VANTA plan is built for measurable progress."
          />
          <div className="mt-12">
            <MembershipCards compact />
          </div>
        </div>
      </section>
      <TransformationShowcase />
      <section className="section-padding bg-[#080808]">
        <div className="container-vanta">
          <SectionHeader
            eyebrow="Coaches"
            title="Led by people who live the standard."
            copy="Our trainers combine strength science, habit design, and the kind of presence that keeps the session honest."
          />
          <div className="mt-12">
            <TrainerCards />
          </div>
        </div>
      </section>
      <Testimonials />
      <ScrollingText />
      <CtaBanner />
    </>
  );
}

export default Home;
