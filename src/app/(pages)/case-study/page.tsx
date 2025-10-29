import React from "react";

const RudyCapital: React.FC = () => {
  return (
    <section className="bg-white text-black px-6 md:px-16 py-20 font-Lato pt-50">
      {/* Title Section */}
      <div>
        <h1 className="text-5xl md:text-6xl font-Sora text-gray-400 font-semibold">
          Rudy Capital
        </h1>
        <h2 className="text-5xl md:text-7xl font-Sora font-bold mt-2 leading-tight">
          Turning crypto complexity <br /> into clarity
        </h2>
      </div>

      {/* Subtext Section */}
      <div className="mt-8 grid md:grid-cols-2 gap-8 text-base md:text-lg">
        <div>
          <h3 className="uppercase tracking-wide text-sm text-gray-500 mb-3">
            Recognition
          </h3>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded">
              <span className="text-xs font-semibold text-gray-700">WBDS</span>
            </div>
            <span className="text-sm text-gray-700 font-medium">
              WBDS FEATURED
            </span>
          </div>
        </div>

        <div className="text-gray-700 ">
          <p>
            How can we position Rudy at the forefront of crypto retail
            investment and develop a brand that stands as a reliable beacon in a
            complex landscape?
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-900 my-8"></div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-3 gap-12 text-gray-800">
        {/* About */}
        <div className="">
          <h3 className="text-lg font-semibold mb-3 font-PlayFair">
            Rudy Capital
          </h3>
          <p className="text-sm leading-relaxed text-gray-700">
            Rudy Capital is a crypto retail investment app designed to make
            cryptocurrency accessible and understandable for everyone. They aim
            to build a world where crypto investments enable equal
            opportunities, transforming the financial landscape into a more
            inclusive and prosperous future.
          </p>
        </div>

        {/* Strategy */}
        <div>
          <h3 className="text-lg font-semibold mb-3 font-[var(--font-PlayFair)]">
            Strategy
          </h3>
          <ul className="text-sm space-y-1">
            <li>Research</li>
            <li>Messaging</li>
            <li>Positioning</li>
            <li>Brand Strategy</li>
          </ul>
        </div>

        {/* Visual Identity + Website */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 font-[var(--font-PlayFair)]">
              Visual Identity
            </h3>
            <ul className="text-sm space-y-1">
              <li>Logo Design</li>
              <li>Visual Identity</li>
              <li>Brandbook</li>
              <li>Stationery</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 font-[var(--font-PlayFair)]">
              Website
            </h3>
            <ul className="text-sm space-y-1">
              <li>Website</li>
              <li>Motion Design</li>
              <li>Social Media</li>
              <li>Product Design</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start px-6 py-24 text-center space-y-32">
        {/* Section 1 — Hero / Testimonial */}
        <section className="w-full max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold font-Sora mb-12">
            Doing it the Rudy way
          </h1>

          <blockquote className="max-w-4xl mx-auto text-2xl md:text-3xl font-PlayFair text-gray-800 leading-relaxed mb-16">
            “Serious Business was an absolute hit for us. They managed to
            capture our vision right from the start in order to develop the
            perfect product with us. We will continue to work very closely with
            Serious Business.”
          </blockquote>

          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src="/path-to-image.jpg"
                alt="Client portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2 — The Challenge */}
        <section className="w-full max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-Sora mb-6">The Challenge</h2>
          <p className="text-lg text-gray-700 font-Lato leading-relaxed">
            Rudy Capital faced a challenge shared by many crypto investment
            platforms: how to simplify an inherently complex and intimidating
            space without losing credibility or depth. The goal was to make
            crypto investment feel secure, empowering, and inclusive for
            everyday users, while maintaining the brand’s innovative edge.
          </p>
        </section>

        {/* Section 3 — What We Noticed */}
        <section className="w-full max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-Sora mb-6">What We Noticed</h2>
          <ul className="list-disc text-left mx-auto inline-block text-gray-700 text-lg font-Lato space-y-4 text-start">
            <li>
              Users were overwhelmed by crypto jargon and lacked trust in
              digital finance tools.
            </li>
            <li>
              Competing apps had visually inconsistent brands that failed to
              communicate stability.
            </li>
            <li>
              There was an opportunity to stand out through transparency and
              visual clarity.
            </li>
          </ul>
        </section>

        {/* Section 4 — Strategy */}
        <section className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-Sora mb-10">Strategy</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-xl font-semibold font-Sora mb-3">Research</h3>
              <p className="text-gray-700 font-Lato leading-relaxed">
                Conducted qualitative interviews and usability studies to
                understand user hesitation toward crypto investments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold font-Sora mb-3">
                Brand Positioning
              </h3>
              <p className="text-gray-700 font-Lato leading-relaxed">
                Positioned Rudy Capital as the “trusted guide” in the digital
                economy, bridging innovation and accessibility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold font-Sora mb-3">
                Messaging & Tone
              </h3>
              <p className="text-gray-700 font-Lato leading-relaxed">
                Developed clear, human-first messaging that balances authority
                with empathy — focused on inclusion and opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 — Design Solution */}
        <section className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-Sora mb-6">Design Solution</h2>
          <p className="text-lg text-gray-700 font-Lato leading-relaxed mb-10">
            The design direction emphasized clarity through color and
            typography. A soft pastel palette and bold, confident type hierarchy
            created visual harmony and made the brand approachable. Interactive
            animations were subtle and purposeful — guiding user focus rather
            than distracting.
          </p>

          {/* Image Placeholders (3) */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center text-gray-400 text-lg">
              Image 1 Placeholder
            </div>
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center text-gray-400 text-lg">
              Image 2 Placeholder
            </div>
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center text-gray-400 text-lg">
              Image 3 Placeholder
            </div>
          </div>
        </section>

        {/* Section 6 — Full-Screen Video Placeholder */}
        <section className="w-full h-screen bg-black flex items-center justify-center text-white text-2xl font-Sora">
          Video Placeholder (Full Screen)
        </section>

        {/* Section 7 — Impact */}
        <section className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-Sora mb-6">Impact</h2>
          <p className="text-lg text-gray-700 font-Lato leading-relaxed mb-10">
            Within three months of the rebrand and new product design launch,
            Rudy Capital reported a 48% increase in user sign-ups and a 36%
            improvement in onboarding completion rates. Users described the
            experience as “simple, clear, and confident.”
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold mb-2">+48%</h3>
              <p className="text-gray-600 font-Lato">New User Growth</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">+36%</h3>
              <p className="text-gray-600 font-Lato">Onboarding Completion</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">+92%</h3>
              <p className="text-gray-600 font-Lato">User Trust Increase</p>
            </div>
          </div>
        </section>

        {/* Section 8 — Closing CTA */}
        <section className="w-full max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold font-Sora mb-8">
            Turning crypto complexity into clarity.
          </h2>
          <p className="text-lg text-gray-700 font-Lato mb-12">
            Rudy Capital proves that innovation doesn’t have to be complicated.
            Through thoughtful design and strategy, clarity can become the
            brand’s most powerful asset.
          </p>

          <button className="bg-pink-100 text-black px-8 py-3 rounded-full font-medium font-Sora hover:bg-pink-200 transition">
            Let’s work together
          </button>
        </section>
      </div>
    </section>
  );
};

export default RudyCapital;
