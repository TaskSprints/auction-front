import React from "react";
import {
  ProductGallery,
  SellerItems,
  BiddingInfo,
  BiddingTitle,
} from "features/bidding/ui";
import { Layout } from "@/widgets/Layout";
import { MenuComponent } from "@/widgets/MenuComponent";
import { CustomBreadcrumb } from "@/widgets/Breadcrumb/CustomBreadcrumb";

export const BiddingPage: React.FC = () => {
  return (
    <Layout>
      <MenuComponent />
      <div className="container mx-auto px-4 py-6">
        <CustomBreadcrumb />
        <BiddingTitle />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ProductGallery />
          <BiddingInfo />
        </div>
        <SellerItems />
      </div>
    </Layout>
  );
};
