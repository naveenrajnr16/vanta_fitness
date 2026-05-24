import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/gymData";
import { useScrollLock } from "../../hooks/useScrollLock";
import Button from "../ui/Button";

function Navbar() {
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="container-vanta liquid-glass flex h-[4.5rem] items-center justify-between rounded-[1.6rem] px-4 sm:px-5">
        <NavLink to="/" onClick={closeMenu} className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl border border-vanta-lime bg-vanta-lime text-sm font-black text-vanta-black lime-glow">
            VF
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl uppercase tracking-normal text-white">VANTA</span>
            <span className="block text-[0.58rem] font-black uppercase tracking-[0.42em] text-vanta-lime">
              Fitness
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-black uppercase tracking-[0.22em] transition hover:text-vanta-lime ${
                  isActive ? "text-vanta-lime" : "text-white/62"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button to="/membership" className="min-h-11 rounded-2xl px-5 py-2 text-[0.68rem]">
            Join Now
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white transition hover:border-vanta-lime hover:text-vanta-lime lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-24 z-40 liquid-glass rounded-[1.4rem] p-3 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-2xl border border-white/10 px-4 py-4 text-lg font-black uppercase tracking-[0.16em] transition ${
                      isActive
                        ? "border-vanta-lime bg-vanta-lime text-vanta-black"
                        : "bg-white/[0.03] text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
