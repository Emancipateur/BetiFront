import { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";
import Tri from "./Tri";
import { useEffect } from "react";

const CalendarChildren = ({ showDetailsHandle, currentWeek, currentMonth,uniteName , background ,bookedDays, active, index, resetData}) => {

  const [selectedDate, setSelectedDate] = useState([]);
  const [bookedDay , setBookedDay] = useState([addDays(new Date().setHours(0,0,0,0), 4), addDays(new Date().setHours(0,0,0,0),2)])


 

//  console.log(bookedDays)
  


useEffect(() => {

  if(active !== index ){
  setSelectedDate([])



  }
}, [active])


  const onDateClickHandle = (day, dayStr, room) => {

  
    // setSelectedDate(day);
    if(active !== index ){
      setSelectedDate([])
      resetData([])
    }
    
    if   ( !selectedDate.find((e => e.getTime() == day.getTime()))){
    setSelectedDate(array => [...array,new Date(day)]);


    }else{
      setSelectedDate(array => [...array.filter(e =>e.getTime() != day.getTime())]);
    }
    showDetailsHandle(dayStr, room);

  };
  





  const renderHeader = () => {
    const dateFormat = "MMM yyyy";
    // console.log("selected day", selectedDate);
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          {/* <div className="icon" onClick={() => changeMonthHandle("prev")}>
            prev month
          </div> */}
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end">
          {/* <div className="icon" onClick={() => changeMonthHandle("next")}>next month</div> */}
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
    
          
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 14; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              bookedDays.flat().find((e => e.getTime() === day.getTime())) ? "booked":
         
              // isSameDay(day, new Date())
              //   ? "today"
              //   : 
                selectedDate.find((e => e.getTime() == day.getTime())) ?
                "selected" :
                 ""
               
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr, uniteName);
            }}
          >
            {/* <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span> */}
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row "  key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return (
        
            
        <div className="body" style={ {backgroundColor : background}}><div className="uniteName">{uniteName}</div>{rows}</div>
    
        )
  };

  return (
    <div className="calendarChildren" >


      {renderCells()}


    </div>
  );
};

export default CalendarChildren;
