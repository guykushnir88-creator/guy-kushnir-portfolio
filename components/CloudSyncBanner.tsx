"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView } from "./hooks/useInView";

export default function CloudSyncBanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/case-study"
          className={`block group rounded-2xl border border-white/5 bg-gradient-to-br from-bg-card to-bg-surface p-8 md:p-10 transition-all duration-700 hover:border-accent-blue/30 hover:shadow-blue-glow ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase text-accent-orange">
                Full Case Study
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mt-2 mb-2">
                CloudSync HR Migration — The Brief Was Fiction
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-lg">
                6 AI agents analyzed an $850K enterprise project in 91 minutes and uncovered a $700K budget gap, 22 risks, and an emergent governance pattern no PM would catch alone.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="font-mono text-xs text-accent-blue bg-accent-blue/10 px-2.5 py-1 rounded">91 min</span>
                <span className="font-mono text-xs text-accent-green bg-accent-green/10 px-2.5 py-1 rounded">45 docs</span>
                <span className="font-mono text-xs text-accent-orange bg-accent-orange/10 px-2.5 py-1 rounded">39 KB entries</span>
                <span className="font-mono text-xs text-accent-red bg-accent-red/10 px-2.5 py-1 rounded">8/10 FAIL</span>
              </div>
            </div>
            <div className="flex-shrink-0 text-accent-blue group-hover:translate-x-1 transition-transform duration-200">
              <span className="text-sm font-medium whitespace-nowrap">
                See full analysis →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
