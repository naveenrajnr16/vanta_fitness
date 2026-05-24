import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

function SectionHeader({ eyebrow, title, copy, align = "left", className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-vanta-lime">{eyebrow}</p>
      )}
      <h2 className="font-display text-5xl uppercase leading-[0.94] text-white text-balance sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {copy && <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">{copy}</p>}
    </motion.div>
  );
}

export default SectionHeader;
