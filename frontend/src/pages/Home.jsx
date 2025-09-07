import React from "react";
import HeroSection from "../components/HeroSection";
import StatCounter from "../components/StatCounter";
import HowWeWork from "../components/HowWeWork";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* How We Work Section */}
      <HowWeWork />

      {/* Stats Section */}
      <StatCounter />
    </>
  );
};

export default Home;
