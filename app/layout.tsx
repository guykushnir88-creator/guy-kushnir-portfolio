import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guy Kushnir — Senior Project Manager & AI Builder",
  description:
    "Senior Project Manager with 15+ years leading enterprise projects across FinTech, InsurTech, and Cybersecurity. Builder of PM Agent Chain — a 6-agent AI framework automating the full PMI lifecycle.",
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
