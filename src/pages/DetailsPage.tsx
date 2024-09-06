import React, { useEffect, useState } from "react";
import SearchBar from "../widgets/Searchbar/SearchBar";
import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";
import MenuComponent from "../widgets/MenuComponent/MenuComponent";
import AuctionInfo from "../features/products/ui/AuctionInfo";
import DetailSearch from "../widgets/DetailSearch/DetailSearch";

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
