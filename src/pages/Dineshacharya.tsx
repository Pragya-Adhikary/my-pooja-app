// Dineshacharya.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dineshacharya.css";
import PanditCalendar from "./Panditcalendar"; // make sure the path is correct

const Dineshacharya: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null); // store selected date
  const navigate = useNavigate();

  // Example booked dates for this pandit
  const bookedDatesForDinesh: { [date: string]: boolean } = {
    "2025-11-03": true,
    "2025-11-07": true,
    "2025-11-10": true,
    "2025-11-12": true,
  };

  const handleSelect = () => {
    if (!selectedDate) {
      alert("Please select a date first!"); // alert if no date selected
      return;
    }
    // pass date and pandit name to Booking page
    navigate("/booking", {
      state: { panditName: "Dinesh Acharya", date: selectedDate },
    });
  };

  return (
    <div className="profile-section">
      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-pic" />
        <div className="profile-info">
          <h2>Dinesh Acharya</h2>
          <p>
            Specialist in Wedding Ceremonies, Rudri Puja, and Graha Shanti | 16
            years experience.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h3>About</h3>
        <p>
          Pandit Dinesh Acharya has been performing traditional Nepali rituals
          such as weddings, Rudri Puja, and Graha Shanti for 16 years,
          maintaining accuracy and sanctity.
        </p>
      </div>

      {/* Availability Section */}
      <div className="availability-section">
        <h3>Availability</h3>
        <div className="calendar-container">
          <PanditCalendar
            panditName="Dinesh Acharya"
            bookedDates={bookedDatesForDinesh}
            onDateSelect={(date) => setSelectedDate(date)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="form-buttons">
        <button className="back" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="next" onClick={handleSelect}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Dineshacharya;
