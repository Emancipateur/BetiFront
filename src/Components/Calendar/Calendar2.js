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

import Tri2 from "./Tri2";
import Details from "../Details";
import Post from "../calculPriceForRooms";
import {SendResa} from "./SendResa";

const Calendar2 = ({  }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeCalendar, setActiveCalendar] = useState(6);
  const [data, setData] = useState([]);
  const reservations = FetchReservation()
  const hebergememts = FetchHebergement()



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
 
  }else{
  
    setData(array => [...array.filter((e) => (e[1] != dayStr || e[0] != room  ))]);
    // console.log(array => [...array.filter((e) => (console.log(e[1])))]);
    // setData(array => [...array.filter((e) => (e[1] != dayStr || e[0] != room  ))]);

  }    setShowDetails(true);
};
  


  const changeMonthHandle = (btnType) => {

    let today = new Date()
  

    if (btnType === "prev") {
      if(today < currentMonth)
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {

    let today = new Date()
    if (btnType === "prev") {
   if(getWeek(today) < currentWeek)
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
        <div className="col col-center monthMobile">
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
    const dateFormat = "MM-dd-yyyy";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const options = { weekday: 'short', day: 'numeric' };
    for (let i = 0; i < 28; i++) {
    

      days.push(
        
  
        <div className="col col-center" key={i}>
          {/* {format(addDays(startDate, i), dateFormat)} */}
          <p> {   new Date(format(addDays(startDate, i), dateFormat)).toLocaleDateString('fr-Fr',{ weekday: 'short'}).slice(-4,2)}</p>
<p> {   new Date(format(addDays(startDate, i), dateFormat)).toLocaleDateString('fr-Fr',{ day: 'numeric'})}</p>

        </div>
      
      );
    }

    return <div className="daysRowContainer"><div className="days row">{days}</div></div>
  };

  const renderDaysMobile = () => {
    // const dateFormat = "EEE";
    const dateFormat = "MM-dd-yyyy";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const options = { weekday: 'short', day: 'numeric' };
    for (let i = 0; i < 7; i++) {
    

      days.push(
  
        <div className="col col-center " key={i}>
          {/* {format(addDays(startDate, i), dateFormat)} */}
 {   new Date(format(addDays(startDate, i), dateFormat)).toLocaleDateString('fr-Fr', options)}
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
      <div className="calendar">
      {renderHeader2()}
      {/* {renderFooter()} */}
      <div className="desktopRenderDays">

          {renderDays()}
          </div>
          <div className="mobileRenderDays">
          {renderDaysMobile()}
          </div>

      {/* {renderCells()} */}
      
{hebergememts.map((unite, index ) => {
  
  const villa = unite.filter((v) =>  v.typeHebergementCode === "VILLA")

  const suite = unite.filter((v) =>  v.typeHebergementCode === "SUITE")
  const chambre = unite.filter((v) =>  v.typeHebergementCode === "CHAMBRE")
  
  
const  bookedDaysVilla = reservations.filter(book => book.SUMMARY.includes(villa.map((v) => v.libelle)))
 
const  bookedDaysSuite = reservations.filter(book => book.SUMMARY.includes(suite.map((v) => v.libelle)))

const  bookedDaysChambre = reservations.filter(book => book.SUMMARY.includes(chambre.map((v) => v.libelle)))

const TriFirst = Tri2(bookedDaysVilla)


        return ( 
          <>

          <div className={activeCalendar === index ? 'calendarsContainer activeCalendar' : 'calendarsContainer'} onClick={() => {setActiveCalendar(index)}}>
  
 
           <CalendarChildren  showDetailsHandle={showDetailsHandle} currentWeek={currentWeek} currentMonth={currentMonth} 
            uniteName={ "Villa " + villa.map((v) => v.libelle)}  active={ activeCalendar } id={ villa.map((v) => v.id)}index={index} resetData={setData}bookedDays={TriFirst} background={"#BFD9D9"}  />
             
        <CalendarChildren showDetailsHandle={showDetailsHandle}  currentWeek={currentWeek} currentMonth={currentMonth} uniteName={"Suite " + suite.map((v) => v.libelle)}background={"#D9E8E8"} active={ activeCalendar }id={ suite.map((v) => v.id)} index={index} resetData={setData} bookedDays={Tri2(bookedDaysSuite)} />
        <CalendarChildren showDetailsHandle={showDetailsHandle}  currentWeek={currentWeek} currentMonth={currentMonth} uniteName={"Chambre " + chambre.map((v) => v.libelle)} background={"#E6F0F0"} active={ activeCalendar } id={ chambre.map((v) => v.id)} index={index} resetData={setData} bookedDays={Tri2(bookedDaysChambre)} />

        </div>
{/*        
        {   activeCalendar === index ?  <Details props={data}/>  : null } */}
        
        </>
        )
    })
}


  

    </div>


  );
};

export default Calendar2;

