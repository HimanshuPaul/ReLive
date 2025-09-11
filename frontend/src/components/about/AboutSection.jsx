import React from "react";
import aboutBg from "../../assets/about_us-bg.jpeg";

export default function AboutSection() {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-6 text-white"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-4xl mx-auto text-center md:text-left">
        <h4 className="text-[#ffd700] font-semibold uppercase tracking-wide text-sm">
          About Us
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">Who We Are</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8leading-relaxed">
          We are a student-focused platform dedicated to providing confidential,
          stigma-free mental health support and resources for better wellbeing.
        </p>
        <button className="mt-6 inline-block bg-[#ffd700] text-[#002147] px-6 py-2 rounded-full font-semibold hover:bg-[#ffcc00] transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
