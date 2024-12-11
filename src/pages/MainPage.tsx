import React from "react";
import { ProductCarousel } from "features/auction/ui/ProductCarousel/ProductCarousel";
import { PromotionBanner, AdBanner } from "widgets/Banner";
import { ClosingAndRanking } from "features/auction/ui/ClosingAndRanking";
import { PlusAuction } from "features/auction/ui/PlusAuction";
import { PromotionAndRank } from "features/auction/ui/PromotionAndRank";

import { Layout } from "widgets/Layout";
import { MenuComponent } from "widgets/MenuComponent/MenuComponent";

export const MainPage: React.FC = () => {
  return (
    <Layout>
      <MenuComponent />
      <ProductCarousel />
      <PromotionBanner />
      <ClosingAndRanking />
      <PlusAuction />
      <AdBanner />
      <PromotionAndRank />
    </Layout>
  );
};
