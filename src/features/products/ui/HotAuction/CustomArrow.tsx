const CustomArrow = ({
    direction,
    onClick,
}: {
    direction: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
    return (
        <div onClick={onClick} className={`top-1/2 transform translate-y-1/2 `}>
            {direction === "left" ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    className="hover:cursor-pointer hover:bg-gray-200 border border-black w-9 h-9 absolute right-1"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                >
                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="hover:cursor-pointer hover:bg-gray-200 border border-black w-9 h-9 absolute left-1"
                    fill="#5f6368"
                >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
            )}
        </div>
    );
};

export default CustomArrow;
