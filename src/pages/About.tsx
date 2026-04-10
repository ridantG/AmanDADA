import aboutImage from "../assets/about.jpeg"; // replace with your own image path

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-16 bg-white text-gray-800">
      {/* Left Image */}
      <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
        <img
          src={aboutImage}
          alt="About Anchor"
          className="rounded-lg shadow-lg w-full max-w-md object-cover"
        />
      </div>

      {/* Right Text Content */}
      <div className="md:w-1/2 w-full md:pl-12">
        <h3 className="text-sm font-semibold text-yellow-500 uppercase mb-2">
          About Anchor Aman
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#737874]">
          Anchor in Delhi | Top Wedding Anchor in India
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Anchor Aman Shinde – The Mic Magician of India

Anchor Aman Shinde, "The Mic Magician of India," is a celebrated celebrity anchor, emcee, and comedian host with over 17 years of experience. He has hosted over 8,000 events (7,000+ live) for 500+ event companies across India, Dubai, and Singapore. Renowned for his dynamic personality and versatility, Aman excels in a wide range of events, from luxury weddings and corporate galas to high-profile celebrity film promotions (like Student of the Year and Bajrangi Bhaijaan) and major government initiatives (Swachh Bharat Mission). Honored as "Central India’s Most Versatile Anchor," he is known for his unique ability to connect with any audience, turning moments into lasting memories.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
Anchor Aman Shinde is a leading celebrity emcee with 17+ years of experience and over 8,000 events hosted globally (India, Dubai, Singapore). He specializes in corporate events, luxury weddings, and celebrity promotions, bringing unmatched energy and professional finesse to every stage. A versatile and dynamic performer, he instantly connects with all audiences.

        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
🌟 Why Choose Anchor Aman Shinde?

✨ Dynamic Personality: A perfect blend of professionalism, humor, and natural charisma.
🎯 Audience Magnet: Instantly connects with guests of all age groups, cultures, and occasions.
🎤 Versatile Performer: Equally flawless in weddings, concerts, or formal corporate gatherings.
🏆 Proven Excellence: Over 17 years of leadership and thousands of successful events.

“He doesn’t just hold the mic — he holds hearts, attention, and energy all at once.”


        </p>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md transition">
          Read More
        </button>
      </div>
    </section>
  );
}
