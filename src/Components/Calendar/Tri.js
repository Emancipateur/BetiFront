
import { useEffect, useState } from "react";
import {

  addDays,
 
} from "date-fns";


const Tri = (BookedDaysBeforeTri) => {

  
    const [BookedDaysAfterTri, setBookedDaysAfterTri] = useState([addDays(new Date().setHours(0,0,0,0), 4), addDays(new Date().setHours(0,0,0,0),3)])
    

      let dateArray = new Array();
      
    
    //   // Retourne un tableau avec les dates déjà reservé pour la suite
    function getDates(startDate, stopDate) {
    
      let currentDate = startDate.addDays(1);
      while (currentDate <= stopDate) {
          dateArray.push(new Date (currentDate));
          currentDate = currentDate.addDays(1);
      }
    
      return dateArray;
    } 


    function getDatesInRange(startDate, endDate) {
      const date = new Date(startDate.getTime());
    
      // ✅ Exclude start date
      // date.setDate(date.getDate() + 1);
    
      const dates = [];
    
      // ✅ Exclude end date
      while (date < endDate) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
   
      }
    
      return dates;
    }
  



    let allDays = []

    useEffect(() => {
 
        BookedDaysBeforeTri
        .map((item) => {
    
          let dayBookedStart = []
          let dayBookedEnd = []
     
  
        dayBookedStart.push(new Date(item.dateDebut).setHours(0,0,0,0))
        dayBookedEnd.push(new Date(item.dateFin).setHours(0,0,0,0))
  
   
    
      for (let i = 0; i <= dateArray.length; i ++ ) {
        allDays.push(getDatesInRange(new Date(dayBookedStart[i]), new Date(dayBookedEnd[i])))

        setBookedDaysAfterTri(allDays)
      }
      
    })}
      , [BookedDaysBeforeTri[0]])


      var filtered = BookedDaysAfterTri.filter(function (el) {
        return el != "";
      })

    return (
      filtered
    );
};

export default Tri;