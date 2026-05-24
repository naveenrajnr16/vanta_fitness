import PageHero from "../components/sections/PageHero";
import TrainerCards from "../components/sections/TrainerCards";
import SectionHeader from "../components/ui/SectionHeader";
import { images } from "../data/gymData";

function Trainers() {
  return (
    <>
      <PageHero
        eyebrow="Coaches"
        title="Precision coaching. Zero softness."
        copy="Meet the coaches behind the training blocks, body recompositions, and performance resets at VANTA."
        image={images.transformation}
      />
      <section className="section-padding">
        <div className="container-vanta">
          <SectionHeader
            eyebrow="Trainer Team"
            title="Specialists for strength, conditioning, and transformation."
            copy="Every profile brings a distinct training lens, but the same VANTA standard: clarity, pressure, and measurable work."
          />
          <div className="mt-12">
            <TrainerCards />
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
