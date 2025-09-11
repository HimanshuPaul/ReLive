import React from "react";
import Hero from "../components/about/Hero";
import AboutSection from "../components/about/AboutSection";
import WhatWeStandFor from "../components/about/WhatWeStandFor";
import OurTeam from "../components/about/OurTeam";
import StatCounter from "../components/home/StatCounter";
import Counsellors from "../components/services/Counsellors";

export default function About() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <WhatWeStandFor />
      <StatCounter />
      <Counsellors />
      <OurTeam />
    </main>
  );
}
