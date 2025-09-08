import React from "react";
import Hero from "../components/about/Hero";
import AboutSection from "../components/about/AboutSection";
import Values from "../components/about/Values";
import Team from "../components/about/Team";

export default function About() {
  return (
    <main
      className="min-h-screen text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.postimg.cc/L4C3nh2p/about-values-bg2.jpg')",
      }}
    >
      <Hero />
      <AboutSection />
      <Values />
      <Team />
    </main>
  );
}
