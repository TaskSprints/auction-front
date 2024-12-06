import React from "react";
import { HotAuctionList } from "@/features/auction/ui/HotAuction/HotAuctionList";
import { CategoryAuction } from "@/features/category/ui/CategoryAuction";
import { CardList } from "../widgets/Card/CardList";
import { Layout } from "../widgets/Layout/index";
import { MenuComponent } from "../widgets/MenuComponent/MenuComponent";

export const MainPage: React.FC = () => {
  return (
    <Layout>
      <MenuComponent />
      <CardList />
      <CategoryAuction />
      <HotAuctionList />
    </Layout>
  );
};
