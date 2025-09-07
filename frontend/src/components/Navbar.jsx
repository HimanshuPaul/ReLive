import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import { MenuIcon, XIcon } from "lucide-react";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      {/* Logo */}
      <Link to="/" className="max-mid:flex-1">
        <img src={assets.logo} alt="ReLive Logo" className="w-36 h-auto" />
      </Link>

      {/* Links */}
      <div
        className={`max-md:absolute max-md:top-8 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/80 md:bg-white/20 md:border border-gray-300/20 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-md:w-full" : "max-md:w-0"
        }`}
      >
        {/* Close Icon (mobile only) */}
        <XIcon
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        {/* Nav Links with hover effect */}
        {[
          { to: "/", label: "Home" },
          { to: "/Resources", label: "Resources" },
          { to: "/Services", label: "Services" },
          { to: "/About_Us", label: "About Us" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className="relative overflow-hidden h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              {item.label}
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <LoginButton />
      </div>

      {/* Mobile Menu Icon */}
      <MenuIcon
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Navbar;
