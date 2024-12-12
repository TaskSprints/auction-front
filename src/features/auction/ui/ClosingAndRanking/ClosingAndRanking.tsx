import { Link } from "react-router-dom";
import { Card, Badge } from "antd";
import { FadeImageSlider } from "widgets/ImageSlider";
import {
  ClosingSoonItem,
  RankingItem,
} from "features/auction/ui/ClosingAndRanking";
import { closingSoonList, rankingList } from "entities/auction/model";

export const ClosingAndRanking = () => {
  return (
    <div className="container max-w-[88rem] mx-auto mt-8 mb-8">
      <div className="grid grid-cols-5 md:grid-cols-5 gap-4">
        <div className="col-span-2">
          <Card
            title="마감임박"
            extra={
              <Badge color="green">
                <Link
                  to="/category"
                  state="남성의류"
                  className="text-green-600 hover:text-green-800"
                >
                  더보기
                </Link>
              </Badge>
            }
            className="h-[630px]"
            styles={{
              body: {
                height: "calc(100% - 58px)",
                padding: "20px",
              },
            }}
          >
            <div className="h-full">
              <FadeImageSlider>
                {closingSoonList.map((product) => (
                  <Link
                    to="/bidding"
                    key={product.id}
                    className="pointer-events-auto"
                    state={{ product }}
                  >
                    <ClosingSoonItem product={product} />
                  </Link>
                ))}
              </FadeImageSlider>
            </div>
          </Card>
        </div>
        <div className="col-span-3">
          <Card
            title="랭킹 옥션"
            extra={
              <Badge color="green">
                <Link
                  to="/category"
                  state="화장품"
                  className="text-green-600 hover:text-green-800"
                >
                  더보기
                </Link>
              </Badge>
            }
            className="h-[630px]"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {/* Rank 1 아이템 */}
              {rankingList
                .filter((_, index) => index === 0)
                .map((product) => (
                  <div className="col-span-1" key={product.id}>
                    <RankingItem product={product} rank={1} />
                  </div>
                ))}

              {/* Rank 2 이상 아이템들을 하나의 div로 묶기 */}
              <div className="col-span-1">
                {rankingList
                  .filter((_, index) => index > 0)
                  .map((item, index) => (
                    <RankingItem
                      key={item.id}
                      product={item}
                      rank={index + 2}
                    />
                  ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
