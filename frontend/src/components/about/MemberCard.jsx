import React from "react";

export default function MemberCard({ name, role, img, bio }) {
  return (
    <div className="bg-[#002b5c] rounded-lg p-6 shadow-lg transform transition hover:-translate-y-2">
      <img
        src={img}
        alt={name}
        className="w-full h-44 object-cover rounded-md mb-4"
      />
      <h3 className="text-[#ffd700] text-lg font-semibold">{name}</h3>
      <p className="text-sm text-[#e6e6e6]">{role}</p>
      <p className="mt-3 text-[#dcdcdc] text-sm leading-relaxed">{bio}</p>
    </div>
  );
}
