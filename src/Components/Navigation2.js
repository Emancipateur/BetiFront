import React from 'react'
import { NavLink } from "react-router-dom";
import $ from 'jquery'
function NavBar() {
    const [click, setClick] = React.useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
  

    const changeClass = (a) => {
      $(".image").removeClass("active");
      $(a).addClass("active");
      $(".image").scrollTop(0);
    }


    return (
      <div>
          
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container" id='nav-container'>
          <div className="logo" style={{backgroundImage: "url(./assets/images/logo.png)",backgroundPosition: "center" , backgroundSize: "cover"}}></div>
            <a href="/"  className="nav-logo">
         <span style={{fontFamily: '    Kaushan Script',  }}>Betikure Parc Lodge</span> 
             {/* <i className="fa fa-code"></i> */}
            </a>
            {/* <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a
              
                  href="#lodge"
                  activeclassname="active"
                  className="nav-links"
                  onClick={  () => changeClass('#lodge')}
                >
                  Home
                </a>
              </li>
         
              <li className="nav-item">
                <a
             
             onClick={  () => changeClass('#lodge')}
                  href="#lodgeInfo"
                  activeclassname="active"
            
          
                >
                  Le lodge
                </a>
              </li>

         
              <li className="nav-item">
                <a
        
                  href="#hebergementInfo"
                  activeclassname="active"
                  className="nav-links"
                 onClick={() => changeClass('#hebergement')}
                >
                  Hébergement
                </a>
              </li>
              <li className="nav-item">
                <a
              
                  href="#restaurationInfo"
                  activeclassname="active"
                  className="nav-links"
                  onClick={() => changeClass('#restauration')}
                >
                  Restauration
                </a>
              </li>
              <li className="nav-item">
                <a
             
                  href="#prestationsInfo"
             activeclassname="active"
                  className="nav-links"
                 onClick={() => changeClass('#prestations')}
                >
                  Prestations
                </a>
              </li>
              <li className="nav-item">
                <NavLink
             
                  to="/reservation"
             activeclassname="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                 Réservations
                </NavLink>
              </li>
              <div className="navDetails"  onClick={handleClick}><span>Bourail - Nouvelle Calédonie</span></div>
            </ul> */}
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
        {/* <div className="line"></div> */}
      </ div>
      
    );
  }

export default NavBar