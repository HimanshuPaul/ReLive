import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export default function Appointments() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted!\nDate: ${date}\nTime: ${time}`);
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
            Get in Touch
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            We'd love to hear from you
          </h2>
          <p className="mt-4 text-gray-600">Feel Free to reach us.</p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-600 text-white p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Head Office</h3>
                <p className="text-gray-600">XYZ</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-600 text-white p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-gray-600">support@example.com</p>
                <p className="text-gray-600">hello@example.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-600 text-white p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-gray-600">Phone: +1 (555) 987-6543</p>
                <p className="text-gray-600">Fax: +1 (555) 987-6541</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="p-3 rounded-lg text-gray-900 w-full"
                required
              />
              <input
                type="email"
                placeholder="Your email"
                className="p-3 rounded-lg text-gray-900 w-full"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone number"
                className="p-3 rounded-lg text-gray-900 w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 rounded-lg text-gray-900 w-full"
              />
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center space-x-2">
                <Calendar size={18} /> <span>Preferred Date</span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-3 rounded-lg text-gray-900 w-full"
                required
              />
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Preferred Time
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  "9:00 AM",
                  "10:00 AM",
                  "11:00 AM",
                  "2:00 PM",
                  "3:00 PM",
                  "4:00 PM",
                ].map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setTime(slot)}
                    className={`p-2 rounded-lg border text-sm ${
                      time === slot
                        ? "bg-blue-900 text-white"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Your message"
              rows={4}
              className="p-3 rounded-lg text-gray-900 w-full"
            />

            <button
              type="submit"
              className="mt-4 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <Mail size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
