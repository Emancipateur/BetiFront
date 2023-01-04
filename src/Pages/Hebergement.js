import React, { useState, useRef, useEffect} from 'react'
import Navigation from '../Components/Navigation2'
import Footer from '../Components/Footer'
import CarouselReservation from '../Components/CarouselReservation';
import SlideSlicker from '../Components/SlickSlider';
import ReservationCompo from '../Components/ReservationCompo';
import ReservationChambreCompo from '../Components/ReservationChambreCompo';
import ReservationSuiteCompo from '../Components/ReservationSuiteCompo';

function Hebergement() {

const refLink1 = useRef(null)
const refLink2 = useRef(null)
const refLink3 = useRef(null)




useEffect(() => {


const interval = setInterval(() => {
    

 setTimeout(() => {
    refLink1.current.style.color = 'black'
    refLink3.current.style.color = ''
  }, 0);

setTimeout(() => {
    refLink2.current.style.color = 'black'
    refLink1.current.style.color = ''
  }, 2500);

setTimeout(() => {
    refLink3.current.style.color = 'black'
    refLink2.current.style.color = ''
  }, 5000);
setTimeout(() => {
    refLink3.current.style.color = ''

  }, 7500);

  
}, 17500); 
return () => clearInterval(interval);
}, [])
  const [showGalery, setShowGalery] = useState(false)
  const [hebergement, setHebergement] = useState('')

  const renderSwitch = () => { 
    switch(hebergement) {
      case 'villa':
        return <ReservationCompo  />
      case 'chambre':
        return <ReservationChambreCompo />
      case 'suite':
        return <ReservationSuiteCompo  />
      default:
        return <br />;
    }
  }



  return (
      <div className="hebergement">
<div className="paddingTopMobile"></div>
<h1>Suites et chambres</h1>
<div className="hebergementContent">
  <div className="leftGrid">
  <p >Betikure dispose de 6 mini villas et d'une suite étudiée pour faciliter l'accès aux personnes à mobilité réduite.</p>
  <p>Chaque mini villa permet de réserver une chambre de 35 mètres carrés, accueillant deux personnes, (trois avec un lit d'appoint), ou une suite de 65 mètres carrés, avec cuisine, salon et bureau, accueillant jusqu'à quatre personnes (six avec deux lits d'appoint).</p>
 <p> Chambres et suites, lorsqu'elles sont louées ensemble, communiquent par une terrasse et constituent une mini villa confortable pouvant accueillir six personnes (jusqu'à neuf avec lits d'appoint).</p>

<div className="imageLeftHebergement"></div>
</div>

<div className="middleGrid">
<div className="imageCenterHebergement"></div>
<p>Chaque suite s'ouvre sur des terrasses et offre le privilège d'un jacuzzi privé.Les suites disposent d'une cuisine avec micro-ondes / Grill, plaques vitrocéramique, réfrigérateur / congélateur et vaisselle complète. </p>

</div>

<div className="rightGrid">
<p>Tous les lits sont  "grand confort" et proposés en lit double (180cm) ou lits simples (90cm). Les lits d'appoints, confortables, sont eux aussi d'une largeur de 90cm.

Chambres et suites sont climatisées et bénéficient des équipements suivants : bouilloire électrique, TV LCD avec chaînes satellite, Internet sans fil gratuit, bureau, terrasse avec table et fauteuils, salle de bain avec douche italienne, sèche cheveux et coffre de sécurité.
 </p>
 <div className="imageRightHebergement"></div>
</div>
<div className="bottomGrid">
<p>"Bois noir" est une suite unique destinée à 2 personnes elle propose  un salon avec cuisine et une grande chambre ouvrant sur le parc et sur une terrasse avec jacuzzi. Sans être "médicalisée" cette suite est adaptée aux personnes à mobilité réduite (proximité piste, plein pied, dégagements importants, cuisine adaptée, douche 4 m² ).</p>

<p> Bétikuré présentant des dénivellés, nous conseillons aux personnes ayant des difficultés de déplacement de nous en informer afin de pouvoir leur proposer les hébergements les plus adaptés.</p>
</div>
<div className="carouselGrid"><SlideSlicker /></div>
<div className="AnchorToHebergement"> 
            <h3>Plus d'informations  ?</h3>
        
                < a ref={refLink1} className='linkOngletHebergementInfo' onClick={() => setHebergement('villa')} href={"#Villa"}>Villa</a>    
                <a ref={refLink2} className='linkOngletHebergementInfo'  onClick={() => setHebergement('suite')}  href={"#Suite"}>Suite</a>    
                <a ref={refLink3} className='linkOngletHebergementInfo' onClick={() => setHebergement('chambre')} href={"#Chambre"}>Chambre</a>    

</div>






</div>

<div className="bottomTypehHebergement">
  
{hebergement === "villa" ? 
<div className="divOngletHebergement left">
<i className="fa-solid fa-arrow-left"></i>
< a  className="linkOngletHebergement" onClick={() => setHebergement('suite')} href={"#Suite"}> <i className="fa-solid fa-house"></i> Suite</a> 
</div>
 : null }
{hebergement === "chambre" ? 
<div className="divOngletHebergement left">
<i className="fa-solid fa-arrow-left"></i>
< a  className="linkOngletHebergement" onClick={() => setHebergement('villa')} href={"#Villa"}><i className="fa-solid fa-house"></i> Villa</a> 
</div>
 : null }
{hebergement === "suite" ? 
<div className="divOngletHebergement left">
<i className="fa-solid fa-arrow-left"></i>
< a  className="linkOngletHebergement" onClick={() => setHebergement('chambre')} href={"#Chambre"}><i className="fa-solid fa-house"></i> Chambre</a> 
</div>
 : null }
 <div className="renderSwitch">
{renderSwitch()}
</div>
{hebergement === "villa" ? 
<div className="divOngletHebergement right">

< a className="linkOngletHebergement" onClick={() => setHebergement('chambre')} href={"#Chambre"}> <i className="fa-solid fa-house"></i> Chambre   </a> 
<i className="fa-solid fa-arrow-right"></i>
</div>
 : null }
 
{hebergement === "chambre" ? 
<div className="divOngletHebergement right">
< a className="linkOngletHebergement" onClick={() => setHebergement('suite')} href={"#Suite"}><i className="fa-solid fa-house"></i> Suite </a> 
<i className="fa-solid fa-arrow-right"></i>
</div>
 : null }
{hebergement === "suite" ? 
<div className="divOngletHebergement right">
< a className="linkOngletHebergement" onClick={() => setHebergement('villa')} href={"#Villa"}><i className="fa-solid fa-house"></i> Villa </a> 
<i className="fa-solid fa-arrow-right"></i>
</div>
 : null }
</div>

{/* <Footer /> */}

      </div>
  )
}

export default Hebergement