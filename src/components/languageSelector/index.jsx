import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const LanguageSelector = ({ onClose }) => {
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState('vi');

    useEffect(() => {
        const lang = Cookies.get('lang') || 'vi';
        setSelectedLanguage(lang);
    }, []);

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);

        Cookies.set('lang', event.target.value);

        router.push(router.asPath, router.asPath, { locale: event.target.value });

        // Close the mobile menu after language change
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="relative inline-block">
            <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="select-lang appearance-none bg-[#FFFFFF1A] text-white border-none pr-8 pl-10 py-1 rounded-sm focus:outline-none focus:ring-0"
                style={{
                    backgroundImage: `url(/images/${selectedLanguage}.png)`,
                }}
            >
                <option value="vi">VN</option>
                <option value="en">EN</option>
            </select>
            <div className="absolute right-0 top-0 h-full flex items-center pointer-events-none pr-2">
                <svg className="fill-current text-white w-4 h-4" viewBox="0 0 20 20">
                    <path d="M5.5 7.5L10 12l4.5-4.5L15 6l-5 5-5-5z" />
                </svg>
            </div>
        </div>
    );
};

export default LanguageSelector;
