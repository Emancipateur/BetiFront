import React, { useEffect } from "react";
import $ from "jquery";

const SlickSlider = () => {
  useEffect(() => {
    $(".imageCarouselKev").click(function () {
      $(".imageCarouselKev").removeClass("active");
      $(this).addClass("active");
    });
  }, []);
  return (
    <>
      <div className="carouselKev">
        <div className="slide">
        <div
          className="imageCarouselKev active "
          style={{
            backgroundImage: "url(./assets/images/room.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          className="imageCarouselKev  "
          style={{
            backgroundImage: "url(./assets/images/room2.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          className="imageCarouselKev "
          style={{
            backgroundImage: "url(./assets/images/room4.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="imageCarouselKev "
          style={{
            backgroundImage: "url(./assets/images/room3.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="imageCarouselKev "
          style={{
            backgroundImage: "url(./assets/images/2.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        </div>
      </div>
    </>
  );
};

export default SlickSlider;
