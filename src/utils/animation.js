export const SlideUp = (delay) => {
    return {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay,
            },
        },
    };
};

export const SlideLeft = (delay) => {
    return {
        initial: {
            x: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay,
            },
        },
    };
};

export const SlideRight = (delay) => {
    return {
        initial: {
            x: -100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay,
            },
        },
    };
};

export const ButtonAnimation = (
    tapScale = 0.9,
    hoverScale = 1.1,
    hoverBg = '#d1d5db',
    hoverColor = 'black',
    defaultBg = '#ffffff',
    defaultColor = '#000000',
    bounceDamping = 10,
    bounceStiffness = 600,
) => {
    return {
        whileTap: {
            scale: tapScale,
        },
        whileHover: {
            scale: hoverScale,
            backgroundImage: hoverBg,
            color: hoverColor,
        },
        style: {
            backgroundImage: defaultBg,
            color: defaultColor,
        },
        transition: {
            bounceDamping,
            bounceStiffness,
        },
    };
};
