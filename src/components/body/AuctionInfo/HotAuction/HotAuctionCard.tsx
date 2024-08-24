import React, { useState } from "react";
import { Card, List } from "antd";

interface TmpCardProps {
  data: {
    title: string;
    leftTime: string;
    Image: string;
    poroductKey: string;
  };
}
const HotAuctionCard: React.FC<TmpCardProps> = ({ data }) => {
  const [time, setTime] = useState("2일 10분");
  return (
    <div className="w-[14rem]  overflow-hidden mx-auto mt-5 flex justify-center shadow-lg">
      <Card
        hoverable
        title={<span className="text">{data.leftTime}</span>}
        bordered={true}
        style={{ width: 300 }}
        extra={<span className="text-red-500"></span>}
        cover={<img alt="" src={data.Image} className="w-[3rem] bg-black" />}
        className=" bg-gray-100 hover:scale-105 hover:underline hover:shadow-2xl"
      >
        <span className="text-xl bold">{data.title}</span>
      </Card>
    </div>
  );
};

export default HotAuctionCard;
