export default function Appointment({ isOpen, onClose, service }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-xl shadow-lg p-8 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
        {service && (
          <p className="mb-4">
            You selected: <span className="font-semibold">{service}</span>
          </p>
        )}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg p-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg p-2"
          />
          <button
            type="submit"
            className="bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
