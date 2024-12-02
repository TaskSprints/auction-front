import React from "react";

interface direction {
  direction: string;
}

export const CustomArrow: React.FC<direction> = ({ direction }) => {
  return (
    <div
      className={`${direction === "left" ? "left-4" : "right-4"} absolute top-1/2 transform -translate-y-1/2  opacity-60 bg-gray-200  p-2 shadow-lg cursor-pointer z-10`}
    >
      {direction === "left" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#5f6368"
        >
          <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#5f6368"
        >
          <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
        </svg>
      )}
    </div>
  );
};
