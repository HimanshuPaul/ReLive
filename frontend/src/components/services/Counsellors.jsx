import React from "react";
import bgImage from "../../assets/services_counsellors-bg.jpg";

export default function Counsellors() {
  const counsellors = [
    {
      name: "Dr. Sharma",
      title: "Certified Counsellor",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ms. Gupta",
      title: "Certified Counsellor",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mr. Iyer",
      title: "Certified Counsellor",
      img: "https://randomuser.me/api/portraits/men/54.jpg",
    },
  ];

  return (
    <section
      className="py-16 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-white mb-10">
          Meet Our Counsellors
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {counsellors.map((counsellor) => (
            <div
              key={counsellor.name}
              className="p-6 bg-white/20 backdrop-blur-md rounded-xl shadow text-center transition hover:scale-105 cursor-pointer"
            >
              <div className="w-24 h-24 mx-auto rounded-full mb-4 overflow-hidden">
                <img
                  src={counsellor.img}
                  alt={counsellor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-white">
                {counsellor.name}
              </h4>
              <p className="text-white/80">{counsellor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
