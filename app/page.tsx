export default function Home() {
  return (
    <div className="container min-h-screen flex flex-col justify-center">
      <section className="relative z-10 py-20">
        <h1 className="leading-none mb-8">
          Industrial <span className="text-secondary opacity-50 block">Precision.</span>
          Creative <span className="text-accent">Fluidity.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-dim pt-12">
          <div className="glass-panel">
            <h3 className="text-xl mb-4 text-accent">The Lab</h3>
            <p className="text-lg opacity-80 leading-relaxed">
              We don't just print. We engineer art. Our facility is a convergence of strict tolerances and boundless imagination.
              Precision is our language; fluid forms are our poetry.
            </p>
          </div>
          <div className="flex items-end justify-end">
            <a href="/work" className="btn-primary">
              Explore Our Logic
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed bottom-10 right-10 font-mono text-xs opacity-30 rotate-90 origin-bottom-right">
        COORD: 28.7041° N, 77.1025° E
      </div>
    </div>
  );
}
