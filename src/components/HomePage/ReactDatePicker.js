import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
// import {addDays,isWeekend} from "date-fns";
function ReactDatePicker (){ 
    const  [selectedDate,setSelectedDate]= useState(null)
    const handleDateChange =(date)=>{
            setSelectedDate(date)
    }
   
   return(
    <div>
        <DatePicker selected={selectedDate}
         onChange={handleDateChange}
         dateformat = "MM/dd/yyy; hh:mm"
        //  filterDate ={filterWeekends}
         showTimeSelect 
         timeIntervals={60}
         timeFormat ="hh:mm"
         />
    </div>
   )
}
export default ReactDatePicker;