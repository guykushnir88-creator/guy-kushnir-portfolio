# Claude Code Prompt — Build My Portfolio Website

## STEP 0: Install the AI Website Manager Skill

Before starting, install the website management skill:

```bash
claude skill install ai-website-manager.skill
```

This skill handles the full workflow: discovery → account setup → tech stack → build → deploy → maintain. It includes troubleshooting for 30+ common errors and guides deployment to Vercel with GitHub auto-deploy.

Follow the skill's phased approach, but use ALL the content and specifications below as the source material. Do NOT ask me discovery questions — everything is defined here.

---

## Who I Am

### Personal

Guy Kushnir. Lives in Even Yehuda, Israel. Father of two. B.Sc. in Computer Science & Mathematics from Netanya Academic College. Former Head of Radar and Anti-Aircraft Control Team in the IDF.

### Professional Summary

Senior Project Manager with 15+ years of experience leading complex enterprise projects across FinTech, InsurTech, and Cybersecurity. I've managed delivery for global clients including Lloyd's of London, KPMG, HISCOX, Progressive, Liberty Mutual, USAA, BNP Paribas, UBS, and Santander. Specialized in Agile/Scrum transformations, cross-functional team leadership (R&D, QA, Product, DevOps, BI), and stakeholder management with C-suite executives across international markets.

Most recently, I built the PM Agent Chain — a 6-agent AI framework that automates the entire PMI project lifecycle with evidence-based handoffs and quality gates. This is where PM expertise meets AI engineering.

### Career Timeline

**Novidea — Senior Project Manager (2024 – Present)**
Enterprise SaaS for insurance. Led Salesforce TSO platform delivery for clients including HISCOX, NDR, Ergo, and TigerMar. Established the company's first PMO infrastructure from scratch. Built velocity dashboards and automated reporting in Jira that cut status meeting time by 50%. Coordinated distributed teams across Israel, US, and EMEA.

**Acronis Cyber Security — Project Manager (2022 – 2024)**
Cybersecurity platform. Led enterprise implementation and managed system integration for multiple acquired teams, reducing onboarding time by 25-30%. Optimized multi-cloud infrastructure costs by ~45% through AWS and Azure strategy. Built Tableau dashboards for delivery throughput and capacity planning.

**bolttech — Delivery Manager (2019 – 2022)**
InsurTech platform. Managed the Markets domain, onboarding new carriers and insurance products under complex regulatory requirements. Led the Direct to Consumer USAA initiative, scaling to all 50 U.S. states within 1 year. Worked with Progressive, Liberty Mutual, HISCOX, and QBE. Mentored 3 team members who were promoted to Team Lead and Scrum Master roles.

**Personatics — Release Manager (2016 – 2019)**
FinTech personalization platform. Owned weekly enterprise release cycles for BNP Paribas, US Bank, Santander, and UBS. Managed releases in regulated, high-sensitivity banking environments across AWS, Linux, and Windows.

**Sintech Media — Project Manager (2011 – 2016)**
Media technology. Led end-to-end delivery for live and on-demand media platforms for global broadcasters.

### Skills & Tools

Jira, Confluence, Salesforce, Tableau, AWS, Microsoft Azure, Multi-Cloud Environments, API Testing, Linux, Windows, Agile, Waterfall, SQL, Claude AI, MCP Protocol, JSON Schema.

---

## What I Want Built

A portfolio website with PM Agent Chain as the hero project. Single-page app, dark theme, deployed to Vercel via GitHub. English language.

---

## Tech Stack (per ai-website-manager skill)

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Next.js 15 + TypeScript | Fast, SEO-friendly |
| Styling | Tailwind CSS | Responsive, no custom CSS |
| CMS | Sanity v3 | Edit content without code (optional — only if I want to update content later) |
| Deployment | Vercel | Free tier, auto-deploy from GitHub |
| Version Control | GitHub | Code backup + deploy trigger |
| Animations | Framer Motion | Scroll-triggered reveals |

If Sanity CMS adds too much complexity for a portfolio site, skip it and hardcode the content. I can always add CMS later.

---

## Design Direction

- **Dark theme** — background: `#0B1628`, text: `#C8D6E5`, accent: `#2E8BC0`
- **Monospace accents** for technical elements (JetBrains Mono or Fira Code)
- **Clean sans-serif** for body (Inter)
- **Subtle blue glow** on interactive elements
- **Smooth scroll** between sections
- **Mobile responsive** — must work on phone and tablet
- **No generic AI aesthetics** — no purple gradients, no particles, no stock photos
- **Design references:** Dark tech dashboards, terminal-inspired UIs. Think Linear.app or Vercel's own site — clean, confident, technical.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| bg-primary | `#0B1628` | Main background |
| bg-card | `#0D1F30` | Card backgrounds |
| bg-surface | `#111D2E` | Elevated surfaces |
| text-primary | `#EDF2F7` | Headings |
| text-secondary | `#C8D6E5` | Body text |
| text-muted | `#5B7B9A` | Labels, captions |
| accent-blue | `#2E8BC0` | Primary accent |
| accent-green | `#27AE60` | Success states |
| accent-orange | `#E67E22` | Warning / monitoring |
| accent-purple | `#8E44AD` | Validation |
| accent-teal | `#1D9E75` | Closing |
| accent-red | `#E74C3C` | FAIL states |

---

## Site Sections (in scroll order)

### 1. Hero Section

Full viewport. Confident, not flashy.

```
Guy Kushnir
Senior Project Manager | AI Builder

15+ years leading enterprise projects across FinTech, InsurTech, and Cybersecurity.
Now building AI systems that automate what PMs do manually.

[View PM Agent Chain ↓]  [Get in Touch →]
```

Stats row at bottom of hero (animate counting up on scroll):

```
15+ Years Experience  |  6 AI Agents  |  83 Files  |  Grade A Quality  |  Schema v1.3.0
```

### 2. About Me

Two-column layout: text left, key facts right.

**Left column:**
```
I'm a project manager who builds AI systems.

For the past 15 years, I've led complex enterprise projects for companies like 
Lloyd's of London, HISCOX, Progressive, USAA, BNP Paribas, UBS, and Santander. 
I've built PMOs from scratch, cut meeting time by 50% with automated dashboards, 
and scaled products across all 50 U.S. states.

Living in Even Yehuda, Israel, father of two. B.Sc. in Computer Science & Mathematics.

My latest project — PM Agent Chain — is where everything converges: PM methodology, 
AI automation, and systems thinking. 6 autonomous agents running the full PMI lifecycle, 
with evidence-based handoffs and quality gates.
```

**Right column — key facts cards:**
- 🏢 Novidea, Acronis, bolttech, Personatics
- 🌍 Israel, US, EMEA — distributed teams
- 📊 Jira, Confluence, Salesforce, Tableau, AWS, Azure
- 🎓 B.Sc. Computer Science & Mathematics
- 🎖️ IDF — Head of Radar & Anti-Aircraft Control

### 3. Career Timeline

Vertical timeline, most recent first. Each entry is a card:

```
2024 – Present | Novidea | Senior Project Manager
Enterprise SaaS · Insurance · Salesforce TSO · Built PMO from scratch
Clients: HISCOX, NDR, Ergo, TigerMar

2022 – 2024 | Acronis | Project Manager
Cybersecurity · Multi-cloud · AWS/Azure · Tableau dashboards
Reduced cloud costs by 45% · Cut onboarding time by 25-30%

2019 – 2022 | bolttech | Delivery Manager
InsurTech · Regulatory compliance · USAA Go-To-Market
Clients: Progressive, Liberty Mutual, HISCOX, QBE · Scaled to 50 states

2016 – 2019 | Personatics | Release Manager
FinTech · Banking · Enterprise release cycles
Clients: BNP Paribas, US Bank, Santander, UBS

2011 – 2016 | Sintech Media | Project Manager
Media tech · Live & on-demand platforms · Global broadcasters
```

### 4. PM Agent Chain — Hero Project

This section gets the most space. It's the centerpiece.

#### 4a. Overview

```
PM Agent Chain
AI-Powered Project Lifecycle Management

6 autonomous agents covering the full PMI lifecycle — from initiation 
to closing — connected by validated JSON handoffs (Schema v1.3.0) that 
ensure zero information loss between phases.

Built with Claude AI (Anthropic) + MCP Protocol.
```

#### 4b. Interactive Architecture Diagram

6 clickable agent cards in a horizontal flow (stacks vertically on mobile):

| # | Name | Role | Color | Evidence Metrics |
|---|------|------|-------|-----------------|
| 1 | Initiation | Requirements | `#2E8BC0` | 5 docs, 4,820 words |
| 2 | Planning | WBS + Gantt + Waves | `#27AE60` | 6 docs, 4 waves |
| 3 | Execution | Wave execution | `#3B8BD4` | 17/18 tasks done |
| 4 | Monitoring | KPI + EV | `#E67E22` | SPI 0.93, CPI 1.04 |
| 5 | Validation | Goal-backward QA | `#8E44AD` | Grade A (90.7%) |
| 6 | Closing | Retrospective | `#1D9E75` | 9.3/10 satisfaction |

Show flow arrows between agents. FAIL feedback loop from Agent 5 → Agent 3.

Clicking an agent expands to show its outputs and evidence.

**Quality scoring weights** (show as small bar chart or badges):
Functionality 30% · Performance 20% · Security 20% · Usability 15% · Reliability 15%

#### 4c. v1.3.0 Features Grid

2x2 grid of feature cards:

**Evidence-before-claims** — `verification_evidence`
Every agent must prove work with metrics: docs, word count, coverage %. No handoff without proof.

**Goal-backward verification** — `goal_backward_check`
Verify what must be TRUE, not what was done. Truths → artifacts → wiring. Agent 5 can't score without it.

**Context checkpoints** — `context_checkpoint`
Crash recovery. Checkpoint after each deliverable. Next session resumes — no restart.

**Wave execution** — `wave_execution`
Tasks grouped by dependency. Sequential now, parallel-ready for custom dashboard.

#### 4d. JSON Schema Preview

Syntax-highlighted code block:

```json
{
  "source_agent": "planning-agent",
  "target_agent": "execution-agent",
  "payload_version": "1.3.0",
  "status": "complete",
  "verification_evidence": {
    "metrics": { "documents_produced": 6, "requirements_covered": 100 }
  },
  "goal_backward_check": {
    "truths": [{ "id": "T-04", "statement": "All requirements decomposed", "status": "verified" }],
    "overall_goal_achieved": true
  },
  "context_checkpoint": {
    "last_completed_deliverable": "Sprint plan",
    "can_resume_from_here": true
  }
}
```

Caption: "9 schemas · 21 shared types · 8 required fields · Full traceability"

#### 4e. Tool Ecosystem (compact grid)

6 categories, 18 tools:
- Knowledge: Notion, Google, Firecrawl, Brave, Seq. Thinking
- Design: Figma, Zeplin
- Dev Tools: Jira, GitHub, Linear, Trello, Monday, ClickUp
- Infrastructure: PostgreSQL, MongoDB, Supabase, Docker, K8s, AWS
- Observability: Sentry, Grafana
- Communication: Slack, Teams, Zapier

### 5. Blue Horizon Case Study

#### 5a. Brief vs. Reality

| Brief Said | Agent 1 Found |
|------------|---------------|
| ✗ "26 parcels ready for sale" | ✓ 0 parcels owned |
| ✗ "Conversion marketplace" | ✓ Featured Properties for 3-5 |
| ✗ "6-8 week professional build" | ✓ 2-weekend, $200-535 budget |

Caption: "The agent asked the right questions before a single task was planned."

#### 5b. Results (animated metric cards)

- **25** documents produced
- **16,320** words with evidence
- **31** truths verified
- **4 waves**, 15 tasks
- **6** checkpoints
- **90.7%** Grade A

#### 5c. Quality Scorecard (animated bars)

Functionality 95% · Performance 88% · Security 90% · Usability 85% · Reliability 92%

### 6. Live Dashboard Demo

Embed an interactive dashboard with 5 clickable tabs:

- **Pipeline** — 6 agent cards with status, evidence bars, context health
- **Waves** — 4 execution waves with task dependencies
- **Goals** — Truth verification across all agents
- **Context** — Budget tracking, cumulative usage, checkpoints
- **Remediation** — FAIL cycle history

Use Blue Horizon data for all values. This must be interactive — real clicks, real tab switching.

### 7. Security (compact)

Four badges: OAuth 2.1 · RBAC + scoped tokens · HITL gates · Audit + monitoring

One-liner: "HITL gates on every destructive action. 4-layer enterprise security."

### 8. Contact

```
Let's talk

Whether you want to see the PM Agent Chain in action, 
discuss a project, or just say hello.

Email: Guykushnir88@gmail.com
LinkedIn: [link]
```

CTA button: "Let's try it on your project →" (mailto link)

---

## Navigation

Fixed top navbar, transparent on hero, dark on scroll:
- Left: "GK" or "Guy Kushnir"
- Right: About | Experience | PM Agent Chain | Case Study | Contact
- Smooth scroll to sections
- Mobile: hamburger menu

---

## Build Order (follow ai-website-manager skill phases)

1. **Setup**: Next.js + Tailwind + GitHub repo + Vercel deploy
2. **Layout**: Navbar + Footer
3. **Hero**: Full viewport with stats
4. **About + Timeline**: Bio and career
5. **PM Agent Chain**: Architecture diagram, features, schema, tools
6. **Case Study**: Blue Horizon with metrics
7. **Dashboard**: Interactive 5-view component (build last — heaviest)
8. **Security + Contact**: Compact sections
9. **Polish**: Animations, mobile responsive, performance

After each section: commit → push → verify on Vercel live URL.

---

## Important Rules

1. **All content is provided above.** No placeholder "Lorem ipsum" — use my actual text.
2. **No CMS for v1** — hardcode content. Add Sanity later if I want to edit without code.
3. **Dark theme only.** No light mode.
4. **English only.** No Hebrew on this site.
5. **No stock photos.** The interactive components are the visuals.
6. **Mobile-first.** Agent chain stacks vertically. Dashboard works on mobile (simplified if needed).
7. **Deploy after every section** so I can see progress live.
8. **Use the ai-website-manager skill's troubleshooting reference** if any errors occur during build or deploy.
