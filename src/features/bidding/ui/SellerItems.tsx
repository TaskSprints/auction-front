import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

const items = [
  {
    id: 1,
    title: "겨울기모팬츠 26-36",
    image: "/SampleBidding/sample1.png",
    originalPrice: 340000,
    currentPrice: 50000,
  },
  {
    id: 2,
    title: "폰케이스/핸드폰케이스",
    image: "/SampleBidding/sample2.png",
    originalPrice: 123500,
    currentPrice: 113000,
  },
  {
    id: 3,
    title: "만지장소 광명 대박",
    image: "/SampleBidding/sample3.png",
    originalPrice: 142500,
    currentPrice: 140000,
  },
];

export const SellerItems: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4">판매자의 다른 상품</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((product) => (
          <Card
            key={product.id}
            cover={
              <Link to="/bidding" state={{ product }}>
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            }
          >
            <h4 className="text-sm font-medium mb-2">{product.title}</h4>
            <div className="space-y-1">
              <div className="text-gray-500 line-through text-sm">
                ₩{product.originalPrice.toLocaleString()}
              </div>
              <div className="text-red-600 font-bold text-lg">
                ₩{product.currentPrice.toLocaleString()}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
