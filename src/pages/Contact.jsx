import { Camera, Clock, Mail, MapPin, MessageCircle, Phone, PlayCircle } from "lucide-react";
import Button from "../components/ui/Button";
import PageHero from "../components/sections/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { images } from "../data/gymData";

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Enter the room. Start the block."
        copy="Book a tour, ask about memberships, or message the team for a transformation consultation."
        image={images.cta}
      />
      <section className="section-padding">
        <div className="container-vanta grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="border border-white/10 bg-white/[0.035] p-5 sm:p-8">
            <SectionHeader eyebrow="Book A Tour" title="Tell us what you are building." />
            <form className="mt-8 grid gap-4">
              {["Full Name", "Email Address", "Phone Number"].map((label) => (
                <label key={label} className="grid gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/48">
                  {label}
                  <input
                    type={label.includes("Email") ? "email" : "text"}
                    className="min-h-13 border border-white/10 bg-vanta-black px-4 text-base font-semibold text-white outline-none transition focus:border-vanta-lime"
                  />
                </label>
              ))}
              <label className="grid gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/48">
                Goal
                <textarea
                  rows="5"
                  className="resize-none border border-white/10 bg-vanta-black px-4 py-3 text-base font-semibold text-white outline-none transition focus:border-vanta-lime"
                />
              </label>
              <Button type="submit" className="mt-2 w-full">
                Send Request
              </Button>
            </form>
          </Reveal>

          <div className="grid gap-5">
            <Reveal className="border border-white/10 bg-white/[0.035] p-6">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-vanta-lime">Studio Details</p>
              <div className="space-y-5 text-white/70">
                <p className="flex gap-3"><MapPin className="shrink-0 text-vanta-lime" /> 18 VANTA House, 12th Main, Indiranagar, Bengaluru</p>
                <p className="flex gap-3"><Phone className="shrink-0 text-vanta-lime" /> +91 98765 43210</p>
                <p className="flex gap-3"><Mail className="shrink-0 text-vanta-lime" /> train@vantafitness.in</p>
                <p className="flex gap-3"><Clock className="shrink-0 text-vanta-lime" /> Mon-Sat 5:00 AM-11:00 PM / Sun 7:00 AM-5:00 PM</p>
              </div>
              <Button href="https://wa.me/919876543210" variant="secondary" className="mt-7 w-full">
                <MessageCircle size={18} />
                WhatsApp Team
              </Button>
            </Reveal>

            <Reveal className="min-h-72 border border-white/10 bg-[linear-gradient(135deg,#141414,#050505)] p-6">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-vanta-lime">Map Placeholder</p>
              <div className="mt-8 grid h-40 place-items-center border border-dashed border-white/18 text-center">
                <p className="max-w-xs text-sm font-bold uppercase tracking-[0.2em] text-white/45">
                  Google Maps embed placeholder for VANTA FITNESS Bengaluru
                </p>
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
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
