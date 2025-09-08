import React from "react";
import heroBg from "../../assets/about_us-bg.jpg";


export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-[#013220]/80 backdrop-blur-sm" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">About Us</h1>
        <p className="mt-4 text-lg text-[#e0e0e0]">
          Taking care of mental health is a act of self love.
        </p>
      </div>
    </section>
  );
}
