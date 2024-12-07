import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { TimerStore } from "@/entities/timer/model/timerStore";
import { useGetAllAuction, useGetAllProduct } from "features/category/model";
import { HotAuctionCard } from "./HotAuctionCard";
import { HotAuctionArrow } from "./HotAuctionArrow";

export const HotAuctionList: React.FC = () => {
  const [isMdSize, setisMdSize] = useState(false);
  const { auctionIsLoading, auction } = useGetAllAuction();
  const { productsIsLoading, products } = useGetAllProduct();

  const { startTimer, stopTimer } = TimerStore();

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setisMdSize(true);
      } else {
        setisMdSize(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow: <HotAuctionArrow direction="left" onClick={() => {}} />,
    nextArrow: <HotAuctionArrow direction="right" onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          swipte: true,
          centerPadding: "1",
          touchThreshold: 10,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          swipte: true,
          centerPadding: "1",
          touchThreshold: 10,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto my-[3rem]">
      <div className="title flex justify-start">
        <h1 className="text-3xl ml-0 hidden md:block">
          실시간<span> </span>
          <span className=" text-red-500 font-extrabold bg-gradient-to-r from-red-400 via-red-300 to-red-600 bg-clip-text text-transparent ">
            HOT
          </span>
          한 경매 물건을 확인해보세요!
        </h1>
        <h1 className="text-xl ml-5 block md:hidden">
          실시간
          <span className=" ml-2 text-4xl text-red-500 font-extrabold bg-gradient-to-r from-red-400 via-red-300 to-red-600 bg-clip-text text-transparent ">
            HOT!
          </span>
        </h1>
      </div>
      <div className="card_section max-w-[85rem] h-auto m-auto border border-1 border-gray ">
        <div className=" w-auto h-auto" />
        {!auctionIsLoading && !productsIsLoading && isMdSize ? (
          <Slider {...settings} className="flex justify-center h-auto ">
            {products.map(
              (product, index) =>
                auction &&
                auction[index] && (
                  <HotAuctionCard
                    key={auction[index].id}
                    auction={auction[index]}
                    product={product}
                  />
                ),
            )}
          </Slider>
        ) : (
          <div className="flex mx-[0.25rem] overflow-x-auto whitespace-nowrap">
            {products.map(
              (product, index) =>
                auction &&
                auction[index] && (
                  <HotAuctionCard
                    key={auction[index].id}
                    auction={auction[index]}
                    product={product}
                  />
                ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};
