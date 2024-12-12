import { Badge } from "antd";
import { Link } from "react-router-dom";
import { getCountDisplay } from "./PromotionAndRank";

const recentSearches = [
  { id: 1, term: "경매", count: 1, isUp: true },
  { id: 2, term: "여성용", count: 5, isUp: true },
  { id: 3, term: "아동용", count: "-" },
  { id: 4, term: "신상", count: 3, isUp: true },
  { id: 5, term: "가을", count: 1, isUp: true },
  { id: 6, term: "가구", count: "NEW" },
  { id: 7, term: "국산", count: 5, isUp: true },
  { id: 8, term: "운동", count: "NEW" },
  { id: 9, term: "시즌몰", count: 5, isUp: true },
  { id: 10, term: "무료", count: "NEW" },
];

export const SearchRankSection = () => {
  return (
    <div className="w-1/3 bg-white">
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h3 className="font-bold">실시간 검색어</h3>
          <Badge color="green">
            <a href="/category" className="text-green-600 hover:text-green-800">
              더보기
            </a>
          </Badge>
        </div>
        <div className="flex-1 overflow-y-auto">
          {recentSearches.map((item, index) => (
            <div
              key={item.id}
              className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`font-bold ${index < 3 ? "text-red-500" : "text-gray-400"}`}
                >
                  {index + 1}
                </span>
                <Link to="/category" state="생활용품">
                  <span>{item.term}</span>
                </Link>
              </div>
              <span
                className={
                  item.count === "NEW" ? "text-red-500" : "text-blue-500"
                }
              >
                {getCountDisplay(item.count)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
