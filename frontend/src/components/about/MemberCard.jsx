import React from "react";

export default function MemberCard({ name, role, img }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={img}
        alt={name}
        className="w-40 h-40 object-cover rounded-full border-4 border-purple-600 mb-4"
      />
      <h3 className="text-2xl font-bold text-gray-900 text-center">{name}</h3>
      <p className="text-lg text-gray-600 text-center">{role}</p>
    </div>
  );
}