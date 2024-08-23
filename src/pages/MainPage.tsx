import React from "react";
import SearchBar from "../components/common/Searchbar/SearchBar";
import CardList from "../components/body/CardList";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <Header />
      <div className="mt-[2.5rem]">
        <SearchBar />
        <CardList />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
