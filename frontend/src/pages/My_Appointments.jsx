import { useEffect, useState } from "react";
import bgImage from "../assets/appointments-bg.jpg"; // replace with your image name

export default function My_Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored);
  }, []);

  const handleCancel = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  return (
    <section
      className="py-16 px-6 min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          My Appointments
        </h2>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-100">
            No appointments booked yet.
          </p>
        ) : (
          <div className="grid gap-6">
            {appointments.map((appt, index) => (
              <div
                key={index}
                className="p-6 bg-white/30 backdrop-blur-lg rounded-xl shadow-md border border-white/40"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {appt.subject || "General Consultation"}
                </h3>
                <p className="text-gray-800">
                  <strong>Name:</strong> {appt.name}
                </p>
                <p className="text-gray-800">
                  <strong>Email:</strong> {appt.email}
                </p>
                <p className="text-gray-800">
                  <strong>Phone:</strong> {appt.phone}
                </p>
                <p className="text-gray-800">
                  <strong>Date:</strong> {appt.date}
                </p>
                <p className="text-gray-800">
                  <strong>Time:</strong> {appt.time}
                </p>
                <p className="text-gray-800">
                  <strong>Message:</strong> {appt.message || "—"}
                </p>

                <button
                  onClick={() => handleCancel(index)}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
