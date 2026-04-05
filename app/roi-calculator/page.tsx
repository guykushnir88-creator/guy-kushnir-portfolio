"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CHAIN_HOURS = 1.5;
const PM_REVIEW_HOURS = 4;

function fmt(n: number): string {
  return Math.abs(n).toLocaleString();
}

function fmtDollar(n: number): string {
  return n >= 0 ? `$${fmt(n)}` : `-$${fmt(n)}`;
}

export default function ROICalculator() {
  const [projects, setProjects] = useState(8);
  const [rate, setRate] = useState(95);
  const [hours, setHours] = useState(120);
  const [chainCost, setChainCost] = useState(12500);

  const calc = useCallback(() => {
    const totalChainHours = CHAIN_HOURS + PM_REVIEW_HOURS;
    const manualCost = hours * rate;
    const manualWeeks = (hours / 40).toFixed(1);
    const hoursSaved = hours - totalChainHours;
    const perProjectSaving = manualCost - chainCost;
    const annualSaving = perProjectSaving * projects;
    const annualHoursSaved = Math.round(hoursSaved * projects);
    const roi = manualCost > 0 ? manualCost / chainCost : 0;
    const chainPercent = Math.max(1, (totalChainHours / hours) * 100);

    return { manualCost, manualWeeks, perProjectSaving, annualSaving, annualHoursSaved, roi, chainPercent };
  }, [projects, rate, hours, chainCost]);

  const r = calc();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-bg-primary pt-28 pb-16 px-6 text-center">
          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(46,139,192,0.12)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative max-w-[600px] mx-auto">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-blue mb-4">ROI Calculator</p>
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
              What is project initiation costing your PMO?
            </h1>
            <p className="text-lg text-text-secondary/60">
              Adjust the sliders to match your organization. See the savings in real time.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

              {/* LEFT: Inputs */}
              <div className="md:sticky md:top-8">
                <div className="rounded-2xl border border-white/5 bg-bg-card p-8">
                  <h2 className="text-2xl font-bold text-text-primary mb-1">Your organization</h2>
                  <p className="text-sm text-text-muted mb-8">Adjust to match your PMO</p>

                  {/* Projects per year */}
                  <div className="mb-7">
                    <div className="flex justify-between items-baseline mb-2.5">
                      <span className="text-sm font-bold text-text-secondary">Projects per year</span>
                      <span className="font-mono text-sm font-bold text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-md">{projects}</span>
                    </div>
                    <input type="range" min={1} max={30} value={projects} step={1}
                      onChange={(e) => setProjects(+e.target.value)}
                      className="w-full accent-accent-blue cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-text-muted mt-1"><span>1</span><span>15</span><span>30</span></div>
                  </div>

                  {/* Hourly rate */}
                  <div className="mb-7">
                    <div className="flex justify-between items-baseline mb-2.5">
                      <span className="text-sm font-bold text-text-secondary">Average PM hourly cost</span>
                      <span className="font-mono text-sm font-bold text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-md">${rate}</span>
                    </div>
                    <input type="range" min={40} max={250} value={rate} step={5}
                      onChange={(e) => setRate(+e.target.value)}
                      className="w-full accent-accent-blue cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-text-muted mt-1"><span>$40</span><span>$145</span><span>$250</span></div>
                    <p className="text-xs text-text-muted mt-1.5 italic">Include fully loaded cost (salary + benefits + overhead)</p>
                  </div>

                  {/* Manual hours */}
                  <div className="mb-7">
                    <div className="flex justify-between items-baseline mb-2.5">
                      <span className="text-sm font-bold text-text-secondary">Hours on initiation (manual)</span>
                      <span className="font-mono text-sm font-bold text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-md">{hours}</span>
                    </div>
                    <input type="range" min={40} max={400} value={hours} step={10}
                      onChange={(e) => setHours(+e.target.value)}
                      className="w-full accent-accent-blue cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-text-muted mt-1"><span>40 hrs</span><span>220 hrs</span><span>400 hrs</span></div>
                    <p className="text-xs text-text-muted mt-1.5 italic">Charter, requirements, WBS, risk register, stakeholder analysis, budget, schedule</p>
                  </div>

                  {/* Chain cost */}
                  <div>
                    <div className="flex justify-between items-baseline mb-2.5">
                      <span className="text-sm font-bold text-text-secondary">PM Agent Chain engagement</span>
                      <span className="font-mono text-sm font-bold text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-md">${chainCost.toLocaleString()}</span>
                    </div>
                    <input type="range" min={5000} max={25000} value={chainCost} step={500}
                      onChange={(e) => setChainCost(+e.target.value)}
                      className="w-full accent-accent-blue cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-text-muted mt-1"><span>$5K</span><span>$15K</span><span>$25K</span></div>
                    <p className="text-xs text-text-muted mt-1.5 italic">Full 6-agent chain run + delivery. Typical range: $10K-$15K</p>
                  </div>
                </div>
              </div>

              {/* RIGHT: Results */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-1">Your ROI</h2>
                <p className="text-sm text-text-muted mb-6">Based on your inputs</p>

                {/* Big numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="sm:col-span-2 rounded-2xl bg-bg-primary border border-white/10 p-7 text-center">
                    <p className="text-4xl font-bold font-mono text-accent-orange leading-none">{fmtDollar(r.annualSaving)}</p>
                    <p className="text-sm text-text-muted mt-1">Annual savings (net)</p>
                  </div>
                  <div className="rounded-2xl bg-accent-green/10 border border-accent-green/20 p-6 text-center">
                    <p className="text-4xl font-bold font-mono text-accent-green leading-none">{r.annualHoursSaved.toLocaleString()}</p>
                    <p className="text-sm text-accent-green/70 mt-1">Hours saved per year</p>
                  </div>
                  <div className="rounded-2xl bg-accent-blue/10 border border-accent-blue/20 p-6 text-center">
                    <p className="text-4xl font-bold font-mono text-accent-blue leading-none">{r.roi.toFixed(1)}x</p>
                    <p className="text-sm text-text-muted mt-1">Return on investment</p>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="rounded-2xl border border-white/5 bg-bg-card overflow-hidden mb-6">
                  <div className="px-6 py-4 border-b border-white/5 text-sm font-bold text-text-primary">Per-project breakdown</div>
                  {[
                    { label: "Manual initiation cost", val: fmtDollar(r.manualCost) },
                    { label: "Manual time (weeks)", val: `${r.manualWeeks} weeks` },
                    { label: "Chain run time", val: "~91 minutes", highlight: true },
                    { label: "Chain deliverables", val: "45 docs + JSON KB", highlight: true },
                    { label: "PM Agent Chain cost", val: fmtDollar(chainCost) },
                    { label: "Net saving per project", val: fmtDollar(r.perProjectSaving) },
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between items-center px-6 py-3.5 text-sm border-b border-white/5 last:border-0 ${row.highlight ? "bg-accent-blue/5" : ""}`}>
                      <span className="text-text-muted">{row.label}</span>
                      <span className={`font-mono font-bold ${row.highlight ? "text-accent-blue" : "text-text-primary"}`}>{row.val}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center px-6 py-4 bg-bg-primary">
                    <span className="text-text-secondary/70 text-sm">Annual saving (x {projects} projects)</span>
                    <span className="font-mono font-bold text-accent-orange text-base">{fmtDollar(r.annualSaving)}</span>
                  </div>
                </div>

                {/* Time comparison */}
                <div className="rounded-2xl border border-white/5 bg-bg-card p-6 mb-6">
                  <h4 className="text-sm font-bold text-text-primary mb-4">Time comparison per project</h4>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-text-muted">Manual process</span>
                      <span className="font-mono font-bold text-text-primary">{hours} hours</span>
                    </div>
                    <div className="h-3 bg-bg-surface rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-accent-red/60" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-text-muted">PM Agent Chain</span>
                      <span className="font-mono font-bold text-text-primary">1.5 hours</span>
                    </div>
                    <div className="h-3 bg-bg-surface rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-accent-green" style={{ width: `${r.chainPercent.toFixed(1)}%` }} />
                    </div>
                  </div>
                </div>

                {/* What you get */}
                <div className="rounded-2xl border border-white/5 bg-bg-card overflow-hidden mb-6">
                  <div className="px-6 py-4 border-b border-white/5 text-sm font-bold text-text-primary">What the chain produces (included)</div>
                  {[
                    ["Word documents", "45 per run"],
                    ["Requirements extracted", "30+ from any brief"],
                    ["Risks identified", "15-25 with response plans"],
                    ["Knowledge base entries", "35-40 reusable patterns"],
                    ["Prevention playbook", "36 rules for future projects"],
                    ["PMBOK process coverage", "92%"],
                    ["Cognitive bias detection", "5 biases per phase"],
                    ["Quality gate", "GO / NO-GO with evidence"],
                  ].map(([label, val], i) => (
                    <div key={i} className="flex justify-between items-center px-6 py-3 text-sm border-b border-white/5 last:border-0">
                      <span className="text-text-muted">{label}</span>
                      <span className="font-mono font-bold text-text-primary">{val}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-bg-primary border border-white/10 p-8 text-center">
                  <h3 className="text-xl font-bold text-text-primary mb-3">See it run on your project</h3>
                  <p className="text-sm text-text-muted mb-5">Free Agent 1 trial. Your brief, your results, 24 hours.</p>
                  <a
                    href="https://calendly.com/guykushnir/pm-agent-chain-30-min-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent-orange hover:bg-[#D35E1A] text-white font-bold text-base px-10 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Book a discovery call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assumptions */}
        <section className="px-6 pb-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="rounded-xl bg-bg-surface/50 border border-white/5 p-6">
              <h4 className="text-xs font-bold text-text-muted mb-2 uppercase tracking-wider">Calculation assumptions</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Manual initiation includes: project charter, requirements gathering, WBS creation, risk register, stakeholder analysis, budget estimation, schedule development, and communication planning. Chain run time: ~91 minutes based on CloudSync integration test (6 agents, 45 Word documents, 39 knowledge base entries). PM time for chain review and client delivery: ~4 hours per project (brief prep, review output, present to stakeholders). Industry benchmarks: Gartner estimates 80-200 hours for enterprise project initiation; PMI reports average initiation phase at 8-15% of total project effort.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
