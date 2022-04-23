import $ from 'jquery'
import React , { useEffect} from 'react'
import Nav from '../Components/Navigation'
import NavBar from '../Components/Navigation2'
import { NavLink } from "react-router-dom";
import Footer from '../Components/Footer';


function Index() {


useEffect(() => {
  $(".image").hover(function(){
    $(".image").removeClass("active");
    $(this).addClass("active");
  })

}, [])

  return (
    <>
    <Footer />
    <NavBar />

    <div class="portfolio">

    <div className="image active" style={{backgroundImage: "url(./assets/images/1.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div class="text-container">
    <NavLink to='/lodge'>
        <div className="text">
          <h3>Le Lodge</h3>
          <p>A propos de Betikure</p>
    
        </div>
        
      </NavLink>
      </div>
    </div>
    <div className="image " style={{backgroundImage:  "url(./assets/images/2.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div class="text-container">
        <div className="text">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div className="image " style={{backgroundImage:  "url(./assets/images/3.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div class="text-container">
        <div className="text">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div className="image " style={{backgroundImage: "url(./assets/images/3.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div class="text-container">
        <div className="text">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div className="image " style={{backgroundImage: "url(./assets/images/3.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div class="text-container">
        <div className="text">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div className="image " style={{backgroundImage: "url(./assets/images/3.jpg)",backgroundPosition: "center" , backgroundSize: "cover" }}>
      <div class="text-container">
        <div className="text">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>


  </div>


<Footer />


<script src="./assets/jquery.min.js" type="text/javascript" ></script>
<script src="./assets/bootstrap.js" type="text/javascript" ></script>
<script src="./script.js" type="text/javascript" ></script>

</>
  )

  
}



export default Index


