import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Axeleron Expo 2027",
  description:
    "Learn about Axeleron Expo — India's national AI & Robotics Innovation Challenge organised by Urjionix & Mobialive, backed by TSSC.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#16130d]/80 to-[#16130d]" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk4Eaib55LLm1pA1WWThSyTMOLWtI95m1DDNBLhJfLv_PHLU5wM8CH9oj-gllWRBaBuA9oY2lFsvaVd21YIVjKWwONJBGSUJZ1OisP9Q-v7lYWmOSfyW-j1I73wAC2qMj8MIlP7rvzxir0YaIqhCx1raV9u3Or6aWwBN1TXw3DEP1azj-druiThfwpkuIICTbbvZRUXGE1xorEjy3TYQtWRc0yg_6bASR4v-CcLRH0cUPyWOH6i4RW-hyN5N1P2i7RqsP5GwF_fx9Y"
            alt="Futuristic city architecture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="font-[var(--font-space-grotesk)] text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-bold mb-6 block">
            Engineering the Future
          </span>
          <h1 className="font-[var(--font-space-grotesk)] text-4xl md:text-[72px] font-bold leading-tight md:leading-[1.0] tracking-[-0.04em] text-white mb-8">
            A Movement for <br />
            <span className="text-gradient-gold">National Excellence.</span>
          </h1>
          <p className="font-manrope text-[18px] leading-[1.6] tracking-[0.05em] text-[#d0c5b2] max-w-2xl">
            Axeleron Expo isn&apos;t just an event; it&apos;s a catalyst for
            India&apos;s technological renaissance. We bring together the
            brightest minds to solve the most pressing engineering challenges
            of our decade.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-[160px] px-6 md:px-16 bg-[#16130d]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[32px] items-center max-w-7xl mx-auto">
          <div className="md:col-span-5">
            <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-white mb-8">
              The Axeleron <br />
              Philosophy
            </h2>
            <p className="font-manrope text-[18px] leading-[1.6] tracking-[0.05em] text-[#d0c5b2] mb-6">
              Born from the vision of pushing technical boundaries, Axeleron
              represents the &ldquo;Acceleration&rdquo; of innovation. We
              believe that true engineering excellence occurs at the
              intersection of rigorous science and creative intuition.
            </p>
            <p className="font-manrope text-[16px] leading-[1.6] tracking-[0.03em] text-[#99907e] mb-10">
              Our mission is to create a high-fidelity ecosystem where student
              engineers, industry veterans, and national leaders collaborate to
              build the infrastructure of tomorrow.
            </p>
            <div className="flex gap-4">
              <div className="p-6 glass-card rounded-lg flex-1 border-l-4 border-[#e6c364]">
                <span className="font-[var(--font-space-grotesk)] text-[32px] font-semibold text-[#e6c364] block mb-2">
                  01
                </span>
                <span className="font-[var(--font-space-grotesk)] text-[12px] tracking-[0.2em] uppercase font-bold text-white">
                  Innovation
                </span>
              </div>
              <div className="p-6 glass-card rounded-lg flex-1">
                <span className="font-[var(--font-space-grotesk)] text-[32px] font-semibold text-white/20 block mb-2">
                  02
                </span>
                <span className="font-[var(--font-space-grotesk)] text-[12px] tracking-[0.2em] uppercase font-bold text-white">
                  Precision
                </span>
              </div>
              <div className="p-6 glass-card rounded-lg flex-1">
                <span className="font-[var(--font-space-grotesk)] text-[32px] font-semibold text-white/20 block mb-2">
                  03
                </span>
                <span className="font-[var(--font-space-grotesk)] text-[12px] tracking-[0.2em] uppercase font-bold text-white">
                  Impact
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuzf8NcueNO2jydzqKZol1girspiCbfCTCUT5GO4FYG53dBx6rT01uIVdhgM4fve_26SAjK2AfFtCS68TNhXKbqjF3JcCI3O7S8XqVoy7V89X9WIcFT1FxPMqHNVl3oDjrsqTvCH6bWLg1lcOe3CqM1moj04WBqmd1JD3QD9KoRGhRx_4wnbamXM9qmfPQw6OBxzUlLReq4f_MkzFLA4HtBE7RU6uvaSFwAAkvYgiHzsOo7DpYIEycxZxPr9gKvaR9obvupaR8NTnA"
              alt="Precision-engineered robotic arm"
              width={700}
              height={600}
              className="rounded-xl shadow-2xl relative z-10 w-full h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Mobialive Credibility */}
      <section className="py-24 md:py-[160px] px-6 md:px-16 bg-[#100e08] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-[var(--font-space-grotesk)] text-[#b9c4ff] text-[12px] tracking-[0.2em] uppercase font-bold mb-4 block">
              Powered by Expertise
            </span>
            <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-white">
              Urjionix &amp; Mobialive: <br />
              Five Years of Curating Excellence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="p-10 md:p-12 glass-card rounded-xl border-t-2 border-[#C9A84C] energy-glow-gold transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-[#e6c364] text-4xl">
                  verified
                </span>
                <span className="font-[var(--font-space-grotesk)] text-[32px] font-semibold text-white">
                  5+ Years
                </span>
              </div>
              <p className="font-manrope text-[16px] leading-[1.6] text-[#d0c5b2]">
                A legacy of organizing Tier-1 national expositions with a focus
                on high-performance technical delivery and seamless user
                experience.
              </p>
            </div>
            <div className="p-10 md:p-12 glass-card rounded-xl border-t-2 border-[#b9c4ff] transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-[#b9c4ff] text-4xl">
                  groups
                </span>
                <span className="font-[var(--font-space-grotesk)] text-[32px] font-semibold text-white">
                  50k+ Attendees
                </span>
              </div>
              <p className="font-manrope text-[16px] leading-[1.6] text-[#d0c5b2]">
                Successfully bridging the gap between talent and industry
                through curated networking and high-stakes competitions.
              </p>
            </div>
            <div className="p-10 md:p-12 glass-card rounded-xl border-t-2 border-[#C9A84C] energy-glow-gold transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-[#e6c364] text-4xl">
                  apartment
                </span>
                <span className="font-[var(--font-space-grotesk)] text-[32px] font-semibold text-white">
                  Iconic Venues
                </span>
              </div>
              <p className="font-manrope text-[16px] leading-[1.6] text-[#d0c5b2]">
                From international convention centers to elite tech parks, our
                footprint is defined by prestigious locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-24 md:py-[160px] px-6 md:px-16 bg-[#16130d]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-7 h-[400px] md:h-[700px] relative group overflow-hidden rounded-xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGYwAqTC3YG9nBoTniJDCMWD58k5uTN5-gjUmDQ_CgLgzVoCs1QjmpoaqCShP0LwewrpPSjFi8suFFCDlzgtz5WD2wiX4ORhr_zOXcdMiu_xmfJ4OLk4Pjyu4GYIMgmi-V0d5RqFE9LpoTjJ0YQw45QsJLCJ2wjj2OjkK-WlXb8Ke6fpyB36mjw-aBZoH40agHvCUn9HGngvqqXRtLUxvRwe0uWd1VRG_sZpNIpWTqcSOZSpaWSWlOPUZq1rAlcilzaL1vEo6eWPmY"
              alt="Bharat Mandapam convention center"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16130d] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12">
              <h3 className="font-[var(--font-space-grotesk)] text-[32px] font-semibold text-white mb-2">
                Bharat Mandapam
              </h3>
              <p className="font-[var(--font-space-grotesk)] text-[#e6c364] text-[12px] tracking-[0.2em] uppercase font-bold">
                Pragati Maidan, New Delhi
              </p>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="flex-1 relative group overflow-hidden rounded-xl min-h-[280px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdvL2bVKgjIP_DSgzip-a1szLepiNlzMvP2kvvWbKZLcm9FwKj3TpFJvHBpI8Ukwi9uroiaqklXAsayG4YtKrfVFGgF92CIg_q30oRIrrsRRh-6w-kh0esMLgd_3ZdP0q33w5eQl91qjvlU506EceKkQv9mgfxVIqx7nWn6xf5xY4j_dzxIQ9UhGG9S1cZR4lGT6UHusTUnUW6yf88SicrLF3HIrQmf9W9G-6edgntw6IBaC0jMJywFCMjz70LYe6lIqJss6-xQcjg"
                alt="Yashobhumi conference hall"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16130d]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 left-8">
                <h3 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-white mb-1">
                  Yashobhumi
                </h3>
                <p className="font-[var(--font-space-grotesk)] text-[#c5c6ca] text-[10px] tracking-widest uppercase font-bold">
                  IICC, Dwarka
                </p>
              </div>
            </div>
            <div className="flex-1 bg-[#2d2a23] p-8 md:p-12 rounded-xl border border-[#4d4637] flex flex-col justify-center">
              <span className="material-symbols-outlined text-[#e6c364] text-5xl mb-6">
                location_on
              </span>
              <h3 className="font-[var(--font-space-grotesk)] text-[32px] font-semibold text-white mb-4">
                Setting the Stage
              </h3>
              <p className="font-manrope text-[16px] leading-[1.6] text-[#d0c5b2]">
                We select venues that mirror our ambition. Spaces that are not
                just containers for people, but testaments to modern
                architectural excellence and engineering prowess.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-[160px] px-6 md:px-16 bg-[#100e08] text-center">
        <div className="max-w-3xl mx-auto glass-card p-12 md:p-16 rounded-2xl border-2 border-[#e6c364]/10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#e6c364]/10 rounded-full blur-3xl" />
          <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-white mb-8 relative z-10">
            Be Part of the <br />
            National Movement.
          </h2>
          <p className="font-manrope text-[18px] leading-[1.6] text-[#d0c5b2] mb-12 relative z-10">
            Axeleron Expo 2027 is currently accepting registrations for the
            Innovation Challenge and technical tracks.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
            <a
              href="mailto:urjionixtechnologies@gmail.com"
              className="bg-[#C9A84C] text-black px-10 py-4 font-bold uppercase tracking-tight hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300 font-[var(--font-space-grotesk)] text-sm"
            >
              Register Now
            </a>
            <Link
              href="/rules"
              className="border border-[#99907e] text-white px-10 py-4 font-bold uppercase tracking-tight hover:bg-white hover:text-black transition-all duration-300 font-[var(--font-space-grotesk)] text-sm"
            >
              View Rules
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
