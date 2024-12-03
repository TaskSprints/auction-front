import { Card } from "antd";

const items = [
  {
    id: 1,
    title: "겨울기모팬츠 26-36",
    image: "/placeholder.svg?height=200&width=200",
    originalPrice: 340000,
    currentPrice: 50000,
  },
  {
    id: 2,
    title: "폰케이스/핸드폰케이스",
    image: "/placeholder.svg?height=200&width=200",
    originalPrice: 123500,
    currentPrice: 113000,
  },
  {
    id: 3,
    title: "만지장소 광명 대박",
    image: "/placeholder.svg?height=200&width=200",
    originalPrice: 142500,
    currentPrice: 140000,
  },
];

export function SellerItems() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4">판매자의 다른 상품</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <Card
            key={item.id}
            cover={
              <div className="relative aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover"
                />
              </div>
            }
            bodyStyle={{ padding: "12px" }}
          >
            <h4 className="text-sm font-medium mb-2">{item.title}</h4>
            <div className="space-y-1">
              <div className="text-gray-500 line-through text-sm">
                ₩{item.originalPrice.toLocaleString()}
              </div>
              <div className="text-red-600 font-bold">
                ₩{item.currentPrice.toLocaleString()}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
