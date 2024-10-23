import React, { useEffect, useState } from "react";
import SearchBar from "../widgets/Searchbar/SearchBar";
import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";
import CardList from "../widgets/Card/CardList";
import MenuComponent from "../widgets/MenuComponent/MenuComponent";
import DetailSearch from "../widgets/DetailSearch/DetailSearch";
import HotAuctionList from "@/features/auction/ui/HotAuction/HotAuctionList";
import CategoryAuction from "@/features/auction/ui/CategoryAuction/CategoryAuction";
const DetailsPage: React.FC = () => {
  return (
    <div className="items-center justify-center bg-gray-100 min-h-screen">
      <div className="hidden sm:block">
        <Header />
        <SearchBar />
      </div>
      <MenuComponent />
      <div className="p-4">
        <CardList />
        <DetailSearch />
        <CategoryAuction />
        <HotAuctionList />
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
