import { Link } from "react-router-dom";

const congratulation = {
  title: "CONGRATULATION",
  subtitle: "Voom 남성 캐주얼 패션",
  image: "/SampleBanner/sample1.png",
};

export const CongratulationSection = () => {
  return (
    <div className="w-1/3 relative overflow-hidden">
      <Link to="/category" state="남성의류">
        <div className="relative h-full">
          <img
            src={congratulation.image}
            alt={congratulation.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <div className="mb-4">
              {/* <img
              src="/SampleBanner/sample1.png"
              alt="Congratulation icon"
              width={50}
              height={50}
            /> */}
            </div>
            <div className="text-2xl font-bold mb-2">
              {congratulation.title}
            </div>
            <div className="text-sm">{congratulation.subtitle}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
