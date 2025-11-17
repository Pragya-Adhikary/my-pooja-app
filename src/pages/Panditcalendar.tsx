// PanditCalendar.tsx
import React, { useState } from "react";
import "./PanditCalendar.css";

interface BookingData {
  [date: string]: boolean; // true = booked, false = available
}

interface PanditCalendarProps {
  panditName: string; // add pandit name
  bookedDates?: BookingData; // each pandit can have different booked dates
  onDateSelect?: (date: string | null) => void; // callback to parent
}

const PanditCalendar: React.FC<PanditCalendarProps> = ({
  panditName,
  bookedDates: initialBookedDates,
  onDateSelect,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Use bookedDates for this specific pandit
  const [bookedDates] = useState<BookingData>(initialBookedDates || {});

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateClick = (dateKey: string) => {
    if (bookedDates[dateKey]) return; // cannot select booked date
    const newSelected = selectedDate === dateKey ? null : dateKey;
    setSelectedDate(newSelected);
    if (onDateSelect) onDateSelect(newSelected);
  };

  const generateMonth = (monthOffset: number) => {
    const month = (currentMonth + monthOffset) % 12;
    const year = currentYear + Math.floor((currentMonth + monthOffset) / 12);
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startWeekday = firstDay.getDay();

    const rows: React.ReactElement[] = [];
    let cells: React.ReactElement[] = [];

    for (let i = 0; i < startWeekday; i++) {
      cells.push(<td key={`empty-${month}-${i}`}></td>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const booked = bookedDates[dateKey];

      const className = booked
        ? "booked"
        : selectedDate === dateKey
        ? "selected"
        : "available";

      cells.push(
        <td key={`${month}-${d}`} className={className} onClick={() => handleDateClick(dateKey)}>
          {d}
        </td>
      );

      if ((d + startWeekday) % 7 === 0) {
        rows.push(<tr key={`row-${month}-${d}`}>{cells}</tr>);
        cells = [];
      }
    }

    if (cells.length > 0) rows.push(<tr key={`last-${month}`}>{cells}</tr>);

    return (
      <div key={`month-${month}`} className="month">
        <h3 className="month-title">
          {panditName} - {new Date(year, month).toLocaleString("default", { month: "long", year: "numeric" })}
        </h3>
        <table>
          <thead>
            <tr>
              {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                <th key={`h-${month}-${idx}`}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  };

  const handlePrev = () => {
    let newMonth = currentMonth - 2;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth += 12;
      newYear -= 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleNext = () => {
    let newMonth = currentMonth + 2;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth -= 12;
      newYear += 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>

      <div className="calendar-grid">
        {generateMonth(0)}
        {generateMonth(1)}
      </div>

      {selectedDate && <p className="calendar-info">📅 Selected Date: {selectedDate}</p>}
    </div>
  );
};

export default PanditCalendar;
