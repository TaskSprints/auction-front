import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { TimerStore } from "@/entities/timer/model/timerStore";
import { useProductByAuctionQuery } from "@/features/category/model/useProductByAuctionQuery";
import { HotAuctionCard } from "./HotAuctionCard";
import { HotAuctionArrow } from "./HotAuctionArrow";
import { useAuctionQuery } from "../../../category/model/useAuctionQuery";

export const HotAuctionList: React.FC = () => {
  const [isMdSize, setisMdSize] = useState(false);
  const { productIsLoading, product } = useProductByAuctionQuery("1");
  const { auctionIsLoading, auction } = useAuctionQuery();

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

  const getProductByAuctionId = (auctionId: number) => {
    return product?.find((id) => auctionId === id.auctionId);
  };
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
        {!productIsLoading &&
          !auctionIsLoading &&
          (isMdSize ? (
            <Slider {...settings} className="flex justify-center h-auto ">
              {auction?.map((data) => {
                const product = getProductByAuctionId(data.id);
                return product ? (
                  <HotAuctionCard
                    key={data.id}
                    auction={data}
                    product={product}
                  />
                ) : null;
              })}
            </Slider>
          ) : (
            <div className="flex mx-[0.25rem] overflow-x-auto whitespace-nowrap">
              {auction?.map((data) => {
                const product = getProductByAuctionId(data.id);
                return product ? (
                  <HotAuctionCard
                    key={data.id}
                    auction={data}
                    product={product}
                  />
                ) : null;
              })}
            </div>
          ))}
      </div>
    </div>
  );
};
