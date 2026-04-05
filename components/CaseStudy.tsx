"use client";

import { useRef } from "react";
import { useInView } from "./hooks/useInView";

export default function CaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="case-study" ref={ref} className="py-12 px-6">
      <div
        className={`max-w-3xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-xl border border-white/5 bg-bg-card card-glow transition-all duration-200">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-text-muted">
              Another Case Study
            </span>
            <p className="text-text-primary font-semibold mt-1">
              Blue Horizon — Land Investment Platform
            </p>
            <p className="text-text-muted text-sm mt-0.5">
              PM Agent Chain applied to a real estate project.{" "}
              <span className="text-accent-green font-mono font-semibold">
                Grade A (90.7%)
              </span>
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("blue-horizon-detail");
              if (el) {
                const isHidden = el.classList.contains("hidden");
                el.classList.toggle("hidden");
                if (isHidden) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }
            }}
            className="flex-shrink-0 text-accent-blue text-sm font-medium hover:text-text-primary transition-colors"
          >
            View details →
          </button>
        </div>

        {/* Expandable detail */}
        <div id="blue-horizon-detail" className="hidden mt-4 rounded-xl border border-white/5 bg-bg-card p-6 space-y-5">
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-3">Brief vs. Reality</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-mono text-xs text-accent-red uppercase tracking-wider mb-2">Brief Said</p>
                <p className="text-text-secondary mb-1"><span className="text-accent-red">✕</span> &ldquo;26 parcels ready for sale&rdquo;</p>
                <p className="text-text-secondary mb-1"><span className="text-accent-red">✕</span> &ldquo;Conversion marketplace&rdquo;</p>
                <p className="text-text-secondary"><span className="text-accent-red">✕</span> &ldquo;6-8 week professional build&rdquo;</p>
              </div>
              <div>
                <p className="font-mono text-xs text-accent-green uppercase tracking-wider mb-2">Agent Found</p>
                <p className="text-text-secondary mb-1"><span className="text-accent-green">✓</span> 0 parcels owned</p>
                <p className="text-text-secondary mb-1"><span className="text-accent-green">✓</span> Featured Properties for 3-5</p>
                <p className="text-text-secondary"><span className="text-accent-green">✓</span> 2-weekend, $200-535 budget</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4">
            <h4 className="text-text-primary font-semibold text-sm mb-3">Results</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Documents", value: "33" },
                { label: "Words", value: "16,320" },
                { label: "Truths verified", value: "31" },
                { label: "Waves", value: "4" },
                { label: "Checkpoints", value: "6" },
                { label: "Quality", value: "90.7%" },
              ].map((m) => (
                <div key={m.label} className="px-3 py-2 rounded-lg bg-bg-surface border border-white/5 text-center">
                  <p className="font-mono text-sm font-bold text-text-primary">{m.value}</p>
                  <p className="text-text-muted text-[10px]">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
