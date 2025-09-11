import React from "react";
import MemberCard from "./MemberCard";

export default function Team() {
  const members = [
    {
      name: "Sonali Mahato",
      role: "Content Specialist + UI/UX Designer",
      img: "https://i.postimg.cc/9Fj104pC/Sonali-pic.jpg",
    },
    {
      name: "Nikita Mishra",
      role: "Frontend Developer + Animator",
      img: "https://i.postimg.cc/NfgfQ4Wt/myphoto-resized-Picsart-Ai-Image-Enhancer.png",
    },
    {
      name: "Himanshu Paul",
      role: "Frontend Developer",
      img: "https://i.postimg.cc/x8rG2f7z/Himanshu-pic.jpg",
    },
    {
      name: "Shilpi Thakur",
      role: "QA / Documentation & PPT Lead",
      img: "https://i.postimg.cc/sD7SpCLn/Shilpi-pic.jpg",
    },
    {
      name: "Sidhanta Sahoo",
      role: "Backend + ChatBot Developer",
      img: "https://i.postimg.cc/7hbGCp2N/Sidhanta-pic.jpg",
    },
    {
      name: "Somen Mandal",
      role: "Assets Provider + Video Producer",
      img: "https://i.postimg.cc/mD7RmVGG/Somen-pic.jpg",
    },
  ];

  return (
    <section className="py-12 px-6 bg-[#023020]">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-[#ffd700] text-sm uppercase tracking-wide mb-2">
          Our Team
        </h4>
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Meet the CodeTitans
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
