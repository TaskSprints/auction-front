import React from "react";
import HotAuctionCard from "./HotAuctionCard";
import datas from "./Carddata.json";

const AuctionInfoList = () => {
  const data = Array.isArray(datas) ? datas : [];
  return (
    <div className="container m-auto p-12">
      <div className="title flex justify-center mb-6">
        <h1 className="text-5xl">Hot 경매 현황</h1>
      </div>
      <div className="card_section max-w-6xl w-auto h-auto m-auto border border-1 border-gray">
        <div className="flex flex-wrap justify-center">
          {data.map((data) => (
            <HotAuctionCard key={data.poroductKey} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AuctionInfoList;
