import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PM Agent Chain — AI-Powered Project Lifecycle Analysis | Guy Kushnir",
  description:
    "6 autonomous AI agents covering the full PMI lifecycle. 45 auditable deliverables in 91 minutes. Built by Guy Kushnir — 15+ years leading enterprise projects across FinTech, InsurTech, and Cybersecurity.",
  keywords: [
    "Guy Kushnir",
    "Project Manager",
    "AI Builder",
    "PM Agent Chain",
    "FinTech",
    "InsurTech",
    "Cybersecurity",
    "Agile",
    "Scrum",
  ],
  openGraph: {
    title: "Guy Kushnir — Senior Project Manager & AI Builder",
    description:
      "15+ years leading enterprise projects. Now building AI systems that automate what PMs do manually.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg-primary text-text-secondary antialiased">
        {children}
      </body>
    </html>
  );
}
