// Ramsharma.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mohanjoshi.css";
import PanditCalendar from "./Panditcalendar";

const Mohanjoshi: React.FC = () => {
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
            Expert in Satyanarayan Pooja, Janai Purnima, and Kul Puja for Nepali households | 15 years experience.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h3>About</h3>
        <p>
          Pandit Mohan Joshi performs Satyanarayan Pooja, Janai Purnima, and Kul Puja in Nepalese families with devotion and adherence to traditional procedures.
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

export default Mohanjoshi;
