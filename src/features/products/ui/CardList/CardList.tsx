import React from "react";
import Slider from "react-slick";
import "./CardList.css";
import Card from "./Card";

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
                    right: "100px",
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
                    left: "70px",
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
export default CardList;
