import $ from 'jquery'
import React , { useEffect, useRef} from 'react'

import NavBar from '../Components/Navigation2'
import Footer from '../Components/Footer'
import Prestations from '../Pages/Prestations'
import Lodge from '../Pages/Lodge'
import Hebergement from '../Pages/Hebergement'
import Restauration from '../Pages/Restauration'
import { NavLink } from "react-router-dom";


  

function Index() {
// useEffect(() => {
//   if (window.screen.width <= 1024) {
//     document.location = "./mobile";
//     }


// }, [])



useEffect(() => {
  $(".image").click(function(){
    if($(this).hasClass('active')){
 


    }else{
      $(".image").removeClass("active");
      $(this).addClass("active")
      $(".image").scrollTop(0);
    }


  
  })

}, [])



const myRef = useRef(null)
const myRef2 = useRef(null)
const myRefHebergement = useRef(null)
const myRefRestauration = useRef(null)
const myRefPrestation = useRef(null)

  return (
    <>
   
    <NavBar/>

    <div className="portfolio" >
    {/* <div className="image active " style={{backgroundImage: "url(./assets/images/uh4.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }} >
     <div className="titleOnglet">Accueil</div> 
    <div className="text-container" >
      <a href='#lodgeInfo'>
        <div className="text">
     
    
    
        </div>
      </a>

            </div> 
  

    </div> */}
 
    <div className="image active " onClick={ ()=> myRef.current.scrollIntoView() }   id='lodge' style={{backgroundImage: "url(./assets/images/lodgeviewfar.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }} >
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
 

        
    <div className="image " onClick={ ()=> myRefHebergement.current.scrollIntoView() }  id='hebergement' style={{backgroundImage:  "url(./assets/images/2.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
    <div className="titleOnglet">Hébergement</div>

      <div className="text-container">
      <a href="#hebergementInfo">
        <div className="text">
          <h3>Hébergement</h3>
          <p>Villas & Suites & Chambres</p>
        </div>
        
      </a>
      </div >
      <div id="hebergementInfo" ref={myRefHebergement}>      <Hebergement /></div>
  
    </div>


    <div className="image " onClick={ ()=> myRefRestauration.current.scrollIntoView() } id="restauration" style={{backgroundImage:  "url(./assets/images/restaurant4.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
    <div className="titleOnglet">Restauration</div>
      <div className="text-container">
      <a href='#restaurationInfo'>
        <div className="text">
          <h3>Restauration</h3>
          <p>Notre restaurant</p>
    
        </div>
        
      </a>
      </div>
      <div id="restaurationInfo" ref={myRefRestauration}><Restauration /></div>
    </div>
    <div className="image " onClick={ ()=> myRefPrestation.current.scrollIntoView() } id='prestations'style={{backgroundImage: "url(https://media.ucpa.com/image/upload/f_auto/t_UCPA_Vertical/UCPA-SPORT-NATURE/International/00061665.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
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
    <div className="image" style={{backgroundImage: "url(./assets/images/1.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
    <div className="titleOnglet">Réservation</div>
      <div className="text-container">
      <NavLink to='/reservation'>
        <div className="text">
          <h3>Réservation</h3>
          <p>Effectué vos réservation en ligne</p>
        </div>
        </NavLink>
      </div>
    </div>


  </div>
{/* <Footer /> */}





<script src="./assets/jquery.min.js" type="text/javascript" ></script>
<script src="./assets/bootstrap.js" type="text/javascript" ></script>
<script src="./script.js" type="text/javascript" ></script>

</>
  )

  
}



export default Index


