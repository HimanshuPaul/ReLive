import React from "react";
import Music from "../components/resources/Music";
import Activities from "../components/resources/Activities";
import Hero from "../components/resources/Hero";
import StatCounter from "../components/home/StatCounter";

function App() {
  return (
    <>
      <Hero />
      <Music />
      <StatCounter />
      <Activities />
    </>
  );
}

export default App;
