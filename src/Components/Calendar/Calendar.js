import { useState } from "react";
import CalendarChildren from './CalendarChildren'
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
import FetchHebergement from "./FetchHebergement";
import FetchReservation from "./FetchReservation";
import { useEffect } from "react";
import Tri from "./Tri";

const Calendar = ({ showDetailsHandle }) => {

  const [ReservationsByRoom, setReservationByRoom] = useState();
  const reservations = FetchReservation()
  const hebergememts = FetchHebergement()
  
  
  const villa = FetchHebergement().map((i)=> i.filter((v) =>  v.typeHebergementCode === "VILLA"));
  const suite =  FetchHebergement().map((i)=> i.filter((v) =>  v.typeHebergementCode === "SUITE" ));
  const chambre =  FetchHebergement().map((i)=> i.filter((v) =>  v.typeHebergementCode === "CHAMBRE" ));
  
  
  // useEffect(() => {

  
  //   return () => {
  //     setReservationByRoom(bookedDays)
  //   }
  // }, [reservations])
  

  // console.log(ReservationsByRoom)



  // console.log(FetchReservation().filter(book => book.reservationHebergements[0].libelleHebergement.includes(villa[0].libelle)))


// console.log(FetchReservation().filter(book => console.log(book.reservationHebergements[0].libelleHebergement)))
// console.log(villa[0][0].libelle)





  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

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
          {format(addDays(startDate, i), dateFormat) + " " +
          format(addDays(startDate, i), 'd')}
        </div>
      );
    }
    return <div className="daysRowContainer"><div className="days row">{days}</div></div>
  };
  
  const renderFooter = () => {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            prev week
          </div>
        </div>
        <div>{currentWeek}</div>
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">next week</div>
        </div>
        <div className="col col-start">
          <div className="icon" onClick={() => changeMonthHandle("prev")}>
            prev month
          </div>
        </div>
        <div>{currentWeek}</div>
        <div className="col col-end" onClick={() => changeMonthHandle("next")}>
          <div className="icon">next month</div>
        </div>
      </div>
    );
  };
  


  return (
      <div className="calendar">
       
      {renderHeader()}
      {renderDays()}
      {/* {renderCells()} */}

      
{hebergememts.map((unite ) => {
  

  
  
  
  const villa = unite.filter((v) =>  v.typeHebergementCode === "VILLA")
  const suite = unite.filter((v) =>  v.typeHebergementCode === "SUITE")
  const chambre = unite.filter((v) =>  v.typeHebergementCode === "CHAMBRE")
  
  
const  bookedDaysVilla = reservations.filter(book => book.reservationHebergements[0].libelleHebergement.includes(villa.map((v) => v.libelle)))
const  bookedDaysSuite = reservations.filter(book => book.reservationHebergements[0].libelleHebergement.includes(suite.map((v) => v.libelle)))
const  bookedDaysChambre = reservations.filter(book => book.reservationHebergements[0].libelleHebergement.includes(chambre.map((v) => v.libelle)))

const TriFirst = Tri(bookedDaysVilla)

 

        // console.log(reservations.filter(book => console.log(book.reservationHebergements[0].libelleHebergement))
        // )

       

        return ( 
            <div className="calendarsContainer">
 
            <CalendarChildren  currentWeek={currentWeek} currentMonth={currentMonth} 
            uniteName={ "Villa " + villa.map((v) => v.libelle)}  bookedDays={TriFirst} background={"#BFD9D9"}  />
        <CalendarChildren  currentWeek={currentWeek} currentMonth={currentMonth} uniteName={"Suite " + suite.map((v) => v.libelle)}background={"#D9E8E8"} bookedDays={Tri(bookedDaysSuite).concat(TriFirst)} />
        <CalendarChildren  currentWeek={currentWeek} currentMonth={currentMonth} uniteName={"Chambre " + chambre.map((v) => v.libelle)} background={"#E6F0F0"} bookedDays={Tri(bookedDaysChambre).concat(TriFirst)} />
        </div>
        
        )
    })
}






    {/* {suite.map((suite ) => {
        return (  <CalendarChildren  currentWeek={currentWeek} currentMonth={currentMonth} uniteName={suite.map((v) => v.libelle)} />)
    })}
    {chambre.map((chambre ) => {
        return (  <CalendarChildren  currentWeek={currentWeek} currentMonth={currentMonth} uniteName={chambre.libelle} />)
    })} */}




      {/* <CalendarChildren  currentWeek={currentWeek} currentMonth={currentMonth} />
      <CalendarChildren  currentWeek={currentWeek} currentMonth={currentMonth} /> */}
      {renderFooter()}
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
