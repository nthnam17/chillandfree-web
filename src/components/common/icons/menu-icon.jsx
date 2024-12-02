import React from 'react';

const MenuIcon = ({ width, height, size, fill }) => (
    <svg
        width={width || size}
        height={height || size}
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M20 7L4 7" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 12L4 12" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 17L4 17" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export default MenuIcon;
