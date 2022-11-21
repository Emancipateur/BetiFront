import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
    const [click, setClick] = React.useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
      <div>
          
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container" id='nav-container'>
          <div className="logo" style={{backgroundImage: "url(./assets/images/logo.png)",backgroundPosition: "center" , backgroundSize: "cover"}}></div>
            <NavLink  to="/" className="nav-logo">
         <span style={{fontFamily: '    Kaushan Script',  }}>Betikure Parc Lodge</span> 
             {/* <i className="fa fa-code"></i> */}
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
              
                  to="/"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
         
              <li className="nav-item">
                <NavLink
             
                  to="/lodge"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Le lodge
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
        
                  to="/hebergement"
                  activeclassname="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Hébergement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
              
                  to="/restauration"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Restauration
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
             
                  to="/prestations"
             activeclassname="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Prestations
                </NavLink>
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
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
        <div className="line"></div>
      </ div>
      
    );
  }

export default NavBar