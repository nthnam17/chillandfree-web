import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CustomImage from '../../common/CustomImage';
import { formatRate } from '../../../utils/formatRate';
import Link from 'next/link';

const RelatedGamesSlide = ({ data }) => {
    return (
        <div>
            <Swiper
                spaceBetween={20}
                loop
                grabCursor={true}
                breakpoints={{
                    375: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide
                        className="border-[1px] border-primary flex flex-col items-center text-white bg-black-gradient p-2 rounded-xl"
                        key={`${index}-index12`}
                    >
                        <Link href={`/game-campaign${item.slug}`}>
                            <div className="flex flex-col items-center">
                                {/* Container with fixed dimensions */}
                                <div className="w-[120px] h-[120px] flex items-center justify-center overflow-hidden bg-gray-200 rounded-lg">
                                    <CustomImage
                                        src={`${process.env.REACT_APP_BASE_MODULE_URL}${item.thumbnail}`}
                                        className="w-full h-full object-cover"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <p className="m-0 text-center campaign-intro-slide-title text-base font-semibold overflow-hidden text-ellipsis line-clamp-1">
                                    {item.name}
                                </p>
                                <div className="flex items-center gap-1">{formatRate(item.rate, 15)}</div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RelatedGamesSlide;
