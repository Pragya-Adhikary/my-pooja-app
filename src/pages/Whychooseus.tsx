import React from "react";
import { FaPrayingHands, FaUserTie, FaCertificate } from "react-icons/fa";
import "./WhyChooseUs.css";

interface Item {
  icon: React.ReactNode; // ✅ works better for React elements
  title: string;
}

const WhyChooseUs: React.FC = () => {
  const items: Item[] = [
    { icon: <FaPrayingHands />, title: "Divine Blessings" },
    { icon: <FaUserTie />, title: "Expert Pandits" },
    { icon: <FaCertificate />, title: "Authentic Poojas" },
  ];

  return (
    <div className="why-container">
      <h2 className="why-title">Why Choose Us?</h2>
      <div className="why-cards">
        {items.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <p className="why-text">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
