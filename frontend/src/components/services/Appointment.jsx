import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import bgImage from "../../assets/appointment-bg.jpg"; // change path if needed

export default function Appointment() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      subject: e.target[3].value,
      date,
      time,
      message: e.target[6].value,
    };

    const existing = JSON.parse(localStorage.getItem("appointments")) || [];
    existing.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(existing));

    toast.success("✅ Your appointment is scheduled!", {
      position: "top-right",
      style: { marginTop: "60px" },
    });

    setDate("");
    setTime("");
    e.target.reset();
  };

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div> {/* dark overlay */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg text-white">
          <p className="text-sm text-emerald-400 font-semibold uppercase tracking-wide">
            Get in Touch
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            We'd love to hear from you
          </h2>
          <p className="mt-4 text-[#dcdcdc]">
            Whether you have questions, want to book an appointment, or need
            support, our team is here to listen. Reach out via email, phone, or
            use the form to connect directly with our certified counsellors.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Head Office</h3>
                <p className="text-[#dcdcdc]">
                  Arka Jain University, Ghamaria, Jharkhand, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-[#dcdcdc]">
                  support@arkajainunivercity.ac.in
                </p>
                <p className="text-[#dcdcdc]">hello@arkajainunivercity.ac.in</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-[#dcdcdc]">Phone: +91(555) 987-6543</p>
                <p className="text-[#dcdcdc]">Fax: +91 (555) 987-6541</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg text-gray-900">
          <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="p-3 rounded-xl w-full bg-white/50 backdrop-blur-md border border-gray-200 focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                placeholder="Your email"
                className="p-3 rounded-xl w-full bg-white/30 backdrop-blur-md border border-gray-200 focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone number"
                className="p-3 rounded-xl w-full bg-white/70 backdrop-blur-md border border-gray-200 focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 rounded-xl w-full bg-white/70 backdrop-blur-md border border-gray-200 focus:ring-2 focus:ring-blue-400"
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
                className="p-3 rounded-full w-full bg-white/70 backdrop-blur-md border border-gray-200 focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Time Slots Dropdown */}
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center space-x-2">
                <Clock size={18} /> <span>Preferred Time</span>
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="p-3 rounded-full w-full bg-white/70 backdrop-blur-md border border-gray-200 focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">-- Select a time --</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              placeholder="Your message"
              rows={4}
              className="p-3 rounded-xl w-full bg-white/70 backdrop-blur-md border border-gray-200 focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="mt-4 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all"
            >
              <Mail size={18} />
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
