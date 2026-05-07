export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Fintech Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Monitor Stripe Webhook{' '}
          <span className="text-[#58a6ff]">Delivery Health</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Real-time dashboard tracking webhook delivery success rates, retry attempts, and failure patterns — so you catch issues before your customers do.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $19/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">99.9%</div>
            <div className="text-xs text-[#8b949e] mt-1">Delivery visibility</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Real-time</div>
            <div className="text-xs text-[#8b949e] mt-1">Failure alerts</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">All events</div>
            <div className="text-xs text-[#8b949e] mt-1">Retry tracking</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl p-8 bg-[#161b22] text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Live webhook delivery dashboard',
              'Failure & retry pattern analytics',
              'Instant email alerts on failures',
              'Full Stripe event history',
              'Exportable reports',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Start Monitoring
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does it connect to Stripe?</h3>
            <p className="text-[#8b949e] text-sm">You add our endpoint as a webhook destination in your Stripe dashboard. We receive all events and track delivery status, retries, and failures automatically.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What events are tracked?</h3>
            <p className="text-[#8b949e] text-sm">All Stripe webhook event types are tracked — payments, subscriptions, disputes, refunds, and more. You get full visibility across every event category.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How quickly are failure alerts sent?</h3>
            <p className="text-[#8b949e] text-sm">Alerts are sent within seconds of a delivery failure being detected, so you can investigate and resolve issues before they impact your users.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Stripe Webhook Health Monitor. All rights reserved.
      </footer>
    </main>
  )
}
