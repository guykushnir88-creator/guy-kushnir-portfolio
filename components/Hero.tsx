"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "AI Agents", value: 6, suffix: "" },
  { label: "Files", value: 83, suffix: "" },
  { label: "Quality Grade", value: "A", suffix: "", isText: true },
  { label: "Schema Version", value: "1.3.0", suffix: "", isText: true },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({
  stat,
  animate,
}: {
  stat: (typeof stats)[0];
  animate: boolean;
}) {
  const count = useCountUp(
    typeof stat.value === "number" ? stat.value : 0,
    2000,
    animate && !stat.isText
  );
  const display = stat.isText
    ? stat.value
    : animate
    ? `${count}${stat.suffix}`
    : `0${stat.suffix}`;

  return (
    <div className="flex flex-col items-center gap-1 px-4 md:px-6">
      <span className="font-mono text-2xl md:text-3xl font-semibold text-text-primary">
        {display}
      </span>
      <span className="text-text-muted text-xs md:text-sm text-center">
        {stat.label}
      </span>
    </div>
  );
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#2E8BC0 1px, transparent 1px), linear-gradient(90deg, #2E8BC0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent-blue/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/5">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="font-mono text-xs text-accent-blue tracking-wider">
            Available for new projects
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-4 tracking-tight">
          Guy Kushnir
        </h1>

        {/* Title */}
        <p className="font-mono text-accent-blue text-lg md:text-xl mb-6 tracking-wide">
          Senior Project Manager{" "}
          <span className="text-text-muted">|</span>{" "}
          AI Builder
        </p>

        {/* Description */}
        <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          15+ years leading enterprise projects across FinTech, InsurTech, and
          Cybersecurity.
          <br className="hidden md:block" />
          Now building AI systems that automate what PMs do manually.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const el = document.querySelector("#pm-agent-chain");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-blue/90 transition-all duration-200 hover:shadow-blue-glow"
          >
            View PM Agent Chain ↓
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 border border-accent-blue/40 text-accent-blue font-medium rounded-lg hover:bg-accent-blue/10 transition-all duration-200"
          >
            Get in Touch →
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div
        ref={statsRef}
        className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-bg-card/50 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} animate={statsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
