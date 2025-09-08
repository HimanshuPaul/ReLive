import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/1169815.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#002147]/80 backdrop-blur-sm" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">Resource Hub</h1>
        <p className="mt-4 text-lg text-[#e0e0e0]">
          Your gateway to knowledge and growth
        </p>
      </div>
    </section>
  );
}
