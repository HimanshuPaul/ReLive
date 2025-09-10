import React from "react";
import Hero from "../components/about/Hero";
import AboutSection from "../components/about/AboutSection";
import WhatWeStandFor from "../components/about/WhatWeStandFor";
import OurTeam from "../components/about/OurTeam";
import StatCounter from "../components/home/StatCounter";

export default function About() {
  return (
    <main
      className="min-h-screen text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/L4C3nh2p/about-values-bg2.jpg')",
      }}
    >
      <Hero />
      <AboutSection />
      <WhatWeStandFor />
      <StatCounter />
      <OurTeam />
    </main>
  );
}
