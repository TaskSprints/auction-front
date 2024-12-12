import React from "react";
import Slider from "react-slick";
import styles from "./FadeImageSlider.module.css";

interface ImageSliderProps {
  children: React.ReactNode;
}

const AppendDots = (dots: any) => (
  <div className={styles.fadeSliderDots}>
    <ul className={styles.fadeSliderDotsList}>{dots}</ul>
  </div>
);

export const FadeImageSlider = ({ children }: ImageSliderProps) => {
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: AppendDots,
    className: styles.fadeSliderInit,
    dotsClass: `slick-dots ${styles.fadeSliderDots}`,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`relative ${styles.fadeSliderContainer}`}>
      <Slider {...settings} className="pointer-events-none">
        {children}
      </Slider>
    </div>
  );
};
