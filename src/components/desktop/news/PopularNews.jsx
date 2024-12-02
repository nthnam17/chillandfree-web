import Link from 'next/link';
import React from 'react';
import CustomImage from '../../common/CustomImage';
import ClockIcon from '../../common/icons/clock-icon';
import NewsMain from './NewsMain';
import { motion } from 'framer-motion';
import { SlideRight, SlideUp } from '../../../utils/animation';
import { formatDate } from '../../../utils/formatDate';
import useTrans from '../../../../lib/hooks/useTrans';
import PopularNewsSlide from './PopularNewsSlide';

const PopularNews = ({ data, isMobile }) => {
    const trans = useTrans();

    return (
        <div className="py-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <motion.h2
                    variants={isMobile ? SlideUp(0.2) : SlideRight(0.2)}
                    initial="initial"
                    whileInView="animate"
                    className="uppercase text-secondary lg:text-[40px] md:text-2xl xs:text-lg text-shadow-custom"
                >
                    {trans.hot_news}
                </motion.h2>
                {/* <motion.h2 variants={isMobile ? SlideUp(0.2) : SlideRight(0.4)} initial="initial" whileInView="animate">
                    <Link
                        href="#"
                        className="uppercase text-white text-shadow-custom lg:text-xl md:text-lg xs:text-base"
                    >
                        {trans.see_more}
                    </Link>
                </motion.h2> */}
            </div>

            <Link href={`/tin-tuc/${data[0].slug}`} className="flex flex-col gap-4">
                <motion.div variants={SlideUp(0.2)} initial="initial" whileInView="animate" className="w-full">
                    <CustomImage
                        src={`${process.env.REACT_APP_BASE_MODULE_URL}${data[0].image}`}
                        alt="popular news"
                        className="w-full"
                        width={1200}
                        height={408}
                    />
                </motion.div>

                <motion.div variants={SlideUp(0.2)} initial="initial" whileInView="animate" className="">
                    <p className="text-primary uppercase font-bold lg:text-[30px] md:text-2xl xs:text-lg">
                        {data[0].title}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ClockIcon size={16} fill="#fff" />
                            <span className="text-white">{formatDate(data[0].created_at)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <CustomImage
                            src={authorNews}
                            alt="author news"
                            className="rounded-full"
                            width={22}
                            height={22}
                        /> */}
                            <span className="text-white">{data[0].created_by}</span>
                        </div>
                    </div>
                </motion.div>
            </Link>

            <div className="my-4 w-full">
                {/* {data.length > 1 &&
                    data.length
                        .slice(1)
                        .map((item, index) => (
                            <NewsMain isMobile={isMobile} data={item} key={index} index={index + 1} />
                        ))} */}
                <PopularNewsSlide isMobile={isMobile} data={data.slice(1)} />
            </div>
        </div>
    );
};

export default PopularNews;
