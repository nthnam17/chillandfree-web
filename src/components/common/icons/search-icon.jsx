import React from "react";

const SearchIcon = ({ width, height, size, fill }) => {
  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="5.25" stroke={fill} strokeWidth="1.5" />
      <path
        d="M12.4697 13.5303C12.7626 13.8232 13.2374 13.8232 13.5303 13.5303C13.8232 13.2374 13.8232 12.7626 13.5303 12.4697L12.4697 13.5303ZM13.5303 12.4697L10.0303 8.96967L8.96967 10.0303L12.4697 13.5303L13.5303 12.4697Z"
        fill="white"
      />
    </svg>
  );
};

export default SearchIcon;
