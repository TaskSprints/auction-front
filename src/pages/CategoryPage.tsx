import React from "react";
import { CategoryList } from "@/features/auction/ui/category/CategoryList";
import { Header } from "@/widgets/Header/Header";
import { SearchBar } from "@/widgets/Searchbar/SearchBar";

export const CategoryPage: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <CategoryList />
    </>
  );
};
