const tracks = [
  { icon: "psychology",             title: "Machine Learning",     desc: "Deep neural networks and generative AI systems shaping the future." },
  { icon: "precision_manufacturing",title: "Robotics & Automation",desc: "Autonomous machines and advanced sensory feedback loops." },
  { icon: "hub",                    title: "Quantum Technology",   desc: "Harnessing subatomic phenomena for extreme computation." },
  { icon: "health_metrics",         title: "Biotech & Health",     desc: "Engineering biology for sustainable and resilient longevity." },
  { icon: "trending_up",            title: "Financial Growth",     desc: "DeFi architectures and algorithmic economic forecasting." },
];

export default function DomainTracks() {
  return (
    <section id="tracks" className="py-section-gap px-6 md:px-margin-edge bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="label-caps text-primary mb-4">Innovation Frontiers</p>
          <h2 className="font-space-grotesk text-h2 text-on-surface">
            Explore Global Tracks
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-gutter">
          {tracks.map((t) => (
            <div
              key={t.title}
              className="glass-card p-8 hover:bg-surface-container transition-all duration-500 cursor-default group"
            >
              <div className="mb-6">
                <span
                  className="material-symbols-outlined text-primary text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {t.icon}
                </span>
              </div>
              <h3 className="font-space-grotesk font-semibold text-xl text-white mb-3 leading-snug">
                {t.title}
              </h3>
              <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
