import React from 'react';

const LeftIcon = ({ width, height, size, fill }) => (
    <svg
        width={width || size}
        height={height || size}
        viewBox="0 0 1024 1024"
        className="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
        stroke={fill}
        strokeWidth={2}
    >
        <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" />
    </svg>
);

export default LeftIcon;
