import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/background.jpeg";
import aboutImage from "../assets/about.jpeg";

export default function Home() {
  const cards = [
    {
      id: 1,
      subtitle: "🎤 Corporate & Brand Shows",
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
      subtitle: "💍 Weddings & Social Celebrations",
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
      subtitle: "🌟 Celebrity & Entertainment Shows",
      description: `• Celebrity & Film Promotions
• Live Concerts & Musical Nights
• Star Nights & Award Shows
• Comedy & Entertainment Events
• Reality Show Launches & Media Events
• Fan Meets & Influencer Engagements`,
    },
    {
      id: 4,
      subtitle: "🏛️ Public & Government Events",
      description: `• Government Campaigns & Cultural Programs
• Social Awareness Drives (Swachh Bharat, Beti Bachao)
• Youth Festivals & Educational Events
• National Celebrations & Parades
• Political Rallies & Public Connect Programs`,
    },
    {
      id: 5,
      subtitle: "🌍 Special & International Events",
      description: `• International Shows (Dubai, Singapore & Beyond)
• Marathons, Sports Leagues & Public Gatherings
• Mall Events, New Year Bashes & Dandiya Nights
• Award Galas & Luxury Lifestyle Events
• Virtual Global Events`,
    },
  ];

  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});
  const [stats, setStats] = useState({ events: 0, clients: 0, years: 0, awards: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const toggleFlip = (id: number) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Smooth count-up easing animation
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current && !hasAnimated) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setHasAnimated(true);
          const duration = 2000; // 2 seconds
          const start = performance.now();
          const finalValues = { events: 2500, clients: 500, years: 17, awards: 25 };

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
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <div className="bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <section
  className="relative h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/40"></div>

  <div className="relative z-10 text-center text-white px-4">
    <p className="text-sm md:text-base uppercase tracking-wide text-yellow-400 mb-4">
      Anchor | Wedding Anchor | Team Building Expert | Entertainer | Emcee
    </p>

    <h1 className="text-4xl md:text-6xl font-bold mb-6">AMAN DADA</h1>

    {/* CONTACT NOW BUTTON FIXED */}
    <Link
      to="/contact"
      className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition inline-block"
    >
      Contact Now
    </Link>
  </div>
</section>


      {/* ================= ABOUT PREVIEW SECTION ================= */}
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-16 bg-white text-gray-800">
        <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
          <img
            src={aboutImage}
            alt="About Aman"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full md:pl-12">
          <h3 className="text-sm font-semibold text-yellow-500 uppercase mb-2">
            About Anchor Aman
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#737874]">
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
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* ================= HOW WE DO IT SECTION ================= */}
      <section className="py-16 px-6 md:px-16 bg-linear-to-r from-yellow-500 to-[#737874] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">How We Do It</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 md:gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => toggleFlip(card.id)}
              className="relative w-64 h-80 cursor-pointer perspective group"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flipped[card.id] ? "rotate-y-180" : "group-hover:rotate-y-180"
                }`}
              >
                {/* FRONT */}
                <div className="absolute w-full h-full bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center justify-center text-lg font-semibold px-4 text-white backface-hidden">
                  {card.subtitle}
                </div>

                {/* BACK */}
                <div className="absolute w-full h-full bg-black/80 text-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center rotate-y-180 backface-hidden text-sm whitespace-pre-line leading-relaxed">
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECT STATS SECTION ================= */}
      <section
        ref={statsRef}
        className="py-20 bg-gray-900 text-white text-center flex flex-wrap justify-center items-center gap-10 md:gap-20"
      >
        <div>
          <h3 className="text-5xl font-bold text-yellow-400">🎉 {stats.events}+</h3>
          <p className="mt-2 text-gray-300 text-lg">Events Hosted</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-yellow-400">🤝 {stats.clients}+</h3>
          <p className="mt-2 text-gray-300 text-lg">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-yellow-400">🕒 {stats.years}+</h3>
          <p className="mt-2 text-gray-300 text-lg">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-yellow-400">🏆 {stats.awards}+</h3>
          <p className="mt-2 text-gray-300 text-lg">Awards & Recognitions</p>
        </div>
      </section>
          {/* ================= CONTACT SECTION ================= */}
<section className="bg-[#0a0a0a] text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
  {/* LEFT SIDE - FORM */}
  <div className="w-full md:w-1/2 space-y-6">
    <h3 className="text-yellow-500 text-sm font-semibold uppercase">Contact Us</h3>
    <h2 className="text-3xl md:text-4xl font-bold mb-8">Got a Question?</h2>

    <form className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 outline-none py-2"
        />
        <input
          type="email"
          placeholder="Your E-mail"
          className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 outline-none py-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Mobile Number"
          className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 outline-none py-2"
        />
        <input
          type="text"
          placeholder="Services"
          className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 outline-none py-2"
        />
      </div>

      <textarea
        placeholder="Message"
        rows={4}
        className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 outline-none py-2 resize-none"
      ></textarea>

      <button
        type="submit"
        className="bg-yellow-500 text-black px-8 py-3 font-semibold rounded-md hover:bg-yellow-400 transition"
      >
        Send Email
      </button>
    </form>
  </div>

  {/* RIGHT SIDE - IMAGE */}
  <div className="hidden md:flex md:w-1/2 justify-end">
    <img
      src="/assets/anchor.png" // replace this with your actual image path
      alt="Anchor Aman"
      className="max-w-md w-full object-contain rounded-lg"
    />
  </div>
</section>
    </div>
  );
}
