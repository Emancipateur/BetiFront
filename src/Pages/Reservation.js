import React from "react";
import { useEffect } from "react";

import Calendar2 from "../Components/Calendar/Calendar2";

const Reservation = ({dispo}) => {

  function access() {
    setTimeout(() => {
        
      var iframe = document.getElementById("myIframe");
  
    
      console.log(iframe);
    }, 2000); }

  
    

  return (
    <div className="reservation">
      {/* <NavBar /> */}
      <div className="paddingTopMobile"></div>
        <h1>Disponibilité</h1>
      <div className="reservationContent">
        <br />
        <Calendar2/>
        <br />
        <div  className="line"></div>
        <h2>Réservation</h2>
<h3>Villas 	&amp; Suites &amp; Chambres</h3>
        {/* <iframe  id='iframe'style={{borderStyle:"none", width:"100%", height:"1200px", background:""}}  src={"https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&calendrier=0"}></iframe> */}
{ dispo ?
        <iframe id='myIframe' onLoad={access()}
         
          style={{
            borderStyle: "none",
            width: "100%",
            height: "600px",
            background: "white",
          }}
          src={
            "https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&calendrier=0"
          }
        ></iframe>
: null
}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Reservation;
