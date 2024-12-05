import React from "react";
import { CategoryList } from "@/features/category/components/CategoryList";
import { Layout } from "@/widgets/Layout";
import { MenuComponent } from "@/widgets/MenuComponent";
import { CustomBreadcrumb } from "@/widgets/Breadcrumb/CustomBreadcrumb";
import { CategoryContainer } from "@/features/category/components/CategoryContainer";
import { HotAuctionList } from "@/features/auction/ui/HotAuction/HotAuctionList";
import { CategoryAuction } from "@/features/category/components/CategoryAuction";
import { DetailSearch } from "../widgets/DetailSearch/DetailSearch";

export const CategoryPage: React.FC = () => {
  return (
    <Layout>
      <MenuComponent />
      <div className="container mx-auto px-4 py-6">
        <CustomBreadcrumb />
        <CategoryAuction />
        <CategoryContainer />
        <DetailSearch />
        <HotAuctionList />
        <CategoryList />
      </div>
    </Layout>
  );
};
