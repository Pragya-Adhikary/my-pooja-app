import React from "react";
import "./Pandits.css";

type Pandit = {
  id: number;
  name: string;
  experience: string;
  rating: number;
  reviews: number;
  specializations: string[];
  image: string;
};

const PanditCard: React.FC<{ pandit: Pandit }> = ({ pandit }) => {
  return (
    <div className="pandit-card">
      <img src={pandit.image} alt={pandit.name} className="pandit-image" />
      <div className="pandit-details">
        <h3 className="pandit-name">{pandit.name}</h3>
        <p className="pandit-experience">{pandit.experience}</p>

        <div className="pandit-rating">
          {"★".repeat(Math.round(pandit.rating))}{" "}
          <span>
            {pandit.rating} ({pandit.reviews} reviews)
          </span>
        </div>

        {/* ✅ Specializations/pooja names */}
        <div className="pandit-specializations">
          {pandit.specializations.map((spec, index) => (
            <div key={index} className="specialty-box">
              <span className="specialty-icon">🕉️</span>
              {spec}
            </div>
          ))}
        </div>

        <div className="pandit-footer">
          <button className="call-btn">📞 Call</button>
          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

// ✅ Pandits page component
const Pandits: React.FC = () => {
  const pandits: Pandit[] = [
    {
      id: 1,
      name: "Pandit Ram Sharma",
      experience: "15+ years experience",
      rating: 4.8,
      reviews: 120,
      specializations: ["Griha Pravesh", "Satyanarayan Pooja", "Wedding Rituals"],
      image: "/images/pandit5.png",
    },
    {
      id: 2,
      name: "Pandit Suresh Mishra",
      experience: "10+ years experience",
      rating: 4.6,
      reviews: 90,
      specializations: ["Naamkaran", "Vastu Shanti", "Mundan Ceremony"],
      image: "/images/pandit2.png",
    },
    {
      id: 3,
      name: "Pandit Ramesh Tiwari",
      experience: "20+ years experience",
      rating: 4.9,
      reviews: 200,
      specializations: ["Navagraha Pooja", "Marriage", "Annaprashan"],
      image: "/images/pandit3.png",
    },
        {
      id: 3,
      name: "Pandit Anil Sharma",
      experience: "20+ years experience",
      rating: 4.9,
      reviews: 200,
      specializations: ["Navagraha Pooja", "Marriage", "Annaprashan"],
      image: "/images/pandit4.png",
    },
        {
      id: 3,
      name: "Pandit Ram Tripathi",
      experience: "20+ years experience",
      rating: 4.9,
      reviews: 200,
      specializations: ["Navagraha Pooja", "Marriage", "Annaprashan"],
      image: "/images/pandit5.png",
    },
        {
      id: 3,
      name: "Pandit Mohan Joshi",
      experience: "20+ years experience",
      rating: 4.9,
      reviews: 200,
      specializations: ["Navagraha Pooja", "Marriage", "Annaprashan"],
      image: "/images/pandit3.png",
    },
  ];

  return (
    <section className="pandits-section">
      <h2 className="pandits-title">Our Experienced Pandits</h2>
      <p className="pandits-subtitle">
        Book trusted and experienced pandits for your rituals
      </p>

      <div className="pandits-grid">
        {pandits.map((p) => (
          <PanditCard key={p.id} pandit={p} />
        ))}
      </div>

      {/* ✅ New Section (as in screenshot) */}
      <div className="browse-pandits-section">
        <p className="browse-text">
          Looking for a specific type of ceremony or location?
        </p>
        <button className="browse-btn">Browse All Pandits</button>
      </div>
    </section>
  );
};

export default Pandits;
