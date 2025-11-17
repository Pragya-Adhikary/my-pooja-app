// Ramsharma.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sureshmishra.css";
import PanditCalendar from "./Panditcalendar";

const Sureshmishra: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null); // store selected date
  const navigate = useNavigate();

  const handleSelect = () => {
    if (!selectedDate) {
      alert("Please select a date first!"); // alert if no date selected
      return;
    }
    // pass date and pandit name to Booking page
    navigate("/booking", { state: { panditName: "Anil Sharma", date: selectedDate } });
  };

  return (
    <div className="profile-section">
      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-pic" />
        <div className="profile-info">
          <h2>Suresh Mishra</h2>
          <p>
            Specialist in Annaprashan, Janai Purnima, and Rishi Panchami ceremonies for Nepali families | 10 years experience.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h3>About</h3>
        <p>
          Pandit Suresh Mishra has a decade of experience performing Nepali rituals like Annaprashan, Janai Purnima, and Rishi Panchami, ensuring every ceremony is done with devotion and accuracy.
        </p>
      </div>

      {/* Availability Section */}
      <div className="availability-section">
        <h3>Availability</h3>
        <div className="calendar-container">
          {/* Pass the callback to get selected date */}
          <PanditCalendar onDateSelect={(date) => setSelectedDate(date)} />
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

export default Sureshmishra;
