import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

// import "./Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!paused) {
  //       updateIndex(activeIndex + 1);
  //     }
  //   }, 3000);

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });



  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        {/* <button 
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button> */}
        {React.Children.map(children, (child, index) => {
          return (
            <button
            // style={{background : children[index].props.children.props.children[1].props.style.backgroundImage,    backgroundSize: "cover",
            // backgroundRepeat :"no-repeat"}}
            className={`${index === activeIndex ? "active" : "" }`}
            onClick={() => {
              updateIndex(index);
    
              }}
            >
        
              {children[index].props.children.props.children[0].props.children}
              {/* {console.log(children[index].props.children.props.children[0].props.children)} */}
          
            
            </button>
          );
        })}
        {/* <button 
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        
        </button> */}
      </div>
  <div className="next"
    onClick={() => {
      updateIndex(activeIndex + 1);
    }}>
      <div className="MoreActivities">
    <p>Plus d'activités</p>
      <button 
         style={{
          backgroundImage:
            "url(./assets/images/arrow-right.png",    backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat :"no-repeat"}}
        
        >
       
        
        </button>
        </div>
        </div>
    </div>
  );
};

export default Carousel;
