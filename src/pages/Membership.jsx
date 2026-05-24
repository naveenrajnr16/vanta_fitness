import { CheckCircle2 } from "lucide-react";
import CtaBanner from "../components/sections/CtaBanner";
import MembershipCards from "../components/sections/MembershipCards";
import PageHero from "../components/sections/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { comparisonRows, images } from "../data/gymData";

function Membership() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Pricing for every level of intent."
        copy="Start consistent, train harder, or enter a coached transformation block with the support to make it visible."
        image={images.hero}
      />
      <section className="section-padding">
        <div className="container-vanta">
          <MembershipCards />
        </div>
      </section>
      <section className="section-padding border-y border-white/10 bg-[#090909]">
        <div className="container-vanta">
          <SectionHeader
            eyebrow="Compare"
            title="Find the right training environment."
            copy="Every membership gets the VANTA atmosphere. Higher tiers add structure, feedback, and recovery access."
          />
          <div className="mt-10 overflow-x-auto border border-white/10">
            <table className="w-full min-w-[760px] border-collapse bg-white/[0.03] text-left">
              <thead>
                <tr className="border-b border-white/10 text-xs font-black uppercase tracking-[0.22em] text-vanta-lime">
                  <th className="p-5">Feature</th>
                  <th className="p-5">Basic</th>
                  <th className="p-5">Pro</th>
                  <th className="p-5">Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="border-b border-white/10 last:border-0">
                    {row.map((cell, index) => (
                      <td key={cell} className="p-5 text-sm font-semibold text-white/70">
                        <span className="inline-flex items-center gap-2">
                          {index > 0 && <CheckCircle2 size={16} className="text-vanta-lime" />}
                          {cell}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

export default Membership;
