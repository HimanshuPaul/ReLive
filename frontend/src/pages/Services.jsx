import React from "react";
import Hero from "../components/services/Hero";
import ServicesSection from "../components/services/ServicesSection";
import Counsellors from "../components/services/Counsellors";
import Appointment from "../components/services/Appointment";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import StatCounter from "../components/home/StatCounter";

const Services = () => {
  return (
    <>
      <Hero />

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
      <ServicesSection />
      <Counsellors />
      <StatCounter />
    </>
  );
};

export default Services;
