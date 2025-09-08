import React from "react";
import MemberCard from "./MemberCard";

export default function Team() {
  const members = [
    {
      name: "Sonali Mahato",
      role: "UI/UX Designer",
      img: "https://via.placeholder.com/400x400?text=Sonali",
    },
    {
      name: "Nikita Mishra",
      role: "Front-End Development",
      img: "https://via.placeholder.com/400x400?text=Nikita",
    },
    {
      name: "Himanshu Paul",
      role: "Front-End Development",
      img: "https://via.placeholder.com/400x400?text=Himanshu",
    },
    {
      name: "Shilpi Thakur",
      role: "Front-End Development",
      img: "https://via.placeholder.com/400x400?text=Sidhanta",
    },
    {
      name: "Sidhanta Sahoo",
      role: "Backend Development",
      img: "https://via.placeholder.com/400x400?text=Somen",
    },
    {
      name: "Somen Mandal",
      role: "Back-End Development",
      img: "https://via.placeholder.com/400x400?text=Adeeb",
    },
  ];

  return (
    <section className="py-12 px-6 bg-[#023020]">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-[#ffd700] text-sm uppercase tracking-wide mb-2">
          Our Team
        </h4>
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Meet the Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <MemberCard key={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}