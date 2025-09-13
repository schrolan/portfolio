import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate, useLocation } from "react-router-dom";

import About from "../pages/aboutMe";
import Projects from "../pages/projects";
import Certificate from "../pages/certificate";
import Skills from "../pages/skills";
import Contact from "../pages/contact";

import "../index.css";

const slides = [
  { path: "/", component: <About /> },
  { path: "/projects", component: <Projects /> },
  { path: "/certificate", component: <Certificate /> },
  { path: "/skills", component: <Skills /> },
  { path: "/contact", component: <Contact /> }
];

const Carousel = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    afterChange: (current) => {
      const newPath = slides[current].path;
      if (newPath !== location.pathname) {
        navigate(newPath);
      }
    }
  };

  useEffect(() => {
    const currentIndex = slides.findIndex(
      (slide) => slide.path === location.pathname
    );
    if (currentIndex !== -1 && sliderRef.current) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [location.pathname]);

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
