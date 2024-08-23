import React from "react";
import Slider from "react-slick";
import "./CardList.css";
import Card from "../Card/Card";

const CardList: React.FC = () => {
  interface NextArrowProps {
    className?: any;
    style?: any;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }

  const CustomArrowRight: React.FC<NextArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{
          ...style,
          width: "50px", // 너비 조정
          height: "50px", // 높이 조정
          right: "10px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  };
  const CustomArrowLeft: React.FC<NextArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{
          ...style,
          width: "50px", // 너비 조정
          height: "50px", // 높이 조정
          left: "10px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
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

  return (
    <div className="w-full">
      <Slider
        {...settings}
        className="container mx-auto flex justify-center mt-8"
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
export default CardList;
