"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "./hooks/useInView";

const briefVsReality = [
  {
    brief: '"26 parcels ready for sale"',
    found: "0 parcels owned",
  },
  {
    brief: '"Conversion marketplace"',
    found: "Featured Properties for 3–5",
  },
  {
    brief: '"6–8 week professional build"',
    found: "2-weekend, $200–535 budget",
  },
];

const metrics = [
  { label: "Documents produced", value: 25, suffix: "" },
  { label: "Words with evidence", value: 16320, suffix: "" },
  { label: "Truths verified", value: 31, suffix: "" },
  { label: "Waves", value: 4, suffix: "", subtext: "15 tasks" },
  { label: "Checkpoints", value: 6, suffix: "" },
  { label: "Quality grade", value: 90.7, suffix: "%", isFloat: true },
];

const scorecard = [
  { label: "Functionality", score: 95, color: "#2E8BC0" },
  { label: "Performance", score: 88, color: "#27AE60" },
  { label: "Security", score: 90, color: "#E67E22" },
  { label: "Usability", score: 85, color: "#8E44AD" },
  { label: "Reliability", score: 92, color: "#1D9E75" },
];

function AnimatedNumber({
  target,
  isFloat,
  animate,
}: {
  target: number;
  isFloat?: boolean;
  animate: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const duration = 1800;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(isFloat ? parseFloat((p * target).toFixed(1)) : Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, isFloat, animate]);

  return <>{isFloat ? val.toFixed(1) : val.toLocaleString()}</>;
}

function AnimatedBar({
  score,
  color,
  animate,
}: {
  score: number;
  color: string;
  animate: boolean;
}) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const timer = setTimeout(() => setWidth(score), 100);
    return () => clearTimeout(timer);
  }, [score, animate]);

  return (
    <div className="h-2 bg-bg-surface rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%`, backgroundColor: color }}
      />
    </div>
  );
}

export default function CaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section id="case-study" ref={ref} className="py-24 px-6 bg-bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-accent-blue text-sm tracking-widest uppercase">
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-3">
            Blue Horizon
          </h2>
          <p className="text-text-secondary">
            PM Agent Chain applied to a real estate platform project
          </p>
        </div>

        {/* Brief vs Reality */}
        <div
          className={`mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg font-semibold text-text-primary mb-5">
            Brief vs. Reality
          </h3>
          <div className="rounded-xl border border-white/5 bg-bg-card overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-white/5">
              <div className="px-5 py-3 bg-bg-surface">
                <p className="font-mono text-xs text-accent-red uppercase tracking-wider">
                  ✗ Brief Said
                </p>
              </div>
              <div className="px-5 py-3 bg-bg-surface">
                <p className="font-mono text-xs text-accent-green uppercase tracking-wider">
                  ✓ Agent 1 Found
                </p>
              </div>
            </div>
            {briefVsReality.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 divide-x divide-white/5 border-t border-white/5"
              >
                <div className="px-5 py-4">
                  <p className="text-accent-red/80 text-sm font-mono">
                    {row.brief}
                  </p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-accent-green text-sm font-semibold">
                    {row.found}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-xs mt-3 text-center italic">
            &quot;The agent asked the right questions before a single task was planned.&quot;
          </p>
        </div>

        {/* Metric cards */}
        <div
          className={`mb-14 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg font-semibold text-text-primary mb-5">
            Results
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="p-5 rounded-xl border border-white/5 bg-bg-card text-center card-glow transition-all duration-200"
              >
                <p className="text-3xl font-bold text-text-primary font-mono">
                  <AnimatedNumber
                    target={m.value}
                    isFloat={m.isFloat}
                    animate={inView}
                  />
                  {m.suffix}
                </p>
                <p className="text-text-muted text-xs mt-1">{m.label}</p>
                {m.subtext && (
                  <p className="text-accent-blue text-xs font-mono mt-0.5">
                    {m.subtext}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quality scorecard */}
        <div
          className={`transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg font-semibold text-text-primary mb-5">
            Quality Scorecard
          </h3>
          <div className="rounded-xl border border-white/5 bg-bg-card p-6 space-y-5">
            {scorecard.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-secondary text-sm">{s.label}</span>
                  <span
                    className="font-mono text-sm font-semibold"
                    style={{ color: s.color }}
                  >
                    {s.score}%
                  </span>
                </div>
                <AnimatedBar score={s.score} color={s.color} animate={inView} />
              </div>
            ))}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-text-muted text-sm">Overall Grade</span>
              <span className="font-mono text-xl font-bold text-accent-green">
                A (90.7%)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
