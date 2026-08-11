import { useState, useEffect, useRef, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PartyPopper,
  Handshake,
  Clock,
  Trophy,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Mic,
  Heart,
  Star,
  Landmark,
  Globe,
} from "lucide-react";
import heroImage from "../assets/background.jpeg";
import aboutImage from "../assets/about.jpeg";

export default function Home() {
  const cards = [
    {
      id: 1,
      icon: Mic,
      subtitle: "Corporate & Brand Shows",
      description: `• Annual Meets & Award Ceremonies
• Product Launches & Brand Activations
• Dealers’ & Distributors’ Meets
• Conferences & Business Summits
• Team Building Activities & Office Celebrations
• Family Days, Gala Nights & Employee Engagements
• Virtual Corporate Hostings`,
    },
    {
      id: 2,
      icon: Heart,
      subtitle: "Weddings & Social Celebrations",
      description: `• Sangeet & Cocktail Nights
• Wedding & Reception Ceremonies
• Haldi, Mehndi & Pool Parties
• Engagements, Birthdays & Anniversaries
• Destination Weddings & Intimate Gatherings
• Festive Celebrations (Navratri, Diwali, Holi)
• Virtual Weddings & Live Stream Hosting`,
    },
    {
      id: 3,
      icon: Star,
      subtitle: "Celebrity & Entertainment Shows",
      description: `• Celebrity & Film Promotions
• Live Concerts & Musical Nights
• Star Nights & Award Shows
• Comedy & Entertainment Events
• Reality Show Launches & Media Events
• Fan Meets & Influencer Engagements`,
    },
    {
      id: 4,
      icon: Landmark,
      subtitle: "Public & Government Events",
      description: `• Government Campaigns & Cultural Programs
• Social Awareness Drives (Swachh Bharat, Beti Bachao)
• Youth Festivals & Educational Events
• National Celebrations & Parades
• Political Rallies & Public Connect Programs`,
    },
    {
      id: 5,
      icon: Globe,
      subtitle: "Special & International Events",
      description: `• International Shows (Dubai, Singapore & Beyond)
• Marathons, Sports Leagues & Public Gatherings
• Mall Events, New Year Bashes & Dandiya Nights
• Award Galas & Luxury Lifestyle Events
• Virtual Global Events`,
    },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const centeredScrollLeft = (track: HTMLDivElement, card: HTMLElement) => {
    const raw = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    return Math.min(Math.max(raw, 0), track.scrollWidth - track.clientWidth);
  };

  const closestCardIndex = () => {
    const track = trackRef.current;
    if (!track) return 0;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs(centeredScrollLeft(track, child as HTMLElement) - track.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    return closest;
  };

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    const target = track?.children[index] as HTMLElement | undefined;
    if (!track || !target) return;
    track.scrollTo({ left: centeredScrollLeft(track, target), behavior: "smooth" });
    setActiveCard(index);
  };

  const goToOffset = (offset: number) =>
    scrollToCard(Math.min(Math.max(closestCardIndex() + offset, 0), cards.length - 1));

  const handleTrackScroll = () => setActiveCard(closestCardIndex());

  const [stats, setStats] = useState({ events: 0, clients: 0, years: 0, awards: 0 });
  const statsRef = useRef<HTMLDivElement>(null);

  // Smooth count-up easing animation
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 2000;
        const start = performance.now();
        const finalValues = { events: 8000, clients: 5000, years: 17, awards: 25 };

        const animate = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = easeOutCubic(progress);
          setStats({
            events: Math.floor(eased * finalValues.events),
            clients: Math.floor(eased * finalValues.clients),
            years: Math.floor(eased * finalValues.years),
            awards: Math.floor(eased * finalValues.awards),
          });
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thanks! Your message has been sent — we'll get back to you shortly.");
    event.currentTarget.reset();
  };

  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  } as const;

  return (
    <div className="bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <section
  className="relative h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/70 to-black/90"></div>

  <div className="relative z-10 text-center text-white px-4 animate-[fadeIn_1s_ease-out]">
    <p className="text-sm md:text-base uppercase tracking-[0.2em] text-yellow-400 mb-4 font-medium">
      Anchor | Wedding Anchor | Entertainer | Emcee
    </p>

    <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
      THE MIC <span className="text-yellow-500">MAGICIAN</span>
    </h1>

    <Link
      to="/contact"
      className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-400 hover:scale-105 transition inline-block shadow-lg shadow-yellow-500/20"
    >
      Contact Now
    </Link>
  </div>

  <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-400 animate-bounce" size={32} />
</section>


      {/* ================= ABOUT PREVIEW SECTION ================= */}
      <section className="relative flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-16 bg-white text-gray-800 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />

        <motion.div
          {...fadeUp}
          className="relative md:w-1/2 w-full flex justify-center mb-8 md:mb-0"
        >
          <img
            src={aboutImage}
            alt="About Aman"
            className="rounded-lg shadow-xl ring-1 ring-black/5 w-full max-w-md object-cover"
          />
        </motion.div>

        <motion.div {...fadeUp} className="relative md:w-1/2 w-full md:pl-12">
          <h3 className="text-sm font-semibold text-yellow-500 uppercase mb-2">
            About Anchor Aman Shinde
          </h3>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#737874]">
            Anchor in Delhi | Top Wedding Anchor in India
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Celebrity Anchor Aman Shinde offers 17+ years of experience,
            specializing in high-profile weddings, corporate galas, and concerts
            across India, Dubai, and Singapore. He is renowned for his magnetic
            stage presence, versatile performance style, and unique ability to
            connect with any audience.
          </p>
          <Link
            to="/about"
            className="bg-yellow-500 hover:bg-yellow-400 hover:scale-105 text-black font-semibold px-6 py-3 rounded-md transition inline-block"
          >
            Read More
          </Link>
        </motion.div>
      </section>

      {/* ================= HOW WE DO IT SECTION ================= */}
      <section className="py-20 bg-linear-to-br from-[#1c1f1c] via-[#242824] to-[#3a3d3a] text-white text-center overflow-hidden">
        <motion.h2 {...fadeUp} className="font-display text-3xl md:text-4xl font-bold mb-2 px-6">
          How We Do It
        </motion.h2>
        <p className="text-white/60 mb-10 px-6">Swipe through everything we bring to your event</p>

        <div className="relative max-w-6xl mx-auto px-6 md:px-16">
          {/* Arrows */}
          <button
            aria-label="Previous"
            onClick={() => goToOffset(-1)}
            className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-yellow-500 hover:text-black backdrop-blur-md ring-1 ring-white/20 transition"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            aria-label="Next"
            onClick={() => goToOffset(1)}
            className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-yellow-500 hover:text-black backdrop-blur-md ring-1 ring-white/20 transition"
          >
            <ChevronRight size={22} />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={handleTrackScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="shrink-0 w-[80vw] max-w-[320px] md:w-[320px] rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-8 text-left hover:-translate-y-1 hover:ring-yellow-500/50 transition"
              >
                <div className="w-14 h-14 rounded-xl bg-yellow-500/15 flex items-center justify-center mb-6">
                  <card.icon className="text-yellow-400" size={26} />
                </div>
                <h3 className="text-lg font-semibold mb-4">{card.subtitle}</h3>
                <p className="text-sm text-white/70 whitespace-pre-line leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {cards.map((card, i) => (
              <button
                key={card.id}
                aria-label={`Go to ${card.subtitle}`}
                onClick={() => scrollToCard(i)}
                className={`h-2 rounded-full transition-all ${
                  activeCard === i ? "w-6 bg-yellow-500" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECT STATS SECTION ================= */}
      <section
        ref={statsRef}
        className="py-20 bg-gray-900 text-white text-center flex flex-wrap justify-center items-center gap-10 md:gap-20"
      >
        {[
          { icon: PartyPopper, value: stats.events, label: "Events Hosted" },
          { icon: Handshake, value: stats.clients, label: "Happy Clients" },
          { icon: Clock, value: stats.years, label: "Years of Experience" },
          { icon: Trophy, value: stats.awards, label: "Awards & Recognitions" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            <stat.icon className="text-yellow-400 mb-2" size={36} />
            <h3 className="text-5xl font-bold text-yellow-400">{stat.value}+</h3>
            <p className="mt-2 text-gray-300 text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </section>
          {/* ================= CONTACT SECTION ================= */}
<section className="relative bg-[#0a0a0a] text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">
  <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
  {/* LEFT SIDE - FORM */}
  <motion.div {...fadeUp} className="relative w-full md:w-1/2 space-y-6">
    <h3 className="text-yellow-500 text-sm font-semibold uppercase">Contact Us</h3>
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Got a Question?</h2>

    <form onSubmit={handleContactSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          aria-label="Your Name"
          placeholder="Your Name"
          className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 outline-none py-2 transition-colors"
        />
        <input
          type="email"
          name="email"
          required
          aria-label="Your E-mail"
          placeholder="Your E-mail"
          className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 outline-none py-2 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="tel"
          name="mobile"
          aria-label="Your Mobile Number"
          placeholder="Your Mobile Number"
          className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 outline-none py-2 transition-colors"
        />
        <input
          type="text"
          name="services"
          aria-label="Services"
          placeholder="Services"
          className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 outline-none py-2 transition-colors"
        />
      </div>

      <textarea
        name="message"
        aria-label="Message"
        placeholder="Message"
        rows={4}
        className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 outline-none py-2 resize-none transition-colors"
      ></textarea>

      <button
        type="submit"
        className="bg-yellow-500 text-black px-8 py-3 font-semibold rounded-md hover:bg-yellow-400 hover:scale-105 transition inline-block"
      >
        Send Email
      </button>
    </form>
  </motion.div>

  {/* RIGHT SIDE - IMAGE */}
  <motion.div {...fadeUp} className="relative hidden md:flex md:w-1/2 justify-end">
    <img
      src={aboutImage}
      alt="Anchor Aman Shinde"
      className="max-w-md w-full object-cover rounded-lg shadow-xl ring-1 ring-white/10"
    />
  </motion.div>
</section>
    </div>
  );
}
