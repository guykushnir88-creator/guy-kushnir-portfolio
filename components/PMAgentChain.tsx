"use client";

import { useRef, useState } from "react";
import { useInView } from "./hooks/useInView";

const agents = [
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
    key: "verification_evidence",
    title: "Evidence-before-claims",
    description:
      "Every agent must prove work with metrics: docs, word count, coverage %. No handoff without proof.",
    color: "#2E8BC0",
  },
  {
    key: "goal_backward_check",
    title: "Goal-backward verification",
    description:
      "Verify what must be TRUE, not what was done. Truths → artifacts → wiring. Agent 5 can't score without it.",
    color: "#8E44AD",
  },
  {
    key: "context_checkpoint",
    title: "Context checkpoints",
    description:
      "Crash recovery. Checkpoint after each deliverable. Next session resumes — no restart.",
    color: "#E67E22",
  },
  {
    key: "wave_execution",
    title: "Wave execution",
    description:
      "Tasks grouped by dependency. Sequential now, parallel-ready for custom dashboard.",
    color: "#27AE60",
  },
];

const toolEcosystem = [
  {
    category: "Knowledge",
    tools: ["Notion", "Google", "Firecrawl", "Brave", "Seq. Thinking"],
  },
  { category: "Design", tools: ["Figma", "Zeplin"] },
  {
    category: "Dev Tools",
    tools: ["Jira", "GitHub", "Linear", "Trello", "Monday", "ClickUp"],
  },
  {
    category: "Infrastructure",
    tools: ["PostgreSQL", "MongoDB", "Supabase", "Docker", "K8s", "AWS"],
  },
  { category: "Observability", tools: ["Sentry", "Grafana"] },
  { category: "Communication", tools: ["Slack", "Teams", "Zapier"] },
];

const jsonPreview = `{
  "source_agent": "planning-agent",
  "target_agent": "execution-agent",
  "payload_version": "1.3.0",
  "status": "complete",
  "verification_evidence": {
    "metrics": {
      "documents_produced": 6,
      "requirements_covered": 100
    }
  },
  "goal_backward_check": {
    "truths": [{
      "id": "T-04",
      "statement": "All requirements decomposed",
      "status": "verified"
    }],
    "overall_goal_achieved": true
  },
  "context_checkpoint": {
    "last_completed_deliverable": "Sprint plan",
    "can_resume_from_here": true
  }
}`;

const copilotJsonPreview = `{
  "section_b_copilot_analysis": {
    "risks_identified": 6,
    "blind_spots": 6,
    "moscow_classification": {
      "must": 7, "should": 3, "could": 2, "wont": 3
    },
    "deviations_from_brief": 3,
    "critical_flags": ["R-01: No properties owned (score 16)"]
  },
  "section_c_knowledge_log": {
    "issues": 5,
    "pattern_tags": ["scope-fiction", "assumption-gap", "resource-constraint"],
    "prevention_playbook": true
  }
}`;

function JsonHighlight({ json }: { json: string }) {
  const highlighted = json
    .replace(/("[\w_]+")\s*:/g, '<span class="json-key">$1</span>:')
    .replace(/:\s*(".*?")/g, ': <span class="json-string">$1</span>')
    .replace(/:\s*(\d+)/g, ': <span class="json-number">$1</span>')
    .replace(/:\s*(true|false)/g, ': <span class="json-bool">$1</span>')
    .replace(/([{}[\],])/g, '<span class="json-punct">$1</span>');
  return (
    <pre
      className="font-mono text-xs md:text-sm overflow-x-auto leading-relaxed"
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  );
}

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
            Hero Project
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mt-2 mb-4">
            PM Agent Chain
          </h2>
          <p className="font-mono text-accent-blue text-base mb-4">
            AI-Powered Project Lifecycle Management
          </p>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            6 autonomous agents covering the full PMI lifecycle — from initiation
            to closing — connected by validated JSON handoffs (Schema v1.3.0)
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

          {/* Agent cards — horizontal scroll on mobile */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch">
            {agents.map((agent, i) => (
              <div key={agent.id} className="flex flex-col md:flex-row items-center flex-1 gap-3">
                {/* Card */}
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

                {/* Arrow between agents */}
                {i < agents.length - 1 && (
                  <div className="flex-shrink-0 text-text-muted md:rotate-0 rotate-90">
                    {agent.id === 4 ? (
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-accent-blue text-xs">→</span>
                      </div>
                    ) : (
                      <span className="text-lg">→</span>
                    )}
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
          {activeAgent !== null && (
            <div
              className="mt-6 p-6 rounded-xl border bg-bg-surface transition-all duration-300"
              style={{
                borderColor: agents[activeAgent - 1].color + "40",
              }}
            >
              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[200px]">
                  <h4
                    className="font-semibold text-lg mb-2"
                    style={{ color: agents[activeAgent - 1].color }}
                  >
                    Agent {activeAgent}: {agents[activeAgent - 1].name}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {agents[activeAgent - 1].description}
                  </p>
                  <p className="font-mono text-xs text-text-muted">
                    Evidence: {agents[activeAgent - 1].evidence}
                  </p>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-3">
                    Outputs
                  </p>
                  <ul className="space-y-1.5">
                    {agents[activeAgent - 1].outputs.map((o) => (
                      <li
                        key={o}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: agents[activeAgent - 1].color,
                          }}
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

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
            v2.2 — Co-pilot layer on all 6 agents. 108 files. Knowledge base indexing. Calibrated challenge.
          </p>
        </div>

        {/* ── v1.3.0 Features ── */}
        <div
          className={`mb-20 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold text-text-primary mb-6">
            v1.3.0 Key Features
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

        {/* ── v2.2 Co-Pilot Layer ── */}
        <div
          className={`mb-20 transition-all duration-700 delay-150 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold text-text-primary mb-1">
            v2.2 — The Co-Pilot Layer
          </h3>
          <p className="text-text-secondary text-sm italic mb-6">
            Agents that challenge PMs, not just execute for them.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-3xl">
            v2.2 adds an AI co-pilot layer across all 6 agents. Every agent now challenges
            assumptions, identifies blind spots, and builds institutional knowledge — turning the
            chain from an automation tool into a senior PM advisor.
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

        {/* ── v2.1 Persona Validation Test ── */}
        <div
          className={`mb-20 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold text-text-primary mb-1">
            v2.1 — Tested Against Itself
          </h3>
          <p className="text-text-secondary text-sm italic mb-6">
            Two studies showed expert personas degrade AI accuracy. So I tested my own framework.
          </p>

          {/* A/B Test Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-xl border border-accent-blue/30 bg-bg-card card-glow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-12 rounded-full flex-shrink-0 bg-accent-blue" />
                <div>
                  <p className="font-mono text-xs text-accent-blue mb-1">Version A — With Persona</p>
                  <h4 className="text-text-primary font-semibold text-sm">
                    &ldquo;Senior PM Advisor&rdquo; identity prompt
                  </h4>
                </div>
              </div>
              <div className="pl-4 space-y-1">
                <p className="text-text-secondary text-sm">
                  <span className="font-mono text-accent-blue">35/40</span> quality
                </p>
                <p className="text-text-secondary text-sm">
                  <span className="font-mono text-accent-blue">12</span> requirements
                </p>
                <p className="text-text-secondary text-sm">
                  <span className="font-mono text-accent-red">3</span> red flags
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-accent-green/30 bg-bg-card card-glow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-12 rounded-full flex-shrink-0 bg-accent-green" />
                <div>
                  <p className="font-mono text-xs text-accent-green mb-1">Version B — No Persona</p>
                  <h4 className="text-text-primary font-semibold text-sm">
                    Structural analysis rules only
                  </h4>
                </div>
              </div>
              <div className="pl-4 space-y-1">
                <p className="text-text-secondary text-sm">
                  <span className="font-mono text-accent-green">39/40</span> quality
                </p>
                <p className="text-text-secondary text-sm">
                  <span className="font-mono text-accent-green">24</span> requirements
                </p>
                <p className="text-text-secondary text-sm">
                  <span className="font-mono text-accent-green">0</span> red flags
                </p>
              </div>
            </div>
          </div>

          {/* Center Metric */}
          <div className="text-center mb-8">
            <p className="text-3xl font-bold text-text-primary">
              12/12 <span className="text-lg font-normal text-text-secondary">planted gaps caught by BOTH versions</span>
            </p>
            <p className="text-text-muted text-sm mt-2 italic">
              The structure does the work. The persona is optional seasoning.
            </p>
          </div>

          {/* Key Findings */}
          <div className="space-y-3 mb-8 max-w-3xl">
            {[
              "Gap detection tied — the co-pilot structure caught everything regardless of persona",
              "Persona traded precision for persuasion — sounded confident but less calibrated",
              "Fix: replaced persona with analysis rules + claim verification framework → v2.1",
            ].map((finding, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-mono text-xs text-accent-blue mt-0.5">{i + 1}.</span>
                <p className="text-text-secondary text-sm leading-relaxed">{finding}</p>
              </div>
            ))}
          </div>

          {/* Bottom Badge */}
          <div className="rounded-lg bg-accent-green/10 border border-accent-green/20 px-5 py-3 text-center">
            <p className="text-sm text-accent-green font-medium">
              Kerzner Level 5: Continuous Improvement — framework tested, measured, and upgraded in 24 hours
            </p>
          </div>
        </div>

        {/* ── JSON Schema Preview ── */}
        <div
          className={`mb-20 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold text-text-primary mb-6">
            JSON Schema Preview
          </h3>
          <div className="rounded-xl border border-accent-blue/20 bg-bg-card overflow-hidden">
            {/* Editor chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-bg-surface">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-accent-red/60" />
                <div className="w-3 h-3 rounded-full bg-accent-orange/60" />
                <div className="w-3 h-3 rounded-full bg-accent-green/60" />
              </div>
              <span className="font-mono text-xs text-text-muted ml-2">
                handoff-schema-v1.3.0.json
              </span>
            </div>
            <div className="p-5 overflow-x-auto">
              <JsonHighlight json={jsonPreview} />
            </div>
          </div>
          <p className="text-text-muted text-xs font-mono mt-3 text-center">
            9 schemas · 21 shared types · 8 required fields · Full traceability
          </p>

          {/* v2.2 Co-Pilot Output */}
          <h4 className="text-lg font-semibold text-text-primary mt-8 mb-4">
            v2.2 Co-Pilot Output
          </h4>
          <div className="rounded-xl border border-accent-blue/20 bg-bg-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-bg-surface">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-accent-red/60" />
                <div className="w-3 h-3 rounded-full bg-accent-orange/60" />
                <div className="w-3 h-3 rounded-full bg-accent-green/60" />
              </div>
              <span className="font-mono text-xs text-text-muted ml-2">
                copilot-output-v2.2.json
              </span>
            </div>
            <div className="p-5 overflow-x-auto">
              <JsonHighlight json={copilotJsonPreview} />
            </div>
          </div>
        </div>

        {/* ── Tool Ecosystem ── */}
        <div
          className={`transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold text-text-primary mb-6">
            Tool Ecosystem
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {toolEcosystem.map((cat) => (
              <div
                key={cat.category}
                className="p-4 rounded-xl border border-white/5 bg-bg-card"
              >
                <p className="font-mono text-accent-blue text-xs tracking-wider uppercase mb-3">
                  {cat.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-xs rounded bg-bg-surface text-text-secondary border border-white/5 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
