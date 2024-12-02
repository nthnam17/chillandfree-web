import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import NewsMain from './NewsMain';

const PopularNewsSlide = ({ data, isMobile }) => {
    return (
        <div className="">
            <Swiper
                loop
                spaceBetween={20}
                breakpoints={{
                    375: {
                        slidesPerView: 1.5,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                grabCursor={true}
                initialSlide={0}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={`${index}-index12`}>
                        <NewsMain isMobile={isMobile} data={item} index={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PopularNewsSlide;
