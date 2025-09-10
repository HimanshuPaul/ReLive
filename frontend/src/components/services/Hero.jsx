import React from "react";
import bgImage from "../../assets/services_hero-bg.jpg";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center py-40 text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
          Your Mental Health Matters
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Talk to certified counsellors, explore our services, and take the
          first step towards a healthier mind.
        </p>
      </div>
    </section>
  );
}
