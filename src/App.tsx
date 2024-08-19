import React from "react";
import "./App.css";
import MenuComponent from "./common/MenuComponent/MenuComponent";
import Footer from "./common/Footer";

const App: React.FC = () => {
  return (
    <>
      <MenuComponent></MenuComponent>
      <Footer></Footer>
    </>
  );
};
export default App;
