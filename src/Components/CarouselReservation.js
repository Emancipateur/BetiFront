import React from "react";
import { Carousel } from "react-responsive-carousel";

const CarouselReservation = ({ hebergement }) => {


if(hebergement === "villa"){
  return (
    <Carousel
   
      showStatus={false}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={80}
      infiniteLoop={true}
      showIndicators={false}
      dynamicHeight={true}
 
      showThumbs={true}
    
    >
      <div>
        <img alt="" src={process.env.PUBLIC_URL + "/assets/images/2.jpg"} />
      </div>
      <div>
        <img alt="" src={process.env.PUBLIC_URL + "/assets/images/suite.jpg"} />
      </div>
      <div>
        <img alt="" src={process.env.PUBLIC_URL + "/assets/images/3.jpg"} />
      </div>
      <div>
        <img alt="" src={process.env.PUBLIC_URL + "/assets/images/room.jpg"} />
      </div>
      <div>
        <img alt="" src={process.env.PUBLIC_URL + "/assets/images/room3.jpg"} />
      </div>
      <div>
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/assets/images/cuisine.jpg"}
        />
      </div>
    </Carousel>
  );
}else if(hebergement === "chambre"){
    return(
    <Carousel
    showStatus={false}
    preventMovementUntilSwipeScrollTolerance={true}
    swipeScrollTolerance={80}
    infiniteLoop={true}
    showIndicators={false}
    dynamicHeight={true}
  >
    <div>
      <img alt="" src={process.env.PUBLIC_URL + "/assets/images/room.jpg"} />
    </div>
    
    <div>
      <img alt="" src={process.env.PUBLIC_URL + "/assets/images/terrasseRoom.jpg"} />*
    </div>
  

  </Carousel>
    )
}else if(hebergement === "suite"){
  return(
  <Carousel
  showStatus={false}
  preventMovementUntilSwipeScrollTolerance={true}
  swipeScrollTolerance={80}
  infiniteLoop={true}
  showIndicators={false}
  dynamicHeight={true}
>
  <div>
    <img alt="" src={process.env.PUBLIC_URL + "/assets/images/room3.jpg"} />
  </div>
  <div>
        <img alt="" src={process.env.PUBLIC_URL + "/assets/images/suite.jpg"} />
      </div>
      <div>
        <img alt="" src={process.env.PUBLIC_URL + "/assets/images/3.jpg"} />
      </div>
  <div>
    <img alt="" src={process.env.PUBLIC_URL + "/assets/images/terrasseRoom.jpg"} />
  </div>


</Carousel>
  )
};}

export default CarouselReservation;
