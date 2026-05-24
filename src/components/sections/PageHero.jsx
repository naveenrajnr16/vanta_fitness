import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";

function PageHero({ eyebrow, title, copy, image }) {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 image-overlay">
        <img src={image} alt="" className="h-full w-full object-cover grayscale" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_30%,rgba(198,255,0,0.2),transparent_22rem)]" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-vanta relative z-10 flex min-h-[62vh] flex-col justify-end pb-16 pt-24"
      >
        <motion.p variants={fadeUp} className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-vanta-lime">
          {eyebrow}
        </motion.p>
        <motion.h1 variants={fadeUp} className="font-display max-w-5xl text-6xl uppercase leading-[0.88] text-white sm:text-8xl lg:text-9xl">
          {title}
        </motion.h1>
        {copy && (
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            {copy}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

export default PageHero;
