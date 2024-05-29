import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import img1 from "../assets/images/lockers.jpg";
import img2 from "../assets/images/hydro.jpg";
import img3 from "../assets/images/stretch-zone.jpg";
import img4 from "../assets/images/trainning.jpg";
import img5 from "../assets/images/shower.jpg";
import img6 from "../assets/images/personal-trainer.jpg";
import img7 from "../assets/images/class-studios.jpg";
import img8 from "../assets/images/womans-only.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const glideRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(glideRef.current, {
      type: "carousel",
      startAt: 0,
      perView: 3,
      focusAt: "center",
      breakpoints: {
        768: {
          perView: 1,
        },
      },
    });

    glide.mount();

    return () => glide.destroy();
  }, []);

  return (
    <div ref={glideRef} className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {images.map((image, index) => (
            <li key={index} className="glide__slide">
              <div
                className="w-full h-80 relative flex items-center justify-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          Prev
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
