const tracks = [
  {
    icon: "psychology",
    title: "Machine Learning",
    desc: "Deep neural networks and generative AI systems shaping the future.",
  },
  {
    icon: "precision_manufacturing",
    title: "Robotics & Automation",
    desc: "Autonomous machines and advanced sensory feedback loops.",
  },
  {
    icon: "hub",
    title: "Quantum Technology",
    desc: "Harnessing subatomic phenomena for extreme computation.",
  },
  {
    icon: "health_metrics",
    title: "Biotech & Health",
    desc: "Engineering biology for sustainable and resilient longevity.",
  },
  {
    icon: "trending_up",
    title: "Financial Growth",
    desc: "DeFi architectures and algorithmic economic forecasting.",
  },
];

export default function DomainTracks() {
  return (
    <section
      id="tracks"
      className="py-24 md:py-[160px] px-6 md:px-16 bg-[#100e08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="font-[var(--font-space-grotesk)] text-[#e6c364] text-[12px] tracking-[0.2em] uppercase font-bold mb-4">
            Innovation Frontiers
          </p>
          <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-[#e9e1d7]">
            Explore Global Tracks
          </h2>
        </div>

        {/* Track Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="glass-card p-8 group hover:bg-[#221f19] transition-all duration-500 glow-gold cursor-default"
            >
              <div className="mb-6">
                <span
                  className="material-symbols-outlined text-[#e6c364] text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {track.icon}
                </span>
              </div>
              <h3 className="font-[var(--font-space-grotesk)] text-xl font-semibold mb-4 text-white leading-snug">
                {track.title}
              </h3>
              <p className="text-[#d0c5b2] font-manrope text-sm leading-relaxed">
                {track.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
