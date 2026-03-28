const badges = [
  { label: "OAuth 2.1", icon: "🔐" },
  { label: "RBAC + Scoped Tokens", icon: "🛡️" },
  { label: "HITL Gates", icon: "🚦" },
  { label: "Audit + Monitoring", icon: "📋" },
];

export default function Security() {
  return (
    <section id="security" className="py-16 px-6 bg-bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl border border-white/5 bg-bg-card">
          <div>
            <span className="font-mono text-accent-blue text-xs tracking-widest uppercase">
              Security
            </span>
            <p className="text-text-primary font-medium mt-1">
              HITL gates on every destructive action. 4-layer enterprise
              security.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-accent-blue/20 bg-accent-blue/5"
              >
                <span>{b.icon}</span>
                <span className="font-mono text-xs text-text-secondary">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
