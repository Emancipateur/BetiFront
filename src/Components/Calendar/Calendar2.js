import { useState } from "react";
import CalendarChildren from './CalendarChildren'
import CalendarChildren1 from './CalendarChildren1'
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
import isSaturday from "date-fns/isSaturday";
import isFriday from "date-fns/isFriday";


const Calendar2 = ({ setmodalChambre, setmodalVilla, setmodalSuite }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeCalendar, setActiveCalendar] = useState(6);
  const [data, setData] = useState([]);
  const reservations = FetchReservation()
  const hebergememts = FetchHebergement()



  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());
  


  function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele.SUMMARY != value; 
    });
}

/****** Find out if element appear n° of time ( second paramater) ************/
const getSameDayBooked = (arr, num) => {
  
  const count = (arr, value) => arr.filter(val => val.getTime() === value.getTime()).length
  const similarDays = []

const howMany = arr.flat().map((b => count(arr.flat(),b)))

  howMany.map((v,i )=> {

  if (v === num){

    similarDays.push(arr.flat().splice(i, 1))
 
  }
})
return similarDays
}


   const  villaAllDays = Tri2(reservations.filter(book => book.SUMMARY.includes('Villa')))
   const villaAllDayBookSameDay = getSameDayBooked(villaAllDays,6);
   const  suiteAllDays =  arrayRemove(reservations.filter(book => book.SUMMARY.includes('Suite')), "Suite Bois noir")
   const  boisNoirAllDays = reservations.filter(book => book.SUMMARY.includes('Bois'))
   const  ChambreAllDays = reservations.filter(book => book.SUMMARY.includes('Chambre'))


















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
   if(getWeek(today) < currentWeek || today < currentMonth)
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

    const nextMonth = addMonths(currentMonth, 1);

    // console.log("selected day", selectedDate);
    return (
      <div className="header row flex-middle">
          <div className="col monthDisplay">
          <span >{format(currentMonth, dateFormat)}</span>

        </div>
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
       
      
        <div className="col col-end">
          <div className="icon" onClick={() => changeMonthHandle("next")}>Mois 	&gt;</div>
        </div>
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">	Semaine &gt;</div>
          
        </div>
        <div className="col monthDisplay">
          <span>{format(nextMonth, dateFormat)}</span>

        </div>
      </div>
      
    );
  };
  const renderHeaderMobile = () => {
    const dateFormat = "MMM yyyy";

    const nextMonth = addMonths(currentMonth, 1);

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
        <div className="col  monthMobile monthDisplay">
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
    const dateFormat = "MM/dd/yyyy";
    const days = [];
    // let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
let startDate = currentMonth

    const options = { weekday: 'short', day: 'numeric' };

    for (let i = 0; i < 40; i++) {

      days.push(
        
  
        <div className={`col col-center ${isSaturday( new Date(addDays(startDate, i))) || isFriday( new Date(addDays(startDate, i)))? 'weekend' : ""}`} key={i}>

          {/* {format(addDays(startDate, i), dateFormat)} */}
          <p> {   new Date(format(addDays(startDate, i), dateFormat)).toLocaleDateString('fr-Fr',{ weekday: 'short'}).slice(-4,2)}</p>

          
<p> {   new Date(format(addDays(startDate, i), dateFormat)).toLocaleDateString('fr-Fr',{ day: 'numeric'})}</p>

        </div>
      
      );
    }

    return <div className="daysRowContainer"><div className="days row"> <div className="col col-center people1"><i className="fa-solid fa-person"></i></div> <div className="col col-center people"><i className="fa-solid fa-person"><p>sups</p></i></div>{days}</div></div>
  };

  const renderDaysMobile = () => {
    // const dateFormat = "EEE";
    const dateFormat = "MM/dd/yyyy";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const options = { weekday: 'short'};
    const options1 = { day: 'numeric' };
    for (let i = 0; i < 7; i++) {
    

      days.push(
  
        <div className={`col col-center ${isSaturday( new Date(addDays(startDate, i))) || isFriday( new Date(addDays(startDate, i)))? 'weekend' : ""}`} key={i}>
          {/* {format(addDays(startDate, i), dateFormat)} */}
 <p>  { new Date(format(addDays(startDate, i), dateFormat)).toLocaleDateString('fr-Fr', options)}</p>
 <p>  { new Date(format(addDays(startDate, i), dateFormat)).toLocaleDateString('fr-Fr', options1)}</p>

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
  const renderCalendars = () => {
    /* villa c7b198  */
    /* chambre f0ece2  */
    /* suite dfd3c3  */
    /* bois noir ebcbae  */
  
    return ( 
    <>    
    <CalendarChildren1 key={"1"}  showDetailsHandle={showDetailsHandle} currentWeek={currentWeek} currentMonth={currentMonth} 
    uniteName={ "Villas "}  active={ activeCalendar } id={"25"}index={'30'} resetData={setData}bookedDays={villaAllDayBookSameDay} background={"#f8cbad"} people={6} peopleMax={3} setmodal={setmodalVilla} />
<CalendarChildren1 key={'2'}  showDetailsHandle={showDetailsHandle} currentWeek={currentWeek} currentMonth={currentMonth} 
    uniteName={ "Suites "}  active={ activeCalendar } id={"25"}index={'30'} resetData={setData}bookedDays={Tri2(suiteAllDays)} background={"#8faadc"} people={4} peopleMax={2 } setmodal={setmodalSuite} />

<CalendarChildren1 key={'4'}  showDetailsHandle={showDetailsHandle} currentWeek={currentWeek} currentMonth={currentMonth} 
    uniteName={ "BoisNoir "}  active={ activeCalendar } id={"25"}index={'30'} resetData={setData}bookedDays={Tri2(boisNoirAllDays)} background={"#b4c7e7"} people={2} peopleMax={2}
     />
     <CalendarChildren1 key={'3'}  showDetailsHandle={showDetailsHandle} currentWeek={currentWeek} currentMonth={currentMonth} 
    uniteName={ "Chambres "}  active={ activeCalendar } id={"25"}index={'30'} resetData={setData}bookedDays={Tri2(ChambreAllDays)} background={"#deebf7"} people={2} peopleMax={1} setmodal={setmodalChambre}
     />
     </> )
  }
  


  return (
      <div className="calendar">
                  <div className="mobileRenderDays">    
      {renderHeaderMobile()}
      </div>
      <div className="desktopRenderDays">
      {renderHeader2()}

      </div>
      <div className="desktopRenderDays">

          {renderDays()}
          </div>
          <div className="mobileRenderDays">    
          {renderDaysMobile()}
          </div>
        {  renderCalendars()}


      {/* {renderCells()} */}

            
{/* {hebergememts.map((unite, index ) => {
  
  const villa = unite.filter((v) =>  v.typeHebergementCode === "VILLA")
  const suite = unite.filter((v) =>  v.typeHebergementCode === "SUITE")
  const chambre = unite.filter((v) =>  v.typeHebergementCode === "CHAMBRE")
  

//  VillaAllDays.push(reservations.filter(book => book.SUMMARY.includes(villa.map((v) => v.libelle))))

const  bookedDaysVilla = reservations.filter(book => book.SUMMARY.includes(villa.map((v) => v.libelle)))
 
const  bookedDaysSuite = reservations.filter(book => book.SUMMARY.includes(suite.map((v) => v.libelle)))

const  bookedDaysChambre = reservations.filter(book => book.SUMMARY.includes(chambre.map((v) => v.libelle)))

const TriFirst = Tri2(bookedDaysVilla)


        return ( 
          <>

          <div className={activeCalendar === index ? 'calendarsContainer activeCalendar' : 'calendarsContainer'} onClick={() => {setActiveCalendar(index)}}>
  
 
           <CalendarChildren key={villa.map((v) => v.id)}  showDetailsHandle={showDetailsHandle} currentWeek={currentWeek} currentMonth={currentMonth} 
            uniteName={ "Villa " + villa.map((v) => v.libelle)}  active={ activeCalendar } id={ villa.map((v) => v.id)}index={index} resetData={setData}bookedDays={TriFirst} background={"#BFD9D9"}  />
             
        <CalendarChildren  key={suite.map((v) => v.id)}  showDetailsHandle={showDetailsHandle}  currentWeek={currentWeek} currentMonth={currentMonth} uniteName={"Suite " + suite.map((v) => v.libelle)}background={"#D9E8E8"} active={ activeCalendar }id={ suite.map((v) => v.id)} index={index} resetData={setData} bookedDays={Tri2(bookedDaysSuite)} />
        <CalendarChildren  key={chambre.map((v) => v.id)}  showDetailsHandle={showDetailsHandle}  currentWeek={currentWeek} currentMonth={currentMonth} uniteName={"Chambre " + chambre.map((v) => v.libelle)} background={"#E6F0F0"} active={ activeCalendar } id={ chambre.map((v) => v.id)} index={index} resetData={setData} bookedDays={Tri2(bookedDaysChambre)} />

        </div>

        </>
        )
    })
} */}

             

  

    </div>


  );
};

export default Calendar2;

