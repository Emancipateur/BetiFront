import $ from 'jquery'
import React , { useEffect} from 'react'

import NavBar from '../Components/Navigation2'
import Footer from '../Components/Footer'
import { NavLink } from "react-router-dom";


  

function Index() {
// useEffect(() => {
//   if (window.screen.width <= 1024) {
//     document.location = "./mobile";
//     }


// }, [])


useEffect(() => {
  $(".image").hover(function(){
    $(".image").removeClass("active");
    $(this).addClass("active");
  })

}, [])

  return (
    <>
    {/* <Footer /> */}
    <NavBar />

    <div className="portfolio">

    <div className="image active" style={{backgroundImage: "url(./assets/images/lodgeviewfar.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div className="text-container">
      <NavLink to='/lodge'>
        <div className="text">
          <h3>Le Lodge</h3>
          <p>A propos de Betikure</p>
    
        </div>
      </NavLink>
      </div>
        
    </div>
    <div className="image " style={{backgroundImage:  "url(./assets/images/2.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div className="text-container">
      <NavLink to='/hebergement'>
        <div className="text">
          <h3>Hébergement</h3>
          <p>Villas & Suites & Chambres</p>
    
        </div>
        
      </NavLink>
      </div>
    </div>
    <div className="image " style={{backgroundImage:  "url(./assets/images/restaurant4.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div className="text-container">
      <NavLink to='/restauration'>
        <div className="text">
          <h3>Restauration</h3>
          <p>Notre restaurant</p>
    
        </div>
        
      </NavLink>
      </div>
    </div>
    <div className="image " style={{backgroundImage: "url(https://media.ucpa.com/image/upload/f_auto/t_UCPA_Vertical/UCPA-SPORT-NATURE/International/00061665.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div className="text-container">
      <NavLink to='/prestations'>
        <div className="text">
          <h3>Prestations</h3>
          <p>Activités autour du lodge</p>
    
        </div>
        
      </NavLink>
      </div>
    </div>
    <div className="image " style={{backgroundImage: "url(./assets/images/reservation.png)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div className="text-container">
      <NavLink to='/reservation'>
        <div className="text">
          <h3>Réservation</h3>
          <p>Effectué vos réservation en ligne</p>
        </div>
        </NavLink>
      </div>
    </div>
    <div className="image " style={{backgroundImage: "url(./assets/images/3.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div className="text-container">
        <div className="text">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>


  </div>





<script src="./assets/jquery.min.js" type="text/javascript" ></script>
<script src="./assets/bootstrap.js" type="text/javascript" ></script>
<script src="./script.js" type="text/javascript" ></script>

</>
  )

  
}



export default Index


