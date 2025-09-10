import React from "react";
import bgImage from "../../assets/services_section-bg.jpg";

export default function ServicesSection({ onBookAppointment }) {
  const services = ["Therapy", "Stress Management", "Career Counselling"];

  return (
    <section
      className="py-16 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-white mb-10">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="p-6 bg-white/20 backdrop-blur-md rounded-xl shadow hover:scale-105 transition cursor-pointer"
              onClick={() => onBookAppointment(service)}
            >
              <h4 className="text-xl font-semibold mb-3 text-white">
                {service}
              </h4>
              <p className="text-white/80">
                Learn more about our {service.toLowerCase()} programs designed
                for you.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
