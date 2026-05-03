import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Timeline — Axeleron Expo 2027",
  description:
    "Full roadmap from Registration to the National Grand Finale of Axeleron Expo 2027.",
};

export default function TimelinePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-12 px-6 md:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-[#e6c364]/20 to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="font-[var(--font-space-grotesk)] text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-bold mb-6">
            The Path to Excellence
          </p>
          <h1 className="font-[var(--font-space-grotesk)] text-4xl md:text-[72px] font-bold leading-tight md:leading-[1.0] tracking-[-0.04em] text-white mb-8 max-w-4xl">
            Roadmap to the National Grand Finale
          </h1>
          <p className="font-manrope text-[18px] leading-[1.6] tracking-[0.05em] text-[#d0c5b2] max-w-2xl">
            Follow the journey of innovation as we scour the nation for the
            brightest minds. From regional screenings to the ultimate stage in
            January 2027.
          </p>
        </div>
      </section>

      <Timeline />

      <Footer />
    </>
  );
}
