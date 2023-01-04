import React from 'react'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import NavBar from '../Components/Navigation2'

function Restauration() {
  return (
    <div className="restauration">
    <div className="paddingTopMobile"></div>

    <div  className="restaurationContent">
      <h1>Restauration</h1>
    

<div className="restaurationRight">
  <article>
<div className="imageSixRestaurationMobile"></div>
    <p>La restauration, réservée aux hôtes du Lodge fonctionne selon les principes suivants : </p>

<ul><li>  <b>Le petit déjeuner </b>continental met en avant les produits locaux (<span className="blueText">salades de fruits, fruits frais, confitures maison, jus de fruits</span>, etc.)</li>

<li>
 Le lodge propose au <b>déjeuner</b> une restauration simplifiée (<span className="blueText">salades, tartes salées, paninis</span>, etc.)
</li>

<li> <b>Le diner</b> est servi sous forme de <span className="blueText">menu unique entrée, plat dessert</span>. La cuisine marie les différents influences calédoniennes et propose des plats allant du typiquement « frenchies » aux préparations traditionnelles locales en passant par les tajines nord africaines.  </li>


<li><b>Un bar</b>  est également à disposition de la clientèle.</li>
</ul>

<p>
Cette approche « table d’hôtes » permet de concilier l’utilisation de produits frais avec une cuisine soignée mais généreuse et le maintien de prix raisonnables. Elle participe à la convivialité du lieu dont le nom « bétikuré » est tiré d’une langue locale et signifie « partager marmite ».</p>
<div className="restaurationDivider">
<div className="imageSixRestauration"></div>
<div className="imageThreeRestauration"></div>
<div className="imageOneRestauration"></div>
<div className="imageTwoRestauration"></div>
</div>
  </article>
  <br />

</div>


  <div className="tarifsRestauration">
    <div className="petitDejeuner">
    <h3>Petit déjeuner </h3>
Viennoiseries, pain frais,  salade fruits frais, confiture maison, café, thé, chocolat etc. jus de fruits.
    <p>(sur réservation la veille)  1 580 XPF</p>
  <p>Petits déjeuner enfants (- 6ans)   980 XPF</p>
    </div>
    <div className="dejeuner">

<h3>​Déjeuner en restauration simplifiée</h3>
(tartes salées, sucrées, salades...)
<p>Plat du jour    2 450 XPF</p>

<p>Entrée ou dessert     800 XPF</p>


</div>
<div className="diner">
<h3>Dîner tous les jours sur réservation </h3>

(Menu unique : entrée, plat, dessert, boissons en supplément)
<p>Entrée Plat dessert      4 150 XPF</p>




<p>
Entrée Plat ou Plat dessert   3 550 XPF</p>


<p>Menu enfant     1 680 XPF</p>

</div>

  </div>
    </div>
{/* <Footer /> */}

  </div>
  )
}

export default Restauration