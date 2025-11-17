import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Anilsharma.css";
import PanditCalendar from "./Panditcalendar";

const Anilsharma: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelect = () => {
    if (!selectedDate) {
      alert("Please select a date first!");
      return;
    }
    navigate("/booking", { state: { panditName: "Anil Sharma", date: selectedDate } });
  };

  return (
    <div className="profile-section">
      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-pic" />
        <div className="profile-info">
          <h2>Anil Sharma</h2>
          <p>
            Expert in Ghatasthapana, Wedding Ceremonies, and Bratabandha rituals | 12 years of experience.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h3>About</h3>
        <p>
          Pandit Anil Sharma performs Nepali rituals like Ghatasthapana, traditional weddings, and Bratabandha with devotion and precise adherence to tradition.
        </p>
      </div>

      {/* Availability Section */}
      <div className="availability-section">
        <h3>Availability</h3>
        <div className="calendar-container">
          <PanditCalendar
            panditName="Anil Sharma"
            bookedDates={{ "2025-11-04": true, "2025-11-09": true }}
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

export default Anilsharma;
