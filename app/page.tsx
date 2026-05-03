export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Actual Time Spent<br />
          <span className="text-[#58a6ff]">Reviewing Pull Requests</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your GitHub org and instantly see how long each developer spends on PR reviews. Spot bottlenecks, balance workloads, and ship faster.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          {[
            { value: "2.4×", label: "Faster review cycles" },
            { value: "87%", label: "Teams reduce bottlenecks" },
            { value: "<5 min", label: "Setup time" }
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#8b949e] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · unlimited repos</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "GitHub webhook integration",
              "Per-reviewer time analytics",
              "Bottleneck detection alerts",
              "Team velocity dashboard",
              "CSV & JSON data export",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does time tracking work?",
              a: "We use GitHub webhooks to detect when a reviewer opens a PR and browser activity signals to measure active reading time — not just time-to-approve."
            },
            {
              q: "Is my code or PR content stored?",
              a: "No. We only store metadata: PR IDs, reviewer IDs, timestamps, and computed durations. Your code never leaves GitHub."
            },
            {
              q: "Which GitHub plans are supported?",
              a: "PR Time Tracker works with GitHub Free, Team, and Enterprise Cloud. It requires webhook access to your organization or repositories."
            }
          ].map((item) => (
            <div key={item.q} className="border border-[#21262d] rounded-lg bg-[#161b22] p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} PR Time Tracker. All rights reserved.
      </footer>
    </main>
  );
}
