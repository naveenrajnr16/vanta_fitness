import { motion } from "framer-motion";
import { images } from "../../data/gymData";
import { fadeUp, staggerContainer } from "../../utils/animations";
import SectionHeader from "../ui/SectionHeader";

function TransformationShowcase() {
  return (
    <section className="section-padding bg-vanta-black">
      <div className="container-vanta">
        <SectionHeader
          eyebrow="Transformation"
          title="Built in blocks. Proved in numbers."
          copy="No fantasy promises. Every program is structured around progressive overload, recovery rhythms, nutrition compliance, and visible checkpoints."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="image-overlay min-h-[34rem] border border-white/10"
          >
            <img src={images.transformation} alt="Athlete lifting weights" className="h-full w-full object-cover grayscale" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5"
          >
            {[
              ["01", "Assessment", "Movement, strength, body composition, schedule, and training history."],
              ["02", "Protocol", "A focused training block with nutrition targets and recovery commitments."],
              ["03", "Pressure", "Weekly tracking, coaching adjustments, and a room that keeps standards high."],
            ].map(([step, title, copy]) => (
              <motion.article key={step} variants={fadeUp} className="border border-white/10 bg-white/[0.035] p-6">
                <p className="font-display text-5xl text-vanta-lime">{step}</p>
                <h3 className="mt-4 text-2xl font-black uppercase tracking-[0.08em] text-white">{title}</h3>
                <p className="mt-3 leading-7 text-white/62">{copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TransformationShowcase;
