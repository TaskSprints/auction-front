import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  BiddingInfo,
  BiddingTab,
  BiddingTitle,
  ProductGallery,
  SellerItems,
} from "features/bidding/ui";
import { Layout } from "@/widgets/Layout";
import { MenuComponent } from "@/widgets/MenuComponent";
import { CustomBreadcrumb } from "@/widgets/Breadcrumb/CustomBreadcrumb";

export const BiddingPage: React.FC = () => {
  // TODO: 백엔드 API 연동 후, Id를 통해 데이터를 가져오도록 수정해야 한다, Type도 맞춰줘야 한다.
  const { state } = useLocation();
  const product = state?.product;
  const imgSrc = product?.image;
  const title = product?.title;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  return (
    <Layout>
      <MenuComponent />
      <div className="container mx-auto px-4 py-6">
        <CustomBreadcrumb />
        <BiddingTitle title={title} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ProductGallery imgSrc={imgSrc} />
          <BiddingInfo />
        </div>
        <BiddingTab />
        <SellerItems />
      </div>
    </Layout>
  );
};
