'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import CustomImage from '../CustomImage';
import CloseIcon from '../icons/close-icon';
import SearchIcon from '../icons/search-icon';
import useTrans from '../../../../lib/hooks/useTrans';
import LanguageSelector from '../../languageSelector';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { SlideUp } from '../../../utils/animation';

const MenuMobile = ({ isOpen, onClose, data, logo }) => {
    const trans = useTrans();
    const menuRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const { asPath } = useRouter();

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const clearInput = () => {
        setInputValue('');
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
            <div
                className={`lg:hidden mobile_top_menu_wrapper bg-[#2a2a47] fixed top-0 right-0 h-full shadow-lg transition-all duration-500 ease-in-out z-[999] w-[70vw] ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
                ref={menuRef}
            >
                <div className="flex items-center">
                    <div className="top_menu_closer absolute top-2 right-2 text-black cursor-pointer" onClick={onClose}>
                        <CloseIcon fill="#fff" size={20} />
                    </div>
                    <div className="p-[1.05rem] w-full header-top ">
                        <Link href="/" className="flex items-center gap-2">
                            <CustomImage
                                src={`${process.env.REACT_APP_BASE_MODULE_URL}${logo}`}
                                alt="logo"
                                width={70}
                                height={75}
                            />
                        </Link>
                    </div>
                </div>

                <div className="p-4">
                    <div className="relative">
                        <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <SearchIcon fill="#fff" size={16} />
                        </button>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder={trans.search_input}
                            className="w-full p-2 pl-10 pr-10 bg-[#1A1B46] border border-white text-white rounded-md shadow-lg transition-all duration-300 ease-in-out"
                        />
                        {inputValue && (
                            <button
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={clearInput}
                            >
                                <CloseIcon size={16} fill="#fff" />
                            </button>
                        )}
                    </div>
                </div>

                <div className="p-4">
                    <ul className="top-menu">
                        {data &&
                            data.length > 0 &&
                            data.map((menu, index) => (
                                <motion.li
                                    variants={SlideUp(0.1 * index)}
                                    initial="initial"
                                    whileInView="animate"
                                    className="maintitle pb-4 md:py-4"
                                    key={`m-menu-li-${menu.id}`}
                                >
                                    <div className="text-white">
                                        <Link
                                            href={menu.href}
                                            className={`flex items-center gap-2 ${
                                                checkActiveRoute(menu.href) ? 'text-primary' : ''
                                            }`}
                                            onClick={onClose}
                                        >
                                            {menu.icon}
                                            {trans.menu[menu.name]}
                                        </Link>
                                    </div>
                                </motion.li>
                            ))}
                    </ul>

                    <LanguageSelector onClose={onClose} />
                </div>
            </div>
            <div
                className={`fixed inset-0 z-40 bg-black transition-opacity duration-500 ease-in-out ${
                    isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            ></div>
        </>
    );
};

export default MenuMobile;
