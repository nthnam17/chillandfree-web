import React from 'react';
import CustomImage from '../../common/CustomImage';
import ClockIcon from '../../common/icons/clock-icon';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlideRight, SlideUp } from '../../../utils/animation';
import { formatDate } from '../../../utils/formatDate';
import { formatText } from '../../../utils/formatText';
import logo_1 from '/public/images/avart_1.png';

const NewsMain = ({ data, index, isMobile }) => {
    return (
        <motion.div
            variants={isMobile ? SlideUp(0.2) : SlideRight(0.2 * index)}
            initial="initial"
            whileInView="animate"
            className="lg:col-span-4 sm:col-span-6 xs:col-span-12 bg-[#1A1B46] rounded-[10px] lg:p-2 xs:p-4"
        >
            <Link href={`/tin-tuc/${data.slug}`} className=" flex flex-col gap-4">
                <div className="w-full h-full">
                    <CustomImage
                        className="w-full h-auto object-cover"
                        src={`${process.env.REACT_APP_BASE_MODULE_URL}${data.image}`}
                        alt={`news-${data.id}`}
                        width={412}
                        height={236}
                        style={{
                            width: '100%',
                            height: '236px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                        }}
                    />
                </div>

                <div className={`flex flex-col justify-between h-[${isMobile ? '80px' : '120px'}]`}>
                    <p
                        className={`text-white font-semibold lg:text-xl md:text-base xs:text-sm h-[${
                            isMobile ? '40px' : '80px'
                        }] line-clamp-2 overflow-hidden text-left`}
                    >
                        {isMobile ? formatText(data.title, 20) : formatText(data.title, 30)}
                    </p>

                    <p
                        className={`text-white italic lg:text-base md:text-sm xs:text-xs font-normal h-[${
                            isMobile ? '40px' : '80px'
                        }] line-clamp-3 overflow-hidden text-left`}
                    >
                        {isMobile ? formatText(data.description, 30) : formatText(data.description, 60)}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <ClockIcon size={isMobile ? 12 : 16} fill="#fff" />
                        <span className="text-white lg:text-base md:text-sm xs:text-xs">
                            {formatDate(data.created_at)}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CustomImage src={logo_1} alt="author logo" width={22} height={22} />
                        <span className="text-white lg:text-base md:text-sm xs:text-xs">{data.created_by}</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default NewsMain;
