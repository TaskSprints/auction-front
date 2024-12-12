import { Link } from "react-router-dom";
import { Button } from "antd";

const leatherJacket = {
  title: "LEATHER JACKET",
  subtitle: "경매로 가죽자켓 싸게! 구입하자",
  discount: "25%",
  image: "/SampleBanner/sample2.png",
};

export const EventSection = () => {
  return (
    <div className="w-1/3 relative overflow-hidden">
      <div className="relative h-full">
        <img
          src={leatherJacket.image}
          alt={leatherJacket.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
          <div className="text-sm mb-1">{leatherJacket.subtitle}</div>
          <div className="text-3xl font-bold mb-2">{leatherJacket.title}</div>
          <div className="text-5xl font-bold text-red-500 mb-4 text-center">
            {leatherJacket.discount}
            <div className="text-2xl mt-1 text-center">SALE</div>
          </div>

          <Link to="/category" state="남성의류">
            <Button
              className="bg-white text-black hover:bg-gray-100 border-none"
              size="large"
            >
              VIEW
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
