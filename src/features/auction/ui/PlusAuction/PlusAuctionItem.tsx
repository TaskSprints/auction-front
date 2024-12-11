import { Badge } from "antd";
import { plusAuctionList } from "entities/auction/model";
import { useCountdown } from "shared/lib";

export const PlusAuctionItem = ({
  item,
}: {
  item: (typeof plusAuctionList)[0];
}) => {
  const timeLeft = useCountdown(item.timeLeft);

  return (
    <div className="w-[300px]">
      <div className="relative aspect-[3/3]">
        <Badge
          count={`${item.bidCount}명`}
          className="absolute top-2 right-2 z-10"
          style={{
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            lineHeight: "45px",
            padding: 0,
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-[300px] h-[250px] object-cover rounded-t-lg"
          />
        </Badge>
      </div>
      <div className="bg-gray-50 p-3 rounded-b-lg">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {item.title}
        </h3>
        <div className="text-xs text-gray-600 mt-1">
          {item.originalPrice > 0 && (
            <span className="line-through">
              {item.originalPrice.toLocaleString()}원
            </span>
          )}
        </div>
        <div className="text-sm text-red-600 font-bold pb-2 border-b border-dashed border-gray-300">
          {item.currentPrice.toLocaleString()}원
        </div>
        <div className="text-xs mt-1 text-gray-700 font-medium">
          {timeLeft.days > 0 && `${timeLeft.days}일 `}
          {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
        </div>
      </div>
    </div>
  );
};
