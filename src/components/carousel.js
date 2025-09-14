import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";

import About from "../pages/aboutMe";
import Projects from "../pages/projects";
import Certificate from "../pages/certificate";
import Skills from "../pages/skills";
import Contact from "../pages/contact";

import "../index.css";

const slides = [
  { component: <About /> },
  { component: <Projects /> },
  { component: <Certificate /> },
  { component: <Skills /> },
  { component: <Contact /> },
];

const Carousel = ({ sliderRef }) => {
  const isScrolling = useRef(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: !isMobile,
    verticalSwiping: !isMobile,
    swipe: true,
    adaptiveHeight: isMobile,
    afterChange: () => (isScrolling.current = false),
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleWheel = (e) => {
        if (isScrolling.current || !sliderRef.current) return;
        if (e.deltaY > 0) sliderRef.current.slickNext();
        else if (e.deltaY < 0) sliderRef.current.slickPrev();
        isScrolling.current = true;
      };
      window.addEventListener("wheel", handleWheel, { passive: true });
      return () => window.removeEventListener("wheel", handleWheel);
    }
  }, [sliderRef, isMobile]);

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-slide ${isMobile ? "mobile-slide" : ""}`}
          >
            <div className="slide-content">{slide.component}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;