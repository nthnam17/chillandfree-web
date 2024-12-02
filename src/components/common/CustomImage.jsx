'use client';

import React, { forwardRef, useState } from 'react';
import Image from 'next/image';

const CustomImage = forwardRef(({ src, alt, className, width, height, priority, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(`/images/logo.png`);
    };
    return (
        <Image
            ref={ref}
            src={fallback || src}
            alt={alt || `nextads`}
            className={className ? `${className} lazyload` : `lazyload`}
            onError={handleError}
            width={width}
            height={height}
            loading={priority ? undefined : 'lazy'}
            priority={priority}
            {...props}
        />
    );
});

CustomImage.displayName = 'CustomImage';

export default CustomImage;
