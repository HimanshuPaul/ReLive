import React from "react";

const steps = [
  {
    number: 1,
    title: "Appointment",
    desc: "Dictum ornare torquent pretium litora risus odio vulputate feugiat amet",
  },
  {
    number: 2,
    title: "Consultation",
    desc: "Dictum ornare torquent pretium litora risus odio vulputate feugiat amet",
  },
  {
    number: 3,
    title: "Sessions",
    desc: "Dictum ornare torquent pretium litora risus odio vulputate feugiat amet",
  },
  {
    number: 4,
    title: "Evaluation",
    desc: "Dictum ornare torquent pretium litora risus odio vulputate feugiat amet",
  },
];

function HowWeWork() {
  return (
    <section className="py-14 px-2 bg-white">
      <div className="flex flex-col items-center">
        <span className="text-teal-500 mb-2 font-semibold tracking-wider flex items-center justify-center space-x-1">
          <svg
            width="18"
            height="18"
            fill="currentColor"
            className="inline mr-1"
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="3" />
            <circle
              cx="10"
              cy="10"
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          HOW WE WORK
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-9">
          You are capable of breaking free from
          <br />
          negative thought patterns
        </h2>
      </div>

      {/* Top Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white rounded-3xl shadow-lg flex flex-col items-start p-8 w-full max-w-xs transition duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-teal-600 mb-6">
              <span className="text-teal-600 text-2xl font-extrabold font-mono">
                {step.number}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Step Indicator */}
      <div className="flex justify-center items-center gap-3 mt-2">
        {steps.map((step, idx) => (
          <React.Fragment key={step.number}>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full border-2 border-teal-600 flex items-center justify-center text-teal-700 text-lg font-bold font-mono">
                {step.number}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <span className="w-32 h-0 border-t-2 border-gray-300 mx-2"></span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default HowWeWork;
