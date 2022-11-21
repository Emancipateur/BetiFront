import React from 'react';
import Calendar from '../Components/Calendar/Calendar'
import NavBar from '../Components/Navigation2';
import ReservationCompo from '../Components/ReservationCompo';
import ReservationChambreCompo from '../Components/ReservationChambreCompo';
import Calendar2 from '../Components/Calendar/Calendar2';
const Reservation = () => {
    return (
        <div className='reservation'>
            <NavBar />

 

          

            
            <div className="reservationContent">
            <Calendar2 />
     <ReservationCompo />
            <ReservationChambreCompo />
           
        </div>
        </div>
    );
};

export default Reservation;

