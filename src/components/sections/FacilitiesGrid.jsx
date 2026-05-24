import { motion } from "framer-motion";
import { facilities } from "../../data/gymData";
import { fadeUp, staggerContainer } from "../../utils/animations";

function FacilitiesGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-5 md:grid-cols-2"
    >
      {facilities.map(({ title, copy, icon: Icon }) => (
        <motion.article key={title} variants={fadeUp} className="border border-white/10 bg-white/[0.035] p-6 transition hover:border-vanta-lime/60 hover:bg-vanta-lime/[0.05]">
          <Icon size={34} className="text-vanta-lime" />
          <h3 className="mt-6 text-2xl font-black uppercase tracking-[0.08em] text-white">{title}</h3>
          <p className="mt-4 leading-7 text-white/62">{copy}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}

export default FacilitiesGrid;
