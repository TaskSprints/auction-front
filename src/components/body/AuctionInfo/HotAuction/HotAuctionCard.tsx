import React, { useState } from "react";
import { Card, List } from "antd";
import CustomArrow from "./CustomArrow";

interface TmpCardProps {
  data: {
    title: string;
    leftTime: string;
    Image: string;
    poroductKey: string;
    price: number;
  };
}

const HotAuctionCard: React.FC<TmpCardProps> = ({ data }) => {
  const formatKRW = Intl.NumberFormat("ko-kr", {
    style: "decimal",
  }).format(data.price);
  return (
    <div className="card w-max-[180px] h-auto min-h-[230px] max-h-[300px] mx-2 hover:cursor-pointer hover:underline">
      <div className="image w-auto aspect-square">
        <img src={data.Image} alt="" className="aspect-square" />
      </div>
      <div className="my-1 time text-xs text-red-500">
        <span>⏰ {data.leftTime}</span>
      </div>
      <div className="title my-1">
        <span>{data.title}</span>
      </div>
      <div className="price mb-1 text-xl">
        <span>{formatKRW}원</span>
      </div>
    </div>
  );
};

export default HotAuctionCard;
