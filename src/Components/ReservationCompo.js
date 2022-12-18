import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel, { CarouselItem } from './Carousel';
import CarouselReservation from './CarouselReservation';
import $ from 'jquery'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReservationCompo = ({setmodal, modal}) => {
const [ActiveIframe, setActiveIframe ] = useState(false)
// useEffect(() => {
//     $(".image").on('click',function(e){
//       if($(this).hasClass('active')){
        
//       }else{
       
//         $(".image").removeClass("active");
//         $(this).addClass("active")
//         $(".image").scrollTop(0);
//         // SetScrollOff(true)
//       }
//     })
  
//   }, [])

  const pageResa = document.getElementById('reservation')
  const pageResa2 = document.getElementById('reservationTop')
  const GotoResaPage = () => {
    $(".image").removeClass("active");
    $(pageResa).addClass("active")
    $(".image").scrollTop(0);
    $(pageResa).addClass("active")
    // $(pageResa).scrollTop(9000);
    pageResa2.scrollIntoView();


  }




    return (
        <div className='reservationCompo'>

         {modal &&
         <button className='buttonModal' onClick={() =>setmodal(false)}>X</button> 
         }
            <div className="reservationCompoContainer">
            <div className="paddingTopMobile"></div>    
            <div className="line"></div>
                  
                <div className="typeHebergement" id='Villa'>
                    <div className="titleHebergement">
                <div className="paddingTopMobile"></div>
                    <h2 className='h2reservationCompo'>Villa</h2>
          <div className="descriptionLogoHebergement">          <p><i className="fa-regular fa-square"></i>100  m²  </p>   
                        <p> <i className="fa-solid fa-person"></i>6 + 3 Personnes  </p>
                        <p><i className="fa-solid fa-bed"></i>3 Lits      </p>       
                        <span className='iconsContainer'>          <div className="iconsPng doubleBed"></div><p>3 Lits Double</p></span>     
                        <p><i className="fa-solid fa-kitchen-set"></i>Cuisine privative    </p>   
                        <p><i className="fa-solid fa-temperature-arrow-down"></i>Climatisation  </p>   
                        <p><i className="fa-solid fa-hot-tub-person"></i>Jacuzzi  </p>   
                        <p><i className="fa-solid fa-tv"></i>Tv </p>       
                        <p><i className="fa-solid fa-wifi"></i>Wifi  </p>   
              <span className='iconsContainer'>          <div className="iconsPng"></div><p>Terasse</p></span>
                        <p><i className="fa-regular fa-mountain-sun"></i>Vue sur le jardin  </p>   
                        <p><i className="fa-solid fa-person-swimming"></i>Piscine partagée  </p>   
                        {/* <p><i className="fa-solid fa-shower"></i>Salle de bains privative dans l'hébergement   </p>  */}</div>
            
                    </div>
                    

<CarouselReservation hebergement={'villa'}/>

                
                    <div className="descriptionTypeHebergement">
                     

                        <p>Chaque mini villa permet de réserver une chambre de 35 mètres carrés, accueillant deux personnes, (trois avec un lit d'appoint)
                       et une suite de 65 mètres carrés, avec cuisine, salon et bureau, accueillant jusqu'à quatre personnes (six avec deux lits d'appoint).</p>
                  
                
                        
      
              </div>
   <div className="detailsContainer">
{/*   
      <a className='moreDetailLink' onClick={() => setOpenDetails(!openDetails)}>Voir {!openDetails ? 'plus ' : 'moins '}   de détails</a>     
      {openDetails ? */}
      <div className="moreDetailsFurnitures" >  
      <>
  
<ul>
    <li> <i id='checkIcon' className="fa-solid fa-check" ></i>Bain à remous</li>

    <li> <i id='checkIcon' className="fa-solid fa-check" ></i>Cuisine</li>
    <li><i id='checkIcon'  className="fa-solid fa-check"></i>Coffre-fort </li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Toilettes</li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Canapé </li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Baignoire ou douche</li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Serviettes</li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Linge de maison</li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Prise près du lit</li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Produits ménagers </li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Bureau</li>
    </ul>
    <ul>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Coin salon</li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Entrée privée</li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Réfrigérateur</li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Moustiquaire</li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Téléphone</li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Chaînes satellite</li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Plateau / bouilloire     </li>
    <li><i id='checkIcon' className="fa-solid fa-check"></i>Micro-ondes</li>
     <li><i id='checkIcon' className="fa-solid fa-check"></i>Chauffage</li>
        <li><i id='checkIcon' className="fa-solid fa-check"></i>Sèche-cheveux</li>
    </ul>
    <ul>
        <li><i id='checkIcon' className="fa-solid fa-check"></i>Ustensiles de cuisine</li>
     {/* <li><i id='checkIcon' className="fa-solid fa-check"></i>Chambre(s) communicante(s)</li> */}
        <li><i id='checkIcon' className="fa-solid fa-check"></i>Ventilateur</li>
        <li><i id='checkIcon' className="fa-solid fa-check"></i>Mobilier d’extérieur</li>
        <li><i id='checkIcon' className="fa-solid fa-check"></i>Espace repas extérieur</li>
        <li><i id='checkIcon' className="fa-solid fa-check"></i>Coffre-fort</li>
        <li><i id='checkIcon' className="fa-solid fa-check"></i>Four</li>
        <li><i id='checkIcon' className="fa-solid fa-check"></i>Grille-pain</li>
        <li><i id='checkIcon' className="fa-solid fa-check"></i>Table à manger</li>

    </ul>
    </>
    </div>  
    {/* : null} */}
    {!modal ?
 <div  onClick={()=> GotoResaPage()} className="reserverCompo"><a href="#resaIframe"><button> Réservation & Disponibilité</button></a></div>

  : null }
 {/* <div  onClick={()=> setActiveIframe(!ActiveIframe)} className="reserverCompo"><a href="#resaIframe"><button> Réservation & Disponibilité</button></a></div> */}
    </div>

            </div>
            { ActiveIframe ? 
<div className="iframeDiv" id='resaIframe'>
            <div className="line"></div>
            <h4>Resérvation d'une Villa</h4>
            
<iframe style={{borderStyle:"none", width:"100%", height:"800px"}} src={"https://manava.abricode.fr/rest/iframe_resa_grp.php?code_ext=zYRota6aQe8ILZQ42&secure_key=f17a2c13249da1451ded715293e3ed89&chambres=lot1&nb_mois=5"}></iframe>
            </div> : null}
        </div>

        </div>
    );
};


export default ReservationCompo;