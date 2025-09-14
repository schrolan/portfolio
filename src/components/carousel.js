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
  const touchStart = useRef(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: !isMobile,
    verticalSwiping: !isMobile,
    adaptiveHeight: false,
    swipe: true,
    afterChange: () => {
      isScrolling.current = false;
    },
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current || !sliderRef.current) return;
      if ((!isMobile && e.deltaY > 0) || (isMobile && e.deltaX > 0)) sliderRef.current.slickNext();
      else if ((!isMobile && e.deltaY < 0) || (isMobile && e.deltaX < 0)) sliderRef.current.slickPrev();
      isScrolling.current = true;
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [sliderRef, isMobile]);

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStart.current = isMobile ? e.touches[0].clientX : e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling.current || !sliderRef.current) return;
      const touchEnd = isMobile ? e.changedTouches[0].clientX : e.changedTouches[0].clientY;
      const delta = touchStart.current - touchEnd;
      if (delta > 50) sliderRef.current.slickNext();
      else if (delta < -50) sliderRef.current.slickPrev();
      isScrolling.current = true;
      setTimeout(() => (isScrolling.current = false), 800);
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [sliderRef, isMobile]);

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