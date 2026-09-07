import { motion } from "framer-motion";
import {
  Mic,
  Building2,
  Target,
  Flower2,
  PartyPopper,
  Globe,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import SEO from "../components/SEO";

const services = [
  {
    icon: Mic,
    title: "Professional Anchoring & Hosting",
    blurb: "A powerful blend of energy, elegance, and crowd connection.",
    items: [
      "Haldi • Mehendi • Sangeet • Wedding • Reception",
      "Corporate Events & Annual Meets",
      "Baby Showers & Birthdays",
      "Engagement Games & Family Entertainment",
      "Couple Entries & Stage Flow",
      "Ritual Coordination",
      "Customized Scripts & Interactive Hosting",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Events & Conferences",
    blurb: "Designed with precision and professionalism.",
    items: [
      "Event Planning",
      "Conference Management",
      "Brand Launches",
      "Award Ceremonies",
      "AV Setup",
      "Stage Design & Production",
    ],
  },
  {
    icon: Target,
    title: "Complete Event Management",
    items: [
      "Timeline planning",
      "Vendor coordination",
      "Guest assistance",
      "Hospitality",
      "Logistics & scheduling",
      "Budget mapping",
    ],
  },
  {
    icon: Flower2,
    title: "Premium Wedding & Event Décor",
    items: [
      "Haldi Carnival Themes",
      "Mehendi Boho, Floral & Traditional",
      "Sangeet LED Backdrops",
      "Wedding Luxury Décor",
      "Reception Grand Décor",
      "Baby Shower Themes",
      "Birthday Themes",
      "Corporate Stage Décor",
    ],
  },
  {
    icon: PartyPopper,
    title: "Private Parties & Celebrations",
    items: ["Theme décor", "House party setup", "DJ & Music", "Family games", "Photography"],
  },
  {
    icon: Globe,
    title: "Destination Wedding Solutions",
    items: [
      "Venue Shortlisting",
      "Theme & Décor",
      "Artist Curation",
      "Hospitality",
      "Ritual Management",
      "Photography & BTS",
      "Logistics & Travel",
      "Full Production Support",
    ],
  },
];

const whyChooseUs = [
  "17+ years of industry experience",
  "Strong foothold in Delhi, Indore & Gwalior",
  "360° event solutions under one roof",
  "Reliable teams for every segment",
  "Creative concepts, perfect execution",
  "Professional, polished and premium experience",
];

export default function Services() {
  return (
    <div className="bg-gray-50 pt-24 pb-16 px-6 md:px-20">
      <SEO
        title="Wedding & Corporate Anchor Services"
        description="Wedding anchoring, sangeet and haldi hosting, corporate event emceeing, team building and destination weddings — services by Anchor Aman Shinde across Delhi, Gwalior & Indore."
        path="/services"
      />
      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#201c16] uppercase">
          Services by Anchor Aman Shinde
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          The Mic Magician — Delivering unforgettable celebrations with 17+ years of
          expertise in events, weddings, corporate shows & entertainment.
        </p>
        <p className="text-yellow-500 mt-2 text-lg">
          Delhi • Indore • Gwalior • Destination Weddings Across India
        </p>
      </motion.div>

      {/* REGION SECTION */}
      <section className="mb-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="text-yellow-500" size={28} />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#201c16]">Service Regions</h2>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl border-l-4 border-yellow-500">
          <p className="text-gray-700 leading-relaxed">
            We proudly serve:
            <br />• Delhi & Delhi NCR
            <br />• Indore & Entire Madhya Pradesh Region
            <br />• Gwalior & Nearby Cities
            <br />• Agra • Jaipur • Ujjain • Bhopal • Jabalpur • Kota • Jhansi • Chambal Belt
            <br />• Pan-India Destination Weddings
            <br />
            <br />
            Wherever your celebration is — <strong>The Mic Magician</strong> makes it magical.
          </p>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.section
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-white shadow-lg hover:shadow-xl p-6 rounded-xl border-l-4 border-yellow-500 hover:-translate-y-1 transition h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                  <service.icon className="text-yellow-500" size={22} />
                </div>
                <h2 className="font-display text-xl font-bold text-[#201c16]">{service.title}</h2>
              </div>
              {service.blurb && <p className="text-gray-700 mb-3">{service.blurb}</p>}
              <p className="text-gray-700 whitespace-pre-line">
                {service.items.map((item) => `• ${item}`).join("\n")}
              </p>
            </div>
          </motion.section>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <section className="mt-20 max-w-5xl mx-auto bg-yellow-500 text-black p-10 rounded-2xl shadow-xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Why Families & Brands Choose Us</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-lg leading-relaxed">
          {whyChooseUs.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <CheckCircle2 className="shrink-0 mt-1" size={20} />
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
