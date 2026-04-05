"use client";

import { useRef } from "react";
import { useInView } from "./hooks/useInView";

export default function SocialProofStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={`py-6 px-6 border-y border-white/5 bg-bg-card/50 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm text-text-muted leading-relaxed">
          <span className="text-text-primary font-semibold">35,500+</span> LinkedIn impressions
          <span className="mx-2 text-white/20">·</span>
          <span className="text-text-primary font-semibold">29</span> active leads
          <span className="mx-2 text-white/20">·</span>
          <span className="text-text-primary font-semibold">92%</span> PMBOK coverage
          <span className="mx-2 text-white/20">·</span>
          Used by PMO leaders across <span className="text-text-secondary">FinTech, Defense, and Enterprise IT</span>
        </p>
      </div>
    </section>
  );
}
