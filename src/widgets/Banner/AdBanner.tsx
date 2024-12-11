import { Link } from "react-router-dom";

export const AdBanner = () => {
  return (
    <Link to="/category">
      <div className="relative h-[120px] w-full bg-[#FDF8F3] overflow-hidden group">
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-xl">
            <p className="text-gray-600 text-sm mb-2">
              나만의 공간 저렴하게 연출할 수 있습니다 !!
            </p>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium">
                <span className="text-gray-800">모던하고</span>{" "}
                <span className="text-blue-500">심플한</span>{" "}
                <span className="text-gray-800">인테리어 가구전</span>{" "}
                <span className="text-orange-500 font-bold">OPEN</span>
              </h2>
              <button
                type="button"
                className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm group-hover:bg-orange-600 transition-colors"
              >
                GO
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-1">ENJOY LIFE</p>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute right-0 top-0 h-full w-1/2">
          <img
            src="/SampleBanner/sample3.png"
            alt="Modern Interior"
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF8F3] via-[#FDF8F3]/80 to-transparent" />
        </div>
      </div>
    </Link>
  );
};
