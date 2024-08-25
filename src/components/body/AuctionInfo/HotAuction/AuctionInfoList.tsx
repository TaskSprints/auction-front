import React from "react";
import HotAuctionCard from "./HotAuctionCard";
import datas from "./Carddata.json";
import Slider from "react-slick";
import CustomArrow from "./CustomArrow";
const AuctionInfoList = () => {
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div className="container m-auto p-12">
      <div className="title flex justify-start ">
        <h1 className="text-3xl ml-7">
          실시간<span> </span>
          <span className="text-red-500 font-extrabold bg-gradient-to-r from-red-400 via-red-300 to-red-600 bg-clip-text text-transparent ">
            HOT
          </span>
          한 경매 물건을 확인해보세요!
        </h1>
      </div>
      <div className="card_section max-w-[85rem] w-auto h-auto m-auto border border-1 border-gray ">
        <div className="w-auto h-auto">
          <Slider {...settings} className="flex mjustify-center">
            {datas.map((data) => (
              <HotAuctionCard key={data.poroductKey} data={data} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default AuctionInfoList;
