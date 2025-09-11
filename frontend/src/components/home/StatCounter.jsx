import React, { useState, useEffect, useRef } from "react";
import { Smile, CheckCircle, UserCircle2 } from "lucide-react";

function CounterBox({ value, duration, suffix, label, icon, trigger }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return; // start only when trigger is true

    let start = 0;
    const end =
      typeof value === "number"
        ? value
        : parseFloat(value.replace(/[^\d.]/g, ""));
    if (start === end) return;

    let increment = end / (duration / 20);
    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [value, duration, trigger]);

  return (
    <div className="flex flex-col items-center md:items-start text-left">
      <div className="text-blue-600 mb-1">{icon}</div>
      <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 tabular-nums mb-1">
        {count}
        {suffix}
      </span>
      <span className="text-sm font-semibold text-gray-600">{label}</span>
    </div>
  );
}

function StatCounter() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.4 } // trigger when 40% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 bg-gradient-to-br from-blue-50 to-blue-100"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side Quote */}
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug text-gray-800 mb-4">
            "Healing the mind is the first step <br />
            towards{" "}
            <span className="text-blue-600">building a better future</span>."
          </h2>
          <p className="text-gray-600 text-base">
            At <span className="font-semibold">ReLive</span>, we’ve helped
            thousands of students overcome mental health challenges with
            compassion and care.
          </p>
        </div>

        {/* Right Side Counters */}
        <div className="grid grid-cols-3 gap-6">
          <CounterBox
            value={1200}
            suffix="+"
            duration={2000}
            label="Happy Patients"
            icon={<Smile size={28} />}
            trigger={inView}
          />
          <CounterBox
            value={97}
            suffix="%"
            duration={2000}
            label="Problems Solved"
            icon={<CheckCircle size={28} />}
            trigger={inView}
          />
          <CounterBox
            value={10}
            suffix="+"
            duration={2000}
            label="Psychologists"
            icon={<UserCircle2 size={28} />}
            trigger={inView}
          />
        </div>
      </div>
    </section>
  );
}

export default StatCounter;
