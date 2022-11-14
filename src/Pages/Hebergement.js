import React from 'react'
import Navigation from '../Components/Navigation2'
import Footer from '../Components/Footer'

function Hebergement() {
  return (
      <div className="hebergement">
<Navigation />
<div className="herbergementContent">

<h1>Suites et chambres</h1>


<div className="wrapperImage">
<p>Betikure dispose de 6 mini villas et d'une suite étudiée pour faciliter l'accès aux personnes à mobilité réduite.</p>
<div className="imageOneHebergement"></div>
</div>

 

<div className="wrapperImage">
<p>Chaque mini villa permet de réserver une chambre de 35 mètres carrés, accueillant deux personnes, (trois avec un lit d'appoint) </p>
<div className="imageTwoHebergement"></div>
</div>
 
<div className="wrapperImage">
<p>ou une suite de 65 mètres carrés, avec cuisine, salon et bureau, accueillant jusqu'à quatre personnes (six avec deux lits d'appoint).</p>
<div className="imageThreeHebergement"></div>
{/* </div> */}
<div className="line">  </div>
{/* <div className="wrapperImage"> */}
<div className="imageForHebergement"></div>
</div>




<div className="wrapperImage">
<p>
Chambres et suites, lorsqu'elles sont louées ensemble, communiquent par une terrasse et constituent une mini villa confortable pouvant accueillir six personnes (jusqu'à neuf avec lits d'appoint).
Chaque suite s'ouvre sur des terrasses et offre le privilège d'un jacuzzi privé. </p>
<div className="imageFiveHebergement"></div>
</div>

<div className="wrapperImage">
<p>Les suites disposent d'une cuisine avec micro-ondes / Grill, plaques vitrocéramique, réfrigérateur / congélateur et vaisselle complète.</p>
<div className="imageSixHebergement"></div>
</div>
 <div className="wrapperImage">
<p>Tous les lits sont  "grand confort" et proposés en lit double (180cm) ou lits simples (90cm). Les lits d'appoints, confortables, sont eux aussi d'une largeur de 90cm.

Chambres et suites sont climatisées et bénéficient des équipements suivants : bouilloire électrique, TV LCD avec chaînes satellite, Internet sans fil gratuit, bureau, terrasse avec table et fauteuils, salle de bain avec douche italienne, sèche cheveux et coffre de sécurité.

 </p>

 <div className="imageSevenHebergement"></div>

 </div> 
 <div className="wrapperImage">

<p>"Bois noir" est une suite unique destinée à 2 personnes elle propose  un salon avec cuisine et une grande chambre ouvrant sur le parc et sur une terrasse avec jacuzzi. Sans être "médicalisée" cette suite est adaptée aux personnes à mobilité réduite (proximité piste, plein pied, dégagements importants, cuisine adaptée, douche 4 m2 ). Bétikuré présentant des dénivellés, nous conseillons aux personnes ayant des difficultés de déplacement de nous en informer afin de pouvoir leur proposer les hébergements les plus adaptés</p>
</div>

<span className='no-smoking-span'>L'intérieur des hébergements est strictement "non fumeurs"<div className="no-smoking"></div></span>

</div>
<Footer />
      </div>
  )
}

export default Hebergement