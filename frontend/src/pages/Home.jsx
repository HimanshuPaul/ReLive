import React from "react";
import Hero from "../components/home/Hero";
import StatCounter from "../components/home/StatCounter";
import HowWeWork from "../components/home/HowWeWork";
import WhatWeStandFor from "../components/about/WhatWeStandFor";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import Appointment from "../components/services/Appointment";

const Home = ({ onOpenChat }) => {
  return (
    <>
      <Hero onOpenChat={onOpenChat} />
      <HowWeWork />
      <WhatWeStandFor />
      {/* Appointment only after login */}
      <SignedIn>
        <Appointment />
      </SignedIn>

      <SignedOut>
        <div className="text-center py-10">
          <p className="text-lg mb-4">Please sign in to book an appointment!</p>
          <SignInButton mode="modal">
            <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>
      <StatCounter />
    </>
  );
};

export default Home;
