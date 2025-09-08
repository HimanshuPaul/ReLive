export default function ServicesSection({ onBookAppointment }) {
  const services = ["Therapy", "Stress Management", "Career Counselling"];

  return (
    <section className="py-16 px-6 bg-white/5">
      <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <div
            key={service}
            className="p-6 bg-black/40 rounded-xl shadow hover:scale-105 transition cursor-pointer"
            onClick={() => onBookAppointment(service)}
          >
            <h4 className="text-xl font-semibold mb-3">{service}</h4>
            <p className="text-gray-300">
              Learn more about our {service.toLowerCase()} programs designed for
              you.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
