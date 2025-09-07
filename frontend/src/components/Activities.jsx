import { activitiesData } from "../assets/data";

export default function Activities() {
  const handleStart = (activity) => {
    alert(
      `${activity.title}\n\nInstructions: ${activity.instructions}\n\nDuration: ${activity.duration}`
    );
  };

  return (
    <section className="section bg-gradient-to-r from-teal-700 to-teal-500 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-white font-bold mb-4">
          🌿 Feel-Good Activities
        </h2>
        <p className="text-xl text-white opacity-90 mb-12 max-w-3xl mx-auto">
          Simple, science-backed activities to boost your mood and mental
          wellbeing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesData.map((activity, i) => (
            <div
              key={i}
              className="activity-card bg-teal-800 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              <span className="activity-emoji text-4xl mb-4">
                {activity.emoji}
              </span>
              <h3 className="font-semibold text-xl mb-2">{activity.title}</h3>
              <p className="mb-4">{activity.description}</p>
              <button
                className="activity-btn bg-white text-teal-800 font-bold py-2 px-6 rounded-full hover:bg-teal-600 hover:text-white transition"
                onClick={() => handleStart(activity)}
              >
                Try Now
              </button>
              <div className="duration text-sm mt-4">{activity.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
