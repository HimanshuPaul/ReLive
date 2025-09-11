import React from "react";
import bgImage from "../../assets/values-bg.jpg";

export default function WhatWeStandFor() {
  const bullets = [
    "Confidentiality & Privacy",
    "Stigma-Free Support",
    "Reliability & Accuracy",
    "Data-Driven Insights (Anonymous)",
    "Empathy & Compassion",
  ];

  return (
    <section
      className="py-12 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center shadow-xl ">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="https://i.postimg.cc/yYXKBq02/about-us-bg2.jpg"
            alt="Values"
            className="w-full rounded-lg shadow-md object-cover h-64 md:h-80"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h4 className="text-yellow-400 text-sm uppercase tracking-wide mb-2">
            Our Values
          </h4>
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
            What We Stand For
          </h2>
          <p className="text-grey-200 mb-4 leading-relaxed">
            We stand for confidential, stigma-free, and accessible mental
            wellness support for every student, empowering them to seek help,
            stay informed, and take charge of their mental health.
          </p>
          <ul className="space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-grey-200">
                <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-200/20 text-yellow-400 font-bold">
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
