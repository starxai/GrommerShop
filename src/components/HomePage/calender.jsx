import React, { useState } from "react";
import DatePickerComponent from "./DatePicker";

function Calender({handledate}) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [date,setdate] = useState()
    const ondatechange = (date) =>{
        setdate(date)
        handledate(date)
    }

 
    return (
        <div>
            <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} ondatechange={ondatechange} />
            
        </div>
    );
}

export default Calender;
