import { images } from "../../data/gymData";
import Button from "../ui/Button";

function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 image-overlay">
        <img src={images.cta} alt="Focused athlete training" className="h-full w-full object-cover grayscale" />
      </div>
      <div className="container-vanta relative z-10 py-24 sm:py-32">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-vanta-lime">Your next block starts now</p>
          <h2 className="font-display text-6xl uppercase leading-[0.9] text-white sm:text-8xl">
            Stop waiting for motivation.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Build the routine, enter the room, and let disciplined pressure do its work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/membership">Pick Your Plan</Button>
            <Button to="/contact" variant="secondary">Book A Tour</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
