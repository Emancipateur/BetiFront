import React from "react";
import Carousel, { CarouselItem } from "../Components/Carousel";
import Footer from "../Components/Footer";

import NavBar from "../Components/Navigation2";

function Prestation() {

  
  const randonnée = (
    <div className="carouselContent">
      
      <h2>Randonnée</h2>
      <p>Le site de GOUARO DEVA offre de magnifiques sentiers balisés.  
Plusieurs itinéraires conseillés selon votre niveau.
</p>
      <div
        className="imageCarousel"
        style={{
          backgroundImage: "url(./assets/images/activités/randonnée.jpg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat :"no-repeat"
        }}
      ></div>

 
    </div>
  );


  const jet = (
    <div className="carouselContent">
          <h2>Jet paradise</h2>
          <p>Faite une virée en jet ski, Contact au 75 21 33</p>
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
    </div>
  );
  const massage = (
    <div className="carouselContent">
          <h2>Massage</h2>
          <p>Faite vous masser</p>
      <div
        className="imageCarousel"
        style={{
          backgroundImage:
            "url(./assets/images/activités/massage.jpg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat :"no-repeat"
        }}
      ></div>
    </div>
  );
  const musée = (
    <div className="carouselContent">
          <h2>Musée </h2>
          <p>L'histoire de la commune de Bourail racontée et illustrée.</p>
      <div
        className="imageCarousel"
        style={{
          backgroundImage:
            "url(./assets/images/activités/musée.jpg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat :"no-repeat"
        }}
      ></div>
    </div>
  );
  const plage = (
    <div className="carouselContent">
          <h2>Poé </h2>
          <p>Etendue de sable blanc se jetant dans le lagon turquoise, un petit gout de paradis.
Transport possible, renseignements à la réception.</p>
      <div
        className="imageCarousel"
        style={{
          backgroundImage:
            "url(./assets/images/activités/poe.jpg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat :"no-repeat"
        }}
      ></div>
    </div>
  );

  const kite = (
    <div className="carouselContent">
          <h2>Kite Surf</h2>
            
      <p>Le lagon de Poé, peu profond, offre un spot parfait pour le kite surf lorsque le vent souffle.
Idéal pour tous les niveaux même débutants. Il existe une école de kite surf à Poé.
Transport possible, renseignements à la réception.
Matériel non fourni</p>
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


    </div>
  );

  const surf = (
    <div className="carouselContent">
          <h2>Surf</h2>
          <p>Le seul beach break de Nouvelle-Calédonie se trouve à la roche percée (à 10 minutes de voiture de Betikure).
Il est possible de louer du matériel sur place.
D'autres spots au large sont accessibles par bateau (pour surfers de bon niveau).
Transport possible, renseignements à la réception.</p>
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

{/* </div> */}
    </div>
  );


  const kayak = (
    <div className="carouselContent">

<h2>Kayak / Canoë</h2>

<p>En mer ou en rivière , 
    location et transport possible</p>
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

   
    </div>
  );
  const snorkeling = (
    <div className="carouselContent">

<h2>Randonnée Palmée</h2>
<p>Dans le lagon de Poe, classé au patrimoine mondiale de l'UNESCO. (Matériel non fourni)
Transport possible, renseignements à la réception.</p>
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

  
   
    </div>
  );
  const golf = (
    <div className="carouselContent">
<h2>Golf</h2>
<p>Le golf dans un cadre magique à deux pas du lagon</p>
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
    </div>
  );
  const moreActivity = (
    <div className="carouselContent">
<h2>...</h2>
<p>Bien d'autres activités sont possibles, demandez à notre équipe de vous conseiller ou prenez simplement le temps de vous reposer et de profiter du cadre de Betikure ...</p>

      <div
      
        className="imageCarousel"
        style={{
          backgroundImage:
            "url(./assets/images/activités/11098-min.jpg",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat :"no-repeat"
        }}
      ></div>
    </div>
  );



  return (
    <div className="prestation">
      {/* <NavBar /> */}
      <div className="paddingTopMobile"></div>
      <h1>Prestations</h1>
      <div className="prestationContent">
 

        <p>
          La région de BOURAIL est propice à la découverte de la culture locale
          ainsi qu'à la pratique d'un grand nombre d'activité. Afin de vous
          garantir un séjour inoubliable, Betikure est en mesure de vous
          conseiller ou d'organiser des journées qui marqueront votre séjour.
        </p>

        <div className="line"></div>
        <h2> Activités autour de Betikure :</h2>

        <Carousel>
          <CarouselItem>{golf}</CarouselItem>
        <CarouselItem>{plage}</CarouselItem>
        <CarouselItem>{kite}</CarouselItem>
        <CarouselItem>{musée}</CarouselItem>
        <CarouselItem>{randonnée}</CarouselItem>
        <CarouselItem>{massage}</CarouselItem>
          <CarouselItem>{jet}</CarouselItem>
          <CarouselItem>{kayak}</CarouselItem>
          <CarouselItem>{surf}</CarouselItem>
          <CarouselItem>{snorkeling}</CarouselItem>
          <CarouselItem>{moreActivity}</CarouselItem>
        

        </Carousel>

      {/* <p>Bien d'autres activités sont possibles, demandez à notre équipe de vous conseiller ou prenez simplement le temps de vous reposer et de profiter du cadre de Betikure ...</p> */}
      </div>
      {/* <Footer /> */}

    </div>
  );
}

export default Prestation;
