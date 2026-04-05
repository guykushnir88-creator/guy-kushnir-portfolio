"use client";

import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useInViewSimple(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewSimple(ref);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const timelineItems = [
  {
    agent: "Agent 1 — Initiation",
    time: "11 min",
    gate: "PASS WITH CONDITIONS",
    gateClass: "bg-accent-green/20 text-accent-green",
    dotClass: "bg-accent-blue",
    desc: "Produced 8 documents. Extracted 30 requirements from a 9-item brief. Verified 15 claims — budget, timeline, and vendor all flagged. Identified 15 risks where the brief claimed none. Complexity scored 40/50 against the team's \"standard\" self-assessment.",
  },
  {
    agent: "Agent 2 — Planning",
    time: "22 min",
    gate: "PASS WITH CONDITIONS",
    gateClass: "bg-accent-green/20 text-accent-green",
    dotClass: "bg-accent-blue",
    desc: "Built a 52-task WBS with 100% requirements traceability. Bottom-up budget: $1.55M — exposing a $700K gap. Created dual schedules (compressed at 25% confidence, phased at 55%). Identified 22 risks with response plans. 8-wave execution plan across 12 sprints.",
  },
  {
    agent: "Agent 3 — Execution",
    time: "22 min",
    gate: "PARTIAL",
    gateClass: "bg-accent-orange/20 text-accent-orange",
    dotClass: "bg-accent-orange",
    desc: 'Created sprint-ready task board and ceremony framework. Logged 4 change requests and 11 blockers before execution even started. Discovered the most important pattern: "decision debt accumulating" — the same blocking decisions flagged by every agent without resolution.',
  },
  {
    agent: "Agent 4 — Monitoring",
    time: "19 min",
    gate: "NO-GO: 8/10 FAIL",
    gateClass: "bg-accent-red/20 text-accent-red",
    dotClass: "bg-accent-red",
    desc: "Three-tier reporting established. EVM baselines with dual scenarios. Go/No-Go gate review: 8 of 10 criteria FAIL. Go-live confidence at full scope: 25%. Zero risks closed after 4 phases. The monitoring framework was ready — but there was nothing to monitor.",
  },
  {
    agent: "Agent 5 — Validation",
    time: "17 min",
    gate: "FAIL — Grade F (62.9%)",
    gateClass: "bg-accent-red/20 text-accent-red",
    dotClass: "bg-accent-red",
    desc: "Quality scorecard across 5 dimensions. 30 requirements tested: only 4 passed outright, 17 conditional, 5 failed, 4 deferred. 10 defects logged — all 4 critical defects were governance gaps, not technical failures. Goal-backward verification: 3 of 8 truths FAILED.",
  },
  {
    agent: "Agent 6 — Closing",
    time: "16 min",
    gate: "ANALYSIS CLOSURE",
    gateClass: "bg-white/10 text-text-secondary",
    dotClass: "bg-text-muted",
    desc: "Lessons learned register with 5-Whys root cause analysis. Chain performance report. Executive summary with 4 required actions. Prevention playbook: 36 reusable rules. Portable JSON knowledge base for institutional learning across future projects.",
  },
];

const verdicts = [
  { agent: "Agent 1", phase: "Initiation", verdict: '"Proceed with 7 conditions"' },
  { agent: "Agent 2", phase: "Planning", verdict: '"Schedule not achievable within budget"' },
  { agent: "Agent 3", phase: "Execution", verdict: '"Decision debt accumulating"' },
  { agent: "Agent 4", phase: "Monitoring", verdict: '"NO-GO: 8/10 gate criteria FAIL"' },
  { agent: "Agent 5", phase: "Validation", verdict: '"FAIL: Grade F. Governance-execution gap is total."' },
  { agent: "Agent 6", phase: "Closing", verdict: '"This project needs 4 decisions, not more analysis."' },
];

const clusters = [
  { count: 8, name: "Decision / Governance", trend: "DOMINANT", trendClass: "bg-accent-red/20 text-accent-red" },
  { count: 7, name: "Inadequate Preparation", trend: "STABLE", trendClass: "bg-white/5 text-text-muted" },
  { count: 5, name: "Stakeholder / Org", trend: "STABLE", trendClass: "bg-white/5 text-text-muted" },
  { count: 5, name: "Vendor / Technical", trend: "GROWING", trendClass: "bg-accent-orange/20 text-accent-orange" },
  { count: 4, name: "Budget / Resource", trend: "STABLE", trendClass: "bg-white/5 text-text-muted" },
  { count: 4, name: "Optimism / Self-Assessment", trend: "STABLE", trendClass: "bg-white/5 text-text-muted" },
  { count: 3, name: "Timeline / Schedule", trend: "STABLE", trendClass: "bg-white/5 text-text-muted" },
];

export default function CloudSyncCaseStudy() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden bg-bg-primary pt-28 pb-20 px-6">
          <div className="absolute -top-1/2 -right-1/5 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(46,139,192,0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-[840px] mx-auto relative">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-blue mb-5 animate-fade-up">
              Case Study — Integration Test
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              6 AI agents analyzed a project in 91&nbsp;minutes.{" "}
              <span className="text-accent-orange">The brief was fiction.</span>
            </h1>
            <p className="text-lg text-text-secondary/70 max-w-[600px] leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              How the PM Agent Chain discovered a $700K budget gap, 15 hidden risks, and an emergent governance pattern that no individual PM would have caught — before a single dollar was spent.
            </p>
          </div>
        </section>

        {/* ═══ METRICS BAR ═══ */}
        <div className="bg-bg-card border-t border-white/5 py-10 px-6">
          <div className="max-w-[960px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: "91", unit: "min", label: "Total run time" },
              { num: "45", unit: "docs", label: "Word documents produced" },
              { num: "39", unit: "", label: "Knowledge base entries" },
              { num: "~90K", unit: "", label: "Words of analysis" },
            ].map((m, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <p className="text-4xl font-bold text-text-primary font-mono leading-none">
                  {m.num}
                  {m.unit && <span className="text-accent-blue text-xl ml-1">{m.unit}</span>}
                </p>
                <p className="text-xs text-text-muted mt-2 tracking-wide">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ THE CHALLENGE ═══ */}
        <section className="py-20 px-6">
          <FadeIn>
            <div className="max-w-[840px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">The challenge</h2>
              <p className="text-lg text-text-secondary mb-8">
                CloudSync Inc. — a 2,200-employee company across New York, London, Singapore, and São Paulo — needed to migrate from PeopleSoft to a cloud HR platform by September 30, 2026.
              </p>
              <p className="text-text-secondary mb-4">
                The CFO submitted a project brief with an approved budget of $850,000 and a 5-month timeline. The team self-assessed the migration as &ldquo;standard&rdquo; with &ldquo;no major risks identified.&rdquo; Four stakeholders were named. The brief fit on two pages.
              </p>
              <p className="text-text-secondary mb-10">
                We ran it through the PM Agent Chain — six sequential AI agents that follow the full PMI/PMBOK project lifecycle from initiation to closure.
              </p>

              {/* Compare cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-8 bg-accent-red/5 border border-accent-red/20">
                  <p className="font-mono text-xs tracking-wider uppercase text-accent-red font-bold mb-4">
                    What the brief said
                  </p>
                  {[
                    '"Standard migration"',
                    '"$850K budget"',
                    '"No major risks"',
                    '"Team is ready"',
                    "4 stakeholders",
                    "9 requirements",
                  ].map((item, i) => (
                    <div key={i} className="flex items-baseline gap-2.5 mb-3 text-sm text-text-secondary">
                      <span className="text-accent-red text-xs flex-shrink-0">✕</span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-8 bg-accent-green/5 border border-accent-green/20">
                  <p className="font-mono text-xs tracking-wider uppercase text-accent-green font-bold mb-4">
                    What the chain found
                  </p>
                  {[
                    "Complexity: 40/50 (HIGH)",
                    "Actual cost: $1.55M (45% short)",
                    "22 risks identified",
                    "Zero Workday experience on team",
                    "15 stakeholders mapped",
                    "30 requirements extracted",
                  ].map((item, i) => (
                    <div key={i} className="flex items-baseline gap-2.5 mb-3 text-sm text-text-secondary">
                      <span className="text-accent-green text-xs flex-shrink-0">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ═══ AGENT TIMELINE ═══ */}
        <section className="py-20 px-6 bg-bg-surface/30">
          <div className="max-w-[1060px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">What each agent found</h2>
              <p className="text-lg text-text-secondary mb-10">
                Six agents ran sequentially. Each consumed the previous agent&apos;s output and added to a shared knowledge base. The analysis got deeper with every phase.
              </p>
            </FadeIn>

            <div className="relative ml-6 md:ml-0">
              {/* Vertical line */}
              <div className="absolute left-[8px] md:left-6 top-0 bottom-0 w-0.5 bg-white/10" />

              {timelineItems.map((item, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="relative pl-12 md:pl-16 mb-10">
                    {/* Dot */}
                    <div className={`absolute left-0 md:left-[17px] top-1 w-[18px] h-[18px] rounded-full ${item.dotClass} border-[3px] border-bg-primary shadow-[0_0_0_2px] shadow-current`} />
                    {/* Head */}
                    <div className="flex flex-wrap items-baseline gap-3 mb-1.5">
                      <h4 className="text-base font-bold text-text-primary">{item.agent}</h4>
                      <span className="font-mono text-xs text-text-muted bg-bg-surface px-2 py-0.5 rounded">{item.time}</span>
                      <span className={`font-mono text-[11px] font-bold px-2.5 py-0.5 rounded ${item.gateClass}`}>{item.gate}</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ EMERGENT DISCOVERY ═══ */}
        <section className="py-20 px-6">
          <FadeIn>
            <div className="max-w-[840px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">The emergent discovery</h2>
              <p className="text-lg text-text-secondary mb-10">
                The most valuable finding wasn&apos;t in any single agent&apos;s output. It emerged from the pattern of all six agents analyzing the same project independently.
              </p>

              {/* Discovery box */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bg-primary to-bg-surface p-10 md:p-12 border border-white/5 mb-10">
                <div className="absolute -top-[40%] -right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(230,126,34,0.2)_0%,transparent_70%)] pointer-events-none" />
                <h3 className="text-accent-orange text-2xl font-bold mb-4 relative">Decision debt accumulating</h3>
                <p className="text-text-primary font-bold text-lg mb-3 relative">
                  Five agents reached the same conclusion — without being told what to look for.
                </p>
                <p className="text-text-secondary/80 mb-3 relative">
                  Agent 3 first identified that the same 4 blocking decisions (hire a PM, decide the budget, confirm the scope, sign the charter) were being flagged repeatedly without resolution. By Agent 6, this pattern had grown into the dominant cluster in the knowledge base — 8 entries across 3 agents, all converging on the same root cause.
                </p>
                <p className="text-text-secondary/80 relative">
                  This pattern was not programmed into any agent. It emerged from the sequential, accumulative architecture of the chain. No individual PM, no matter how experienced, would have systematically tracked this pattern across 45 documents.
                </p>
              </div>

              {/* Pullquote */}
              <div className="border-l-4 border-accent-orange px-8 py-6 bg-bg-surface/50 rounded-r-lg">
                <p className="text-xl font-bold text-text-primary leading-snug mb-2">
                  This project does not need more analysis. It needs four decisions. Everything else is ready.
                </p>
                <p className="font-mono text-xs text-text-muted">— Agent 6, Closing Report</p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ═══ ALL VERDICTS ═══ */}
        <section className="py-20 px-6 bg-bg-surface/30">
          <FadeIn>
            <div className="max-w-[840px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Six agents, one conclusion</h2>
              <div className="rounded-xl border border-white/5 overflow-hidden">
                <div className="grid grid-cols-[100px_1fr_1fr] md:grid-cols-[120px_140px_1fr] bg-bg-primary text-text-primary text-sm font-medium">
                  <div className="px-4 py-3">Agent</div>
                  <div className="px-4 py-3">Phase</div>
                  <div className="px-4 py-3">Verdict</div>
                </div>
                {verdicts.map((v, i) => (
                  <div key={i} className={`grid grid-cols-[100px_1fr_1fr] md:grid-cols-[120px_140px_1fr] text-sm border-t border-white/5 ${i % 2 === 1 ? "bg-bg-surface/30" : "bg-bg-card"}`}>
                    <div className="px-4 py-3 font-bold text-accent-blue">{v.agent}</div>
                    <div className="px-4 py-3 text-text-muted">{v.phase}</div>
                    <div className="px-4 py-3 text-text-secondary">{v.verdict}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ═══ KB CLUSTERS ═══ */}
        <section className="py-20 px-6">
          <FadeIn>
            <div className="max-w-[840px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Knowledge base — 39 patterns across 7 clusters
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                The chain produced a portable institutional knowledge base with 36 prevention rules. Each pattern includes detection signals and prevention recommendations for future projects.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {clusters.map((c, i) => (
                  <div key={i} className="relative p-5 rounded-xl border border-white/5 bg-bg-card card-glow transition-all duration-200">
                    <span className={`absolute top-3 right-3 font-mono text-[10px] tracking-wider px-2 py-0.5 rounded ${c.trendClass}`}>
                      {c.trend}
                    </span>
                    <p className="text-3xl font-bold text-text-primary font-mono">{c.count}</p>
                    <p className="text-sm font-semibold text-text-secondary mt-1">{c.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ═══ ROOT CAUSE ═══ */}
        <section className="py-20 px-6 bg-bg-surface/30">
          <FadeIn>
            <div className="max-w-[840px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Root cause: 5 Whys</h2>
              <p className="text-lg text-text-secondary mb-8">
                Agent 6 performed a formal root cause analysis using the 5 Whys methodology:
              </p>

              <div className="border-l-4 border-accent-blue px-8 py-6 bg-bg-card/50 rounded-r-lg mb-8">
                <p className="text-lg text-text-primary leading-relaxed mb-2">
                  The PM Agent Chain is an analysis engine, not a governance engine. It correctly identified every gap, risk, and required action. The organizational governance layer — sponsor decisions, hiring, budgeting, contracting — was never activated.
                </p>
                <p className="font-mono text-xs text-text-muted">— Agent 6, Root Cause Analysis</p>
              </div>

              <p className="text-text-secondary">
                The chain&apos;s value is diagnostic. The cure requires human authority. But knowing exactly what decisions need to be made — with evidence, deadlines, and owners — is the difference between a project that drifts and one that launches.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="py-20 px-6 bg-bg-primary text-center">
          <FadeIn>
            <div className="max-w-[560px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                See what the chain finds in your project
              </h2>
              <p className="text-lg text-text-secondary/60 mb-9">
                Send us your project brief. We&apos;ll run Agent 1 for free and send you the results within 24 hours. No commitment, no pitch — just the analysis.
              </p>
              <a
                href="https://calendly.com/guykushnir/pm-agent-chain-30-min-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-orange hover:bg-[#D35E1A] text-white font-bold text-base px-10 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 tracking-wide"
              >
                Book a free Agent 1 trial
              </a>
              <p className="text-xs text-text-muted/40 mt-4">
                30-minute discovery call · Agent 1 runs on your actual brief · Results in 24 hours
              </p>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
