/** @type {import('next').NextConfig} */
import nextI18NextConfig from './next-i18next.config.js';
const { i18n } = nextI18NextConfig;

const nextConfig = {
    i18n,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nextads.tektra.vn',
            },
            {
                protocol: 'http',
                hostname: 'localhost:3000',
            },
        ],
    },
    env: {
        REACT_APP_API_MODULE_URL: process.env.REACT_APP_API_MODULE_URL,
        REACT_APP_BASE_MODULE_URL: process.env.REACT_APP_BASE_MODULE_URL,
    },
};
export default nextConfig;
