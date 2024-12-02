'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide from '/public/images/slide_1.png';
import CustomImage from '../../common/CustomImage';
import useTrans from '../../../../lib/hooks/useTrans';
import { ButtonAnimation, SlideLeft, SlideUp } from '../../../utils/animation';
import Link from 'next/link';

const HomeSlide = ({ dataSlider }) => {
    const trans = useTrans();

    return (
        <Swiper
            loop
            pagination={{ clickable: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Pagination, Navigation]}
            className="bg-blue-gradient home-silder"
        >
            {dataSlider.map((item, index) => (
                <SwiperSlide key={index}>
                    <Link href={item.slug}>
                        <motion.div
                            className="relative w-screen"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Image */}
                            <CustomImage
                                src={`${process.env.REACT_APP_BASE_MODULE_URL}${item.image}`}
                                className="w-full z-20"
                                alt={`slide-home-${item.id}`}
                                width={1920}
                                height={800}
                                priority
                            />
                            {/* Centered Text */}
                            <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                                <div className="text-white font-bold text-center drop-shadow-2xl xs:max-w-[40vw] mx-4">
                                    <motion.h2
                                        className="text-sm md:text-2xl lg:text-4xl xl:text-5xl text-secondary"
                                        variants={SlideUp(0.2)}
                                        initial="initial"
                                        whileInView="animate"
                                    >
                                        {item.title}
                                    </motion.h2>
                                    <motion.button
                                        className="uppercase text-[#1F0163] border border-solid border-1 bg-secondary rounded-md font-semibold md:p-2 xs:p-1 w-max shadow-lg lg:text-lg md:text-base xs:text-xs lg:mt-6 md:mt-4 xs:mt-2"
                                        variants={SlideUp(0.4)}
                                        initial="initial"
                                        whileInView="animate"
                                        {...ButtonAnimation(
                                            0.9,
                                            1.1,
                                            'linear-gradient(180deg, #8563ff 0%, #090c4e 100%)',
                                            '#fff',
                                            'rgb(254 201 26 / var(--tw-bg-opacity))',
                                            '#1F0163',
                                            10,
                                            600,
                                        )}
                                    >
                                        {trans.start_now}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HomeSlide;
