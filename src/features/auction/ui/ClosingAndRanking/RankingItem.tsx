import { Link } from "react-router-dom";
import { Badge } from "antd";
import { useCountdown } from "shared/lib/hooks";
import { rankingList } from "entities/auction/model";

export const RankingItem = ({
  product,
  rank,
}: {
  product: (typeof rankingList)[0];
  rank: number;
}) => {
  const timeLeft = useCountdown(product.timeLeft);

  return (
    <div className={`relative ${rank !== 1 && "flex gap-3"}`}>
      <Link to="/bidding" state={{ product }} className="block relative">
        <img
          src={product.image}
          alt={product.title}
          className={`${rank === 1 ? "w-[400px] h-[380px]" : "w-[150px] h-[150px]"} object-cover rounded-lg`}
        />

        <Badge
          count={
            <div className="flex flex-col items-center justify-center text-white w-full h-full">
              {rank === 1 && (
                <span className="leading-3 font-bold mb-1">RANK</span>
              )}
              <span className="font-semibold">{rank}</span>
            </div>
          }
          className="absolute top-2 left-2"
          style={{
            borderRadius: "50%",
            width: rank === 1 ? "60px" : "30px",
            height: rank === 1 ? "60px" : "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        />
      </Link>
      <div
        className={`${rank === 1 ? "mt-3" : ""} ${rank === 1 ? "w-[350px]" : "flex-1"} min-w-0`}
      >
        <h3 className={`${rank === 1 ? "text-lg" : "text-sm"} font-bold`}>
          {product.title}
        </h3>
        <div className="text-xs text-gray-500 mt-1">
          <span className="line-through">
            {product.originalPrice.toLocaleString()}원
          </span>
          {" → "}
          <span className="text-red-500 text-xl font-semibold">
            {product.currentPrice.toLocaleString()}원
          </span>
          <span className="text-xl">({product.bidCount}명)</span>
        </div>
        <div className="text-lg mt-1">
          {timeLeft.days > 0 && `${timeLeft.days}일 `}
          {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
        </div>
      </div>
    </div>
  );
};
