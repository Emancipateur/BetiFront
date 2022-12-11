import React from 'react';
import NavBar from '../Components/Navigation2';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow} from '@react-google-maps/api';
import Footer from '../Components/Footer';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat:  -21.562193,
  lng: 165.527985 

  
};


  function MyComponents() {

    
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDcyk88xP_KoEOBxQIkDHD25526cmYL9Hg",

      
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
     
      map.fitBounds(bounds);
      map.setOptions({draggable: false});

// Me Rend le bon zoom a l'affichage
      var listener = window.google.maps.event.addListener(map, "idle", function() { 
        if (map.getZoom() > 16) map.setZoom(10); 
        window.google.maps.event.removeListener(listener); 
      });

      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

    return isLoaded ? (
      <div className="mapGoogle">    <GoogleMap
     
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
        onUnmount={onUnmount}
      
        mapTypeId={"hybrid"}
        // mapTypeId={"plan"}
        >

          <Marker  position={{ lat:  -21.562193, lng: 165.527985   }}  clickable={true} />
        
          <></>
          
        </GoogleMap> </div>
    

    ) : <></>
  }



function Lodge() {
  return (

    <div className='lodge' >
{/* <NavBar/> */}
<div className="paddingTopMobile"></div>
<div className="logdeContent">
<div className="lodgeShadows">
    <h1 className='lodgeH1'>Le Lodge</h1>
    
<div className="imageOneLodge"></div>
    <h2>A propos de Betikure
</h2>
<p>Dans un parc de 20 hectares planté de centaines de palmiers et autres espèces, BETIKURE propose des prestations de qualité, la convivialité d'une table d'hôtes et toute l'attention d'une petite équipe dévouée à un nombre d'hôtes limité. 
<br/>  <br/>
Bétikuré est situé sur la commune de Bourail, idéalement placée sur la côte ouest à mi-chemin entre Nouméa et l'extrémité nord de la grande terre. Le lodge est situé à l'intérieur des terres à quelques kilomètres de la plage de la roche percée, spot de surf apprécié et de celle de Poé renommée en tant que spot de planche et de kite surf. Tout cela sur une partie de lagon classée au patrimoine mondial de l'Unesco.</p>

<div className="flexImages">
<div className="imageTwoLodge"></div>
<div className="imageThreeLodge"></div>
</div>

<h2>Où sommes nous ?</h2>


<div className="test">
<MyComponents />
</div>
<a href="https://goo.gl/maps/C5BvPwa2nWHT6gj69" rel="noreferrer" target="_blank">     <span className='BetikureAdress'>Lien Google Map</span> </a>

<div className="lodgeWhereTofindUs">
 <h4>Depuis NOUMEA ou le Sud :</h4>
  <p>

Sur la RT1, quelques kilomètres avant Bourail un panneau au niveau d’un carrefour marqué d’une Grande croix blanche sur votre droite vous indique la route de LA TARAUDIERE.  Cette route passe sur un petit pont et va vers l'hippodrome, lieu de la foire de Bourail.

Vous passez devant la Tennessee Farm. 

En arrivant sur l’hippodrome  continuez tout droit  en laissant à droite la route qui va vers l’entrée de l'hippodrome (panneau Bourail sur votre gauche).  Suivre la route sur 2 km jusqu'à une nouvelle bifurcation. Ne pas prendre la route qui tourne à gauche (retour vers Bourail), continuer tout droit. Vous rentrez dans la vallée COLOMINA.

</p>
<h4>De BOURAIL ou depuis le Nord :</h4>
<p>

Arrivés dans le village de Bourail, prendre à gauche la rue face à la mairie, direction LA TARAUDIERE. Après 300 m prendre à droite et suivre la route sur 4 km jusqu'à un carrefour de routes goudronnées (abri bus). Prendre à gauche. Vous rentrez dans la vallée COLOMINA.


 </p>
<h4>Une fois dans la vallée COLOMINA :</h4>
<p>

Après 300 m, un panneau "Bétikuré" à gauche vous indique l'entrée de la piste. Continuez tout droit jusqu’à rencontrer les lanternes de pierre du Betikuré Parc Lodge. Vous pouvez être amenés à ouvrir 2 barrières si du bétail a été mis à paître.  Pensez à les refermer derrière vous.

</p>
</div>

</div>
</div>

{/* <Footer /> */}
    </div>
  )
}

export default Lodge