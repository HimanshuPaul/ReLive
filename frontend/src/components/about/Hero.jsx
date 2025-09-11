import React from "react";
import heroBg from "../../assets/about-hero-bg.jpeg";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-40"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Taking care of mental health is an act of self love.
        </p>
      </div>
    </section>
  );
}
