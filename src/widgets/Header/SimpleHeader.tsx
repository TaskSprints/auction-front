import React from "react";

export const SimpleHeader: React.FC = () => {
  return (
    <div className=" text-center">
      <button
        type="button"
        onClick={() => {
          window.location.href = "/";
        }}
        className="flex justify-center items-center cursor-pointer w-full"
      >
        <img
          src="/SmartDeal.png"
          alt="Logo"
          width="200" // SVG 크기를 절반으로 줄임
          height="20.3" // 비율을 맞추기 위해 높이도 줄임
        />
      </button>
    </div>
  );
};
