import React from "react";
import Carousel, { CarouselItem } from "../Components/Carousel";
import Footer from "../Components/Footer";

import NavBar from "../Components/Navigation2";

function Prestation() {

  
  const randonnée = (
    <div className="carouselContent">
      <h2>Randonnée</h2>
      <div
        className="imageCarousel"
        style={{
          backgroundImage: "url(./assets/images/activités/randonnée.jpg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat :"no-repeat"
        }}
      ></div>

      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );


  const jet = (
    <div className="carouselContent">
          <h2>Jet paradise</h2>
      <div
        className="imageCarousel"
        style={{
          backgroundImage:
            "url(./assets/images/activités/jetski.jpg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat :"no-repeat"
        }}
      ></div>

  
      <p>Faite une virée en jet ski, Contact au 75 21 33</p>
    </div>
  );
  const kite = (
    <div className="carouselContent">
          <h2>Kite Surf</h2>
      <div
        className="imageCarousel"
        style={{
          backgroundImage:
            "url(./assets/images/activités/kite.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat :"no-repeat"
        }}
      ></div>

  
      <p>Le lagon de Poé, peu profond, offre un spot parfait pour le kite surf lorsque le vent souffle.
Idéal pour tous les niveaux même débutants. Il existe une école de kite surf à Poé.
Transport possible, renseignements à la réception.
Matériel non fourni</p>
    </div>
  );

  const surf = (
    <div className="carouselContent">
          <h2>Surf</h2>
      <div
        className="imageCarousel"
        style={{
          backgroundImage:
            "url(./assets/images/activités/surf.jpg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat :"no-repeat"
        }}
      ></div>

  {/* <div className="carouselDetails"> */}
      <p>Le seul beach break de Nouvelle-Calédonie se trouve à la roche percée (à 10 minutes de voiture de Betikure).
Il est possible de louer du matériel sur place.</p>
<p>
D'autres spots au large sont accessibles par bateau (pour surfers de bon niveau).
Transport possible, renseignements à la réception.</p>
{/* </div> */}
    </div>
  );


  const kayak = (
    <div className="carouselContent">

<h2>Kayak / Canoë</h2>
      <div
      
        className="imageCarousel"
        style={{
          backgroundImage:
            "url(./assets/images/activités/kayak.jpg",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat :"no-repeat"
        }}
      ></div>

      <p>En mer ou en rivière</p>
      <p>Location et transport possible</p>
   
    </div>
  );
  const snorkeling = (
    <div className="carouselContent">

<h2>Randonnée Palmée</h2>
      <div
      
        className="imageCarousel"
        style={{
          backgroundImage:
            "url(./assets/images/activités/plongée.jpg",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat :"no-repeat"
        }}
      ></div>

      <p>Dans le lagon de Poe, classé au patrimoine mondiale de l'UNESCO. (Matériel non fourni)
Transport possible, renseignements à la réception.</p>
   
    </div>
  );
  const golf = (
    <div className="carouselContent">

<h2>Golf</h2>
      <div
      
        className="imageCarousel"
        style={{
          backgroundImage:
            "url(./assets/images/activités/golf.jpg",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat :"no-repeat"
        }}
      ></div>

      <p>Le golf dans un cadre magique à deux pas du lagon</p>
   
    </div>
  );

  return (
    <div className="prestation">
      <NavBar />
      <div className="prestationContent">
        <h1>Prestations</h1>

        <h2> Activités autour de Betikure</h2>
        <p>
          La région de BOURAIL est propice à la découverte de la culture locale
          ainsi qu'à la pratique d'un grand nombre d'activité. Afin de vous
          garantir un séjour inoubliable, Betikure est en mesure de vous
          conseiller ou d'organiser des journées qui marqueront votre séjour.
        </p>

        <Carousel>
        <CarouselItem>{kite}</CarouselItem>
          <CarouselItem>{jet}</CarouselItem>
          <CarouselItem>{kayak}</CarouselItem>
          <CarouselItem>{surf}</CarouselItem>
  
        
          <CarouselItem>{snorkeling}</CarouselItem>
          <CarouselItem>{golf}</CarouselItem>
        
       
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default Prestation;
