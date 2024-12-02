// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                utmFont: ['var(--font-utm)', 'sans-serif'],
            },
            colors: {
                primary: '#8563FF',
                secondary: '#FEC91A',
                'gradient-start': '#643CF1',
                'gradient-end': '#3D1BB7',
                'primary-studio': '#5AFFFE',
            },
            textShadow: {
                custom: '2px 2px #A189F6',
            },
            screens: {
                xs: '320px',
            },
            backgroundImage: {
                'yellow-gradient': 'linear-gradient(90deg, #F1C73C 0%, #FFC917 100%)',
                'blue-gradient': 'linear-gradient(180deg, #161740 0%, #020227 100%)',
                'black-gradient': 'linear-gradient(180deg, #313251 0%, #161744 100%)',
                'studio-gradient': 'linear-gradient(90deg, #5AF4FC 0%, #57A5E6 100%)',
            },
            lineClamp: {
                1: '1',
                2: '2',
            },
            display: {
                'webkit-box': '-webkit-box',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.text-shadow-custom': {
                    'text-shadow': '2px 2px #A189F6',
                },
            });
        },
    ],
};
