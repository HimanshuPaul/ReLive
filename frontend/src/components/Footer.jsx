import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-3 flex items-center">
            <span className="mr-2">🧠</span> ReLive
          </h2>
          <p className="text-sm mb-4">
            Signup our newsletter to get update information, news, insight or
            promotions.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg text-gray-800 w-full"
            />
            <button className="bg-white text-blue-600 px-4 py-2 rounded-r-lg font-semibold">
              Sign Up
            </button>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Leadership</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Article & News</li>
            <li>Legal Notice</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="font-semibold mb-3">Get In Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Get The F*** Out Of Here</li>
            <li>📞 +1 0000000000</li>
            <li>📠 +1 1111111111</li>
            <li>📧 info@yourdomain.com</li>
          </ul>
          <div className="flex space-x-3 mt-4">
            <a href="#">
              <Facebook className="hover:text-gray-200" />
            </a>
            <a href="#">
              <Twitter className="hover:text-gray-200" />
            </a>
            <a href="#">
              <Linkedin className="hover:text-gray-200" />
            </a>
            <a href="#">
              <Instagram className="hover:text-gray-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-sm text-gray-200 border-t border-gray-400 pt-4">
        Made with ❤️
        <br />© 2025 ReLive by CodeTitans. All rights reserved.
      </div>
    </footer>
  );
}
