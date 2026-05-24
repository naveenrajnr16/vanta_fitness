import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

function StatCard({ value, label }) {
  return (
    <motion.div
      variants={fadeUp}
      className="border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition duration-300 hover:border-vanta-lime/70 hover:bg-vanta-lime/[0.06]"
    >
      <p className="font-display text-4xl text-vanta-lime sm:text-5xl">{value}</p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-white/55">{label}</p>
    </motion.div>
  );
}

export default StatCard;
