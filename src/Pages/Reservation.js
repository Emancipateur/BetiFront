import React from "react";
import { useEffect, useState } from "react";
import ReservationCompo from "../Components/ReservationCompo";
import ReservationSuiteCompo from "../Components/ReservationSuiteCompo";
import ReservationChambreCompo from "../Components/ReservationChambreCompo";
import Footer from '../Components/Footer' 
import Calendar2 from "../Components/Calendar/Calendar2";

const Reservation = ({ dispo }) => {
  const [modal, setModal] = useState(false);
  const [modalSuite, setModalSuite] = useState(false);
  const [modalChambre, setModalChambre] = useState(false);


const cgv = () => {
  return (
alert('hey')
  )
}



  
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
                    className= 'planningIframe'
            style={{
    
         
              borderStyle: "none",
              width: "100%",
              height: "250px",
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
        onClick={() => console.log('ok')}
          className="iframeresaDesktop"
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

        <iframe
        className="iframeResaMobile"
    
          style={{
            borderStyle: "none",
            width: "100%",
            height: "1400px",
            background: "white",
            paddingLeft : '3rem'
          }}
          src={
            "https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&calendrier=0"
          }
        ></iframe>
      </div>


<div className="cgv">

<h3>TERMES ET CONDITIONS</h3>

 

<p><b>Réservations </b> : Les réservations peuvent être prises par téléphone, par mail ou par courrier. Elles sont confirmées après réception d’un acompte de 50 % réglé par chèque ou virement ou après prélèvement de 10 % validant les coordonnées de carte bancaire (n° et date d‘expiration) communiquées par le client.</p>

 

<p><b>Annulation </b> : Bétikuré conserve dans tous les cas d’annulation ou de report les 10 % versés à la réservation à titre d’acompte. En cas d’annulation durant les deux jours précédant le jour d’arrivée prévu, Bétikuré prélève en sus 40 % du montant total de la réservation. En cas de non-présentation ou d’annulation le jour prévu pour l’arrivée le client sera redevable de la totalité du prix du séjour limité aux 2 premières nuits. Cependant Bétikuré s’engage à ne pas prélever ces frais si l’hébergement est reloué. L'annulation doit être déclarée par Mail ou par sms afin qu'il n'y ait aucune contestation du délai de prévenance.  Les mauvaises conditions météo permettent l'annulation sans frais dès lors qu'une vigilance orange ou une alerte de niveau 1 cyclonique est déclenchée.</p>


<p><b>Assurance annulation  </b> :

Cette option facturée 10 % du cout du séjour limité aux deux premières nuits permet aux clients d’annuler sans frais la réservation effectuée (En dehors des 600 fcfp de frais de gestion) et cela quel que soit le motif (mauvais temps, évènement familial, motifs personnels, maladie etc ..), même en cas de non présentation, aucun délai de prévenance n’étant exigé Cette option doit être souscrite au moment de la réservation.</p>


<p><b>Check in - Check out </b>: Les hébergements sont disponibles à partir de 15h00 et doivent être libérés à 11h00.  Un check out reporté à 17h00 au lieu de 11h00 est possible en fonction des disponibilités. Celui-ci est facturé 30 % du coût de la nuit à venir de façon à compenser l'impossibilité de louer.</p>

<p> 
<b>
Personnes supplémentaires  </b> : Le nombre maximum  de personnes est fixé à 3 pour une chambre, à 6 pour une suite et 9 pour une villa. Il est possible de rajouter un enfant de moins de 2 ans (lit bébé) à ce nombre mais 2 enfants de moins de 2 ans sont comptés comme 1 personne pour le calcul du nombre de personne (ce qui ne remet pas en cause la gratuité). Bétikuré se réserve le droit de refuser l'accès à l'hébergement ou  de mettre fin à celui-ci si le nombre maximum de personnes prévu pour l'hébergement n'est pas respecté.  </p>


<p><b>Moyens de paiement  </b> :bétikuré accepte les règlements par chèques, espèces (€ et FCFP) ou cartes bancaires  CB, Visa ou Mastercard.</p>


<p><b>Ménage </b> :  Le ménage ainsi que le changement de draps et le remplacement du linge de toilette est assuré tous les deux jours</p>

 
<p>
<b>Animaux </b> : Nous en sommes désolés mais Bétikuré n’accepte plus les animaux.</p>
 <span className='no-smoking-span'>L'intérieur des hébergements est strictement "non fumeurs"<div className="no-smoking"></div></span> 




</div>
      <Footer />
    </div>
  );
};

export default Reservation;
