import { Camera, Mail, MapPin, Phone, PlayCircle } from "lucide-react";
import { navLinks } from "../../data/gymData";
import Button from "../ui/Button";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="container-vanta py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-6xl uppercase leading-none text-white">VANTA FITNESS</p>
            <p className="mt-4 max-w-xl text-white/62">
              Built through discipline. Engineered for strength, transformation, and serious everyday training.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/membership">Start Training</Button>
              <Button to="/contact" variant="secondary">
                Visit Studio
              </Button>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-vanta-lime">Navigation</p>
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <a key={link.path} href={link.path} className="text-sm font-bold uppercase tracking-[0.18em] text-white/60 hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-vanta-lime">Contact</p>
            <div className="space-y-4 text-sm text-white/66">
              <p className="flex items-center gap-3"><MapPin size={18} /> Indiranagar, Bengaluru</p>
              <p className="flex items-center gap-3"><Phone size={18} /> +91 98765 43210</p>
              <p className="flex items-center gap-3"><Mail size={18} /> train@vantafitness.in</p>
            </div>
            <div className="mt-6 flex gap-3">
              {[Camera, PlayCircle].map((Icon, index) => (
                <a
                  key={index}
                  href="/"
                  aria-label="Social profile"
                  className="grid size-11 place-items-center border border-white/10 bg-white/5 text-white/70 transition hover:border-vanta-lime hover:text-vanta-lime"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VANTA FITNESS</p>
          <p>Premium fitness concept website</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
