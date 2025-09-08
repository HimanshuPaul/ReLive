import React from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-left px-6 md:px-12">
        <p className="text-emerald-400 font-semibold uppercase tracking-wide">
          Mental Health Care
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mt-3">
          Your Mental Wellbeing, Our Priority
          <br /> Health With Counseling
        </h1>
        <p className="text-gray-200 mt-4 text-lg">
          Confidential, stigma-free support for students.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/screening")}
            className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg transition"
          >
            Take Screening Test
          </button>
          <button
            onClick={() => navigate("/resources")}
            className="px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-black rounded-full shadow-lg transition"
          >
            Explore Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
