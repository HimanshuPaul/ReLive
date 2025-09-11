import { useEffect, useState } from "react";

export default function My_Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored);
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">My Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments booked yet.</p>
      ) : (
        <div className="max-w-4xl mx-auto grid gap-6">
          {appointments.map((appt, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {appt.subject || "General Consultation"}
              </h3>
              <p>
                <strong>Name:</strong> {appt.name}
              </p>
              <p>
                <strong>Email:</strong> {appt.email}
              </p>
              <p>
                <strong>Phone:</strong> {appt.phone}
              </p>
              <p>
                <strong>Date:</strong> {appt.date}
              </p>
              <p>
                <strong>Time:</strong> {appt.time}
              </p>
              <p>
                <strong>Message:</strong> {appt.message || "—"}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
