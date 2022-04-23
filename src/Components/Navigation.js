import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <>
    <div className="navigation">
      <div className="logoName">
      <div className="logo" style={{backgroundImage: "url(./assets/images/logo.png)",backgroundPosition: "center" , backgroundSize: "cover"}}></div>
      <h1>Betikure Lodge Park</h1>
      </div>
      <ul>



        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/lodge"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Le lodge</li>
        </NavLink>
        <NavLink
          to="/hebergement"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Hébergement</li>
        </NavLink>
        <NavLink
          to="/restauration"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Restauration</li>
        </NavLink>
        <NavLink
          to="/prestations"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Prestations</li>
        </NavLink>
      </ul>
        <div className="navDetails"><span>Bourail - Nouvelle Calédonie</span></div>
    </div>
    <div className="line"></div>
  </>
  );
};

export default Navigation;
