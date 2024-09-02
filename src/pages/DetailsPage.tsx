import React, { useEffect, useState } from "react";
import SearchBar from "../components/common/Searchbar/SearchBar";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import MenuComponent from "../components/common/MenuComponent/MenuComponent";
import AuctionInfo from "../components/body/AuctionInfo";
import DetailSearch from "../components/common/DetailSearch/DetailSearch";

const DetailsPage: React.FC = () => {
  return (
    <div className="items-center justify-center bg-gray-100 min-h-screen">
      <div className="hidden sm:block">
        <Header />
        <SearchBar />
      </div>
      <MenuComponent />
      <div className="p-4">
        <DetailSearch />
        <AuctionInfo />
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
