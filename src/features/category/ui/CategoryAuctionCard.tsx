import React, { useState, useEffect } from "react";
import { IProduct, IAuction } from "@/shared/types/product.types";
import { TimerStore } from "@/entities/timer/model/timerStore";
import { formatKRW } from "@/shared/lib/util/format";

interface CategoryAuctionCardProps {
  auction: IAuction;
  product: IProduct;
}

export const CategoryAuctionCard: React.FC<CategoryAuctionCardProps> = ({
  auction,
  product,
}) => {
  const [leftTime, setLeftTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { getLeftTime, currentTime } = TimerStore();

  useEffect(() => {
    setLeftTime(getLeftTime(auction.endTime));
  }, [currentTime]);

  const krw = formatKRW(auction.startingBid);
  return (
    <div className=" w-[140px] md:w-[182px] h-[230px]  md:h-[290px] ml-2 hover:cursor-pointer hover:underline">
      <div className="img_section aspect-square ">
        <img
          alt="fsdfsd"
          src={product.productImageList[0]}
          className="aspect-square w-[140px] md:w-[182px] "
        />
      </div>
      <div className="left_time">
        <span className="text-xs">
          {" "}
          {`${leftTime.days}일 ${leftTime.hours}시 ${leftTime.minutes}분 ${leftTime.seconds}초 `}{" "}
        </span>
      </div>
      <div className="left_time mt-[0.2rem]">
        <span className="text-md"> {product.name}</span>
      </div>
      <div className="left_time mt-[0.2rem]">
        <span className="text-lg">{krw}원</span>
      </div>
    </div>
  );
};
