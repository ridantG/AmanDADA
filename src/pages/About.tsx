import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Disc3, Mic2, Flame, ShieldCheck } from "lucide-react";
import SEO from "../components/SEO";
import aboutImage from "../assets/about.webp";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

const signatureMoments = [
  {
    icon: Disc3,
    title: "The Wheel of Fortune",
    blurb:
      "A signature Haldi and wedding game that turns anticipation into participation — guests don't just watch, they play.",
  },
  {
    icon: Mic2,
    title: "Ladies Sangeet, Told as a Story",
    blurb:
      "Humor, family stories, and audience interaction woven into one performance, not a run of announcements.",
  },
  {
    icon: Flame,
    title: "Varmala as Shiv-Shakti Milan",
    blurb:
      "The Varmala presented through the traditional Shiv-Shakti Milan and Adi Shakti concept — a ritual given its full emotional weight, not just narrated.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="Wedding Anchor & Emcee in Delhi"
        description="Meet Aman Shinde — an experienced, highly rated wedding anchor and professional emcee in Delhi. 17+ years, 5,000+ events, and a reputation as Central India's Most Versatile Anchor."
        path="/about"
      />

      <section className="relative flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-16 bg-white text-gray-800 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />

        {/* Left Image */}
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

        {/* Right Text Content */}
        <motion.div {...fadeUp} className="relative md:w-1/2 w-full md:pl-12">
          <h3 className="text-sm font-semibold text-yellow-500 uppercase mb-2">
            About Anchor Aman Shinde
          </h3>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#737874]">
            Anchor in Delhi | Top Wedding Anchor in India
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Friends and clients call him "The Mic Magician of India" — Aman Shinde has spent the last
            17 years, since 2008, on stage as a celebrity anchor, emcee, and comedian host. That's
            turned into 5,000-plus live shows and 1,000-plus recorded events, for more than 500 event
            companies across India, Dubai, and Singapore. It's also how he came to be known as Central
            India's Most Versatile Anchor.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            He's just as comfortable hosting a wedding as he is a corporate gala or a film promotion —
            he's shared the stage for releases like Student of the Year and Bajrangi Bhaijaan, and
            fronted national campaigns such as the Swachh Bharat Mission. Wherever the event, he shows
            up with the same energy and reads the room the same way, whether it's a family sitting down
            for Haldi or a boardroom full of executives.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            What people tend to remember most isn't the resume, though — it's how quickly he makes a
            room feel at ease. Years of doing this have taught him when to bring the humor up and when
            to let a moment breathe, and that's the part no highlight reel really captures. As one
            client put it, "he doesn't just hold the mic — he holds hearts, attention, and energy, all
            at once."
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 hover:scale-105 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>

      {/* ================= SIGNATURE MOMENTS SECTION ================= */}
      <section className="py-20 px-6 md:px-16 bg-linear-to-br from-[#1c1f1c] via-[#242824] to-[#3a3d3a] text-white text-center">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Not a One-Format-Fits-All Script
          </h2>
          <p className="text-white/70 leading-relaxed">
            Every wedding has its own family, emotions, traditions, and story. Aman builds the
            entertainment around the people in the room — these are a few of the signature moments he
            brings to the stage.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {signatureMoments.map((moment) => (
            <motion.div
              key={moment.title}
              {...fadeUp}
              className="bg-white/5 backdrop-blur-md ring-1 ring-white/10 rounded-2xl p-6 text-left hover:-translate-y-1 hover:ring-yellow-500/50 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-yellow-500/15 flex items-center justify-center mb-4">
                <moment.icon className="text-yellow-400" size={24} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{moment.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{moment.blurb}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FAMILY ANCHOR SECTION ================= */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="text-yellow-500" size={28} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#737874] mb-4">
            A Family Anchor, Not Just a Funny One
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            A wedding anchor represents the family on stage. Aman's hosting is built to entertain
            kids, parents, and grandparents in the same room — no vulgar jokes, no mocking someone's
            looks, profession, or choices for a cheap laugh. The energy comes from presence of mind,
            timing, and reading the room, not shock value.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Respectful", "Elegant", "All-Ages Friendly"].map((tag) => (
              <span
                key={tag}
                className="text-sm font-semibold text-yellow-700 bg-yellow-500/10 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= PHILOSOPHY QUOTE SECTION ================= */}
      <section className="py-20 px-6 md:px-16 bg-[#0a0a0a] text-white text-center">
        <motion.blockquote {...fadeUp} className="max-w-3xl mx-auto">
          <p className="font-display text-xl md:text-2xl leading-relaxed text-white/90 italic mb-6">
            "A professional anchor controls a stage. An experienced anchor handles a crowd. A great
            family anchor knows when to make people laugh, when to create emotion, when to tell a
            story — and when to simply let the moment speak for itself."
          </p>
          <p className="text-yellow-500 font-semibold">
            Not just an anchor for your event — the voice, energy, and storyteller behind your
            celebration.
          </p>
        </motion.blockquote>
      </section>
    </>
  );
}
