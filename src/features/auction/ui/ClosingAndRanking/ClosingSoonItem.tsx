import { Link } from "react-router-dom";
import { Badge } from "antd";
import { useCountdown } from "shared/lib/hooks";
import { closingSoonList } from "entities/auction/model";

export const ClosingSoonItem = ({
  item,
}: {
  item: (typeof closingSoonList)[0];
}) => {
  const timeLeft = useCountdown(item.timeLeft);

  return (
    <div className="">
      <div className="left-2">
        <Badge
          count={`${item.bidCount}명`}
          className="mt-10 top-2 z-10"
          style={{
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            lineHeight: "45px",
            padding: 0,
            fontSize: "18px",
            fontWeight: "bold",
            overflow: "visible",
          }}
        >
          <Link to="/bidding">
            <img
              src={item.image}
              alt={item.title}
              className="w-[300px] h-[350px] object-cover rounded-lg"
            />
          </Link>
        </Badge>
      </div>
      <div className="relative w-full mt-3">
        <h3 className="text-lg font-bold mb-3">{item.title}</h3>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-gray-500 line-through">
              {item.originalPrice.toLocaleString()}원
            </div>
            <div className="text-red-500 text-xl font-semibold">
              {item.currentPrice.toLocaleString()}원
            </div>
            <div className="text-lg mt-1">
              {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
