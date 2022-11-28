import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel, { CarouselItem } from './Carousel';
import CarouselReservation from './CarouselReservation';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReservationChambreCompo = () => {
const [openDetails, setOpenDetails ] = useState(false)




    return (
        <div className='reservationCompo'>
            <div className="reservationCompoContainer">

                  
                <div className="typeHebergement" id='Chambre'>
                    <h2 className='h2reservationCompo'>Chambre</h2>

<CarouselReservation hebergement={'chambre'} />

      
                    <div className="descriptionTypeHebergement">
                     
<p>Cette élégante chambre climatisée dispose d'une terrasse offrant une jolie vue sur le jardin. Elle comprend une salle de bains privative</p>
                        <br />
                        <p><i class="fa-regular fa-square"></i>35  m²  </p>   
                        <p> <i class="fa-solid fa-person"></i>2 + 1 Personnes  </p>
                        <p><i className="fa-solid fa-bed"></i>1 Lits      </p>       
                        <span className='iconsContainer'>          <div className="iconsPng doubleBed"></div><p>2 Lits Double</p></span>     
                   
                        <p><i class="fa-solid fa-shower"></i>Salle de bains privative dans l'hébergement   </p>   
                        <p><i class="fa-solid fa-temperature-arrow-down"></i>Climatisation  </p>   
                        <p><i class="fa-solid fa-tv"></i>Tv </p>       
                        <p><i class="fa-solid fa-wifi"></i>Wifi  </p>   
 
              <span className='iconsContainer'>          <div className="iconsPng"></div><p>Terasse</p></span>
                        <p><i class="fa-regular fa-mountain-sun"></i>Vue sur le jardin  </p>   
                        <p><i class="fa-solid fa-person-swimming"></i>Piscine partagée  </p>   
                        
      
                        </div>
   <div className="detailsContainer">
      <button onClick={() => setOpenDetails(!openDetails)}>Voir {!openDetails ? 'plus ' : 'moins '}   de détails</button>     
      {openDetails ?
      <div className="moreDetailsFurnitures" >  
      <>
<ul>

    <li><i id='checkIcon' class="fa-solid fa-check"></i>Entrée privée</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Baignoire ou douche</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Toilettes</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Canapé-lit </li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Serviettes</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Linge de maison</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Prise près du lit</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Produits ménagers </li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Bureau</li>
    <li><i id='checkIcon'  class="fa-solid fa-check"></i>Coffre-fort </li>

    <li><i id='checkIcon' class="fa-solid fa-check"></i>Moustiquaire</li>
    </ul>
    <ul>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Téléphone</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i>Chaînes satellite</li>
    <li><i id='checkIcon' class="fa-solid fa-check"></i> bouilloire électrique    </li>
     <li><i id='checkIcon' class="fa-solid fa-check"></i>Chambre(s) communicante(s)</li>
     <li><i id='checkIcon' class="fa-solid fa-check"></i>Chauffage</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Sèche-cheveux</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Ventilateur</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Mobilier d’extérieur</li>
  
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Coffre-fort</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Four</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Grille-pain</li>
        <li><i id='checkIcon' class="fa-solid fa-check"></i>Table à manger</li>
  
        
        
        
        


    </ul>
    </>
    </div>  
: null } 
    </div>


                </div>
            </div>
            <div className="line"></div>
            
        </div>
    );
};

export default ReservationChambreCompo;