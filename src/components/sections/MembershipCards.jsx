import { Check } from "lucide-react";
import { memberships } from "../../data/gymData";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { motion } from "framer-motion";
import Button from "../ui/Button";

function MembershipCards({ compact = false }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-5 lg:grid-cols-3 lg:items-stretch"
    >
      {memberships.map((plan) => (
        <motion.article
          key={plan.name}
          variants={fadeUp}
          whileHover={{ y: -8 }}
          className={`liquid-glass relative flex min-h-[30rem] flex-col overflow-hidden rounded-[1.6rem] p-6 transition duration-300 sm:p-7 ${
            plan.highlighted
              ? "border-vanta-lime/80 bg-vanta-lime/[0.1] shadow-[0_0_58px_rgba(198,255,0,0.2)]"
              : "border-white/14 bg-white/[0.035]"
          }`}
        >
          {plan.highlighted && (
            <div className="mb-7 rounded-full bg-vanta-lime px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.24em] text-vanta-black shadow-[0_0_24px_rgba(198,255,0,0.35)]">
              Most Chosen
            </div>
          )}
          <p className={`text-sm font-black uppercase tracking-[0.28em] text-vanta-lime ${plan.highlighted ? "" : "mb-7"}`}>
            {plan.name}
          </p>
          <div className="flex items-end gap-2">
            <p className="font-display text-6xl leading-none text-white sm:text-7xl">{plan.price}</p>
            <p className="pb-2 text-xs font-black uppercase tracking-[0.22em] text-white/45">/ month</p>
          </div>
          <p className="mt-6 min-h-16 text-base leading-7 text-white/62">{plan.description}</p>
          <div className="mt-8 flex-1 space-y-4">
            {plan.features.map((feature) => (
              <p key={feature} className="flex items-start gap-4 text-base font-semibold leading-6 text-white/70">
                <Check size={18} className="mt-0.5 shrink-0 text-vanta-lime" />
                {feature}
              </p>
            ))}
          </div>
          {!compact && (
            <Button to="/contact" variant={plan.highlighted ? "primary" : "secondary"} className="mt-8 w-full rounded-2xl">
              Choose {plan.name}
            </Button>
          )}
        </motion.article>
      ))}
    </motion.div>
  );
}

export default MembershipCards;
