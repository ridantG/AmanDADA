import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import aboutImage from "../assets/about.webp";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

const weddingFunctions = [
  "Haldi Function Anchor",
  "Mehendi Anchor",
  "Anchor for Sangeet",
  "Anchor for Engagement Ceremony",
  "Ring Ceremony Anchor",
  "Varmala / Jaimala Anchor",
  "Wedding Anchor",
  "Wedding Host",
  "Destination Wedding Anchor",
];

const whyChoose = [
  "17+ years of professional anchoring experience",
  "5,000+ live shows",
  "Extensive wedding and event hosting experience",
  "Strong expertise in Delhi NCR weddings",
  "Available for Pan India & destination weddings",
  "Exceptional crowd engagement and interaction",
  "Powerful stage presence and spontaneous hosting",
  "Ability to handle diverse audiences and live situations",
  "Hosting in Hindi & English",
  "Professional coordination with planners, performers and production teams",
  "Personalised hosting rather than a one-size-fits-all script",
];

export default function About() {
  return (
    <>
      <SEO
        title="Best Wedding Anchor in Delhi NCR | Anchor Aman Shinde"
        description="Anchor Aman Shinde – The Mic Magician is a professional Wedding Anchor and Event Host in New Delhi with 17+ years of experience and 5,000+ live shows across weddings, destination celebrations and corporate events."
        path="/about"
      />

      {/* ================= INTRO / HERO ================= */}
      <section className="relative flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-16 bg-white text-gray-800 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />

        <motion.div {...fadeUp} className="relative md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
          <img
            src={aboutImage}
            alt="Anchor Aman Shinde on stage at an event"
            width={900}
            height={1200}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-xl ring-1 ring-black/5 w-full max-w-md object-cover"
          />
        </motion.div>

        <motion.div {...fadeUp} className="relative md:w-1/2 w-full md:pl-12">
          <h3 className="text-sm font-semibold text-yellow-500 uppercase mb-2">About Me</h3>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#737874]">
            Anchor Aman Shinde – The Mic Magician
            <span className="block text-xl md:text-2xl mt-1 text-yellow-600">
              Best Wedding Anchor in Delhi NCR
            </span>
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Anchor Aman Shinde – The Mic Magician is a professional Wedding Anchor and Event Host in
            New Delhi, recognised for his powerful stage presence, exceptional audience engagement and
            17+ years of experience in live event hosting.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            With 5,000+ live shows and experience across weddings, destination celebrations, corporate
            events, public events, college events and large-scale productions, Aman has established
            himself as a trusted choice for clients looking for a Best Wedding Anchor in Delhi NCR and
            an experienced Wedding Anchor in Delhi.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            His expertise goes far beyond making announcements. Aman understands how to read the crowd,
            control the energy, connect families, involve guests, manage the flow of ceremonies and
            create memorable moments in real time. His ability to combine entertainment, spontaneity,
            humour, elegance and emotion allows him to adapt his hosting style to every celebration.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 hover:scale-105 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>

      {/* ================= LONG-FORM ================= */}
      <section className="py-16 px-6 md:px-0 bg-gray-50">
        <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#737874] mb-4">
            Wedding Anchor for Every Celebration
          </h2>
          <p className="mb-4">
            Aman specialises in hosting a wide range of wedding functions, including:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4 list-disc pl-5">
            {weddingFunctions.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="mb-4">
            Whether you are searching for a Haldi Anchor in Delhi, Sangeet Anchor, Varmala Anchor,
            Wedding Host or Destination Wedding Anchor, Aman brings professional experience and a
            personalised hosting approach to every event.
          </p>
          <p className="mb-4">
            For couples and families searching for a Wedding Anchor Near Me, Wedding Anchor in Delhi
            NCR or an experienced Wedding Anchor for Marriage, Aman offers professional hosting
            designed around the couple, family, guests and overall celebration.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#737874] mt-12 mb-4">
            Destination Wedding Anchor
          </h2>
          <p className="mb-4">
            Aman is also available as a Destination Wedding Anchor across India. From intimate
            celebrations to grand luxury weddings, his experience enables him to work confidently with
            diverse audiences, wedding planners, choreographers, DJs, performers and production teams.
          </p>
          <p className="mb-4">
            His destination wedding hosting combines energy, elegance, audience interaction and
            seamless event flow, ensuring that every ceremony feels engaging rather than routine.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#737874] mt-12 mb-4">
            More Than Just an Anchor
          </h2>
          <p className="mb-4">A great wedding anchor is not simply the person holding the mic.</p>
          <p className="mb-4">
            The right anchor becomes the voice, energy and connection of the celebration.
          </p>
          <p className="mb-4">
            Aman knows when to raise the energy, when to create laughter, when to bring emotion into
            the moment and when to step back and let the celebration speak for itself. His strength is
            his ability to remain spontaneous while keeping the event professionally controlled.
          </p>
          <p className="mb-4">
            That is why clients looking for the Best Anchor for Wedding, Best Wedding Emcee,
            Professional Wedding Host or Experienced Event Anchor choose a host who understands both
            entertainment and event flow.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#737874] mt-12 mb-4">
            Why Choose Anchor Aman Shinde?
          </h2>
          <ul className="space-y-2 mb-4">
            {whyChoose.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="text-yellow-500 shrink-0 mt-0.5" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#737874] mt-12 mb-4">
            The Aman Shinde Experience
          </h2>
          <p className="mb-4">
            From the first announcement to the final celebration, every moment matters.
          </p>
          <p className="mb-4">
            Whether you need a Wedding Anchor in New Delhi, a Wedding Anchor in Delhi NCR, a
            Destination Wedding Host in India, a Haldi Anchor, a Sangeet Host, a Varmala Anchor or a
            professional Event Anchor, Aman brings experience, confidence and personality to the
            stage.
          </p>
          <p className="mb-8">
            Based in New Delhi, available across Delhi NCR, Gwalior and Indore — and Pan India for
            destination weddings.
          </p>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="font-display text-xl md:text-2xl font-bold text-[#737874]">
              Anchor Aman Shinde – The Mic Magician
            </p>
            <p className="text-yellow-600 font-semibold mt-2">
              17+ Years. 5,000+ Live Shows. One Mic. Countless Memories.
            </p>
            <p className="text-gray-600 italic mt-2">
              Not just an anchor. The energy behind your celebration.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-400 hover:scale-105 text-black font-semibold px-6 py-3 rounded-md transition"
            >
              Book Anchor Aman Shinde
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
