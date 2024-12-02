import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CustomImage from '../../common/CustomImage';
import { formatRate } from '../../../utils/formatRate';
import Link from 'next/link';

const GameIntroSlide = ({ data }) => {
    return (
        <Swiper
            className="game-intro-slide"
            loop
            spaceBetween={20}
            centeredSlides={true}
            centeredSlidesBounds={true}
            grabCursor={true}
            initialSlide={0}
            autoplay={{
                reverseDirection: true,
                delay: 1000,
                pauseOnMouseEnter: true,
            }}
            breakpoints={{
                375: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="slider-relate-game border-[1px] border-primary flex flex-col items-center text-white bg-[#191a45] p-2 rounded-xl overflow-hidden">
                        <Link href={`/game-campaign${item.slug}`} className="flex flex-col items-center w-full">
                            <div className="w-full h-[200px] max-w-[227px] flex items-center justify-center">
                                <CustomImage
                                    className="object-cover w-full h-full rounded-md"
                                    src={`${process.env.REACT_APP_BASE_MODULE_URL}${item.thumbnail}`}
                                    width={227}
                                    height={216}
                                />
                            </div>
                            <p className="min-h-[60px] text-[15px] lg:text-[20px] flex items-center justify-center m-0 text-center font-normal campaign-intro-slide-title mt-2">
                                {item.name}
                            </p>
                            <div className="flex items-center gap-2">{formatRate(item.rate)}</div>
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default GameIntroSlide;
