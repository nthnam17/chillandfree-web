import React from 'react';

const ClockIcon = ({ width, height, size, fill }) => {
    return (
        <svg
            width={width || size}
            height={height || size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="8" cy="8" r="7.5" stroke="#D9D9D9" />
            <path d="M8 2.39999V9.19999L11.2 12.4" stroke="#8563FF" />
        </svg>
    );
};

export default ClockIcon;
