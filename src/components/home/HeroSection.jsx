import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  CalendarDays,
  Camera,
  ChevronsRight,
  Dumbbell,
  HeartPulse,
  Play,
  ShieldCheck,
  Timer,
  X,
} from "lucide-react";
import { useRef } from "react";
import heroAthlete from "../../assets/images/vanta-hero-athlete.webp";
import { fadeUp, staggerContainer } from "../../utils/animations";
import Button from "../ui/Button";

function FloatingMetric({ icon: Icon, label, value, className = "", rotate = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, rotate: rotate * 0.55, scale: 1.03 }}
      className={`liquid-glass hidden w-36 rounded-[1.4rem] p-5 text-center shadow-[0_0_36px_rgba(198,255,0,0.12)] md:block ${className}`}
      style={{ rotate }}
    >
      <Icon size={30} className="mx-auto text-vanta-lime" />
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-white/78">{label}</p>
      <p className="mt-2 font-display text-3xl text-vanta-lime">{value}</p>
    </motion.div>
  );
}

function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const athleteY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.3]);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#030303] pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(198,255,0,0.18),transparent_24rem)]" />
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black via-black/86 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-vanta-black via-black/88 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent" />

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-vanta pointer-events-none relative z-20 pt-6 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display mx-auto max-w-7xl text-[clamp(3.05rem,7.35vw,8.3rem)] uppercase leading-[0.9] text-white"
        >
          <span className="block whitespace-nowrap">
            Sculpt <span className="text-vanta-lime">Your</span> Body,
          </span>
          <span className="block whitespace-nowrap">
            Elevate <span className="text-vanta-lime">Your</span> Standard
          </span>
        </motion.h1>
      </motion.div>

      <motion.div
        style={{ y: athleteY }}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-8 z-30 mx-auto h-[98vh] max-h-[1040px] w-[min(96vw,900px)]"
      >
        <img
          src={heroAthlete}
          alt="Focused athlete at VANTA FITNESS"
          className="mx-auto h-full w-full object-contain object-bottom grayscale contrast-125 brightness-85 mix-blend-screen [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]"
        />
      </motion.div>

      <div className="container-vanta relative z-40 flex min-h-[calc(100vh-7rem)] flex-col justify-end pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-5 lg:grid-cols-[0.72fr_1fr_0.72fr] lg:items-end"
        >
          <motion.div variants={fadeUp} className="hidden lg:block">
            <div className="mb-8 flex items-center gap-0">
              {[
                "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=120&q=80",
                "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=120&q=80",
                "https://images.unsplash.com/photo-1609899464726-209befaac5bc?auto=format&fit=crop&w=120&q=80",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="-mr-3 size-12 rounded-full border-2 border-black object-cover grayscale"
                />
              ))}
            </div>
            <p className="font-display text-5xl leading-none text-white">12K+</p>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.24em] text-white/45">Happy clients</p>
          </motion.div>

          <motion.div variants={fadeUp} className="mx-auto mb-8 max-w-xl text-center lg:mb-0">
            <div className="mx-auto mb-5 inline-flex w-fit items-center gap-3 rounded-full border border-white/12 bg-white/7 px-4 py-2 backdrop-blur">
              <ShieldCheck size={17} className="text-vanta-lime" />
              <span className="text-xs font-black uppercase tracking-[0.28em] text-white/76">
                Built Through Discipline.
              </span>
            </div>
            <p className="text-base leading-7 text-white/68 sm:text-lg">
              A premium cinematic training club for stronger bodies, sharper routines, and measurable transformation.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center lg:justify-end">
            <Button to="/membership" icon={false} className="rounded-2xl px-7">
              Let&apos;s Start
              <ChevronsRight size={22} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass mt-8 grid gap-4 rounded-[1.6rem] px-5 py-5 sm:grid-cols-3"
        >
          {[
            [Dumbbell, "Modern Equipment", "Train with the best."],
            [CalendarDays, "Flexible Schedule", "Workout on your time."],
            [HeartPulse, "Expert Guidance", "Achieve your goals faster."],
          ].map(([Icon, title, copy]) => (
            <div key={title} className="flex items-center gap-4 border-white/12 sm:border-r sm:last:border-r-0 sm:pr-5">
              <Icon size={34} className="shrink-0 text-vanta-lime" />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-white">{title}</p>
                <p className="mt-1 text-sm text-white/48">{copy}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute inset-0 z-40"
      >
        <FloatingMetric icon={Timer} label="Workouts" value="1.2K" rotate={-16} className="absolute left-[18%] top-[42%]" />
        <FloatingMetric icon={Dumbbell} label="Trainers" value="50+" rotate={17} className="absolute right-[18%] top-[49%]" />
      </motion.div>

      <div className="absolute left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 text-white/62 lg:flex">
        {[
          { label: "Instagram", icon: Camera },
          { label: "YouTube", icon: Play },
          { label: "X", icon: X },
        ].map(({ label, icon: Icon }) => (
          <a
            key={label}
            href="/"
            aria-label={label}
            className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] transition hover:border-vanta-lime hover:text-vanta-lime"
          >
            <Icon size={16} />
          </a>
        ))}
        <a
          href="/"
          aria-label="Facebook"
          className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-base font-black transition hover:border-vanta-lime hover:text-vanta-lime"
        >
          f
        </a>
      </div>
      <div className="absolute right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-white/60 lg:flex">
        <span>S</span>
        <span>C</span>
        <span>R</span>
        <span>O</span>
        <span>L</span>
        <span>L</span>
        <span className="my-1 h-8 w-0.5 bg-vanta-lime" />
        <ArrowDown size={18} className="text-vanta-lime" />
      </div>
    </section>
  );
}

export default HeroSection;
