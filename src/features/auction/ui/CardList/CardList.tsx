import React from "react";
import Slider from "react-slick";
import "./CardList.css";
import { Card } from "./Card";

interface NextArrowProps {
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CustomArrowRight: React.FC<NextArrowProps> = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className={`${style}`}
      style={{
        ...style,
        right: "100px",
        zIndex: 1,
      }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.(e as any);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Next"
    />
  );
};

const CustomArrowLeft: React.FC<NextArrowProps> = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className={`${style}`}
      style={{
        ...style,
        left: "70px",
        zIndex: 1,
      }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.(e as any);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Previous"
    />
  );
};

CustomArrowRight.defaultProps = {
  style: {},
  onClick: undefined,
};

CustomArrowLeft.defaultProps = {
  style: {},
  onClick: undefined,
};

const settings = {
  dosts: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 9,
  nextArrow: <CustomArrowRight />,
  prevArrow: <CustomArrowLeft />,
};

export const CardList: React.FC = () => {
  return (
    <div className="w-full">
      <Slider
        {...settings}
        className="container m-auto w-auto max-w-6xl flex justify-center p-4 mt-8"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  );
};
