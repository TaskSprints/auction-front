import React, { useEffect, useState } from "react";
import { IProduct, IAuction } from "@/shared/types/product.types";
import { TimerStore } from "@/entities/timer/model/timerStore";
import { formatKRW } from "@/shared/lib/util/format";
import { Link } from "react-router-dom";

interface PropsData {
  auction: IAuction;
  product: IProduct;
  isMdSize: boolean;
}

export const CategoryBoardCard: React.FC<PropsData> = ({
  auction,
  product,
  isMdSize,
}) => {
  const [leftTime, setLeftTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { currentTime, getLeftTime } = TimerStore();
  const bidKrw = formatKRW(auction.startingBid);

  useEffect(() => {
    setLeftTime(getLeftTime(auction.endTime));
  }, [currentTime]);
  return isMdSize ? (
    // TODO: 백엔드 API 연동 후, Id를 통해 데이터를 가져오도록 수정해야 한다, Type도 맞춰줘야 한다.
    <Link
      to="/bidding"
      state={{
        product: {
          title: product.name,
          image: product.productImageList[0],
        },
      }}
      className="w-full h-[8rem] rounded-lg shadow-inner mt-1 flex"
    >
      <div className="img_section w-[9rem] h-[7.5rem] ">
        <img
          src={product.productImageList[0]}
          alt=""
          className="object-contain w-full h-full"
        />
      </div>
      <div className="contents_section p-3 w-[30rem] ml-[0.3rem]">
        <div className="title w-full truncate">
          <span className="text-lg">{product.name}</span>
        </div>
        <div className="content w-full truncate">
          <span className="text-gray-500 text-sm">{product.description}</span>
        </div>
        <div className="seller">
          <span>판매자 {auction.sellerNickName}</span>
        </div>
        <div className="badge_section" />
      </div>
      <div className="w-[13rem] h-full border-2 ml-auto mr-3 flex justify-center items-center">
        <div className=" mx-auto ">
          <div className="standard_price ">
            <span className="text-gray-400 text-xs">정상가 {bidKrw}원</span>
          </div>
          <div>
            <span>현재가 {bidKrw}원</span>
          </div>
          <div>
            <span className="text-xs text-red-500">입찰자 : 5명</span>
          </div>
          <div>
            <span className="bold">{`${leftTime.days}일 ${leftTime.hours}시 ${leftTime.minutes}분 ${leftTime.seconds}초`}</span>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <Link
      to="/bidding"
      state={{
        product: {
          title: product.name,
          image: product.productImageList[0],
        },
      }}
      className="w-screen h-[9rem] rounded-lg shadow-inner mt-1 flex items-center"
    >
      <div className="img_section w-1/3 h-[7.5rem] ">
        <img
          src={product.productImageList[0]}
          alt=""
          className=" object-contain w-full h-full"
        />
      </div>
      <div className="contents_section p-3 w-2/3 ml-[0.3rem]">
        <div className="title w-full truncate">
          <span className="text-lg">{product.name}</span>
        </div>
        <div className="content w-full truncate">
          <span className="text-gray-500 text-sm">{product.description}</span>
        </div>

        <div className="badge_section" />

        <div className=" mx-auto ">
          <div className="standard_price ">
            <span className="text-gray-400 text-xs">정상가 {bidKrw}원</span>
          </div>

          <div>
            <span>현재가 {bidKrw}원</span>
            <span className="text-xs text-red-500"> 입찰자 : 5명</span>
          </div>

          <div>
            <span className="bold text-sm">{`${leftTime.days}일 ${leftTime.hours}시 ${leftTime.minutes}분 ${leftTime.seconds}초`}</span>
          </div>
          <div className="seller">
            <span className="text-xs">판매자 {auction.sellerNickName}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
