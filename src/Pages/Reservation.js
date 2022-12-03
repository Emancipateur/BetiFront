import React from 'react';
import Calendar from '../Components/Calendar/Calendar'
import NavBar from '../Components/Navigation2';
import ReservationCompo from '../Components/ReservationCompo';
import ReservationChambreCompo from '../Components/ReservationChambreCompo';
import Calendar2 from '../Components/Calendar/Calendar2';
import Footer from '../Components/Footer'
const Reservation = () => {

  
 

    return (
        <div className='reservation'>
            <NavBar />

            <div className="reservationContent" >
     

            <h2>Disponibilité</h2>
      
      <Calendar2  />
      <br />
      <div className="line"></div>
            <h2>Réservation</h2>
            <div className="iframeDiv" id="iframe">
            {/* <iframe  id='iframe'style={{borderStyle:"none", width:"100%", height:"1200px", background:""}}  src={"https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&calendrier=0"}></iframe> */}

            <iframe  id='iframe'style={{borderStyle:"none", width:"85%", height:"650px", background:"#FFF"}}  src={"https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&calendrier=0"}></iframe>

            </div>
            {/* <div className="AnchorToHebergement"> 
            <h3>Plus de détails sur nos hébergements  : </h3>
            <br />
                <a href="#Villa">Villa</a>    
      <a href="#Suite">Suite</a>
      <a href="#Chambre">Chambre</a>
</div>
 
       
     
        
            <br />
            <ReservationCompo />
     <ReservationChambreCompo /> */}
        </div>
     <Footer />
        </div>
        
    );
};

export default Reservation;

