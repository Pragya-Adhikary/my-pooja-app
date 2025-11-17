// Ramsharma.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ramtripathi.css";
import PanditCalendar from "./Panditcalendar";

const Ramtripathi: React.FC = () => {
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
            Specialist in Griha Pravesh, Graha Shanti, and Rishi Panchami ceremonies | 18 years experience.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h3>About</h3>
        <p>
          Pandit Ram Tripathi has 18 years of experience conducting Nepali rituals, including Griha Pravesh, Graha Shanti, and Rishi Panchami, making every ceremony meaningful and smooth.
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

export default Ramtripathi;
