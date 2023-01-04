import { useState, useEffect } from "react";
import {
  format,
 
  startOfWeek,
  addDays,

isSaturday,
isFriday,
  isWeekend,
  lastDayOfWeek,

} from "date-fns";



const CalendarChildren1 = ({ showDetailsHandle, currentWeek, currentMonth,uniteName , background ,bookedDays, active,id, index, resetData, people, peopleMax, setmodal}) => {

  const [selectedDate, setSelectedDate] = useState([]);
  const [bookedDay , setBookedDay] = useState([addDays(new Date().setHours(0,0,0,0), 4), addDays(new Date().setHours(0,0,0,0),2)])
const unitForHref = uniteName.substring(0, uniteName.indexOf(' ')); 






const onDateClickHandle = (day, dayStr, room, id) => {

    
    if   ( !selectedDate.find((e => e.getTime() == day.getTime()))){
    setSelectedDate(array => [...array,new Date(day)]);
    if(selectedDate.length >= 2){
        setSelectedDate([])
    }

    }else{
      setSelectedDate(array => [...array.filter(e =>e.getTime() != day.getTime())]);
    }
    
    showDetailsHandle(dayStr, room);

  
  };

  function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate.getTime());
  
    // ✅ Exclude start date
    // date.setDate(date.getDate() + 1);
  
    const dates = [];
  
    // ✅ Exclude end date
    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
 
    }
  
    return dates;
  }
  
useEffect(() => {
if(selectedDate.length == 2 ){
 setSelectedDate(getDatesInRange(selectedDate[0], selectedDate[1]));
//  getPrice(selectedDate[0], selectedDate[1])

}else{}

}, [selectedDate])



  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 40; i++) {
    
       
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
          
            className={`col cell ${
              // bookedDays.flat().find((e => e.getTime() === day.getTime())) ? "booked" || bookedDay:
              bookedDays.flat().find((e => e.getTime() === day.getTime())) ? "booked" : 

         
              // isSameDay(day, new Date())
              //   ? "today"
              //   : 
              isFriday(day) || isSaturday((day)) ? "weekend"
              : 
              isWeekend? "weekDay"
              : 
                selectedDate.find((e => e.getTime() == day.getTime())) ?
                "selected" :
                 ""
               
            }`}
            key={day}
  
            onClick={(e) => {

              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr, uniteName, id);
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
        
            
        <div className="body" style={ {backgroundColor : background}}><div className="uniteName"><a  onClick={() =>setmodal(true)} href={ '#'+ unitForHref}>{unitForHref }<i className="fa-regular fa-circle-info"></i></a>  </div><div className="col cell people">{people}</div><div className="col cell people">{peopleMax}</div>{rows}</div>
    
        )
  };
  const mobileRenderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
   
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          
          <div
  
            className={`col cell ${
              bookedDays.flat().find((e => e.getTime() === day.getTime())) ? "booked":
              isFriday(day) || isSaturday((day)) ? "weekend"
                : 
            
                isWeekend? "weekDay"
                : 
                selectedDate.find((e => e.getTime() == day.getTime())) ?
                "selected" :
                 ""
                
               
            }`}
            key={day}
            // onClick={(e) => {
            
            //   const dayStr = format(cloneDay, "ccc dd MMM yy");
            //   onDateClickHandle(cloneDay, dayStr, uniteName, id);
            // }}
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
        
            
        <div className="body" style={ {backgroundColor : background}}><div className="uniteName"><a  onClick={() =>setmodal(true)} href={ '#'+ unitForHref}>{unitForHref }<i className="fa-regular fa-circle-info"></i></a>   </div>{rows}</div>
    
        )
  };

  return (
    <div className="calendarChildren"  >

<div className="desktopRenderDays">
      {renderCells()}
      </div>

      <div className="mobileRenderDays">
        {mobileRenderCells()}
        </div>


    </div>

  );
};

export default CalendarChildren1;
