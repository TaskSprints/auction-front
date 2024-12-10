import React, { useEffect, useState } from "react";
import { IProduct, IAuction } from "@/shared/types/product.types";
import { TimerStore } from "@/entities/timer/model/timerStore";
import { formatKRW } from "shared/lib/format";

const sampleImages = [
  "SampleImg/sample1.png",
  "SampleImg/sample2.png",
  "SampleImg/sample3.png",
  "SampleImg/sample4.png",
  "SampleImg/sample5.png",
];

interface HotAuctionprops {
  product: IProduct | undefined;
  auction: IAuction;
}

export const HotAuctionCard: React.FC<HotAuctionprops> = ({
  product,
  auction,
}) => {
  const krw = formatKRW(auction.startingBid);
  const [leftTime, setLeftTime] = useState({
    days: 10,
    hours: 8,
    minutes: 30,
    seconds: 20,
  });
  const [randomImage] = useState(
    () => sampleImages[Math.floor(Math.random() * sampleImages.length)],
  );
  const { getLeftTime, currentTime } = TimerStore();

  useEffect(() => {
    setLeftTime(getLeftTime(auction.endTime));
  }, [currentTime]);

  return (
    <div className="card max-w-[300px] min-w-[130px]  h-auto min-h-[230px] max-h-[500px]  mx-1 mb-3 hover:cursor-pointer hover:underline ">
      <div className="image w-auto h-auto aspect-square flex justify-center items-center overflow-hidden">
        {/* TODO: 백엔드에서 이미지 받아오기. 우선은 임시 이미지 사용 */}
        <img src={randomImage} alt="" className="aspect-square" />
      </div>
      <div className="my-1 time text-xs text-red-500">
        <span>
          ⏰{" "}
          {`${leftTime.days}일 ${leftTime.hours}시 ${leftTime.minutes}분 ${leftTime.seconds}초 `}
        </span>
      </div>
      <div className="title my-1">
        <span className=" line-clamp-2 text-ellipsis">{product?.name}</span>
      </div>
      <div className="price mb-1 text-xl">
        <span>{krw}원</span>
      </div>
    </div>
  );
};
