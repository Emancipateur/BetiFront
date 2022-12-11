import $ from 'jquery'
import React , { useEffect, useRef, useState} from 'react'

import NavBar from '../Components/Navigation2'
import Footer from '../Components/Footer'
import Prestations from '../Pages/Prestations'
import Lodge from '../Pages/Lodge'
import Hebergement from '../Pages/Hebergement'
import Restauration from '../Pages/Restauration'
import Reservation from '../Pages/Reservation'
import { NavLink } from "react-router-dom";


  

function Index() {

 
  const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
   }
   window.addEventListener("resize", documentHeight)
   documentHeight()


   
useEffect(() => {
  $(".image").on('click',function(e){
    if($(this).hasClass('active')){
      
    }else{
     
      $(".image").removeClass("active");
      $(this).addClass("active")
      $(".image").scrollTop(0);
      SetScrollOff(true)
    }
  })

}, [])

const [scrollOff, SetScrollOff] = useState(true)
const [dispoVisible, setDispoVisible] = useState(false)

const myRef = useRef(null)

const myRefHebergement = useRef(null)
const myRefRestauration = useRef(null)
const myRefPrestation = useRef(null)

const myRefT = useRef(null)

const myRefHebergementT = useRef(null)
const myRefRestaurationT = useRef(null)
const myRefPrestationT = useRef(null)
const myRefReservationT = useRef(null)

const hoverEffect = () => {

    const interval = setTimeout(() => {
      myRefT.current.style.opacity = 1
    
    
    }, 500);
  setTimeout(() => {
      myRefT.current.style.opacity =""
      myRefHebergementT.current.style.opacity = 1
    }, 1000);

 
  setTimeout(() => {
    myRefHebergementT.current.style.opacity = ""

    myRefRestaurationT.current.style.opacity = 1
    }, 1500);

 
  setTimeout(() => {
    myRefRestaurationT.current.style.opacity = ""
    myRefPrestationT.current.style.opacity = 1
    }, 2000);

 
  setTimeout(() => {
    myRefPrestationT.current.style.opacity =""
    myRefReservationT.current.style.opacity =1


    }, 2500);
  setTimeout(() => {

    myRefReservationT.current.style.opacity =""

    }, 3000);


 
  
    return () => clearInterval(interval);
}

useEffect(() => {
  hoverEffect()
}, [])


  return (
    <>
   
    <NavBar/>

    <div className="portfolio" >
    <div className="image active " onClick={() => hoverEffect()} style={{backgroundImage: "url(./assets/images/uh4.jpg)",backgroundPosition: "center" , backgroundSize: "cover" ,  }} >
     <div className="titleOnglet">Accueil </div>       
        
        

    <div className="text-container" >
    <div className="text">
    <span style={{fontFamily: '    Kaushan Script', fontSize:'1.8rem' }}>Betikure Parc Lodge</span> 
    </div>
            </div> 
  

    </div>
 
    <div className="image  " ref={myRefT} onClick={  ()=> myRef.current.scrollIntoView()  }   id='lodge' style={{backgroundImage: "url(./assets/images/lodgeviewfar.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }} >
      <div className="titleOnglet">Le Lodge</div>
    <div className="text-container" >
      <a href='#lodgeInfo'>
        <div className="text">
          <h3>Le Lodge</h3>
          <p>A propos de Betikure</p>
    
        </div>
      </a>

            </div>
      <div id="lodgeInfo"  ref={myRef}>  <Lodge /></div>
    </div>

 

        
    <div className="image " ref={myRefHebergementT}   id='hebergement' style={{backgroundImage:  "url(./assets/images/2.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
    <a href="#hebergementInfo"> 
    <div className="titleOnglet">Hébergement</div>
      <div className="text-container">
    
        <div className="text">
          <h3>Hébergement</h3>
          <p>Villas & Suites & Chambres</p>
        </div>
        
      </div >
      </a>
      <div id="hebergementInfo" ref={myRefHebergement}>      <Hebergement /></div>
  
    </div>


    <div className="image " ref={myRefRestaurationT} id="restauration" style={{backgroundImage:  "url(./assets/images/restaurant4.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
   <a href="#restaurationInfo"> 
    <div className="titleOnglet">Restauration</div>
      <div className="text-container">
        <div className="text">
          <h3>Restauration</h3>
          <p>Notre restaurant</p>
        </div>
      </div>
      </a>

 

      <div id="restaurationInfo" ref={myRefRestauration}><Restauration /></div>
    </div>


    
    <div className="image "ref={myRefPrestationT} onClick={ ()=> myRefPrestation.current.scrollIntoView() } id='prestations'style={{backgroundImage: "url(./assets/images/activités/golf.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
    <div className="titleOnglet">Prestations</div>
      <div className="text-container">
      <a href='#prestationsInfo'>
        <div className="text">
          <h3>Prestations</h3>
          <p>Activités autour du lodge</p>
    
        </div>
        
      </a>
      </div>
      <div id="prestationsInfo" ref={myRefPrestation}>  <Prestations /></div>
    </div>


    <div className="image" ref={myRefReservationT}   onClick={() => setDispoVisible(true)}  style={{backgroundImage: "url(./assets/images/1.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <a href='#reservationInfo'>
    <div className="titleOnglet">Réservation</div>
      <div className="text-container">
        <div className="text">
          <h3>Réservation</h3>
          <p>Effectué vos réservation en ligne</p>
        </div>
      </div>
        </a>
      <div id="reservationInfo" >  <Reservation dispo={dispoVisible} /></div>
    </div>

    {/* <div className="image"  ref={myRefReservationT} style={{backgroundImage: "url(./assets/images/1.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
    <div className="titleOnglet">Réservation</div>
      <div className="text-container">
      <NavLink to='/reservation'>
        <div className="text">
          <h3>Réservation</h3>
          <p>Effectué vos réservation en ligne</p>
        </div>
        </NavLink>
      </div>
    </div> */}


  </div>
{/* <Footer /> */}





<script src="./assets/jquery.min.js" type="text/javascript" ></script>
<script src="./assets/bootstrap.js" type="text/javascript" ></script>
<script src="./script.js" type="text/javascript" ></script>

</>
  )

  
}



export default Index


