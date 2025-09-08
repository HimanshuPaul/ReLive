import React from "react";
import MemberCard from "./MemberCard";

export default function Team() {
  const members = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      img: "https://via.placeholder.com/400x300?text=John",
      bio: "Builds pixel-perfect UI and maintains the component library.",
    },
    {
      name: "Jane Smith",
      role: "Product Designer",
      img: "https://via.placeholder.com/400x300?text=Jane",
      bio: "Designs intuitive user experiences and clean interfaces.",
    },
    {
      name: "Mike Johnson",
      role: "Project Manager",
      img: "https://via.placeholder.com/400x300?text=Mike",
      bio: "Keeps the team aligned and ensures timely deliveries.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-[#00172e]">
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
