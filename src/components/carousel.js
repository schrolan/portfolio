import React, { useEffect, useRef } from 'react';
import Slider from "react-slick";
import { useNavigate, useLocation } from 'react-router-dom';

import About from '../pages/aboutMe';
import Projects from '../pages/projects';
import Certificate from '../pages/certificate';
import Contact from '../pages/contact';

import '../index.css';

const slides = [
  { path: '/', component: <About /> },
  { path: '/projects', component: <Projects /> },
  { path: '/certificate', component: <Certificate /> },
  { path: '/contact', component: <Contact /> }
];

const Carousel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sliderRef = useRef(null);

  const currentIndex = slides.findIndex(slide => slide.path === location.pathname);

  const handleAfterChange = (index) => {
    const newPath = slides[index].path;
    if (newPath !== location.pathname) {
      navigate(newPath);
    }
  };

  useEffect(() => {
    if (sliderRef.current && currentIndex !== sliderRef.current.innerSlider.state.currentSlide) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [currentIndex]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: handleAfterChange,
    adaptiveHeight: false
  };

  return (
    <div className="carousel-container">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            {slide.component}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;