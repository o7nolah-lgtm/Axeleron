import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Register — Axeleron Expo 2027",
  description:
    "Register your team for Axeleron Expo 2027 — India's premier AI & Robotics Innovation Challenge.",
};

const tracks = [
  { icon: "psychology", name: "Machine Learning", fill: true },
  { icon: "precision_manufacturing", name: "Robotics & Automation", fill: true },
  { icon: "hub", name: "Quantum Technology", fill: false },
  { icon: "health_metrics", name: "Biotech & Health", fill: true },
  { icon: "trending_up", name: "Financial Growth", fill: true },
];

const steps = [
  {
    num: "01",
    title: "Send Registration Email",
    desc: 'Email us at urjionixtechnologies@gmail.com with subject "Team Registration — Axeleron 2027". Include your team name, college, track, and team members.',
    icon: "mail",
  },
  {
    num: "02",
    title: "Receive Confirmation",
    desc: "Our team will respond within 48 hours with your registration ID, submission portal access, and orientation documents.",
    icon: "mark_email_read",
  },
  {
    num: "03",
    title: "Prepare Your Dossier",
    desc: "Build your project, document your architecture, record your demo video, and compile your Technical Dossier per our guidelines.",
    icon: "description",
  },
  {
    num: "04",
    title: "State Level Screening",
    desc: "Submit your dossier before the March 2026 deadline and await your state-level evaluation schedule.",
    icon: "account_balance",
  },
];

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 blue-leak -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e6c364]/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-[var(--font-space-grotesk)] text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-bold mb-6">
            Join the Movement
          </p>
          <h1 className="font-[var(--font-space-grotesk)] text-4xl md:text-[72px] font-bold leading-tight md:leading-[1.0] tracking-[-0.04em] text-white mb-8 max-w-4xl mx-auto">
            Assemble Your <span className="text-[#e6c364]">Elite Team</span>
          </h1>
          <p className="font-manrope text-[18px] leading-[1.6] tracking-[0.05em] text-[#d0c5b2] max-w-2xl mx-auto mb-12">
            The registration window for Axeleron Expo 2027 is now open.
            Secure your slot and prepare for the national stage.
          </p>
          <a
            href="mailto:urjionixtechnologies@gmail.com?subject=Team Registration — Axeleron 2027"
            className="inline-block gradient-gold text-[#241a00] px-12 py-5 font-[var(--font-space-grotesk)] font-bold text-sm tracking-[0.15em] uppercase shadow-[0_0_30px_rgba(201,168,76,0.2)] hover:shadow-[0_0_50px_rgba(201,168,76,0.5)] transition-all duration-500 rounded-sm"
          >
            Register Now via Email
          </a>
          <p className="mt-4 text-zinc-500 font-manrope text-sm">
            urjionixtechnologies@gmail.com
          </p>
        </div>
      </section>

      {/* How to Register */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#100e08]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-[var(--font-space-grotesk)] text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-bold mb-3">
              Process
            </p>
            <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-white">
              How to Register
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="glass-card p-8 rounded-xl border-l-4 border-[#e6c364]/40 hover:border-[#e6c364] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#e6c364] text-3xl flex-shrink-0 mt-1">
                    {step.icon}
                  </span>
                  <div>
                    <span className="font-[var(--font-space-grotesk)] text-[11px] tracking-[0.2em] uppercase font-bold text-[#e6c364]/70">
                      Step {step.num}
                    </span>
                    <h3 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-white mt-1 mb-3">
                      {step.title}
                    </h3>
                    <p className="font-manrope text-[15px] leading-[1.6] text-[#d0c5b2]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Selection */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#16130d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-[var(--font-space-grotesk)] text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-bold mb-3">
              Choose Your Domain
            </p>
            <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-white">
              Available Tracks
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {tracks.map((track) => (
              <div
                key={track.name}
                className="glass-card px-6 py-4 rounded-full flex items-center gap-3 hover:border-[#C9A84C] hover:shadow-[0_0_15px_rgba(201,168,76,0.2)] transition-all duration-300 cursor-default"
              >
                <span
                  className="material-symbols-outlined text-[#e6c364] text-xl"
                  style={{
                    fontVariationSettings: track.fill ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  {track.icon}
                </span>
                <span className="font-[var(--font-space-grotesk)] text-sm font-semibold text-white tracking-tight">
                  {track.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-zinc-500 text-sm font-manrope mt-6">
            Mention your chosen track in the registration email.
          </p>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#100e08]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-white">
              Key Dates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { date: "Oct 2025", event: "Registration Opens", color: "text-[#e6c364]", border: "border-[#e6c364]" },
              { date: "Mar 2026", event: "State Level Trials", color: "text-[#c5c6ca]", border: "border-[#c5c6ca]" },
              { date: "Sep 2026", event: "Zonal Screenings", color: "text-[#1E90FF]", border: "border-[#1E90FF]" },
              { date: "Jan 2027", event: "Grand Finale", color: "text-[#e6c364]", border: "border-[#e6c364]" },
            ].map((item) => (
              <div
                key={item.date}
                className={`glass-card p-8 rounded-xl border-t-2 ${item.border} text-center`}
              >
                <p className={`font-[var(--font-space-grotesk)] text-2xl font-bold ${item.color} mb-2`}>
                  {item.date}
                </p>
                <p className="font-[var(--font-space-grotesk)] text-sm font-semibold text-white uppercase tracking-widest">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/timeline"
              className="font-[var(--font-space-grotesk)] text-[#C9A84C] border border-[#C9A84C]/40 px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-[#C9A84C]/10 transition-colors"
            >
              View Full Timeline →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-white mb-6">
            Questions? Contact Us
          </h2>
          <p className="font-manrope text-[18px] leading-[1.6] text-[#d0c5b2] mb-8">
            Reach out to our team for registration assistance, track guidance,
            or partnership inquiries.
          </p>
          <a
            href="mailto:urjionixtechnologies@gmail.com"
            className="inline-flex items-center gap-3 gradient-gold text-[#241a00] px-10 py-4 font-[var(--font-space-grotesk)] font-bold text-sm tracking-[0.15em] uppercase hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300 rounded-sm"
          >
            <span className="material-symbols-outlined text-xl">mail</span>
            urjionixtechnologies@gmail.com
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
