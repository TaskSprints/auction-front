import React from "react";
import { CategoryList } from "@/features/auction/ui/category/CategoryList";
import { Header } from "@/widgets/Header/Header";

export const CategoryPage: React.FC = () => {
  return (
    <>
      <Header />
      <CategoryList />
    </>
  );
};
