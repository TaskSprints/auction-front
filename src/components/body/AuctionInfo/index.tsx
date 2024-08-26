import React from "react";
import AuctionInfoList from "./HotAuction/AuctionInfoList";
const AuctionInfo = () => {
  return (
    <div className="flex flex-col justify-center mt-[2rem] ">
      <AuctionInfoList />
      <div className="h-[50rem]"></div>
    </div>
  );
};

export default AuctionInfo;
