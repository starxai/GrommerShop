import { format } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ ondatechange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setdate] = useState();
  const handleDateChange = (date) => {
    setSelectedDate(date);

    if (date) {
      const formatted = format(date, "dd/MM/yyyy");
      setdate(formatted);
      ondatechange(formatted);
    }
  };

  return (
    <div className="form-group">
      <label className="salondetials-selectdate"></label>
      <DatePicker
        placeholder="select a date"
        selected={selectedDate}
        onChange={handleDateChange}
        className="form-control"
        dateFormat="dd/MM/yyyy"
        inline
      />
    </div>
  );
};

export default DatePickerComponent;
