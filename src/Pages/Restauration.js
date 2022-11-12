import React from 'react'
import Navigation from '../Components/Navigation'
import NavBar from '../Components/Navigation2'

function Restauration() {
  return (
  <div className="restauration">
    <NavBar />
    <div className="restaurationContent">
      <h1>Restauration</h1>
      <div className="restaurationDivider">
<div className="restaurationLeft">
{/* <div className="imageOneRestauration"></div> */}




</div>
<div className="restaurationRight">
  <article>
    <p>La restauration, réservée aux hôtes du Lodge fonctionne selon les principes suivants : </p>

 
<ul><li> - <b>le petit déjeuner </b>continental met en avant les produits locaux (salades de fruits, fruits frais, confitures maison, jus de fruits, etc.)</li>

<li>
- Le lodge propose au <b>déjeuner</b> une restauration simplifiée (salades, tartes salées, paninis, etc.)
</li>

<li>- <b>Le diner</b> est servi sous forme de menu unique entrée, plat dessert. La cuisine marie les différents influences calédoniennes et propose des plats allant du typiquement « frenchies » aux préparations traditionnelles locales en passant par les tajines nord africaines.  </li>

</ul>

<p><b>Un bar</b>  est également à disposition de la clientèle.</p>

 
<p>
Cette approche « table d’hôtes » permet de concilier l’utilisation de produits frais avec une cuisine soignée mais généreuse et le maintien de prix raisonnables. Elle participe à la convivialité du lieu dont le nom « bétikuré » est tiré d’une langue locale et signifie « partager marmite ».</p>
<div className="imageTwoRestauration"></div>
  </article>

</div>


      </div>
    </div>
  </div>
  )
}

export default Restauration