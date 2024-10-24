const CustomArrow = ({
  direction,
  onClick,
}: {
  direction: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        direction === "left" ? "left-4" : "right-4"
      } w-10 h-10 flex justify-center items-center bg-white border rounded-full shadow-lg cursor-pointer z-10 hover:bg-gray-200 transition duration-300`}
      onClick={onClick}
    >
      {direction === "left" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </div>
  );
};

export default CustomArrow;
