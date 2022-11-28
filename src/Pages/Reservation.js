import React from 'react';
import Calendar from '../Components/Calendar/Calendar'
import NavBar from '../Components/Navigation2';
import ReservationCompo from '../Components/ReservationCompo';
import ReservationChambreCompo from '../Components/ReservationChambreCompo';
import Calendar2 from '../Components/Calendar/Calendar2';
import Footer from '../Components/Footer'
const Reservation = () => {

  
<iframe style="border-style:none; width:100%; height:1000px;" src="https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&nb_mois=6"></iframe>
 

    return (
        <div className='reservation'>
            <NavBar />

            <div className="reservationContent" >
             
            <Calendar2  />
            <div className="iframeDiv">
       
            {/* <iframe  id='iframe'style={{borderStyle:"none", width:"100%", height:"1200px", background:""}}  src={"https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&calendrier=0"}></iframe> */}
        

            <iframe  id='iframe'style={{borderStyle:"none", width:"100%", height:"1200px", background:""}}  src={"https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&nb_mois=3"}></iframe>
      
            </div>
            
{/* 
            <ReservationCompo />
     <ReservationChambreCompo /> */}
        </div>
     <Footer />
        </div>
        
    );
};

export default Reservation;

