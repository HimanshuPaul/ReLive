import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import assets from "../assets/assets"; // your logo path

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-9 items-start">
        {/* moves Logo */}
        <div className="-mt-3">
          {" "}
          {/* moves the newsletter */}
          <div className="flex items-center mb-12">
            <img src={assets.logo} alt="ReLive Logo" className="w-40 h-15" />
          </div>
          {/* moves the Newsletter Signup */}
          <p className="text-m mb-6">
            Signup our newsletter to get update information, news, insight or
            promotions.
          </p>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-l-md bg-gray-100 text-gray-800 text-sm outline-none"
            />
            <button className="bg-blue-100 text-blue-700 px-5 py-2 rounded-r-md text-sm font-semibold hover:bg-violet-400 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Contact Us */}
        <div className="pl-25">
          <h3 className="font-semibold mb-5">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>Contact Us</li>
            <li>Leadership</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Company */}
        <div className="pl-20">
          <h3 className="font-semibold mb-5">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Article & News</li>
            <li>Legal Notice</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="pl-20">
          <h3 className="font-semibold mb-5">Get In Touch</h3>
          <ul className="space-y-3 text-sm">
            <li>📍 XYZ</li>
            <li>📞 +1 0000000000</li>
            <li>📠 +1 1111111111</li>
            <li>📧 info@yourdomain.com</li>
          </ul>
          <div className="flex space-x-3 mt-4">
            <a href="#">
              <Facebook className="hover:text-gray-200 w-5 h-5" />
            </a>
            <a href="#">
              <Twitter className="hover:text-gray-200 w-5 h-5" />
            </a>
            <a href="#">
              <Linkedin className="hover:text-gray-200 w-5 h-5" />
            </a>
            <a href="#">
              <Instagram className="hover:text-gray-200 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-6 text-xs text-gray-200 border-t border-gray-400 pt-3">
        Made with ❤️ <br />© {new Date().getFullYear()} ReLive by CodeTitans.
        All rights reserved.
      </div>
    </footer>
  );
}
