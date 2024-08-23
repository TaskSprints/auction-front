import React from "react";
import "./App.css";
// import Footer from "./common/Footer";
import Header from "./common/Header";
import SearchBar from "./common/SearchBar";
import CardList from "./body/CardList/CardList";
const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Header />
      <SearchBar />
      <CardList />
      {/* <Footer /> */}
    </div>
  );
};
export default App;
