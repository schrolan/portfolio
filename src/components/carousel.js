import React, { useRef, useEffect } from "react";
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
  const slideRefs = useRef([]);
  const touchStartY = useRef(0);
  const isScrolling = useRef(false);

  const settings = {
    dots: true,
    infinite: false,
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
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;
      if (isScrolling.current || !sliderRef.current) return;

      const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
      const slideEl = slideRefs.current[currentSlide];
      if (!slideEl) return;

      const scrollTop = slideEl.scrollTop;
      const scrollHeight = slideEl.scrollHeight;
      const clientHeight = slideEl.clientHeight;

      if (deltaY > 30 && scrollTop + clientHeight >= scrollHeight) {
        sliderRef.current.slickNext();
        isScrolling.current = true;
      } else if (deltaY < -30 && scrollTop <= 0) {
        sliderRef.current.slickPrev();
        isScrolling.current = true;
      }

      setTimeout(() => (isScrolling.current = false), 800);
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [sliderRef]);

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="carousel-slide" ref={(el) => (slideRefs.current[i] = el)}>
            <div className="slide-content">{slide.component}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;