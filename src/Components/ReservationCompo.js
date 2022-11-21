import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel, { CarouselItem } from './Carousel';
import CarouselReservation from './CarouselReservation';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReservationCompo = () => {
const [openDetails, setOpenDetails ] = useState(false)






    return (
        <div className='reservationCompo'>
            <div className="reservationCompoContainer">

                  
                <div className="typeHebergement">
                    <h2 className='h2reservationCompo'>Villa</h2>

<CarouselReservation hebergement={'villa'}/>

                
                    <div className="descriptionTypeHebergement">
                     

                        <p>Chaque mini villa permet de réserver une chambre de 35 mètres carrés, accueillant deux personnes, (trois avec un lit d'appoint) </p>
                        <p>et une suite de 65 mètres carrés, avec cuisine, salon et bureau, accueillant jusqu'à quatre personnes (six avec deux lits d'appoint).</p>
                        <br />
                        <p><i class="fa-regular fa-square"></i>100  m²  </p>   
                        <p> <i class="fa-solid fa-person"></i>6 + 3 Personnes  </p>
                        <p><i className="fa-solid fa-bed"></i>3 Lits      </p>       
                        <span className='iconsContainer'>          <div className="iconsPng doubleBed"></div><p>3 Lits Double</p></span>     
                        <p><i class="fa-solid fa-tv"></i>Tv </p>       
                        <p><i class="fa-solid fa-kitchen-set"></i>Cuisine privative    </p>   
                        <p><i class="fa-solid fa-shower"></i>Salle de bains privative dans l'hébergement   </p>   
                        <p><i class="fa-solid fa-temperature-arrow-down"></i>Climatisation  </p>   
                        <p><i class="fa-solid fa-wifi"></i>Wifi  </p>   
                        <p><i class="fa-solid fa-hot-tub-person"></i>Jacuzzi  </p>   
                        <p><i class="fa-regular fa-mountain-sun"></i>Vue sur le jardin  </p>   
                        <p><i class="fa-solid fa-person-swimming"></i>Piscine partagée  </p>   
              <span className='iconsContainer'>          <div className="iconsPng"></div><p>Terasse</p></span>
                        
      
                        </div>
   <div className="detailsContainer">
      <button onClick={() => setOpenDetails(!openDetails)}>Voir {!openDetails ? 'plus ' : 'moins '}   de détails</button>     
      {openDetails ?
      <div className="moreDetailsFurnitures" >  
      <>
<ul>
    <li> <i id='checkIcon' class="fa-solid fa-check" ></i>Bain à remous</li>

    <li> <i id='checkIcon' class="fa-solid fa-check" ></i>Cuisine</li>
    <li><i id='checkIcon'  class="fa-solid fa-check"></i>Coffre-fort </li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Toilettes</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Canapé </li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Baignoire ou douche</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Serviettes</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Linge de maison</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Prise près du lit</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Produits ménagers </li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Bureau</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Coin salon</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Entrée privée</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Réfrigérateur</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Moustiquaire</li>
    </ul>
    <ul>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Téléphone</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Chaînes satellite</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Plateau / bouilloire     </li>
     <li><i id='checkIcon' class="fa-solid fa-check"></i>Chambre(s) communicante(s)</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Micro-ondes</li>
     <li><i id='checkIcon' class="fa-solid fa-check"></i>Chauffage</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Sèche-cheveux</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Ustensiles de cuisine</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Ventilateur</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Mobilier d’extérieur</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Espace repas extérieur</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Coffre-fort</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Four</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Grille-pain</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Table à manger</li>
  
        
        
        
        


    </ul>
    </>
    </div>  
: null } 
    </div>

    <div className="tarifsReservation">
        {/* <h3>Tarifs</h3> */}
        {/* <table >
<tbody>
<tr>
<td>1 Nuit</td>
<td>2 Nuits</td>
<td>3 Nuits et +</td>
</tr>
<tr>
<td>37 480  Cfp</td>
<td> 33 730    Cfp</td>
<td>31 850 Cfp</td>
</tr>

</tbody>


</table> */}


<div>


                {/* <iframe style={{borderStyle:"none", width:"100%", height:"3000px", background: 'white', cursor:'none'}} src={"https://manava.abricode.fr/rest/iframe_calend.php?code_ext=zYRota6aQe8ILZQ42"}></iframe>  */}

<iframe style={{borderStyle:"none", width:"100%" ,height:"750px", background:'rgba(0, 0, 0, 0.287)'}} src={"https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&nb_mois=6"}></iframe>
</div>
                {/* <iframe style={{borderStyle:"none", width:"100%",height:"750px", background:"#1f5156", padding:"3rem"}} src={"https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&chambres=lot2&nb_mois=6"}></iframe> */}

             
                {/* <iframe style={{borderStyle:"none", width:"100%", height:"500px", background:"#1f5156"}} src={"https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&chambres=lot2&nb_mois=2https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&chambres=lot2&nb_mois=6"}></iframe> */}
                </div>
            </div>
            </div>
            <div className="line"></div>
            
        </div>
    );
};

<style>
  
</style>

export default ReservationCompo;