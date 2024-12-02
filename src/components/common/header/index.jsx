'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import CustomImage from '../CustomImage';
import { dataMenuMain } from '../layout/dataMenuMain';
import Link from 'next/link';
import SearchIcon from '../icons/search-icon';
import MenuIcon from '../icons/menu-icon';
import MenuMobile from './MenuMobile';
import LanguageSelector from '../../languageSelector';
import useTrans from '../../../../lib/hooks/useTrans';
import { useRouter } from 'next/router';
import CloseIcon from '../icons/close-icon';

const Header = ({ logo, isMobile }) => {
    const trans = useTrans();
    const { asPath } = useRouter();

    const [menuMobile, setMenuMobile] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // Đảm bảo khởi tạo là false
    const [inputValue, setInputValue] = useState('');
    const searchRef = useRef(null);

    // Xử lý sự kiện scroll để tạo sticky header
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Xử lý sự kiện click bên ngoài để đóng input
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Kiểm tra nếu click ra ngoài thành phần được tham chiếu bởi searchRef thì đóng input
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        // Thêm sự kiện khi input được mở
        if (isSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup sự kiện khi component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchOpen]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const clearInput = () => {
        setInputValue('');
    };

    const handleMenuMobile = () => {
        setMenuMobile(!menuMobile);
    };

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen); // Đóng mở input khi click vào icon search
    };

    const checkActiveRoute = (href) => {
        let mainUrl = asPath;
        const splitUrl = mainUrl.split('/');

        if (splitUrl.length === 3) {
            mainUrl = `/${splitUrl[1]}`;
        }

        return !mainUrl || href === mainUrl;
    };

    return (
        <>
            <header
               
            >
                <motion.div
                    className="lg:container xs:px-5 mx-auto"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    
                </motion.div>
            </header>
            {/* {menuMobile && (
                <MenuMobile isOpen={menuMobile} onClose={handleMenuMobile} data={dataMenuMain} logo={logo} />
            )} */}
        </>
    );
};

export default Header;
