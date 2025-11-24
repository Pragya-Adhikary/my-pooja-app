// Ramtripathi.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ramtripathi.css";
import PanditCalendar from "./Panditcalendar";

const Ramtripathi: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const navigate = useNavigate();

  // DIFFERENT BOOKED DATES FOR RAM TRIPATHI
  const bookedDates = {
    "2025-02-10": true,
    "2025-02-14": true,
    "2025-02-22": true,
    "2025-03-03": true,
    "2025-03-10": true,
  };

  const handleSelect = () => {
    if (!selectedDate) {
      alert("Please select a date first!");
      return;
    }

    navigate("/booking", {
      state: { 
        panditName: "Ram Tripathi",
        date: selectedDate 
      }
    });
  };

  return (
    <div className="profile-section">
      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-pic" />
        <div className="profile-info">
          <h2>Ram Tripathi</h2>
          <p>
            Specialist in Griha Pravesh, Graha Shanti, and Rishi Panchami ceremonies | 18 years experience.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h3>About</h3>
        <p>
          Pandit Ram Tripathi has 18 years of experience conducting Nepali rituals including Griha Pravesh, Graha Shanti, and Rishi Panchami, ensuring meaningful and smooth ceremonies.
        </p>
      </div>

      {/* Availability Section */}
      <div className="availability-section">
        <h3>Availability</h3>
        <div className="calendar-container">
          <PanditCalendar
            panditName="Ram Tripathi"
            bookedDates={bookedDates}     // 📌 UNIQUE BOOKED DATES
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

export default Ramtripathi;
