import React from "react";
import { activitiesData } from "../../assets/resourceData";

const activitiesSectionStyle = {
  background: "linear-gradient(135deg, #1a5e35 60%, #176d3b 100%)",
  color: "#227e58",
  borderRadius: "18px",
  padding: "2rem 0",
};

const activityCardStyle = {
  background: "linear-gradient(135deg, #0c5429 60%, #176d3b 100%)",
  color: "white",
  borderRadius: "20px",
  padding: "2rem",
  position: "relative",
  overflow: "hidden",
  textAlign: "center",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.3s cubic-bezier(.4,2,.3,1), box-shadow 0.3s cubic-bezier(.4,2,.3,1)",
  cursor: "pointer",
};

const activityCardHoverStyle = {
  transform: "translateY(-10px) scale(1.04)",
  boxShadow: "0 12px 32px rgba(26,94,53,0.25)",
};

const activityBtnStyle = {
  background: "white",
  color: "#033854",
  border: "none",
  padding: "0.8rem 2rem",
  borderRadius: "25px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.3s",
  position: "relative",
  zIndex: 1,
};

const durationStyle = {
  fontSize: "0.8rem",
  opacity: 0.9,
  marginTop: "0.5rem",
  position: "relative",
  zIndex: 1,
};

export default function Activities() {
  const [hovered, setHovered] = React.useState(null);

  const handleStart = (activity) => {
    alert(
      `${activity.title}\n\nInstructions: ${activity.instructions}\n\nDuration: ${activity.duration}`
    );
  };

  return (
    <section style={activitiesSectionStyle}>
      <div className="container mx-auto text-center">
        <h2 style={{ color: "white", fontWeight: "bold", marginBottom: "1rem", fontSize: "2.5rem" }}>
          🌿 Feel-Good Activities
        </h2>
        <p style={{ color: "white", opacity: 0.9, marginBottom: "3rem", maxWidth: 600, marginLeft: "auto", marginRight: "auto", fontSize: "1.1rem" }}>
          Simple, science-backed activities to boost your mood and mental wellbeing.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {activitiesData.slice(0, 9).map((activity, i) => (
            <div
              key={i}
              style={{
                ...activityCardStyle,
                ...(hovered === i ? activityCardHoverStyle : {}),
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span style={{ fontSize: "3rem", marginBottom: "1rem", display: "block" }}>
                {activity.emoji}
              </span>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "bold", position: "relative", zIndex: 1 }}>
                {activity.title}
              </h3>
              <p style={{ marginBottom: "1.5rem", position: "relative", zIndex: 1 }}>
                {activity.description}
              </p>
              <button
                style={activityBtnStyle}
                onClick={() => handleStart(activity)}
              >
                Try Now
              </button>
              <div style={durationStyle}>{activity.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}