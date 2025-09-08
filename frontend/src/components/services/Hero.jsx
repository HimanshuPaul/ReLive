export default function Hero({ onBookAppointment }) {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-4xl font-extrabold mb-4">
        Your Mental Health Matters
      </h2>
      <p className="max-w-2xl text-gray-300 mb-6">
        Talk to certified counsellors, explore our services, and take the first
        step towards a healthier mind.
      </p>
      <button
        onClick={onBookAppointment}
        className="px-6 py-3 bg-teal-500 rounded-xl hover:bg-teal-600 transition"
      >
        Get Started
      </button>
    </section>
  );
}
