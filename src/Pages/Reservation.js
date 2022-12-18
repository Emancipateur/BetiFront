import React from "react";
import { useEffect, useState } from "react";
import ReservationCompo from "../Components/ReservationCompo";
import ReservationSuiteCompo from "../Components/ReservationSuiteCompo";
import ReservationChambreCompo from "../Components/ReservationChambreCompo";

import Calendar2 from "../Components/Calendar/Calendar2";

const Reservation = ({ dispo }) => {
  const [modal, setModal] = useState(false);
  const [modalSuite, setModalSuite] = useState(false);
  const [modalChambre, setModalChambre] = useState(false);
  return (
    <div className="reservation" id="reservationTop">
      {/* <NavBar /> */}
      <div className="paddingTopMobile"></div>
      <h1>Disponibilité</h1>
      <div className="reservationContent">
        <br />

 
  

            {modal ? (
              <div className="overlay">
                <div className="modal">
                  {" "}
                  <ReservationCompo setmodal={setModal} modal={modal} />{" "}
                </div>
              </div>
            ) : null}

            {modalSuite ? (
              <div className="overlay">
                <div className="modal">
                  {" "}
                  <ReservationSuiteCompo setmodal={setModalSuite}  modal={modalSuite}/>{" "}
                </div>
              </div>
            ) : null}

            {modalChambre ? (
              <div className="overlay">
                <div className="modal">
                  {" "}
                  <ReservationChambreCompo setmodal={setModalChambre}  modal={modalChambre}/>{" "}
                </div>
              </div>
            ) : null}

            <br />
    
          <Calendar2
            setmodalChambre={setModalChambre}
            setmodalVilla={setModal}
            setmodalSuite={setModalSuite}
          />
       

        <div className="planning">
        <div className="line"></div>
        <h2>Tarifs</h2>
   

          <iframe
            style={{
              marginLeft: "2rem",
              borderStyle: "none",
              width: "100%",
              height: "180px",
              overflow: "hidden",
            }}
            src={"https://www.emancipateur.com/planninghtml3.html"}
          ></iframe>
          <p>Personnes supplémentaires   2800xpf/nuit</p>
        </div>

        <div className="line"></div>
        <h2>Réservation</h2>
        <h3>Villas &amp; Suites &amp; Chambres</h3>
        {/* <iframe  id='iframe'style={{borderStyle:"none", width:"100%", height:"1200px", background:""}}  src={"https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&calendrier=0"}></iframe> */}

        <iframe
          id="myIframe"
          style={{
            borderStyle: "none",
            width: "100%",
            height: "570px",
            background: "white",
          }}
          src={
            "https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&calendrier=0"
          }
        ></iframe>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Reservation;
