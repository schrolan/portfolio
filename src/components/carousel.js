import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import About from "../pages/aboutMe";
import Projects from "../pages/projects";
import Certificate from "../pages/certificate";
import Skills from "../pages/skills";
import Contact from "../pages/contact";

const slides = [
  { component: <About /> },
  { component: <Projects /> },
  { component: <Certificate /> },
  { component: <Skills /> },
  { component: <Contact /> }
];

const Carousel = ({ sliderRef }) => {
  const isScrolling = useRef(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: false,
    afterChange: () => {
      isScrolling.current = false;
    },
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current || !sliderRef.current) return;
      if (e.deltaY > 0) sliderRef.current.slickNext();
      else if (e.deltaY < 0) sliderRef.current.slickPrev();
      isScrolling.current = true;
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [sliderRef]);

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="carousel-slide">
            <div className="slide-content">{slide.component}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;