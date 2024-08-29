import React, { useEffect, useState } from "react";
import HotAuctionCard from "./HotAuctionCard";
import datas from "./Carddata.json";
import Slider from "react-slick";
import CustomArrow from "./CustomArrow";
const AuctionInfoList = () => {
  const [isMdSize, setisMdSize] = useState(false);
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
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
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
    <div className="container mx-auto">
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
        <div className=" w-auto h-auto">
          {isMdSize ? (
            <Slider {...settings} className="md:flex justify-center h-auto ">
              {datas.map((data) => (
                <HotAuctionCard key={data.poroductKey} data={data} />
              ))}
            </Slider>
          ) : (
            <div className="flex mx-[0.25rem] overflow-x-auto whitespace-nowrap">
              {datas.map((data) => (
                <HotAuctionCard key={data.poroductKey} data={data} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AuctionInfoList;
