"use client";

import { useRef, useState } from "react";
import { useInView } from "./hooks/useInView";

const agents = [
  {
    id: 0,
    name: "Assess",
    role: "PM Maturity",
    color: "#9B59B6",
    evidence: "10-dimension profile",
    outputs: [
      "PM Maturity Assessment",
      "Complexity Profile",
      "Agent Configuration",
      "Baseline Metrics",
    ],
    description:
      "Evaluates project and organizational PM maturity before the chain begins. Calibrates agent intensity and co-pilot challenge level based on complexity dimensions.",
  },
  {
    id: 1,
    name: "Initiation",
    role: "Requirements",
    color: "#2E8BC0",
    evidence: "9 docs · 6 assumptions challenged",
    outputs: [
      "Project Charter",
      "Stakeholder Register",
      "Requirements Doc",
      "Scope Statement",
      "Risk Register",
    ],
    description:
      "Captures and validates all project requirements before any planning begins. Forces discovery of hidden assumptions.",
  },
  {
    id: 2,
    name: "Planning",
    role: "WBS + Gantt + Waves",
    color: "#27AE60",
    evidence: "6 docs · 4 waves",
    outputs: [
      "WBS",
      "Gantt Chart",
      "Wave Plan",
      "Resource Plan",
      "Communication Plan",
      "Risk Response Plan",
    ],
    description:
      "Decomposes scope into executable waves with dependency mapping. Produces full PMI-compliant planning artifacts.",
  },
  {
    id: 3,
    name: "Execution",
    role: "Wave execution",
    color: "#3B8BD4",
    evidence: "17/18 tasks done",
    badge: "Guided | Auto",
    outputs: [
      "Task Completion Reports",
      "Wave Status Updates",
      "Issue Log",
      "Change Requests",
    ],
    description:
      "Executes tasks wave by wave with evidence capture. Feeds into Monitoring agent in real time.",
  },
  {
    id: 4,
    name: "Monitoring",
    role: "KPI + Earned Value",
    color: "#E67E22",
    evidence: "SPI 0.93 · CPI 1.04",
    badge: "3-Tier",
    outputs: [
      "KPI Dashboard",
      "EV Analysis",
      "Variance Reports",
      "Forecast to Complete",
    ],
    description:
      "Tracks schedule and cost performance using Earned Value Management. Triggers remediation loops when thresholds breach.",
  },
  {
    id: 5,
    name: "Validation",
    role: "Goal-backward QA",
    color: "#8E44AD",
    evidence: "Grade A (90.7%)",
    outputs: [
      "Quality Scorecard",
      "Goal-Backward Report",
      "FAIL/PASS Decision",
      "Remediation Tasks",
    ],
    description:
      "Verifies what MUST be true, not just what was done. Can trigger a FAIL → Execution remediation loop.",
  },
  {
    id: 6,
    name: "Closing",
    role: "Retrospective",
    color: "#1D9E75",
    evidence: "9.3/10 satisfaction",
    badge: "+ Knowledge Base",
    outputs: [
      "Lessons Learned",
      "Final Report",
      "Client Satisfaction Score",
      "Knowledge Base Update",
    ],
    description:
      "Captures final metrics, lessons learned, and satisfaction scores. Archives everything for future agent context.",
  },
];

const features = [
  {
    key: "development_mode",
    title: "AI-Aware Estimation",
    description:
      "The chain knows if humans or AI are building. Velocity coefficients adjust estimates automatically — preventing the 132x mismatch discovered in dogfooding.",
    color: "#2E8BC0",
  },
  {
    key: "benefits_realization",
    title: "Benefits Realization",
    description:
      "Every requirement maps to a measurable business benefit. Agent 6 tracks which benefits were realized vs planned. Closes the 'so what?' gap.",
    color: "#27AE60",
  },
  {
    key: "self_iteration",
    title: "Self-Iteration Loops",
    description:
      "Each agent scores its own output before handoff. Below 70%? It re-generates the weakest deliverable. Max 2 iterations. Quality without manual review loops.",
    color: "#8E44AD",
  },
  {
    key: "observation_counting",
    title: "N-Count Validation",
    description:
      "Every knowledge base finding tracks how many projects confirmed it. N=1 findings are tagged unvalidated. The chain doesn't over-generalize from a single data point.",
    color: "#E67E22",
  },
  {
    key: "hierarchical_config",
    title: "5-Layer Configuration",
    description:
      "Runtime override > agent config > project config > org policy > chain defaults. Enterprise clients get full customization without touching agent prompts.",
    color: "#3B8BD4",
  },
  {
    key: "chain_self_assessment",
    title: "Chain Self-Assessment",
    description:
      "Agent 6 grades the chain's own performance across 5 dimensions: gap detection, bias awareness, estimation accuracy, knowledge accumulation, actionable output.",
    color: "#1D9E75",
  },
];

export default function PMAgentChain() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.05 });
  const [activeAgent, setActiveAgent] = useState<number | null>(null);

  return (
    <section id="pm-agent-chain" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-accent-blue text-sm tracking-widest uppercase">
            Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mt-2 mb-4">
            PM Agent Chain
          </h2>
          <p className="font-mono text-accent-blue text-base mb-4">
            AI-Powered Project Lifecycle Management
          </p>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            7 autonomous agents covering the full PMI lifecycle — from assessment
            to closing — producing 274 files connected by validated JSON handoffs (Schema v1.2.0)
            that ensure zero information loss between phases.
          </p>
          <p className="mt-3 text-text-muted text-sm font-mono">
            Built with Claude AI (Anthropic) + MCP Protocol
          </p>
        </div>

        {/* ── Architecture Diagram ── */}
        <div
          className={`mb-20 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
            Agent Architecture
          </h3>

          {/* Agent cards */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch">
            {agents.map((agent, i) => (
              <div key={agent.id} className="flex flex-col md:flex-row items-center flex-1 gap-3">
                <button
                  onClick={() =>
                    setActiveAgent(activeAgent === agent.id ? null : agent.id)
                  }
                  className={`flex-1 w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    activeAgent === agent.id
                      ? "border-opacity-80 bg-bg-surface"
                      : "border-white/5 bg-bg-card hover:bg-bg-surface"
                  }`}
                  style={{
                    borderColor:
                      activeAgent === agent.id ? agent.color : undefined,
                    boxShadow:
                      activeAgent === agent.id
                        ? `0 0 16px ${agent.color}30`
                        : undefined,
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mb-3"
                    style={{ backgroundColor: agent.color }}
                  >
                    {agent.id}
                  </div>
                  <p className="text-text-primary font-semibold text-sm mb-1">
                    {agent.name}
                  </p>
                  <p className="text-text-muted text-xs mb-2">{agent.role}</p>
                  <p
                    className="font-mono text-xs"
                    style={{ color: agent.color }}
                  >
                    {agent.evidence}
                  </p>
                  {agent.badge && (
                    <span
                      className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono font-semibold text-white"
                      style={{ backgroundColor: agent.color }}
                    >
                      {agent.badge}
                    </span>
                  )}
                </button>

                {i < agents.length - 1 && (
                  <div className="flex-shrink-0 text-text-muted md:rotate-0 rotate-90">
                    <span className="text-lg">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAIL loop indicator */}
          <div className="mt-4 flex justify-end">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-red/30 bg-accent-red/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
              <span className="font-mono text-xs text-accent-red">
                Agent 5 FAIL → Agent 3 remediation loop
              </span>
            </div>
          </div>

          {/* Expanded agent detail */}
          {activeAgent !== null && (() => {
            const agent = agents.find(a => a.id === activeAgent)!;
            return (
              <div
                className="mt-6 p-6 rounded-xl border bg-bg-surface transition-all duration-300"
                style={{
                  borderColor: agent.color + "40",
                }}
              >
                <div className="flex flex-wrap gap-6">
                  <div className="flex-1 min-w-[200px]">
                    <h4
                      className="font-semibold text-lg mb-2"
                      style={{ color: agent.color }}
                    >
                      Agent {agent.id}: {agent.name}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {agent.description}
                    </p>
                    <p className="font-mono text-xs text-text-muted">
                      Evidence: {agent.evidence}
                    </p>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-3">
                      Outputs
                    </p>
                    <ul className="space-y-1.5">
                      {agent.outputs.map((o) => (
                        <li
                          key={o}
                          className="flex items-center gap-2 text-sm text-text-secondary"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: agent.color,
                            }}
                          />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Quality weights */}
          <div className="mt-6 p-4 rounded-xl border border-white/5 bg-bg-card">
            <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-3">
              Quality Scoring Weights
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Functionality", pct: 30, color: "#2E8BC0" },
                { label: "Performance", pct: 20, color: "#27AE60" },
                { label: "Security", pct: 20, color: "#E67E22" },
                { label: "Usability", pct: 15, color: "#8E44AD" },
                { label: "Reliability", pct: 15, color: "#1D9E75" },
              ].map((w) => (
                <div key={w.label} className="flex items-center gap-2">
                  <span
                    className="inline-block px-2 py-0.5 rounded text-xs font-mono font-semibold text-white"
                    style={{ backgroundColor: w.color }}
                  >
                    {w.pct}%
                  </span>
                  <span className="text-text-muted text-xs">{w.label}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-text-muted text-xs font-mono mt-4 text-center">
            v2.4 — 7 agents. 274 files. 21 features. Development mode awareness. AI velocity coefficients. Benefits realization. Self-iteration loops.
          </p>
        </div>

        {/* ── Key Features ── */}
        <div
          className={`mb-20 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold text-text-primary mb-6">
            Key Features
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.key}
                className="p-5 rounded-xl border border-white/5 bg-bg-card card-glow transition-all duration-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-1 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: f.color }}
                  />
                  <div>
                    <p className="font-mono text-xs text-text-muted mb-1">
                      {f.key}
                    </p>
                    <h4 className="text-text-primary font-semibold text-sm">
                      {f.title}
                    </h4>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed pl-4">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── v2.4 Co-Pilot Layer ── */}
        <div
          className={`transition-all duration-700 delay-150 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold text-text-primary mb-1">
            v2.4 — The Co-Pilot Layer
          </h3>
          <p className="text-text-secondary text-sm italic mb-6">
            Agents that challenge PMs, not just execute for them.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-3xl">
            v2.4 adds development mode awareness, AI velocity coefficients, EVM adaptation
            for AI projects, benefits realization tracking, self-iteration loops, and MCP
            connector readiness — on top of the co-pilot layer with 30 pattern tags, bias
            detection, and strategic alignment scoring across all 7 agents.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                key: "co-pilot-output",
                title: "Three-Section Output",
                description:
                  "Every agent produces Section A (deliverables), Section B (co-pilot analysis: risks, blind spots, MoSCoW priorities, deviations), and Section C (institutional knowledge log with searchable pattern tags).",
                color: "#2E8BC0",
              },
              {
                key: "complexity-input",
                title: "Project Complexity Profile",
                description:
                  "Agent 1 now requires a 10-dimension complexity assessment as input — industry regulation, team distribution, technical novelty, stakeholder count, and more. The co-pilot calibrates its challenge intensity based on project complexity.",
                color: "#27AE60",
              },
              {
                key: "agent-3-modes",
                title: "Dual Execution Mode",
                description:
                  "Agent 3 operates in Guided mode (PM reviews and approves each action) or Automated mode (MCP pushes directly to tools). Default: Guided. The PM leads — the agents advise.",
                color: "#3B8BD4",
              },
              {
                key: "agent-4-tiers",
                title: "Three-Tier Reporting",
                description:
                  "Agent 4 auto-generates three report tiers from the same data: Tier 1 (PM dashboard with task-level detail), Tier 2 (Director cross-project view), Tier 3 (C-suite executive summary). One data source, three audiences.",
                color: "#E67E22",
              },
              {
                key: "knowledge-base",
                title: "Cross-Project Knowledge Base",
                description:
                  "Institutional knowledge that carries across projects. Every issue is tagged by pattern and indexed — the system learns from every engagement, so the next project starts smarter than the last.",
                color: "#9B59B6",
              },
              {
                key: "calibrated-challenge",
                title: "Calibrated Challenge",
                description:
                  "Flags real issues, not theoretical noise. The co-pilot identifies genuine blind spots and real failure modes — not 'have you considered...' observations. Precision over volume.",
                color: "#E74C3C",
              },
            ].map((f) => (
              <div
                key={f.key}
                className="p-5 rounded-xl border border-white/5 bg-bg-card card-glow transition-all duration-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-1 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: f.color }}
                  />
                  <div>
                    <p className="font-mono text-xs text-text-muted mb-1">
                      {f.key}
                    </p>
                    <h4 className="text-text-primary font-semibold text-sm">
                      {f.title}
                    </h4>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed pl-4">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
