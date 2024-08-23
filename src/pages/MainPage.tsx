import React, { useEffect, useState } from "react";
import SearchBar from "../components/common/Searchbar/SearchBar";
import CardList from "../components/common/Card/CardList";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import MenuComponent from "../components/common/MenuComponent/MenuComponent";

const MainPage: React.FC = () => {
  return (
    <div className="items-center justify-center bg-gray-100 min-h-screen">
      <div className="hidden sm:block">
        <Header />
        <SearchBar />
      </div>
      <MenuComponent />
      <CardList />
      <Footer />
    </div>
  );
};

export default MainPage;
