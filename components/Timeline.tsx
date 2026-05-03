const stages = [
  {
    phase: "Phase 01", title: "Registration Opening", date: "Oct 2025",
    status: "Ongoing",   statusCls: "text-primary   bg-primary/10   border-primary/20",
    dot: "bg-primary glow-gold",    border: "border-l-primary",    icon: "app_registration",
    iconCls: "text-primary",   dateCls: "text-primary",
    desc: "Global access to the Axeleron portal. Early bird registrations gain exclusive workshop access.",
    flip: false,
  },
  {
    phase: "Phase 02", title: "State Level Trials", date: "March 2026",
    status: "Upcoming",  statusCls: "text-secondary  bg-white/5      border-white/10",
    dot: "bg-secondary",             border: "border-l-secondary",  icon: "account_balance",
    iconCls: "text-secondary", dateCls: "text-secondary",
    desc: "Competitive screenings across 28 states. Top performers advance to zonal elimination rounds.",
    flip: true,
  },
  {
    phase: "Phase 03", title: "Zonal Screenings", date: "Sept 2026",
    status: "Upcoming",  statusCls: "text-secondary  bg-white/5      border-white/10",
    dot: "bg-blue-accent glow-blue", border: "border-l-[#1E90FF]",  icon: "hub",
    iconCls: "text-[#1E90FF]", dateCls: "text-[#1E90FF]",
    desc: "North, South, East, and West clusters meet in technological hubs. Evaluation by industry titans.",
    flip: false,
  },
  {
    phase: "Phase 04", title: "National Grand Finale", date: "Jan 2027",
    status: "Milestone", statusCls: "text-primary   bg-primary/10   border-primary/20",
    dot: "bg-primary glow-gold-lg",  border: "border-l-primary",    icon: "trophy",
    iconCls: "text-primary",   dateCls: "text-primary",
    desc: "The pinnacle event. Final 50 projects compete for national awards, venture funding, and government pathways.",
    flip: true,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-section-gap px-6 md:px-margin-edge bg-oled">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="label-caps text-primary mb-4">The Path to Excellence</p>
          <h2 className="font-space-grotesk text-h2 text-white">
            Road to the <span className="text-primary">Finale</span>
          </h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px timeline-line opacity-25" />

          <div className="space-y-20 md:space-y-28">
            {stages.map((s) => (
              <div
                key={s.title}
                className={`relative flex flex-col ${s.flip ? "md:flex-row-reverse" : "md:flex-row"} items-start md:items-center`}
              >
                {/* Text */}
                <div className={`md:w-1/2 mb-6 md:mb-0 pl-12 md:pl-0 ${s.flip ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <span className={`chip mb-4 ${s.statusCls}`}>{s.status}</span>
                  <h3 className="font-space-grotesk text-h2 text-white mb-3">{s.title}</h3>
                  <p className="font-manrope text-body-md text-on-surface-variant mb-3 max-w-sm">{s.desc}</p>
                  <p className={`font-space-grotesk text-h3 font-bold ${s.dateCls}`}>{s.date}</p>
                </div>

                {/* Dot */}
                <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full ${s.dot} border-4 border-oled z-20`} />

                {/* Card */}
                <div className={`md:w-1/2 pl-12 md:pl-0 ${s.flip ? "md:pr-16" : "md:pl-16"}`}>
                  <div className={`glass-card p-8 border-l-4 ${s.border} hover:scale-[1.02] transition-transform duration-300`}>
                    <span className={`material-symbols-outlined text-4xl mb-4 block ${s.iconCls}`}
                      style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                    <p className="label-caps text-white/50 mb-2">{s.phase}</p>
                    <h4 className="font-space-grotesk font-bold text-lg text-white uppercase tracking-tight">
                      {s.phase === "Phase 01" ? "Identity Validation"
                        : s.phase === "Phase 02" ? "Regional Dominance"
                        : s.phase === "Phase 03" ? "Collaborative Friction"
                        : "The Summit of Innovation"}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {[
            { val: "12",   color: "text-primary",    label: "Key Milestones" },
            { val: "450+", color: "text-secondary",  label: "Regional Hubs"  },
            { val: "1.2M", color: "text-[#1E90FF]",  label: "Grant Fund ($)" },
            { val: "2027", color: "text-white",      label: "Summit Year"    },
          ].map((s) => (
            <div key={s.label} className="glass-card p-6 text-center">
              <p className={`font-space-grotesk text-h3 ${s.color}`}>{s.val}</p>
              <p className="label-caps text-on-surface-variant mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
