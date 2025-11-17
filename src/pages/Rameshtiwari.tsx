// Ramsharma.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Rameshtiwari.css";
import PanditCalendar from "./Panditcalendar";

const Rameshtiwari: React.FC = () => {
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
            Experienced in Graha Shanti Puja, Rudri Puja, and Satyanarayan Pooja for Nepalese households | 20 years experience.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h3>About</h3>
        <p>
          Pandit Ramesh Tiwari specializes in traditional Nepali rituals, including Graha Shanti, Rudri Puja, and Satyanarayan Pooja. He brings two decades of dedication to every ceremony.
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

export default Rameshtiwari;
