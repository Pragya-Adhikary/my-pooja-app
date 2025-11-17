import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BookingForm.css";

const BookingForm: React.FC = () => {
  const navigate = useNavigate();
  const locationHook = useLocation();

  // Get the selected date from previous page
  const selectedDateFromCalendar = locationHook.state?.date || "";

  const [poojaType, setPoojaType] = useState("");
  const [date, setDate] = useState(selectedDateFromCalendar);
  const [selectedTime, setSelectedTime] = useState("");
  const [location, setLocation] = useState("Detecting your location...");

  // Auto-fill location from localStorage (set by CurrentLocationMap)
  useEffect(() => {
    const detectedLocation = localStorage.getItem("detectedLocation");
    if (detectedLocation) {
      setLocation(detectedLocation);
    }
  }, []);

  const handleNext = () => {
    if (!poojaType) {
      alert("Please select a pooja type");
      return;
    }
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }

    console.log({ poojaType, date, selectedTime, location });
    navigate("/payment");
  };

  return (
    <div className="booking-form">
      {/* Pooja Type */}
      <div className="form-section">
        <label>Select Pooja Type</label>
        <select value={poojaType} onChange={(e) => setPoojaType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="Griha Pravesh Pooja">Griha Pravesh Pooja</option>
          <option value="Wedding Ceremony">Wedding Ceremony</option>
          <option value="Shraddha (श्राद्ध)">Shraddha</option>
          <option value="Ghatasthapana (घटस्थापना)">Ghatasthapana</option>
          <option value="Satyanarayan Puja (सत्यनारायण पूजा)">Satyanarayan Puja</option>
          <option value="Annaprashan (Rice Feeding Ceremony)">Annaprashan</option>
          <option value="Bratabandha">Bratabandha</option>
          <option value="Janai Purnima">Janai Purnima</option>
          <option value="Rishi Panchami (ऋषि पंचमी)">Rishi Panchami</option>
          <option value="Graha Shanti Puja">Graha Shanti Puja</option>
          <option value="Rudri Puja">Rudri Puja</option>
          <option value="Kul Puja">Kul Puja</option>
        </select>
      </div>

      {/* Selected Date (read-only) */}
      <div className="form-section date-section">
        <label>📅 Selected Date</label>
        <input type="text" value={date} readOnly />
      </div>

      {/* Time Slots */}
      <div className="form-section">
        <label>🕒 Select Time Slot</label>
        <div className="time-slots">
          {["Morning 6-8 AM", "Afternoon 1-3 PM", "Evening 5-7 PM"].map((slot) => (
            <button
              key={slot}
              className={selectedTime === slot ? "selected" : ""}
              onClick={() => setSelectedTime(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Location (auto-filled, read-only) */}
      <div className="form-section">
        <label>📍 Location</label>
        <input type="text" value={location} readOnly />
      </div>

      {/* Confirm & Pay */}
      <div className="form-section">
        <button className="confirm-pay" onClick={handleNext}>
          Confirm & Pay
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
