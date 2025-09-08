import React from "react";

export default function Values() {
  const bullets = [
    "Collaboration",
    "Innovation",
    "Excellence",
    "Customer-first",
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto bg-[#0a1a3f] rounded-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <img
            src="https://wallpaperaccess.com/full/1169815.jpg"
            alt="Values"
            className="w-full rounded-lg shadow-md object-cover h-64 md:h-80"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-[#ffd700] text-sm uppercase tracking-wide mb-2">
            Our Values
          </h4>
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
            What We Stand For
          </h2>
          <p className="text-[#dcdcdc] mb-4 leading-relaxed">
            We believe in collaboration, innovation, and relentless focus on
            quality — working together to build products that matter.
          </p>
          <ul className="space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-[#e6e6e6]">
                <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ffd700]/20 text-[#ffd700] font-bold">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
