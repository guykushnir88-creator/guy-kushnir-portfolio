"use client";

import { useRef } from "react";
import { useInView } from "./hooks/useInView";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <div
        className={`max-w-3xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="font-mono text-accent-blue text-sm tracking-widest uppercase">
          About
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-2 mb-4">
          Guy Kushnir
        </h2>
        <p className="text-text-secondary leading-relaxed">
          15+ years leading enterprise projects for Lloyd&apos;s of London, HISCOX,
          Progressive, USAA, BNP Paribas, UBS, and Santander. B.Sc. Computer
          Science &amp; Mathematics. Based in Israel.
        </p>
      </div>
    </section>
  );
}
