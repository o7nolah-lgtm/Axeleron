import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Rules & Eligibility — Axeleron Expo 2027",
  description:
    "Competition rules and eligibility criteria for Axeleron Expo 2027 AI & Robotics Innovation Challenge.",
};

const rulesEn = [
  {
    number: "01",
    title: "Originality Mandate",
    body: "All submitted projects must be 100% original. Core logic, code, and physical hardware must be conceived and built by the registered student team. No purchased kits, open-source clones without modification, or third-party assembled units will be accepted.",
    icon: "verified",
    color: "text-[#e6c364]",
    border: "border-[#e6c364]",
  },
  {
    number: "02",
    title: "No Ready-Made Models",
    body: "Purchased or third-party assembled projects will be disqualified immediately without appeal. Judges reserve the right to inspect component sourcing documentation. Disqualification applies to the entire team with no refund of registration.",
    icon: "block",
    color: "text-[#ffb4ab]",
    border: "border-[#ffb4ab]",
  },
  {
    number: "03",
    title: "Team Composition",
    body: "Each team must consist of 2 to 5 registered engineering college students. All team members must be enrolled in a recognized Indian engineering institution. Cross-college teams are allowed. A faculty mentor is recommended but not mandatory.",
    icon: "group",
    color: "text-[#b9c4ff]",
    border: "border-[#b9c4ff]",
  },
  {
    number: "04",
    title: "Track Selection",
    body: "Teams must register under one primary track: Machine Learning, Robotics & Automation, Quantum Technology, Biotech & Health, or Financial Growth. Cross-disciplinary projects may request secondary track consideration during submission review.",
    icon: "category",
    color: "text-[#e6c364]",
    border: "border-[#e6c364]",
  },
  {
    number: "05",
    title: "Submission Requirements",
    body: "Teams must submit a Technical Dossier including project abstract, system architecture diagram, bill of materials, and a 3-minute demonstration video. Late submissions will not be evaluated. Files must be submitted via the official portal.",
    icon: "description",
    color: "text-[#b9c4ff]",
    border: "border-[#b9c4ff]",
  },
  {
    number: "06",
    title: "Evaluation Criteria",
    body: "Projects are evaluated on Innovation (30%), Technical Execution (30%), Real-World Impact (25%), and Presentation Quality (15%). Judges' decisions are final and binding across all rounds from State Level to the Grand Finale.",
    icon: "assessment",
    color: "text-[#c5c6ca]",
    border: "border-[#c5c6ca]",
  },
];

const rulesHi = [
  {
    title: "मौलिकता अनिवार्यता",
    body: "सभी प्रस्तुत परियोजनाएं 100% मूल होनी चाहिए। मूल तर्क, कोड और भौतिक हार्डवेयर पंजीकृत छात्र टीम द्वारा बनाए जाने चाहिए।",
  },
  {
    title: "कोई रेडीमेड मॉडल नहीं",
    body: "खरीदी गई या तृतीय पक्ष द्वारा असेंबल की गई परियोजनाओं को बिना किसी अपील के तत्काल अयोग्य घोषित कर दिया जाएगा।",
  },
  {
    title: "टीम संरचना",
    body: "प्रत्येक टीम में 2 से 5 पंजीकृत इंजीनियरिंग कॉलेज के छात्र होने चाहिए। सभी टीम के सदस्य किसी मान्यता प्राप्त भारतीय इंजीनियरिंग संस्थान में नामांकित होने चाहिए।",
  },
  {
    title: "ट्रैक चयन",
    body: "टीमें किसी एक प्राथमिक ट्रैक के तहत पंजीकरण कर सकती हैं: मशीन लर्निंग, रोबोटिक्स, क्वांटम टेक्नोलॉजी, बायोटेक या वित्तीय विकास।",
  },
  {
    title: "सबमिशन आवश्यकताएं",
    body: "टीमों को एक तकनीकी डोसियर जमा करना होगा जिसमें प्रोजेक्ट सार, सिस्टम आर्किटेक्चर आरेख, और 3 मिनट का प्रदर्शन वीडियो शामिल हो।",
  },
  {
    title: "मूल्यांकन मानदंड",
    body: "परियोजनाओं का मूल्यांकन नवाचार (30%), तकनीकी निष्पादन (30%), वास्तविक दुनिया के प्रभाव (25%) और प्रस्तुति गुणवत्ता (15%) पर किया जाता है।",
  },
];

export default function RulesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-[#e6c364]/20 to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="font-[var(--font-space-grotesk)] text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-bold mb-6">
            Protocols &amp; Eligibility
          </p>
          <h1 className="font-[var(--font-space-grotesk)] text-4xl md:text-[72px] font-bold leading-tight md:leading-[1.0] tracking-[-0.04em] text-white mb-8 max-w-4xl">
            Rules of the <span className="text-[#e6c364]">Challenge</span>
          </h1>
          <p className="font-manrope text-[18px] leading-[1.6] tracking-[0.05em] text-[#d0c5b2] max-w-2xl">
            Integrity is the foundation of innovation. All participants are
            bound by these rules throughout the entire competition cycle.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#2d2a23] border border-white/5">
            <span className="material-symbols-outlined text-[#e6c364] text-sm">
              language
            </span>
            <p className="text-zinc-400 text-sm font-manrope">
              Medium:{" "}
              <span className="text-white font-bold">English (Primary)</span>{" "}
              | हिंदी में जानकारी नीचे उपलब्ध है
            </p>
          </div>
        </div>
      </section>

      {/* Key Rules Banner */}
      <section className="px-6 md:px-16 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-10 md:p-12 text-center hover:border-red-500/50 transition-colors duration-300 rounded-xl">
            <div className="text-5xl mb-6">❌</div>
            <h3 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-[#ffb4ab] mb-4">
              No Ready-Made Models
            </h3>
            <p className="text-[#d0c5b2] font-manrope text-sm leading-relaxed">
              Purchased or third-party assembled projects will be disqualified
              immediately without appeal.
            </p>
          </div>
          <div className="glass-card p-10 md:p-12 text-center hover:border-[#C9A84C]/50 transition-colors duration-300 rounded-xl">
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
      </section>

      {/* Full Rules — English */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#100e08]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-[var(--font-space-grotesk)] text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-bold mb-3">
              English Version
            </p>
            <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-white">
              Competition Rules
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rulesEn.map((rule) => (
              <div
                key={rule.number}
                className={`glass-card p-8 rounded-xl border-l-4 ${rule.border} hover:scale-[1.01] transition-transform duration-300`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className={`material-symbols-outlined text-3xl flex-shrink-0 ${rule.color}`}
                  >
                    {rule.icon}
                  </span>
                  <div>
                    <span
                      className={`font-[var(--font-space-grotesk)] text-[11px] tracking-[0.2em] uppercase font-bold ${rule.color} opacity-70`}
                    >
                      Rule {rule.number}
                    </span>
                    <h3 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-white mt-1">
                      {rule.title}
                    </h3>
                  </div>
                </div>
                <p className="font-manrope text-[15px] leading-[1.6] text-[#d0c5b2]">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hindi Rules */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#16130d]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-[var(--font-space-grotesk)] text-[#b9c4ff] text-[11px] tracking-[0.3em] uppercase font-bold mb-3">
              Hindi Version · हिंदी संस्करण
            </p>
            <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-white">
              प्रतियोगिता नियम
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rulesHi.map((rule, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-xl border-l-4 border-[#b9c4ff]/40"
              >
                <h3 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-white mb-3">
                  {rule.title}
                </h3>
                <p className="font-manrope text-[15px] leading-[1.7] text-[#d0c5b2]">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto gradient-gold rounded-xl p-12 md:p-16 text-center text-[#241a00] relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-10" />
          <div className="relative z-10">
            <h2 className="font-[var(--font-space-grotesk)] text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-6">
              Ready to Compete?
            </h2>
            <p className="font-manrope text-lg mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Registration for Axeleron Expo 2027 is now open. Build your
              team, pick your track, and begin your journey to the Grand
              Finale.
            </p>
            <a
              href="mailto:urjionixtechnologies@gmail.com"
              className="inline-block bg-black text-white px-12 py-5 font-[var(--font-space-grotesk)] font-bold text-sm uppercase tracking-[0.15em] hover:scale-105 transition-transform rounded-sm shadow-xl"
            >
              Register Your Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
