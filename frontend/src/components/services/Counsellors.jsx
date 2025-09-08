export default function Counsellors() {
  const counsellors = ["Dr. Sharma", "Ms. Gupta", "Mr. Iyer"];

  return (
    <section className="py-16 px-6">
      <h3 className="text-3xl font-bold text-center mb-10">
        Meet Our Counsellors
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {counsellors.map((counsellor) => (
          <div
            key={counsellor}
            className="p-6 bg-black/40 rounded-xl shadow text-center"
          >
            <div className="w-24 h-24 mx-auto bg-gray-600 rounded-full mb-4"></div>
            <h4 className="text-lg font-semibold">{counsellor}</h4>
            <p className="text-gray-400">Certified Counsellor</p>
          </div>
        ))}
      </div>
    </section>
  );
}
