"use client";

import { useRef } from "react";
import { useInView } from "./hooks/useInView";

export default function ComboDBanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section ref={ref} className="pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <a
          href="https://combo-d-dashboard.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={`block group rounded-2xl border border-white/5 bg-gradient-to-br from-bg-card to-bg-surface p-8 md:p-10 transition-all duration-700 hover:border-accent-green/30 hover:shadow-green-glow ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase text-accent-green">
                Dogfooding Case Study
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mt-2 mb-2">
                Combo D Dashboard — The Chain Analyzed Itself
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-lg">
                The PM Agent Chain managed the build of its own dashboard. Agent 2 estimated 55 hours. Delivered in 25 minutes. The chain caught its own estimation bias and created a new pattern: estimation-paradigm-mismatch.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="font-mono text-xs text-accent-blue bg-accent-blue/10 px-2.5 py-1 rounded">48 min</span>
                <span className="font-mono text-xs text-accent-green bg-accent-green/10 px-2.5 py-1 rounded">54 docs</span>
                <span className="font-mono text-xs text-accent-orange bg-accent-orange/10 px-2.5 py-1 rounded">35 KB entries</span>
                <span className="font-mono text-xs text-accent-blue bg-accent-blue/10 px-2.5 py-1 rounded">Grade B (89.5%)</span>
              </div>
            </div>
            <div className="flex-shrink-0 text-accent-green group-hover:translate-x-1 transition-transform duration-200">
              <span className="text-sm font-medium whitespace-nowrap">
                See live dashboard →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
