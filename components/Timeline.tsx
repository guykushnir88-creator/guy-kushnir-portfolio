"use client";

import { useRef } from "react";
import { useInView } from "./hooks/useInView";

const jobs = [
  {
    period: "2024 – Present",
    company: "Novidea",
    role: "Senior Project Manager",
    tags: ["Enterprise SaaS", "Insurance", "Salesforce TSO"],
    description: "Built PMO infrastructure from scratch",
    highlights: [
      "Clients: HISCOX, NDR, Ergo, TigerMar",
      "Cut status meeting time by 50% with Jira velocity dashboards",
      "Coordinated distributed teams across Israel, US, and EMEA",
    ],
    color: "#2E8BC0",
  },
  {
    period: "2022 – 2024",
    company: "Acronis Cyber Security",
    role: "Project Manager",
    tags: ["Cybersecurity", "Multi-cloud", "AWS / Azure"],
    description: "Enterprise implementation & system integration",
    highlights: [
      "Reduced cloud infrastructure costs by ~45%",
      "Cut onboarding time by 25–30%",
      "Built Tableau dashboards for delivery throughput & capacity planning",
    ],
    color: "#27AE60",
  },
  {
    period: "2019 – 2022",
    company: "bolttech",
    role: "Delivery Manager",
    tags: ["InsurTech", "Regulatory compliance", "USAA"],
    description: "Managed Markets domain, onboarding carriers & products",
    highlights: [
      "Clients: Progressive, Liberty Mutual, HISCOX, QBE",
      "Led USAA Direct to Consumer initiative — scaled to all 50 U.S. states in 1 year",
      "Mentored 3 team members promoted to Team Lead & Scrum Master",
    ],
    color: "#3B8BD4",
  },
  {
    period: "2016 – 2019",
    company: "Personatics",
    role: "Release Manager",
    tags: ["FinTech", "Banking", "Enterprise releases"],
    description: "Owned weekly release cycles for top-tier banks",
    highlights: [
      "Clients: BNP Paribas, US Bank, Santander, UBS",
      "Managed releases in regulated, high-sensitivity banking environments",
      "Infrastructure: AWS, Linux, Windows",
    ],
    color: "#8E44AD",
  },
  {
    period: "2011 – 2016",
    company: "Sintech Media",
    role: "Project Manager",
    tags: ["Media tech", "Live platforms", "On-demand"],
    description: "End-to-end delivery for global broadcasters",
    highlights: [
      "Live and on-demand media platforms",
      "Global broadcaster clients",
    ],
    color: "#1D9E75",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="timeline" ref={ref} className="py-24 px-6 bg-bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-accent-blue text-sm tracking-widest uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
            Career Timeline
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/50 via-accent-blue/20 to-transparent" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <div
                key={job.company}
                className={`relative pl-12 md:pl-16 transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Dot */}
                <div
                  className="absolute left-2.5 md:left-4 top-5 w-3 h-3 rounded-full border-2 border-bg-primary"
                  style={{ backgroundColor: job.color }}
                />

                <div className="bg-bg-card border border-white/5 rounded-xl p-5 md:p-6 card-glow transition-all duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="font-mono text-xs text-text-muted mb-1">
                        {job.period}
                      </p>
                      <h3 className="text-text-primary font-semibold text-lg">
                        {job.company}
                      </h3>
                      <p
                        className="text-sm font-medium mt-0.5"
                        style={{ color: job.color }}
                      >
                        {job.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded font-mono bg-bg-surface text-text-muted border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-text-muted text-sm mb-3">
                    {job.description}
                  </p>

                  <ul className="space-y-1.5">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: job.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
