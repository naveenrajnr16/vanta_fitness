import { motion } from "framer-motion";
import { images, values } from "../../data/gymData";
import { fadeUp, staggerContainer } from "../../utils/animations";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

function AboutPreview() {
  return (
    <section className="section-padding border-y border-white/10 bg-[#090909]">
      <div className="container-vanta grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(16% 0 16% 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="image-overlay h-[32rem] border border-white/10"
          >
            <img src={images.about} alt="VANTA training floor" className="h-full w-full object-cover grayscale" />
          </motion.div>
          <div className="absolute -bottom-6 right-4 border border-vanta-lime bg-vanta-lime px-5 py-4 text-vanta-black lime-glow sm:right-8">
            <p className="font-display text-4xl leading-none">05:00</p>
            <p className="text-xs font-black uppercase tracking-[0.22em]">Doors Open</p>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="The Method"
            title="A harder room for a sharper version of you."
            copy="VANTA blends serious coaching, brutal programming, premium equipment, and the kind of visual intensity that makes every session feel consequential."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {values.map(({ title, icon: Icon }) => (
              <motion.div key={title} variants={fadeUp} className="flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4">
                <Icon size={19} className="text-vanta-lime" />
                <span className="text-sm font-black uppercase tracking-[0.16em] text-white/82">{title}</span>
              </motion.div>
            ))}
          </motion.div>
          <Button to="/about" variant="secondary" className="mt-8">
            Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
