import React from "react";
const SimpleHeader: React.FC = () => {
  return (
    <div className="my-12 mb-10 text-center mb-6 ">
      <h1
        onClick={() => (window.location.href = "/")}
        className="text-5xl font-bold text-gray-900 hover:cursor-pointer"
      >
        Auction
      </h1>
    </div>
  );
};
export default SimpleHeader;
