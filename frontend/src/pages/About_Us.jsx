import React from "react";
import Hero from "../components/about/Hero";
import AboutSection from "../components/about/AboutSection";
import Values from "../components/about/Values";
import Team from "../components/about/Team";

export default function About() {
  return (
    <main className="min-h-screen bg-[#002147] text-white">
      <Hero />
      <AboutSection />
      <Values />
      <Team />
    </main>
  );
}
