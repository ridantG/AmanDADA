import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

export default function About() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-16 bg-white text-gray-800 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />

      {/* Left Image */}
      <motion.div {...fadeUp} className="relative md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
        <img
          src={aboutImage}
          alt="Anchor Aman Shinde on stage"
          className="rounded-lg shadow-xl ring-1 ring-black/5 w-full max-w-md object-cover"
        />
      </motion.div>

      {/* Right Text Content */}
      <motion.div {...fadeUp} className="relative md:w-1/2 w-full md:pl-12">
        <h3 className="text-sm font-semibold text-yellow-500 uppercase mb-2">
          About Anchor Aman Shinde
        </h3>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#737874]">
          Anchor in Delhi | Top Wedding Anchor in India
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Friends and clients call him "The Mic Magician of India" — Aman Shinde has spent the last
          17 years on stage as a celebrity anchor, emcee, and comedian host. Somewhere along the way
          that turned into 8,000-plus events, over 7,000 of them live, for more than 500 event
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
          room feel at ease. Seventeen years of doing this has taught him when to bring the humor up
          and when to let a moment breathe, and that's the part no highlight reel really captures.
          As one client put it, "he doesn't just hold the mic — he holds hearts, attention, and
          energy, all at once."
        </p>
        <Link
          to="/contact"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 hover:scale-105 text-black font-semibold px-6 py-3 rounded-md transition"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
