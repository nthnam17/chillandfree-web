import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NewsMain from './NewsMain';
import { motion } from 'framer-motion';
import { SlideRight, SlideUp } from '../../../utils/animation';
import useTrans from '../../../../lib/hooks/useTrans';
import Pagination from '../../common/Pagination';
import { customFetch } from '../../../utils/customFetch';

const NewsByCategory = ({ data, isMobile }) => {
    const trans = useTrans();

    const [newsData, setNewsData] = useState(data.items);
    const [totalPage, setTotalPage] = useState(data.totalPages || 1);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = async (page) => {
        try {
            let param = [`pageIndex=${page}`, `pageSize=9`].filter(Boolean).join('&');

            const res = await customFetch(`/page/news?${param}`, {
                headers: {
                    'x-lang': 'EN',
                },
            });

            if (res.error.code === 200) {
                setNewsData(res.data.news.items);
                setTotalPage(res.data.news.totalPages);
                setCurrentPage(res.data.news.pageIndex);
            }
        } catch (error) {
            console.log('Lỗi:', error);
        }
    };

    return (
        <div className="py-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <motion.h2
                    variants={isMobile ? SlideUp(0.2) : SlideRight(0.2)}
                    initial="initial"
                    whileInView="animate"
                    className="uppercase text-secondary lg:text-[40px] md:text-2xl xs:text-lg text-shadow-custom"
                >
                    {trans.event_news}
                </motion.h2>
                <motion.h2 variants={isMobile ? SlideUp(0.2) : SlideRight(0.2)} initial="initial" whileInView="animate">
                    <Link
                        href="/tin-tuc"
                        className="uppercase text-white text-shadow-custom lg:text-xl md:text-lg xs:text-base"
                    >
                        {trans.see_more}
                    </Link>
                </motion.h2>
            </div>

            <div className="grid grid-cols-12 gap-4 my-4">
                {newsData.map((item, index) => (
                    <NewsMain isMobile={isMobile} data={item} key={index} />
                ))}
            </div>

            <Pagination total={totalPage} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    );
};

export default NewsByCategory;
