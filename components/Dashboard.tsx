"use client";

import { useState } from "react";

// ── Pipeline Tab ──────────────────────────────────────────────────────────────
const pipelineAgents = [
  {
    id: 1,
    name: "Initiation",
    status: "COMPLETE",
    evidence: 100,
    context: 92,
    color: "#2E8BC0",
  },
  {
    id: 2,
    name: "Planning",
    status: "COMPLETE",
    evidence: 100,
    context: 88,
    color: "#27AE60",
  },
  {
    id: 3,
    name: "Execution",
    status: "COMPLETE",
    evidence: 94,
    context: 76,
    color: "#3B8BD4",
  },
  {
    id: 4,
    name: "Monitoring",
    status: "COMPLETE",
    evidence: 100,
    context: 85,
    color: "#E67E22",
  },
  {
    id: 5,
    name: "Validation",
    status: "PASS",
    evidence: 100,
    context: 90,
    color: "#8E44AD",
  },
  {
    id: 6,
    name: "Closing",
    status: "COMPLETE",
    evidence: 100,
    context: 95,
    color: "#1D9E75",
  },
];

function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-1.5 bg-bg-surface rounded-full overflow-hidden w-full">
      <div
        className="h-full rounded-full"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  );
}

function PipelineTab() {
  return (
    <div className="space-y-3">
      {pipelineAgents.map((a) => (
        <div
          key={a.id}
          className="p-4 rounded-lg border border-white/5 bg-bg-surface"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: a.color }}
              >
                {a.id}
              </div>
              <span className="text-text-primary text-sm font-medium">
                {a.name}
              </span>
            </div>
            <span
              className={`font-mono text-xs px-2 py-0.5 rounded ${
                a.status === "PASS"
                  ? "bg-accent-green/10 text-accent-green"
                  : "bg-accent-blue/10 text-accent-blue"
              }`}
            >
              {a.status}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex justify-between text-xs text-text-muted mb-1">
                <span>Evidence</span>
                <span style={{ color: a.color }}>{a.evidence}%</span>
              </div>
              <Bar pct={a.evidence} color={a.color} />
            </div>
            <div>
              <div className="flex justify-between text-xs text-text-muted mb-1">
                <span>Context Health</span>
                <span style={{ color: a.color }}>{a.context}%</span>
              </div>
              <Bar pct={a.context} color={a.color} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Waves Tab ─────────────────────────────────────────────────────────────────
const waves = [
  {
    wave: 1,
    name: "Foundation",
    tasks: ["Project Charter", "Stakeholder Register", "Requirements Capture"],
    status: "COMPLETE",
    color: "#2E8BC0",
  },
  {
    wave: 2,
    name: "Planning",
    tasks: ["WBS Creation", "Gantt Chart", "Resource Plan", "Risk Response"],
    status: "COMPLETE",
    color: "#27AE60",
  },
  {
    wave: 3,
    name: "Build",
    tasks: [
      "Frontend Dev",
      "Backend API",
      "Database Setup",
      "Integration",
      "Testing",
    ],
    status: "COMPLETE",
    color: "#E67E22",
  },
  {
    wave: 4,
    name: "Validation & Close",
    tasks: ["QA Review", "Stakeholder UAT", "Go-Live", "Retrospective"],
    status: "COMPLETE",
    color: "#8E44AD",
  },
];

function WavesTab() {
  return (
    <div className="space-y-4">
      {waves.map((w) => (
        <div
          key={w.wave}
          className="rounded-lg border border-white/5 bg-bg-surface overflow-hidden"
        >
          <div
            className="px-4 py-3 flex items-center justify-between"
            style={{ borderLeft: `3px solid ${w.color}` }}
          >
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-xs font-bold"
                style={{ color: w.color }}
              >
                Wave {w.wave}
              </span>
              <span className="text-text-primary text-sm font-medium">
                {w.name}
              </span>
            </div>
            <span className="font-mono text-xs text-accent-green bg-accent-green/10 px-2 py-0.5 rounded">
              {w.status}
            </span>
          </div>
          <div className="px-4 py-3 flex flex-wrap gap-2">
            {w.tasks.map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-xs text-text-secondary bg-bg-card px-2.5 py-1 rounded-full border border-white/5"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: w.color }}
                />
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Goals Tab ─────────────────────────────────────────────────────────────────
const truths = [
  {
    id: "T-01",
    statement: "Project scope fully defined",
    agent: "Initiation",
    status: "verified",
    color: "#2E8BC0",
  },
  {
    id: "T-02",
    statement: "All stakeholders identified",
    agent: "Initiation",
    status: "verified",
    color: "#2E8BC0",
  },
  {
    id: "T-03",
    statement: "Risk register complete",
    agent: "Initiation",
    status: "verified",
    color: "#2E8BC0",
  },
  {
    id: "T-04",
    statement: "All requirements decomposed into WBS",
    agent: "Planning",
    status: "verified",
    color: "#27AE60",
  },
  {
    id: "T-05",
    statement: "Wave dependencies mapped",
    agent: "Planning",
    status: "verified",
    color: "#27AE60",
  },
  {
    id: "T-06",
    statement: "17/18 tasks executed",
    agent: "Execution",
    status: "verified",
    color: "#3B8BD4",
  },
  {
    id: "T-07",
    statement: "SPI within threshold (0.93)",
    agent: "Monitoring",
    status: "verified",
    color: "#E67E22",
  },
  {
    id: "T-08",
    statement: "CPI positive (1.04)",
    agent: "Monitoring",
    status: "verified",
    color: "#E67E22",
  },
  {
    id: "T-09",
    statement: "Grade A quality achieved",
    agent: "Validation",
    status: "verified",
    color: "#8E44AD",
  },
  {
    id: "T-10",
    statement: "Client satisfaction ≥ 9/10",
    agent: "Closing",
    status: "verified",
    color: "#1D9E75",
  },
];

function GoalsTab() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-4">
        <p className="text-text-muted text-xs font-mono">
          {truths.filter((t) => t.status === "verified").length}/{truths.length}{" "}
          truths verified
        </p>
        <span className="text-accent-green text-xs font-mono bg-accent-green/10 px-2 py-0.5 rounded">
          ALL VERIFIED
        </span>
      </div>
      {truths.map((t) => (
        <div
          key={t.id}
          className="flex items-center gap-3 p-3 rounded-lg bg-bg-surface border border-white/5"
        >
          <span
            className="font-mono text-xs w-10 flex-shrink-0"
            style={{ color: t.color }}
          >
            {t.id}
          </span>
          <span className="text-text-secondary text-sm flex-1">
            {t.statement}
          </span>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-text-muted text-xs hidden sm:block">
              {t.agent}
            </span>
            <span className="text-accent-green">✓</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Context Tab ───────────────────────────────────────────────────────────────
const contextData = {
  budgetTotal: 535,
  budgetUsed: 412,
  checkpoints: [
    { id: "CP-1", label: "Charter approved", agent: "Initiation", done: true },
    { id: "CP-2", label: "WBS complete", agent: "Planning", done: true },
    { id: "CP-3", label: "Wave 1 executed", agent: "Execution", done: true },
    { id: "CP-4", label: "Wave 2 executed", agent: "Execution", done: true },
    { id: "CP-5", label: "QA passed", agent: "Validation", done: true },
    { id: "CP-6", label: "Project closed", agent: "Closing", done: true },
  ],
};

function ContextTab() {
  const budgetPct = Math.round(
    (contextData.budgetUsed / contextData.budgetTotal) * 100
  );
  return (
    <div className="space-y-6">
      {/* Budget */}
      <div className="p-4 rounded-lg border border-white/5 bg-bg-surface">
        <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
          Budget Tracking
        </p>
        <div className="flex items-end justify-between mb-2">
          <span className="text-2xl font-bold text-text-primary font-mono">
            ${contextData.budgetUsed}
          </span>
          <span className="text-text-muted text-sm">
            / ${contextData.budgetTotal}
          </span>
        </div>
        <div className="h-3 bg-bg-primary rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-accent-green transition-all duration-700"
            style={{ width: `${budgetPct}%` }}
          />
        </div>
        <p className="text-text-muted text-xs mt-2">{budgetPct}% utilized</p>
      </div>

      {/* Checkpoints */}
      <div className="p-4 rounded-lg border border-white/5 bg-bg-surface">
        <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
          Context Checkpoints
        </p>
        <div className="space-y-2">
          {contextData.checkpoints.map((cp) => (
            <div
              key={cp.id}
              className="flex items-center justify-between p-2.5 rounded bg-bg-card border border-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent-blue w-10">
                  {cp.id}
                </span>
                <span className="text-text-secondary text-sm">{cp.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-text-muted text-xs hidden sm:block">
                  {cp.agent}
                </span>
                <span className="text-accent-green text-sm">✓</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-accent-green text-xs font-mono mt-3">
          ✓ Can resume from any checkpoint
        </p>
      </div>
    </div>
  );
}

// ── Remediation Tab ───────────────────────────────────────────────────────────
const remediationHistory = [
  {
    cycle: 1,
    trigger: "Task 14 incomplete — missing API integration",
    from: "Agent 5 (Validation)",
    to: "Agent 3 (Execution)",
    result: "RESOLVED",
    delta: "+2.1% quality score",
  },
];

function RemediationTab() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border border-white/5 bg-bg-surface">
        <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
          FAIL Cycle History
        </p>
        <p className="text-text-muted text-xs mb-4">
          Total cycles: {remediationHistory.length} · All resolved
        </p>
        {remediationHistory.map((r, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border border-accent-red/20 bg-accent-red/5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-accent-red">
                FAIL Cycle #{r.cycle}
              </span>
              <span className="font-mono text-xs text-accent-green bg-accent-green/10 px-2 py-0.5 rounded">
                {r.result}
              </span>
            </div>
            <p className="text-text-secondary text-sm mb-3">{r.trigger}</p>
            <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
              <span>{r.from}</span>
              <span className="text-accent-red">→</span>
              <span>{r.to}</span>
            </div>
            <p className="text-accent-green text-xs font-mono mt-2">
              ↑ {r.delta}
            </p>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-lg border border-accent-green/20 bg-accent-green/5 text-center">
        <p className="text-accent-green text-sm font-medium">
          All remediation cycles resolved
        </p>
        <p className="text-text-muted text-xs mt-1 font-mono">
          Final grade: A (90.7%)
        </p>
      </div>
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
const tabs = [
  { id: "pipeline", label: "Pipeline" },
  { id: "waves", label: "Waves" },
  { id: "goals", label: "Goals" },
  { id: "context", label: "Context" },
  { id: "remediation", label: "Remediation" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function Dashboard() {
  const [active, setActive] = useState<TabId>("pipeline");

  return (
    <section id="dashboard" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="font-mono text-accent-blue text-sm tracking-widest uppercase">
            Live Demo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-2">
            PM Agent Chain Dashboard
          </h2>
          <p className="text-text-muted text-sm">
            Blue Horizon project data — all values are real
          </p>
        </div>

        {/* Dashboard chrome */}
        <div className="rounded-2xl border border-white/10 bg-bg-card overflow-hidden shadow-blue-glow">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-bg-surface">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-accent-red/60" />
                <div className="w-3 h-3 rounded-full bg-accent-orange/60" />
                <div className="w-3 h-3 rounded-full bg-accent-green/60" />
              </div>
              <span className="font-mono text-xs text-text-muted ml-2">
                pm-agent-chain · blue-horizon · v1.3.0
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="font-mono text-xs text-accent-green">
                CLOSED
              </span>
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex overflow-x-auto border-b border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-150 border-b-2 ${
                  active === tab.id
                    ? "text-accent-blue border-accent-blue bg-accent-blue/5"
                    : "text-text-muted border-transparent hover:text-text-secondary hover:bg-bg-surface/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-5 max-h-[520px] overflow-y-auto">
            {active === "pipeline" && <PipelineTab />}
            {active === "waves" && <WavesTab />}
            {active === "goals" && <GoalsTab />}
            {active === "context" && <ContextTab />}
            {active === "remediation" && <RemediationTab />}
          </div>
        </div>
      </div>
    </section>
  );
}
