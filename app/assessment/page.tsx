"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Question {
  dimension: string;
  text: string;
  options: { text: string; score: number }[];
}

const questions: Question[] = [
  {
    dimension: "Project initiation",
    text: "How does your organization start new projects?",
    options: [
      { text: "Someone sends an email or verbal request. We start working.", score: 1 },
      { text: "We have a brief template, but it's often incomplete or skipped.", score: 2 },
      { text: "Formal brief required. PM reviews before planning begins.", score: 3 },
      { text: "Brief is analyzed, challenged, and validated against business objectives before planning starts.", score: 5 },
    ],
  },
  {
    dimension: "Planning & estimation",
    text: "How do you estimate project timelines and budgets?",
    options: [
      { text: "Best guess from experience. Rarely documented.", score: 1 },
      { text: "Top-down estimates from leadership. Sometimes validated.", score: 2 },
      { text: "Bottom-up estimates with WBS. Documented and reviewed.", score: 4 },
      { text: "Bottom-up with multiple scenarios, industry benchmarks, and confidence levels.", score: 5 },
    ],
  },
  {
    dimension: "Risk management",
    text: "How does your team handle project risks?",
    options: [
      { text: "We deal with problems when they happen.", score: 1 },
      { text: "We list risks at kickoff but rarely update or track them.", score: 2 },
      { text: "Risk register maintained and reviewed regularly. Response plans for top risks.", score: 4 },
      { text: "Risks identified, scored, tracked across phases, with prevention playbook from past projects.", score: 5 },
    ],
  },
  {
    dimension: "Quality & governance",
    text: "Do you have formal quality gates or go/no-go decisions?",
    options: [
      { text: "No. Projects continue until they're done or cancelled.", score: 1 },
      { text: "Informal checkpoints. Usually rubber-stamped.", score: 2 },
      { text: "Formal gates at key milestones. Sometimes projects are paused.", score: 3 },
      { text: "Evidence-based gates with scored criteria. Projects genuinely get NO-GO when criteria fail.", score: 5 },
    ],
  },
  {
    dimension: "Knowledge management",
    text: "What happens to lessons learned after a project ends?",
    options: [
      { text: "Nothing. We move on to the next project.", score: 1 },
      { text: "Sometimes we do a retro, but notes get lost.", score: 2 },
      { text: "Lessons documented and stored. Occasionally referenced.", score: 3 },
      { text: "Institutional knowledge base that grows with each project. Prevention rules applied to new projects.", score: 5 },
    ],
  },
  {
    dimension: "Process standardization",
    text: "How consistent is your PM methodology across projects?",
    options: [
      { text: "Every PM does it differently. No standard process.", score: 1 },
      { text: "Some templates exist but adoption varies by PM.", score: 2 },
      { text: "Standard methodology documented. Most PMs follow it.", score: 4 },
      { text: "Methodology embedded in tools and workflows. Enforced by process, not memory.", score: 5 },
    ],
  },
  {
    dimension: "Stakeholder management",
    text: "How do you manage stakeholder communication?",
    options: [
      { text: "Ad hoc updates when asked. No formal plan.", score: 1 },
      { text: "Regular status emails. Same format for everyone.", score: 2 },
      { text: "Communication plan with stakeholder-specific messaging.", score: 3 },
      { text: "Multi-tier reporting: executive summary, steering committee detail, and team-level dashboards from same data.", score: 5 },
    ],
  },
];

const chainMap: Record<string, string> = {
  "Project initiation": "Agent 1 analyzes and challenges every brief — extracting 30+ requirements from even a 2-page document, scoring complexity, and flagging fiction before planning begins.",
  "Planning & estimation": "Agent 2 builds bottom-up WBS with 3-scenario budgets, industry benchmarks, and confidence levels. The CloudSync test exposed a 45% budget gap the team missed.",
  "Risk management": "Agents 1-4 identify, score, and track risks across phases. Agent 6 produces a prevention playbook with 36 reusable rules from every project run.",
  "Quality & governance": "Agent 4 runs a formal Go/No-Go gate with 10 scored criteria. Agent 5 validates with a 5-dimension quality scorecard. In testing, it issued a genuine NO-GO — 8/10 criteria FAIL.",
  "Knowledge management": "Agent 6 compiles a portable JSON knowledge base with 39+ pattern entries, 7 clusters, and trend tracking. Each project makes the next one smarter.",
  "Process standardization": "The 6-agent chain IS the standardized methodology — embedded in SKILL.md files, enforced by JSON schema validation, producing consistent output every run.",
  "Stakeholder management": "Agent 4 auto-generates three report tiers from the same data: executive summary, steering committee detail, and project team dashboards.",
};

function getLevel(score: number) {
  if (score <= 1.9) return { name: "Ad Hoc", color: "#EF4444", desc: "Processes depend on individual effort" };
  if (score <= 2.9) return { name: "Emerging", color: "#F59E0B", desc: "Some structure exists but inconsistent" };
  if (score <= 3.9) return { name: "Defined", color: "#3B82F6", desc: "Standard processes documented and followed" };
  if (score <= 4.4) return { name: "Managed", color: "#10B981", desc: "Processes measured and controlled" };
  return { name: "Optimizing", color: "#059669", desc: "Continuous improvement with institutional learning" };
}

function barColor(score: number) {
  if (score <= 1.9) return "#EF4444";
  if (score <= 2.9) return "#F59E0B";
  if (score <= 3.9) return "#3B82F6";
  return "#10B981";
}

type Phase = "quiz" | "lead" | "results";

export default function Assessment() {
  const [phase, setPhase] = useState<Phase>("quiz");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const selectOption = (qIndex: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: score }));
  };

  const next = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
    } else {
      setPhase("lead");
    }
  };

  const prev = () => {
    if (currentQ > 0) setCurrentQ((c) => c - 1);
  };

  const showResults = () => {
    setPhase("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate scores
  const scores: [string, number][] = questions.map((q, i) => [q.dimension, answers[i] ?? 1]);
  const total = scores.reduce((sum, [, s]) => sum + s, 0);
  const avg = parseFloat((total / questions.length).toFixed(1));
  const level = getLevel(avg);
  const sorted = [...scores].sort((a, b) => a[1] - b[1]);

  const q = questions[currentQ];
  const progressPct = ((currentQ + 1) / questions.length) * 100;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-bg-primary pt-28 pb-16 px-6 text-center">
          <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(46,139,192,0.12)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative max-w-[520px] mx-auto">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-blue mb-4">Free assessment — 3 minutes</p>
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
              How mature is your PM operation?
            </h1>
            <p className="text-lg text-text-secondary/60">
              Score across 7 dimensions. See where AI-powered project analysis helps most.
            </p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-[720px] mx-auto">

            {/* ═══ QUIZ PHASE ═══ */}
            {phase === "quiz" && (
              <>
                {/* Progress bar */}
                <div className="flex items-center gap-3 mb-10">
                  <div className="flex-1 h-1.5 bg-bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-blue rounded-full transition-all duration-400"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs text-text-muted whitespace-nowrap">{currentQ + 1} / {questions.length}</span>
                </div>

                {/* Question card */}
                <div>
                  <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-blue mb-2">{q.dimension}</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-7 leading-snug">{q.text}</h2>

                  <div className="flex flex-col gap-3">
                    {q.options.map((opt, oi) => {
                      const selected = answers[currentQ] === opt.score;
                      return (
                        <button
                          key={oi}
                          onClick={() => selectOption(currentQ, opt.score)}
                          className={`flex items-start gap-3.5 p-4.5 rounded-xl border text-left transition-all duration-200 ${
                            selected
                              ? "border-accent-blue bg-accent-blue/10 shadow-[0_0_0_3px_rgba(46,139,192,0.15)]"
                              : "border-white/10 bg-bg-card hover:border-accent-blue/40 hover:bg-bg-surface"
                          }`}
                        >
                          <div className={`w-5 h-5 min-w-[20px] rounded-full border-2 mt-0.5 flex items-center justify-center transition-all ${
                            selected ? "border-accent-blue" : "border-white/20"
                          }`}>
                            {selected && <div className="w-2.5 h-2.5 rounded-full bg-accent-blue" />}
                          </div>
                          <span className="text-sm text-text-secondary leading-relaxed">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-8">
                    <button
                      onClick={prev}
                      className={`text-sm text-text-muted hover:text-text-primary transition-colors ${currentQ === 0 ? "invisible" : ""}`}
                    >
                      Back
                    </button>
                    {currentQ < questions.length - 1 ? (
                      <button
                        onClick={next}
                        disabled={answers[currentQ] === undefined}
                        className="px-8 py-3 bg-accent-blue text-white font-bold text-sm rounded-lg hover:bg-accent-blue/90 transition-all disabled:bg-bg-surface disabled:text-text-muted disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        onClick={next}
                        disabled={answers[currentQ] === undefined}
                        className="px-8 py-3 bg-accent-orange text-white font-bold text-sm rounded-lg hover:bg-[#D35E1A] transition-all disabled:bg-bg-surface disabled:text-text-muted disabled:cursor-not-allowed"
                      >
                        See my results
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* ═══ LEAD CAPTURE PHASE ═══ */}
            {phase === "lead" && (
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-2">Your results are ready</h2>
                <p className="text-text-muted mb-8">Enter your details to see your full maturity report with personalized recommendations.</p>

                <form
                  action="https://formspree.io/f/xreoyvvq"
                  method="POST"
                  className="max-w-[400px] mx-auto text-left space-y-5"
                  onSubmit={(e) => { e.preventDefault(); showResults(); }}
                >
                  <input type="hidden" name="form_type" value="pm-maturity-assessment" />
                  <input type="hidden" name="maturity_score" value={avg} />
                  <input type="hidden" name="maturity_level" value={level.name} />
                  <div>
                    <label className="block text-xs font-bold text-text-secondary mb-1.5">Name</label>
                    <input type="text" name="name" placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-card text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-secondary mb-1.5">Work email</label>
                    <input type="email" name="email" placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-card text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-secondary mb-1.5">Company <span className="font-normal text-text-muted">(optional)</span></label>
                    <input type="text" name="company" placeholder="Company name"
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-card text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-secondary mb-1.5">Role <span className="font-normal text-text-muted">(optional)</span></label>
                    <select name="role"
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-card text-text-primary text-sm focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/30 transition-colors"
                    >
                      <option value="">Select your role</option>
                      <option>Project Manager</option>
                      <option>Program Manager</option>
                      <option>PMO Leader / Director</option>
                      <option>VP Operations</option>
                      <option>CTO / CIO</option>
                      <option>Consultant</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full px-6 py-3.5 bg-accent-orange text-white font-bold rounded-lg hover:bg-[#D35E1A] transition-all">
                    See my results
                  </button>
                </form>
                <button onClick={showResults} className="mt-4 text-xs text-text-muted hover:text-text-secondary transition-colors">
                  Skip and see results
                </button>
              </div>
            )}

            {/* ═══ RESULTS PHASE ═══ */}
            {phase === "results" && (
              <div>
                {/* Overall score */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-text-primary mb-6">Your PM maturity profile</h2>
                  <div className="inline-flex items-center gap-4 bg-bg-primary border border-white/10 rounded-2xl px-8 py-5">
                    <span className="text-5xl font-bold font-mono text-text-primary">{avg}</span>
                    <div className="text-left">
                      <p className="text-lg font-bold" style={{ color: level.color }}>{level.name}</p>
                      <p className="text-xs text-text-muted">{level.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Dimension bars */}
                <div className="space-y-4 mb-10">
                  {sorted.map(([dim, score]) => (
                    <div key={dim} className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                      <span className="w-full sm:w-[180px] sm:min-w-[180px] text-sm font-medium text-text-secondary sm:text-right">{dim}</span>
                      <div className="flex-1 h-4 bg-bg-surface rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${(score / 5) * 100}%`, backgroundColor: barColor(score) }}
                        />
                      </div>
                      <span className="font-mono text-sm font-bold w-10 min-w-[40px] text-center" style={{ color: barColor(score) }}>{score}/5</span>
                    </div>
                  ))}
                </div>

                {/* Recommendations */}
                <h3 className="text-2xl font-bold text-text-primary mb-5">Recommendations by dimension</h3>
                <div className="space-y-4 mb-10">
                  {sorted.map(([dim, score]) => {
                    const tag = score <= 2
                      ? { label: "Critical gap", cls: "bg-accent-red/20 text-accent-red" }
                      : score <= 3
                      ? { label: "Room to improve", cls: "bg-accent-orange/20 text-accent-orange" }
                      : { label: "Strong", cls: "bg-accent-green/20 text-accent-green" };

                    const rec = score <= 2
                      ? "This is a critical gap. Most project failures trace back to weaknesses in this area."
                      : score <= 3
                      ? "You have foundations in place but execution is inconsistent. Standardization would reduce variance."
                      : "This is a strength. Focus on maintaining and building institutional knowledge here.";

                    return (
                      <div key={dim} className="rounded-xl border border-white/5 bg-bg-card p-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-bold text-text-primary">{dim}</span>
                          <span className={`font-mono text-[11px] font-bold px-2.5 py-0.5 rounded ${tag.cls}`}>{tag.label}</span>
                        </div>
                        <p className="text-sm text-text-secondary mb-2">{rec}</p>
                        <p className="text-xs text-accent-blue font-bold">
                          How the chain helps: {chainMap[dim]}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-bg-primary border border-white/10 p-8 text-center">
                  <h3 className="text-xl font-bold text-text-primary mb-3">See what the chain finds in your project</h3>
                  <p className="text-sm text-text-muted mb-5">Free Agent 1 trial on your actual project brief. Results in 24 hours.</p>
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
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
