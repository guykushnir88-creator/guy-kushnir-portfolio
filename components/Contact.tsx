"use client";

import { useRef } from "react";
import { useInView } from "./hooks/useInView";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-accent-blue text-sm tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mt-2 mb-6">
            Let&apos;s talk
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Whether you want to see the PM Agent Chain in action, discuss a
            project, or just say hello.
          </p>

          {/* Contact cards */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="mailto:Guykushnir88@gmail.com"
              className="flex items-center gap-3 px-5 py-4 rounded-xl border border-white/10 bg-bg-card hover:border-accent-blue/40 hover:bg-bg-surface transition-all duration-200 group"
            >
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-0.5">
                  Email
                </p>
                <p className="text-text-primary text-sm group-hover:text-accent-blue transition-colors">
                  Guykushnir88@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/guy-kushnir-pm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-4 rounded-xl border border-white/10 bg-bg-card hover:border-accent-blue/40 hover:bg-bg-surface transition-all duration-200 group"
            >
              <span className="text-2xl">💼</span>
              <div className="text-left">
                <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-0.5">
                  LinkedIn
                </p>
                <p className="text-text-primary text-sm group-hover:text-accent-blue transition-colors">
                  linkedin.com/in/guy-kushnir-pm
                </p>
              </div>
            </a>
          </div>

          {/* Primary CTA */}
          <a
            href="mailto:Guykushnir88@gmail.com?subject=PM Agent Chain — Let's try it on my project&body=Hi Guy,%0A%0AI'd like to discuss running PM Agent Chain on my project.%0A%0A"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue/90 transition-all duration-200 hover:shadow-blue-glow-lg text-base"
          >
            Let&apos;s try it on your project →
          </a>
        </div>
      </div>
    </section>
  );
}
