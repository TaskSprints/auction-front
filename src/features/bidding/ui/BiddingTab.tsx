import { useState } from "react";
import { Tabs } from "antd";
import { CustomerSatisfaction, ProductDetails, ShippingInfo } from "./index";

export function BiddingTab() {
  const [activeTab, setActiveTab] = useState("details");
  return (
    <Tabs
      activeKey={activeTab}
      onChange={setActiveTab}
      items={[
        {
          key: "details",
          label: "상품상세정보",
          children: <ProductDetails />,
        },
        {
          key: "reviews",
          label: "상품문의",
          children: <div>상품문의 내용</div>,
        },
        {
          key: "ratings",
          label: "상품평/만족도",
          children: <CustomerSatisfaction />,
        },
        {
          key: "shipping",
          label: "반품/교환정보",
          children: <ShippingInfo />,
        },
      ]}
      className="mb-8"
    />
  );
}
