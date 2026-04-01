"use client";

import { useRef } from "react";
import { useInView } from "./hooks/useInView";

const traction = [
  { value: "21,894", label: "impressions in 3 days" },
  { value: "154", label: "reactions" },
  { value: "56.5%", label: "decision-maker audience" },
  { value: "1,897", label: "LinkedIn followers" },
  { value: "17", label: "active pipeline leads" },
];

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section
      id="social-proof"
      ref={ref}
      className="py-16 px-6"
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-6">
          <span className="font-mono text-accent-blue text-sm tracking-widest uppercase">
            Early Traction
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {traction.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-accent-blue/20 bg-accent-blue/5"
            >
              <span className="font-mono text-sm font-bold text-text-primary">
                {item.value}
              </span>
              <span className="text-text-muted text-xs">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="text-text-muted text-sm text-center mt-5 italic">
          Launched March 29, 2026. The PM community responded.
        </p>
      </div>
    </section>
  );
}
