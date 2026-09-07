import { Link } from "react-router-dom";

// Shared long-form "How is Aman different" copy. Used full-width on the
// /why-aman-shinde page and as a section on the home page.
export default function WhyAmanContent({
  heading = "h2",
  readMoreHref,
  preview = false,
}: {
  heading?: "h1" | "h2";
  readMoreHref?: string;
  preview?: boolean;
}) {
  const Heading = heading;
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-0 text-gray-700 leading-relaxed">
      <Heading className="font-display text-3xl md:text-4xl font-bold text-[#201c16] mb-8">
        How Is Anchor Aman Shinde Different From Other Anchor Competitors?
      </Heading>

      <p className="mb-4">
        Anchor Aman Shinde – The Mic Magician is not simply an anchor standing on stage. He is an
        experienced celebration storyteller, entertainer, audience engager and professional event
        host who understands how to turn important moments into unforgettable memories.
      </p>
      <p className="mb-4">
        With 17+ years of anchoring experience since 2008, 5,000+ live shows, 1,000+ recorded events
        and experience working with 500+ event companies, Aman brings the confidence, presence of
        mind, voice versatility and adaptability that come from years of working on real stages with
        real audiences.
      </p>
      <p className="mb-4">
        What truly makes his anchoring different is that he does not follow a repetitive,
        one-format-fits-all script.
      </p>
      <p className="mb-4">
        Every wedding has its own family, emotions, traditions, personalities and story. Aman creates
        the entertainment around the people and the occasion rather than simply filling the stage
        with announcements.
      </p>

      {!preview && (
       <>
      <h3 className="font-display text-2xl font-bold text-[#201c16] mt-12 mb-4">
        Signature Wedding Entertainment
      </h3>
      <p className="mb-4">
        Aman’s signature Wheel of Fortune is one of his distinctive wedding entertainment concepts.
        It adds excitement, anticipation and participation to Haldi and wedding celebrations while
        giving guests an opportunity to become part of the celebration.
      </p>
      <p className="mb-4">
        His colourful games, interactive activities and engaging props are personally planned and
        carried by him, helping create an energetic and visually exciting experience for guests.
      </p>
      <p className="mb-4">
        For Ladies Sangeet, Aman combines storytelling, humour, interaction and family participation
        to connect performances, emotions and celebrations into one engaging experience.
      </p>
      <p className="mb-4">
        For Varmala, he can present the ritual through the beautiful traditional concept of
        Shiv-Shakti Milan and the formation of Adi Shakti, giving the ceremony an emotional story and
        deeper cultural meaning rather than simply announcing the Varmala.
      </p>

      <h3 className="font-display text-2xl font-bold text-[#201c16] mt-12 mb-4">
        A Family Anchor With Class
      </h3>
      <p className="mb-4">Aman believes a wedding anchor is also representing the family.</p>
      <p className="mb-4">
        His hosting is designed to entertain children, youngsters, parents and elders together
        without crossing personal boundaries.
      </p>
      <p className="mb-4">
        He does not depend on vulgar jokes, unnecessary shayari, cheap comedy or embarrassing content
        to create laughter.
      </p>
      <p className="mb-4">
        He does not disrespect someone’s dress, appearance, personality, profession, relationships or
        personal choices simply for a joke.
      </p>
      <p className="mb-4">
        Instead, his entertainment comes from presence of mind, spontaneous humour, clever
        interaction, colourful games, storytelling, voice versatility and understanding the audience.
      </p>
      <p className="mb-4">
        The result is fun, energetic and memorable entertainment while remaining respectful, elegant
        and family-friendly.
      </p>

      <h3 className="font-display text-2xl font-bold text-[#201c16] mt-12 mb-4">
        Experience That Shows When Things Go Unexpectedly
      </h3>
      <p className="mb-4">Live events rarely go exactly according to plan.</p>
      <p className="mb-4">
        Performances can change, guests can arrive late, ceremonies can get delayed, schedules can
        shift, technical issues can occur or unexpected situations can arise on stage.
      </p>
      <p className="mb-4">This is where experience makes the difference.</p>
      <p className="mb-4">
        Aman’s years of live-event experience have developed his ability to think quickly, improvise
        naturally, coordinate with families and vendors, manage the audience and keep the celebration
        moving smoothly without making guests feel that something has gone wrong.
      </p>
      <p className="mb-4">
        His presence of mind, voice versatility, stage confidence and ability to handle unexpected
        situations are among the strongest advantages of his live anchoring style.
      </p>

      <h3 className="font-display text-2xl font-bold text-[#201c16] mt-12 mb-4">
        More Than a Wedding Anchor
      </h3>
      <p className="mb-4">Aman hosts a wide range of celebrations and events including:</p>
      <p className="mb-4">
        Haldi, Mehendi, Ladies Sangeet, Ring Ceremony, Varmala, Wedding Reception, Corporate Events,
        Team Building Activities, College Events, Public Events, Award Functions, Entertainment Events
        and Destination Weddings.
      </p>
      <p className="mb-4">
        His experience across different audiences allows him to adapt his style—from a premium and
        elegant wedding atmosphere to a high-energy Sangeet, interactive Haldi Carnival or
        professional corporate event.
      </p>

      <h3 className="font-display text-2xl font-bold text-[#201c16] mt-12 mb-4">
        Delhi, Gwalior, Indore &amp; Destination Weddings
      </h3>
      <p className="mb-4">
        Whether you are searching for the Best Wedding Anchor in Delhi, Premier Wedding Anchor in
        Gwalior, Professional Wedding Emcee in Indore, Trusted Event Host, Destination Wedding Anchor,
        Corporate Event Anchor or Family Wedding Host, Anchor Aman Shinde brings a professional,
        personalised and highly engaging hosting experience.
      </p>
      <p className="mb-4">
        He is available for weddings and events across Delhi NCR, Gwalior, Indore and destination
        locations across India.
      </p>

      <h3 className="font-display text-2xl font-bold text-[#201c16] mt-12 mb-4">
        The Mic Magician Difference
      </h3>
      <p className="mb-4">Many people can speak on a mic.</p>
      <p className="mb-4">A professional anchor knows how to control a stage.</p>
      <p className="mb-4">An experienced anchor knows how to handle a crowd.</p>
      <p className="mb-4">
        But a great family anchor understands when to make people laugh, when to create emotion, when
        to tell a story, when to involve the family, when to respect a ritual and when to simply let
        the moment speak for itself.
      </p>
      <p className="mb-4">That is the philosophy behind Anchor Aman Shinde – The Mic Magician.</p>
      <p className="mb-6 font-semibold text-[#201c16]">
        Professional. Experienced. Trusted. Premium. Highly Rated. Recommended.
      </p>
      <p className="mb-8">
        Not just an anchor for your event — the voice, energy and storyteller behind your
        celebration.
      </p>
       </>
      )}

      <div className="flex flex-wrap gap-4">
        {!preview && (
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 hover:scale-105 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Book Anchor Aman Shinde
          </Link>
        )}
        {readMoreHref && (
          <Link
            to={readMoreHref}
            className="inline-block bg-yellow-500 hover:bg-yellow-400 hover:scale-105 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Read More
          </Link>
        )}
      </div>
    </div>
  );
}
