import React from 'react';
import { SlideUp } from '../../../utils/animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GameCampaignMain from './GameCampaignMain';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import useTrans from '../../../../lib/hooks/useTrans';

const RelatedGameCampaign = ({ data, slug }) => {
    const trans = useTrans();

    return (
        <div className="py-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <motion.h2
                    variants={SlideUp(0.2)}
                    initial="initial"
                    whileInView="animate"
                    className="uppercase text-secondary text-[20px] md:text-[40px] text-shadow-custom"
                >
                    Game khác
                </motion.h2>
                <motion.h2 variants={SlideUp(0.2)} initial="initial" whileInView="animate">
                    <Link href={slug} className="uppercase text-white text-shadow-custom text-xl">
                        {trans.see_more}
                    </Link>
                </motion.h2>
            </div>

            <div className="my-4">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop
                    breakpoints={{
                        400: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <GameCampaignMain data={item} slug={slug} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default RelatedGameCampaign;
