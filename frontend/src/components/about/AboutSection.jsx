import React from "react";

export default function AboutSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-[#ffd700] font-semibold uppercase tracking-wide text-sm">
          About Us
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
          Who We Are
        </h2>
        <p className="mt-4 text-[#dcdcdc] leading-relaxed">
          We are committed to providing the best resources and guidance to help
          you grow and achieve your goals. Our team works together to deliver
          beautiful, reliable, and accessible products.
        </p>
        <button className="mt-6 inline-block bg-[#ffd700] text-[#002147] px-6 py-2 rounded-full font-semibold hover:bg-[#ffcc00] transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
