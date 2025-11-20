// Rameshtiwari.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Rameshtiwari.css";
import PanditCalendar from "./Panditcalendar";

const Rameshtiwari: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const navigate = useNavigate();

  // UNIQUE BOOKED DATES FOR RAMESH TIWARI
  const bookedDates = {
    "2025-02-09": true,
    "2025-02-18": true,
    "2025-02-26": true,
    "2025-03-02": true,
    "2025-03-12": true,
  };

  const handleSelect = () => {
    if (!selectedDate) {
      alert("Please select a date first!");
      return;
    }

    navigate("/booking", {
      state: {
        panditName: "Ramesh Tiwari",
        date: selectedDate,
      },
    });
  };

  return (
    <div className="profile-section">
      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-pic" />
        <div className="profile-info">
          <h2>Ramesh Tiwari</h2>
          <p>
            Experienced in Graha Shanti Puja, Rudri Puja, and Satyanarayan Pooja for Nepalese households | 20 years of experience.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h3>About</h3>
        <p>
          Pandit Ramesh Tiwari specializes in traditional Nepali rituals including Graha Shanti, Rudri Puja, and Satyanarayan Pooja. 
          With two decades of experience, he brings accuracy, devotion, and trust to every ceremony.
        </p>
      </div>

      {/* Availability Section */}
      <div className="availability-section">
        <h3>Availability</h3>
        <div className="calendar-container">
          <PanditCalendar
            panditName="Ramesh Tiwari"
            bookedDates={bookedDates}       // 📌 UNIQUE BOOKED DATES
            onDateSelect={(date) => setSelectedDate(date)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="form-buttons">
        <button className="back">Back</button>
        <button className="next" onClick={handleSelect}>Next</button>
      </div>
    </div>
  );
};

export default Rameshtiwari;
