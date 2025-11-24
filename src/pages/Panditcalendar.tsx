// PanditCalendar.tsx
import React, { useState } from "react";
import "./PanditCalendar.css";

interface BookingData {
  [date: string]: boolean;
}

interface PanditCalendarProps {
  panditName: string;
  bookedDates?: BookingData;
  onDateSelect?: (date: string | null) => void;
}

const PanditCalendar: React.FC<PanditCalendarProps> = ({
  panditName,
  bookedDates: initialBookedDates,
  onDateSelect,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [bookedDates] = useState<BookingData>(initialBookedDates || {});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isPastDate = (dateKey: string) => {
    const d = new Date(dateKey);
    d.setHours(0, 0, 0, 0);
    return d < today;
  };

  const handleDateClick = (dateKey: string) => {
    if (isPastDate(dateKey)) return;
    if (bookedDates[dateKey]) return;

    const newSelected = selectedDate === dateKey ? null : dateKey;
    setSelectedDate(newSelected);
    if (onDateSelect) onDateSelect(newSelected);
  };

  const goToPrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear));
  };

  const generateMonth = (offset: number) => {
    const month = (currentMonth + offset) % 12;
    const year =
      currentYear + Math.floor((currentMonth + offset) / 12);

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startWeekday = firstDay.getDay();

    const rows: React.ReactElement[] = [];
    let cells: React.ReactElement[] = [];

    for (let i = 0; i < startWeekday; i++) {
      cells.push(<td key={`empty-${i}`}></td>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        d
      ).padStart(2, "0")}`;

      const past = isPastDate(dateKey);
      const booked = !past && bookedDates[dateKey];

      const className = past
        ? "disabled"
        : booked
        ? "booked"
        : selectedDate === dateKey
        ? "selected"
        : "available";

      cells.push(
        <td
          key={`${month}-${d}`}
          className={className}
          onClick={() => handleDateClick(dateKey)}
        >
          {d}
        </td>
      );

      if ((d + startWeekday) % 7 === 0) {
        rows.push(<tr key={`row-${d}`}>{cells}</tr>);
        cells = [];
      }
    }

    if (cells.length > 0) rows.push(<tr key={`last-${month}`}>{cells}</tr>);

    return (
      <div className="month">
        <h3 className="month-title">
          {new Date(year, month).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h3>
        <table>
          <thead>
            <tr>
              {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                <th key={idx}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="calendar-wrapper">

      {/* Top Navigation */}
      <div className="top-nav">
        <button className="arrow-btn" onClick={goToPrevMonth}>⟨</button>

        <div className="center-title">Choose Available Dates</div>

        <button className="arrow-btn" onClick={goToNextMonth}>⟩</button>
      </div>

      {/* Two-month calendar */}
      <div className="calendar-grid">
        {generateMonth(0)}
        {generateMonth(1)}
      </div>

      {selectedDate && (
        <p className="calendar-info">📅 Selected: {selectedDate}</p>
      )}
    </div>
  );
};

export default PanditCalendar;
