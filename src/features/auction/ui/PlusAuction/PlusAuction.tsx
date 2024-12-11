import { Card, Badge } from "antd";
import { plusAuctionList } from "entities/auction/model";
import { PlusAuctionItem } from "features/auction/ui/PlusAuction";

export const PlusAuction = () => {
  return (
    <Card
      title="플러스 경매"
      className="container max-w-[88rem] mx-auto mt-8 mb-8"
      extra={
        <Badge color="green">
          <a href="/category" className="text-green-600 hover:text-green-800">
            더보기
          </a>
        </Badge>
      }
    >
      {/* 모바일: 2칸, 태블릿: 3칸, 데스크탑: 4칸 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-4">
        {plusAuctionList.map((item) => (
          <PlusAuctionItem key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
};
