const stages = [
  {
    phase: "Phase 01",
    title: "Registration Opening",
    date: "Oct 2025",
    status: "Ongoing",
    statusColor: "text-[#e6c364]",
    statusBg: "bg-[#e6c364]/10 border-[#e6c364]/20",
    dotColor: "bg-[#e6c364]",
    dotGlow: "shadow-[0_0_20px_rgba(201,168,76,0.4)]",
    borderAccent: "border-[#e6c364]",
    dateColor: "text-[#e6c364]",
    icon: "app_registration",
    iconColor: "text-[#e6c364]",
    phaseTag: "Identity Validation",
    desc: "Global access to the Axeleron portal. Start your journey by submitting your vision for a smarter digital future. Early bird registrations gain exclusive workshop access.",
    align: "left",
  },
  {
    phase: "Phase 02",
    title: "State Level Trials",
    date: "March 2026",
    status: "Upcoming",
    statusColor: "text-[#c5c6ca]",
    statusBg: "bg-white/5 border-white/10",
    dotColor: "bg-[#c5c6ca]",
    dotGlow: "",
    borderAccent: "border-[#c5c6ca]",
    dateColor: "text-[#c5c6ca]",
    icon: "account_balance",
    iconColor: "text-[#c5c6ca]",
    phaseTag: "Regional Dominance",
    desc: "Competitive screenings across 28 states. Top performers from each region advance to the high-stakes zonal elimination rounds.",
    align: "right",
  },
  {
    phase: "Phase 03",
    title: "Zonal Screenings",
    date: "Sept 2026",
    status: "Upcoming",
    statusColor: "text-[#c5c6ca]",
    statusBg: "bg-white/5 border-white/10",
    dotColor: "bg-[#1E90FF]",
    dotGlow: "shadow-[0_0_20px_rgba(30,144,255,0.3)]",
    borderAccent: "border-[#1E90FF]",
    dateColor: "text-[#1E90FF]",
    icon: "hub",
    iconColor: "text-[#1E90FF]",
    phaseTag: "Collaborative Friction",
    desc: "North, South, East, and West clusters meet in technological hubs. Rigorous evaluation by industry titans and national strategists.",
    align: "left",
  },
  {
    phase: "Phase 04",
    title: "National Grand Finale",
    date: "Jan 2027",
    status: "Milestone",
    statusColor: "text-[#e6c364]",
    statusBg: "bg-[#e6c364]/10 border-[#e6c364]/20",
    dotColor: "bg-[#e6c364]",
    dotGlow: "shadow-[0_0_30px_rgba(201,168,76,0.6)]",
    borderAccent: "border-[#e6c364]",
    dateColor: "text-[#e6c364]",
    icon: "trophy",
    iconColor: "text-[#e6c364]",
    phaseTag: "The Summit of Innovation",
    desc: "The pinnacle event. A multi-day expo showcasing the final 50 projects. National awards, venture funding, and government integration pathways.",
    align: "right",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 md:py-[160px] px-6 md:px-16 bg-[#0a0a0a] relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-[var(--font-space-grotesk)] text-[#e6c364] text-[12px] tracking-[0.2em] uppercase font-bold mb-4">
            The Path to Excellence
          </p>
          <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-white">
            Road to the <span className="text-[#e6c364]">Finale</span>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px timeline-line opacity-30" />

          <div className="space-y-20 md:space-y-32">
            {stages.map((stage, i) => {
              const isRight = stage.align === "right";
              return (
                <div
                  key={stage.title}
                  className={`relative flex flex-col md:flex-row ${
                    isRight ? "md:flex-row-reverse" : ""
                  } items-start md:items-center w-full`}
                >
                  {/* Text Side */}
                  <div
                    className={`md:w-1/2 mb-8 md:mb-0 pl-12 md:pl-0 ${
                      isRight
                        ? "md:pl-16 text-left"
                        : "md:pr-16 md:text-right text-left"
                    }`}
                  >
                    <div
                      className={`inline-block px-4 py-1 rounded-full border mb-4 ${stage.statusBg}`}
                    >
                      <span
                        className={`font-[var(--font-space-grotesk)] text-[11px] tracking-[0.2em] uppercase font-bold ${stage.statusColor}`}
                      >
                        {stage.status}
                      </span>
                    </div>
                    <h3 className="font-[var(--font-space-grotesk)] text-2xl md:text-[32px] font-bold tracking-[-0.01em] text-white mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-[#d0c5b2] font-manrope text-sm md:text-base leading-relaxed mb-3">
                      {stage.desc}
                    </p>
                    <p
                      className={`font-[var(--font-space-grotesk)] text-xl font-bold ${stage.dateColor}`}
                    >
                      {stage.date}
                    </p>
                  </div>

                  {/* Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 ${
                      i === stages.length - 1 ? "w-10 h-10" : "w-8 h-8"
                    } rounded-full ${stage.dotColor} ${stage.dotGlow} border-4 border-[#0a0a0a] z-20`}
                  />

                  {/* Card Side */}
                  <div
                    className={`md:w-1/2 pl-12 md:pl-0 ${
                      isRight ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <div
                      className={`glass-card p-8 rounded-xl border-l-4 ${stage.borderAccent} hover:scale-105 transition-all duration-300`}
                    >
                      <span
                        className={`material-symbols-outlined text-4xl mb-4 block ${stage.iconColor}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {stage.icon}
                      </span>
                      <p className="text-white/60 text-xs font-[var(--font-space-grotesk)] tracking-[0.2em] uppercase mb-2">
                        {stage.phase}
                      </p>
                      <h4 className="text-lg font-bold text-white uppercase tracking-tight font-[var(--font-space-grotesk)]">
                        {stage.phaseTag}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "12", color: "text-[#e6c364]", label: "Key Milestones" },
            { val: "450+", color: "text-[#c5c6ca]", label: "Regional Hubs" },
            { val: "1.2M", color: "text-[#1E90FF]", label: "Grant Fund ($)" },
            { val: "2027", color: "text-white", label: "Summit Year" },
          ].map((s) => (
            <div
              key={s.label}
              className="glass-card p-6 rounded-lg text-center"
            >
              <p
                className={`font-[var(--font-space-grotesk)] text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] ${s.color}`}
              >
                {s.val}
              </p>
              <p className="font-[var(--font-space-grotesk)] text-[11px] tracking-[0.2em] uppercase font-bold text-[#d0c5b2] mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
