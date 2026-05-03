import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DomainTracks from "@/components/DomainTracks";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <DomainTracks />

      {/* Competition Structure */}
      <section className="py-24 md:py-[160px] px-6 md:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] text-center mb-20 md:mb-32 text-white">
            The Road to the{" "}
            <span className="text-[#e6c364]">Finale</span>
          </h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto gap-16 md:gap-0">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c5c6ca]/30 to-transparent hidden md:block" />

            {/* Stage 1 */}
            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full border-2 border-[#e6c364] bg-[#16130d] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(201,168,76,0.2)]">
                <div className="w-4 h-4 rounded-full bg-[#e6c364] animate-pulse" />
              </div>
              <h4 className="font-[var(--font-space-grotesk)] text-lg font-semibold text-white mb-2">
                State Level
              </h4>
              <p className="font-[var(--font-space-grotesk)] text-[11px] tracking-[0.2em] uppercase font-bold text-zinc-500">
                Initial Screening
              </p>
            </div>

            {/* Stage 2 */}
            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full border-2 border-[#c5c6ca] bg-[#16130d] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,169,173,0.2)]">
                <span className="material-symbols-outlined text-[#c5c6ca] text-2xl">
                  groups
                </span>
              </div>
              <h4 className="font-[var(--font-space-grotesk)] text-lg font-semibold text-white mb-2">
                Zonal Trials
              </h4>
              <p className="font-[var(--font-space-grotesk)] text-[11px] tracking-[0.2em] uppercase font-bold text-zinc-500">
                Validation
              </p>
            </div>

            {/* Grand Finale */}
            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full border-4 border-[#e6c364] bg-[#16130d] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(201,168,76,0.4)]">
                <span
                  className="material-symbols-outlined text-[#e6c364] text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  trophy
                </span>
              </div>
              <h4 className="font-[var(--font-space-grotesk)] text-2xl font-bold text-[#e6c364] mb-2">
                Grand Finale
              </h4>
              <p className="font-[var(--font-space-grotesk)] text-[11px] tracking-[0.2em] uppercase font-bold text-white">
                January 2027
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 md:py-[160px] px-6 md:px-16 bg-[#1e1b15]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="font-[var(--font-space-grotesk)] text-[#C9A84C] text-[12px] tracking-[0.2em] uppercase font-bold mb-6">
              Our Mission
            </p>
            <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] mb-8 text-white">
              Empowering the <br />
              Architects of Tomorrow
            </h2>
            <p className="font-manrope text-[18px] leading-[1.6] tracking-[0.05em] text-[#d0c5b2] mb-8">
              Axeleron Expo is more than just a competition; it is a national
              movement aimed at catalyzing innovation within the engineering
              student ecosystem. We bridge the gap between academic theory and
              high-performance industry execution.
            </p>
            <div className="flex gap-4">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUSLeIST_s1nTAt2ykf0ZKYXd9ho6r4kNBfKg5odre_SQ7j76RxSaLRggfj5-Xb2KaQbdanEK5ozyTbc1s-rq6mvebcKULBLaa4eFFjhmAmAh31sxdMbpvay6_BwysVB30pyZy1KuIsiKW3DxB95B2zJYw7ez_QWC5Mma9HqiqUHgXCzBXzNSxfHEgBWj7EUY1b-oFC7qxy2KiYJiHwkN6ist7A__jysocShRR_QnXyi7Bn4R4JZbzOouXUtdhAbgcxEIk02KoZA0V"
                alt="Engineering students working on robotics"
                width={300}
                height={192}
                className="w-1/2 h-48 object-cover rounded-lg border border-white/10"
              />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvpiznpSEJ3b5aC7qKRf3_MyWSObpgyFSUXFOv1RUE6FyYqm23zTJXGYtpvWpckb6YcxXhhqksCyO1XbZ_t8G5nK6BKnHRakBWHWijYUBOpGU6Npt6m5Tf22uvCDblKeaWLCr3odEh_dhcmmG-5DF9qulJz_DIJiYfOmWemWFuKjB288lV9GSEqs7_6B4qqaqOvMvkuMTdI8xpIhDaI-18XCQn739z2GJOztcaqyXyieqcTFZHGdsWrLTMDwZ-8jDzydPgSzE6avfh"
                alt="Global digital network connectivity"
                width={300}
                height={192}
                className="w-1/2 h-48 object-cover rounded-lg border border-white/10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="glass-card p-8 md:p-10 border-l-4 border-l-[#C9A84C]">
              <div className="flex justify-between items-start mb-6">
                <span className="font-[var(--font-space-grotesk)] text-4xl font-bold text-white">
                  5+
                </span>
                <span className="material-symbols-outlined text-[#e6c364] text-4xl">
                  verified
                </span>
              </div>
              <p className="font-[var(--font-space-grotesk)] text-[11px] tracking-[0.2em] uppercase font-bold text-zinc-500 mb-2">
                Years of Excellence
              </p>
              <h3 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-[#e9e1d7]">
                Consistent industry recognition and trust across national
                borders.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 md:p-8">
                <h4 className="font-[var(--font-space-grotesk)] text-lg font-semibold text-white mb-2">
                  Yashobhumi
                </h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">
                  New Delhi
                </p>
              </div>
              <div className="glass-card p-6 md:p-8">
                <h4 className="font-[var(--font-space-grotesk)] text-lg font-semibold text-white mb-2">
                  Bharat Mandapam
                </h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">
                  New Delhi
                </p>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 flex items-center gap-6">
              <div className="p-4 bg-[#b9c4ff]/10 rounded-full flex-shrink-0">
                <span className="material-symbols-outlined text-[#b9c4ff]">
                  workspace_premium
                </span>
              </div>
              <div>
                <h4 className="font-[var(--font-space-grotesk)] text-lg font-semibold text-white">
                  National Credibility
                </h4>
                <p className="text-[#d0c5b2] text-sm font-manrope">
                  Organised by Urjionix&nbsp;•&nbsp;Mobialive
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Preview */}
      <section className="py-24 md:py-[160px] px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] mb-4 text-white">
              Protocols &amp; Rules
            </h2>
            <p className="text-zinc-500 font-manrope">
              Integrity is the foundation of innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-10 md:p-12 text-center hover:border-red-500/50 transition-colors duration-300">
              <div className="text-5xl mb-6">❌</div>
              <h3 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-[#ffb4ab] mb-4">
                No Ready-Made Models
              </h3>
              <p className="text-[#d0c5b2] font-manrope text-sm leading-relaxed">
                Purchased or third-party assembled projects will be disqualified
                immediately without appeal.
              </p>
            </div>
            <div className="glass-card p-10 md:p-12 text-center hover:border-[#C9A84C]/50 transition-colors duration-300">
              <div className="text-5xl mb-6">✅</div>
              <h3 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-[#e6c364] mb-4">
                100% Original Projects
              </h3>
              <p className="text-[#d0c5b2] font-manrope text-sm leading-relaxed">
                Core logic and physical hardware must be conceived and built by
                the registered student team.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#2d2a23] border border-white/5">
              <span className="material-symbols-outlined text-[#e6c364] text-sm">
                language
              </span>
              <p className="text-zinc-400 text-sm font-manrope">
                Medium:{" "}
                <span className="text-white font-bold">English (Primary)</span>{" "}
                | हिंदी में जानकारी उपलब्ध है
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/rules"
              className="font-[var(--font-space-grotesk)] text-[#C9A84C] border border-[#C9A84C]/40 px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-[#C9A84C]/10 transition-colors"
            >
              Read Full Rules →
            </Link>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto gradient-gold rounded-xl p-12 md:p-16 text-center text-[#241a00] relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-10" />
          <div className="relative z-10">
            <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-6">
              Assemble Your Elite Team
            </h2>
            <p className="font-manrope text-lg mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              The registration window for the 2027 Expo is now open. Secure
              your slot and prepare for the national stage.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:urjionixtechnologies@gmail.com"
                className="bg-black text-white px-10 md:px-12 py-4 md:py-5 font-[var(--font-space-grotesk)] font-bold text-sm uppercase tracking-[0.15em] hover:scale-105 transition-transform rounded-sm shadow-xl"
              >
                Register Your Team
              </a>
              <div className="flex flex-col text-left">
                <p className="font-[var(--font-space-grotesk)] text-[11px] tracking-[0.15em] uppercase font-bold opacity-70">
                  Support Inquiries
                </p>
                <p className="font-[var(--font-space-grotesk)] text-lg font-bold">
                  urjionixtechnologies@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline />

      <Footer />
    </>
  );
}
