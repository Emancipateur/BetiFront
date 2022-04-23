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
          <div className="nav-container">
          <div className="logo" style={{backgroundImage: "url(./assets/images/logo.png)",backgroundPosition: "center" , backgroundSize: "cover"}}></div>
            <NavLink exact to="/" className="nav-logo">
         <span style={{fontFamily: 'cookie'}}>Betikure Parc Lodge</span> 
             {/* <i className="fa fa-code"></i> */}
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/restauration"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Restautation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/lodge"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Le lodge
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/hebergement"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Hébergement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/prestations"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Prestations
                </NavLink>
              </li>
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