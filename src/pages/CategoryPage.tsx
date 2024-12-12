import React from "react";
import { CategoryList } from "@/features/category/ui/CategoryList";
import { Layout } from "@/widgets/Layout";
import { MenuComponent } from "@/widgets/MenuComponent";
import { PlusAuction } from "features/auction/ui/PlusAuction";
import { AdBanner } from "widgets/Banner";
import { CustomBreadcrumb } from "@/widgets/Breadcrumb/CustomBreadcrumb";
import { CategoryContainer } from "@/features/category/ui/CategoryContainer";
import { useLocation } from "react-router-dom";
import { DetailSearch } from "../widgets/DetailSearch/DetailSearch";

export const CategoryPage: React.FC = () => {
  // TODO: 백엔드 API 연동 후, Id를 통해 데이터를 가져오도록 수정해야 한다, Type도 맞춰줘야 한다.
  const { state } = useLocation();
  const name = state;

  return (
    <Layout>
      <MenuComponent />
      <div className="container mx-auto px-16 py-6">
        <CustomBreadcrumb />
        <CategoryContainer category={name} />
        <DetailSearch />
        <PlusAuction />
        <AdBanner />
        <CategoryList />
      </div>
    </Layout>
  );
};
