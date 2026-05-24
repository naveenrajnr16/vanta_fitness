import { motion } from "framer-motion";
import { trainers } from "../../data/gymData";
import { fadeUp, staggerContainer } from "../../utils/animations";

function TrainerCards() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-5 md:grid-cols-3"
    >
      {trainers.map((trainer) => (
        <motion.article
          key={trainer.name}
          variants={fadeUp}
          whileHover={{ y: -8 }}
          className="group overflow-hidden border border-white/10 bg-white/[0.035]"
        >
          <div className="h-96 overflow-hidden">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
          <div className="p-5">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-vanta-lime">{trainer.role}</p>
            <h3 className="mt-3 font-display text-4xl uppercase text-white">{trainer.name}</h3>
            <p className="mt-3 min-h-16 leading-7 text-white/62">{trainer.specialty}</p>
            <p className="mt-5 border-t border-white/10 pt-4 text-xs font-black uppercase tracking-[0.22em] text-white/48">
              {trainer.stats}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

export default TrainerCards;
