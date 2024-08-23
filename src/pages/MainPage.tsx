import React from "react";
import SearchBar from "../components/common/Searchbar/SearchBar";
import CardList from "../components/body/CardList";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import MenuComponent from "../components/common/MenuComponent/MenuComponent";
const MainPage: React.FC = () => {
  return (
    <div className="items-center justify-center bg-gray-100 min-h-screen">
      <Header />
      <SearchBar />
      <MenuComponent />
      <CardList />
      <Footer />
    </div>
  );
};

export default MainPage;
