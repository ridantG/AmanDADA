import { motion } from "framer-motion";

export default function Services() {
  const heading = "text-3xl md:text-4xl font-bold text-[#737874] mb-4";
  const card = "bg-white shadow-lg p-6 rounded-xl border-l-4 border-yellow-500";

  return (
    <div className="bg-gray-50 pt-24 pb-16 px-6 md:px-20">
      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#737874] uppercase">
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
      <section className="mb-16">
        <h2 className={heading}>🌍 Service Regions</h2>
        <div className={card}>
          <p className="text-gray-700 leading-relaxed">
            We proudly serve:
            <br />• Delhi & Delhi NCR
            <br />• Indore & Entire Madhya Pradesh Region
            <br />• Gwalior & Nearby Cities
            <br />• Agra • Jaipur • Ujjain • Bhopal • Jabalpur • Kota • Jhansi • Chambal Belt
            <br />• Pan-India Destination Weddings
            <br /><br />
            Wherever your celebration is — <strong>The Mic Magician</strong> makes it magical.
          </p>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* 1. Anchoring */}
        <section>
          <h2 className={heading}>🎤 Professional Anchoring & Hosting</h2>
          <div className={card}>
            <p className="text-gray-700 mb-3">A powerful blend of energy, elegance, and crowd connection.</p>
            <p className="text-gray-700 whitespace-pre-line">
              • Haldi • Mehendi • Sangeet • Wedding • Reception
              {"\n"}• Corporate Events & Annual Meets
              {"\n"}• Baby Showers & Birthdays
              {"\n"}• Engagement Games & Family Entertainment
              {"\n"}• Couple Entries & Stage Flow
              {"\n"}• Ritual Coordination
              {"\n"}• Customized Scripts & Interactive Hosting
            </p>
          </div>
        </section>

        {/* 2. Artist Management */}
        <section>
          <h2 className={heading}>⭐ Artist & Celebrity Management</h2>
          <div className={card}>
            <p className="text-gray-700 mb-3">
              Premium artists curated to match your event’s vibe.
            </p>
            <p className="text-gray-700 whitespace-pre-line">
              • Singers & Live Bands
              {"\n"}• Celebrity Artists
              {"\n"}• DJs & Dhol Artists
              {"\n"}• Folk & Regional Performers
              {"\n"}• Dance Troupes
              {"\n"}• Instrumental Artists
              {"\n"}• LED, Fire & Specialty Acts
              {"\n"}• Verified Emcees
            </p>
          </div>
        </section>

        {/* 3. BTS Creation */}
        <section>
          <h2 className={heading}>🎥 Luxury BTS Content Creation</h2>
          <div className={card}>
            <p className="text-gray-700 mb-3">
              A modern must-have for weddings and celebrations.
            </p>
            <p className="text-gray-700 whitespace-pre-line">
              • Cinematic BTS
              {"\n"}• Raw emotional clips
              {"\n"}• Couple & family reactions
              {"\n"}• Same-day reels
              {"\n"}• Story-style edits
            </p>
          </div>
        </section>

        {/* 4. Corporate Events */}
        <section>
          <h2 className={heading}>🏢 Corporate Events & Conferences</h2>
          <div className={card}>
            <p className="text-gray-700 mb-3">Designed with precision and professionalism.</p>
            <p className="text-gray-700 whitespace-pre-line">
              • Event Planning
              {"\n"}• Conference Management
              {"\n"}• Brand Launches
              {"\n"}• Award Ceremonies
              {"\n"}• AV Setup
              {"\n"}• Stage Design & Production
            </p>
          </div>
        </section>

        {/* 5. Event Management */}
        <section>
          <h2 className={heading}>🎯 Complete Event Management</h2>
          <div className={card}>
            <p className="text-gray-700 whitespace-pre-line">
              • Timeline planning
              {"\n"}• Vendor coordination
              {"\n"}• Guest assistance
              {"\n"}• Hospitality
              {"\n"}• Logistics & scheduling
              {"\n"}• Budget mapping
            </p>
          </div>
        </section>

        {/* 6. Decor */}
        <section>
          <h2 className={heading}>🌸 Premium Wedding & Event Décor</h2>
          <div className={card}>
            <p className="text-gray-700 whitespace-pre-line">
              • Haldi Carnival Themes
              {"\n"}• Mehendi Boho, Floral & Traditional
              {"\n"}• Sangeet LED Backdrops
              {"\n"}• Wedding Luxury Décor
              {"\n"}• Reception Grand Décor
              {"\n"}• Baby Shower Themes
              {"\n"}• Birthday Themes
              {"\n"}• Corporate Stage Décor
            </p>
          </div>
        </section>

        {/* 7. Entries */}
        <section>
          <h2 className={heading}>💞 Bride & Groom Entry Experiences</h2>
          <div className={card}>
            <p className="text-gray-700 whitespace-pre-line">
              • LED Tunnel Entry
              {"\n"}• Cold Pyro Entry
              {"\n"}• Floral Chadar
              {"\n"}• Royal Entries
              {"\n"}• Fairy Light Entry
              {"\n"}• Thematic Entries
            </p>
          </div>
        </section>

        {/* 8. Varmala Themes */}
        <section>
          <h2 className={heading}>👑 Latest Varmala Themes</h2>
          <div className={card}>
            <p className="text-gray-700 whitespace-pre-line">
              • Hydraulic Stage
              {"\n"}• Revolving Platform
              {"\n"}• Lotus Concept
              {"\n"}• Flower Shower
              {"\n"}• Cold Pyro Varmala
              {"\n"}• Crystal Concepts
            </p>
          </div>
        </section>

        {/* 9. Photography */}
        <section>
          <h2 className={heading}>📸 Photography & Videography</h2>
          <div className={card}>
            <p className="text-gray-700 whitespace-pre-line">
              • Candid Photography
              {"\n"}• Traditional Photo & Video
              {"\n"}• Cinematic Films
              {"\n"}• Drone Coverage
              {"\n"}• Pre-Wedding
              {"\n"}• Highlights & Reels
            </p>
          </div>
        </section>

        {/* 10. Stage & Sound */}
        <section>
          <h2 className={heading}>🔊 Stage, Sound, Lighting & Production</h2>
          <div className={card}>
            <p className="text-gray-700 whitespace-pre-line">
              • P4 LED Wall
              {"\n"}• Concert Sound
              {"\n"}• Intelligent Lights
              {"\n"}• Special Effects
              {"\n"}• Technical Setup
            </p>
          </div>
        </section>

        {/* 11. Catering */}
        <section>
          <h2 className={heading}>🍽️ Outdoor Catering Services</h2>
          <div className={card}>
            <p className="text-gray-700 whitespace-pre-line">
              • Multi-cuisine
              {"\n"}• Live Counters
              {"\n"}• Desserts & Mocktails
              {"\n"}• Service Staff
            </p>
          </div>
        </section>

        {/* 12. Travel */}
        <section>
          <h2 className={heading}>🚗 Rental Car & Travel Assistance</h2>
          <div className={card}>
            <p className="text-gray-700 whitespace-pre-line">
              • Luxury Cars
              {"\n"}• Sedans & SUVs
              {"\n"}• Tempo Travellers
              {"\n"}• VIP Travel Coordination
            </p>
          </div>
        </section>

        {/* 13. Private Parties */}
        <section>
          <h2 className={heading}>🎉 Private Parties & Celebrations</h2>
          <div className={card}>
            <p className="text-gray-700 whitespace-pre-line">
              • Theme décor
              {"\n"}• House party setup
              {"\n"}• DJ & Music
              {"\n"}• Family games
              {"\n"}• Photography
            </p>
          </div>
        </section>

        {/* 14. Concerts */}
        <section>
          <h2 className={heading}>🎵 Concerts & Live Shows</h2>
          <div className={card}>
            <p className="text-gray-700 whitespace-pre-line">
              • Artist booking
              {"\n"}• Production
              {"\n"}• LED & Lighting
              {"\n"}• Crowd coordination
              {"\n"}• Marketing videos
            </p>
          </div>
        </section>

        {/* 15. Destination Weddings */}
        <section>
          <h2 className={heading}>🌍 Destination Wedding Solutions</h2>
          <div className={card}>
            <p className="text-gray-700 whitespace-pre-line">
              • Venue Shortlisting
              {"\n"}• Theme & Décor
              {"\n"}• Artist Curation
              {"\n"}• Hospitality
              {"\n"}• Ritual Management
              {"\n"}• Photography & BTS
              {"\n"}• Logistics & Travel
              {"\n"}• Full Production Support
            </p>
          </div>
        </section>

      </div>

      {/* WHY CHOOSE US */}
      <section className="mt-20 bg-yellow-500 text-black p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ⭐ Why Families & Brands Choose Us
        </h2>
        <ul className="text-lg leading-relaxed space-y-2">
          <li>✔ 17+ years of industry experience</li>
          <li>✔ Strong foothold in Delhi, Indore & Gwalior</li>
          <li>✔ 360° event solutions under one roof</li>
          <li>✔ Reliable teams for every segment</li>
          <li>✔ Creative concepts, perfect execution</li>
          <li>✔ Professional, polished and premium experience</li>
        </ul>
      </section>
    </div>
  );
}
