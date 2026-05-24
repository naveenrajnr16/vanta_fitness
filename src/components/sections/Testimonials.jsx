import { Quote } from "lucide-react";
import { testimonials } from "../../data/gymData";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

function Testimonials() {
  return (
    <section className="section-padding border-y border-white/10 bg-[#090909]">
      <div className="container-vanta">
        <SectionHeader
          eyebrow="Members"
          title="The room changes how people move."
          copy="VANTA is designed for people who want the gym to feel like a standard, not a casual option."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.article key={item.author} variants={fadeUp} className="border border-white/10 bg-white/[0.035] p-6">
              <Quote className="text-vanta-lime" size={34} />
              <p className="mt-7 text-xl font-semibold leading-8 text-white/86">“{item.quote}”</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-black uppercase tracking-[0.16em] text-white">{item.author}</p>
                <p className="mt-2 text-sm text-white/45">{item.label}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
