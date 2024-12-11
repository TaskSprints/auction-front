import React from "react";
import { CategoryList } from "@/features/category/ui/CategoryList";
import { Layout } from "@/widgets/Layout";
import { MenuComponent } from "@/widgets/MenuComponent";
import { PlusAuction } from "features/auction/ui/PlusAuction";
import { AdBanner } from "widgets/Banner";
import { CustomBreadcrumb } from "@/widgets/Breadcrumb/CustomBreadcrumb";
import { CategoryContainer } from "@/features/category/ui/CategoryContainer";
import { DetailSearch } from "../widgets/DetailSearch/DetailSearch";

export const CategoryPage: React.FC = () => {
  return (
    <Layout>
      <MenuComponent />
      <div className="container mx-auto px-16 py-6">
        <CustomBreadcrumb />
        <CategoryContainer />
        <DetailSearch />
        <PlusAuction />
        <AdBanner />
        <CategoryList />
      </div>
    </Layout>
  );
};
