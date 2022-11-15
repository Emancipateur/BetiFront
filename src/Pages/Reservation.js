import React from 'react';
import Calendar from '../Components/Calendar/Calendar'
import NavBar from '../Components/Navigation2';
const Reservation = () => {
    return (
        <div className='reservation'>
            <NavBar />
            <Calendar />
        </div>
    );
};

export default Reservation;