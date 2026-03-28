"use client";

import { useRef } from "react";
import { useInView } from "./hooks/useInView";

const facts = [
  {
    icon: "🏢",
    label: "Companies",
    value: "Novidea · Acronis · bolttech · Personatics",
  },
  {
    icon: "🌍",
    label: "Regions",
    value: "Israel · US · EMEA — distributed teams",
  },
  {
    icon: "📊",
    label: "Tools",
    value: "Jira · Confluence · Salesforce · Tableau · AWS · Azure",
  },
  {
    icon: "🎓",
    label: "Education",
    value: "B.Sc. Computer Science & Mathematics",
  },
  {
    icon: "🎖️",
    label: "Military",
    value: "IDF — Head of Radar & Anti-Aircraft Control",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="mb-12">
          <span className="font-mono text-accent-blue text-sm tracking-widest uppercase">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
            I&apos;m a project manager who builds AI systems.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Bio */}
          <div
            className={`transition-all duration-700 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                For the past 15 years, I&apos;ve led complex enterprise
                projects for companies like Lloyd&apos;s of London, HISCOX,
                Progressive, USAA, BNP Paribas, UBS, and Santander. I&apos;ve
                built PMOs from scratch, cut meeting time by 50% with automated
                dashboards, and scaled products across all 50 U.S. states.
              </p>
              <p>
                Living in Even Yehuda, Israel, father of two. B.Sc. in Computer
                Science &amp; Mathematics.
              </p>
              <p>
                My latest project —{" "}
                <span className="text-accent-blue font-medium">
                  PM Agent Chain
                </span>{" "}
                — is where everything converges: PM methodology, AI automation,
                and systems thinking. 6 autonomous agents running the full PMI
                lifecycle, with evidence-based handoffs and quality gates.
              </p>
            </div>

            {/* Highlight strip */}
            <div className="mt-8 p-4 rounded-lg border border-accent-blue/20 bg-accent-blue/5">
              <p className="font-mono text-sm text-accent-blue">
                // Latest: PM Agent Chain
              </p>
              <p className="text-text-secondary text-sm mt-1">
                6 agents · Claude AI + MCP Protocol · Grade A (90.7%)
              </p>
            </div>
          </div>

          {/* Right — Facts */}
          <div
            className={`space-y-3 transition-all duration-700 delay-200 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex gap-4 p-4 rounded-lg bg-bg-card border border-white/5 card-glow transition-all duration-200"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">
                  {fact.icon}
                </span>
                <div>
                  <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-1">
                    {fact.label}
                  </p>
                  <p className="text-text-secondary text-sm">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
