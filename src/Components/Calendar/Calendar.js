import { useState , useEffect} from "react";
import CalendarChildren from './CalendarChildren'
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,

  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";
import FetchHebergement from "./FetchHebergement";
import FetchReservation from "./FetchReservation";

import Tri from "./Tri";
import Details from "../Details";

const Calendar = ({  }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeCalendar, setActiveCalendar] = useState(6);
  const [data, setData] = useState([]);
  const reservations = FetchReservation()
  const hebergememts = FetchHebergement()


  

  const reset =  () => {
    
    setData([])

  }


  
  




  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());


  const showDetailsHandle = (dayStr, room) => {
   

    const alreadySelected  = data.some(function(arr) {
      return arr.every(function(prop, index) {
        return [room,dayStr][index] === prop
      })
    });

  if(!alreadySelected){
     setData((array => [...array,[room, dayStr]]))
     console.log('hey');
  }else{
  
    setData(array => [...array.filter((e) => (e[1] != dayStr || e[0] != room  ))]);
    // console.log(array => [...array.filter((e) => (console.log(e[1])))]);
    // setData(array => [...array.filter((e) => (e[1] != dayStr || e[0] != room  ))]);

  }    setShowDetails(true);
};
  


  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
    showDetailsHandle(dayStr);
  };

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";

  

    // console.log("selected day", selectedDate);
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeMonthHandle("prev")}>
           	&lt; Mois 
          </div>
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>

  

        </div>
        <div className="col col-end">
          <div className="icon" onClick={() => changeMonthHandle("next")}>Mois 	&gt;</div>
        </div>
      </div>
      
    );
  };
  const renderHeader2 = () => {
    const dateFormat = "MMM yyyy";

  

    // console.log("selected day", selectedDate);
    return (
      <div className="header row flex-middle">
          <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
          &lt; Semaine
          </div>
          </div>
        <div className="col col-start">

   
          <div className="icon" onClick={() => changeMonthHandle("prev")}>
           	&lt; Mois 
          </div>
       
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>

  

        </div>
      
        <div className="col col-end">
          <div className="icon" onClick={() => changeMonthHandle("next")}>Mois 	&gt;</div>
        </div>
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">	Semaine &gt;</div>
        </div>
      </div>
      
    );
  };



  const renderDays = () => {
    // const dateFormat = "EEE";
    const dateFormat = "EEE d";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        // <div className="col col-center" key={i}>
        //   {format(addDays(startDate, i), dateFormat) + " " +
        //   format(addDays(startDate, i), 'd')}
        // </div>

        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="daysRowContainer">{format(currentMonth, 'MMM yyyy')}<div className="days row">{days}</div></div>
  };
  
  const renderFooter = () => {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
          &lt; Semaine
          </div>
        </div>
     
        {/* <div>{currentWeek}</div> */}
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">	Semaine &gt;</div>
        </div>
       
        </div>
    
    );
  };
  


  return (
      <div  className="calendar" >
      {renderHeader2()}
      {/* {renderFooter()} */}
          {renderDays()}

      {/* {renderCells()} */}
      
{hebergememts.map((unite, index ) => {

  const villa = unite.filter((v) =>  v.typeHebergementCode === "VILLA")
  const suite = unite.filter((v) =>  v.typeHebergementCode === "SUITE")
  const chambre = unite.filter((v) =>  v.typeHebergementCode === "CHAMBRE")
  
  
const  bookedDaysVilla = reservations.filter(book => book.reservationHebergements[0].libelleHebergement.includes(villa.map((v) => v.libelle)))
const  bookedDaysSuite = reservations.filter(book => book.reservationHebergements[0].libelleHebergement.includes(suite.map((v) => v.libelle)))
const  bookedDaysChambre = reservations.filter(book => book.reservationHebergements[0].libelleHebergement.includes(chambre.map((v) => v.libelle)))

const TriFirst = Tri(bookedDaysVilla)



        return ( 
          <>
          <div className={activeCalendar === index ? 'calendarsContainer activeCalendar' : 'calendarsContainer'} onClick={() => {setActiveCalendar(index)}}>
  
            <div className="ccc">Villa {index +1}</div>
 
           <CalendarChildren  showDetailsHandle={showDetailsHandle} currentWeek={currentWeek} currentMonth={currentMonth} 
            uniteName={ "Villa " + villa.map((v) => v.libelle)}  active={ activeCalendar } index={index} resetData={setData}bookedDays={TriFirst} background={"#BFD9D9"}  />
             
        <CalendarChildren showDetailsHandle={showDetailsHandle}  currentWeek={currentWeek} currentMonth={currentMonth} uniteName={"Suite " + suite.map((v) => v.libelle)}background={"#D9E8E8"} active={ activeCalendar } index={index} resetData={setData} bookedDays={Tri(bookedDaysSuite).concat(TriFirst)} />
        <CalendarChildren showDetailsHandle={showDetailsHandle}  currentWeek={currentWeek} currentMonth={currentMonth} uniteName={"Chambre " + chambre.map((v) => v.libelle)} background={"#E6F0F0"} active={ activeCalendar } index={index} resetData={setData} bookedDays={Tri(bookedDaysChambre).concat(TriFirst)} />

        </div>
       
        {   activeCalendar === index ?  <Details props={data}/>  : null }
        
        </>
        )
    })
}


  

    </div>


  );
};

export default Calendar;
/**
 * Header:
 * icon for switching to the previous month,
 * formatted date showing current month and year,
 * another icon for switching to next month
 * icons should also handle onClick events to change a month
 */
