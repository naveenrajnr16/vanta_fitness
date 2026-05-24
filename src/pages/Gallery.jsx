import { motion } from "framer-motion";
import PageHero from "../components/sections/PageHero";
import { galleryImages, images } from "../data/gymData";
import { fadeUp, staggerContainer } from "../utils/animations";

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Dark rooms. Bright intent."
        copy="A cinematic look at the VANTA training floor, strength zones, coaching atmosphere, and transformation energy."
        image={images.equipment}
      />
      <section className="section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="container-vanta columns-1 gap-5 sm:columns-2 lg:columns-3"
        >
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image}
              variants={fadeUp}
              className="group mb-5 break-inside-avoid overflow-hidden border border-white/10 bg-white/[0.035]"
            >
              <img
                src={image}
                alt={`VANTA FITNESS gallery ${index + 1}`}
                className={`w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 ${
                  index % 3 === 0 ? "h-[31rem]" : index % 2 === 0 ? "h-[24rem]" : "h-[18rem]"
                }`}
              />
              <figcaption className="flex items-center justify-between p-4 text-xs font-black uppercase tracking-[0.22em] text-white/45">
                <span>VANTA / {String(index + 1).padStart(2, "0")}</span>
                <span className="text-vanta-lime">Cinematic</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default Gallery;
