'use client';
import React from 'react';
import { motion } from 'framer-motion';
import CustomImage from '../../../common/CustomImage';
import campaignBannerItem from '/public/images/campaign_banner_item.png';
import styles from './Banner.module.css';
import { SlideUp } from '../../../../utils/animation';
import useTrans from '../../../../../lib/hooks/useTrans';

const GameCampaignBanner = ({ title, image, slogan }) => {
    const trans = useTrans();

    return (
        <div className="relative w-full">
            <div className={`${styles.bg} h-[200px] md:h-[400px] lg:h-[600px]`}>
                <div className="p-4 flex justify-center items-center">
                    <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center justify-center p-4 text-center lg:text-left">
                        {/* Image Section */}
                        <motion.div
                            variants={SlideUp(0.2)}
                            initial="initial"
                            whileInView="animate"
                            className="md:relative lg:block xs:hidden w-[80%] md:w-[30%] lg:w-[50%] aspect-[788.12/373.43]"
                        >
                            <CustomImage
                                src={`${process.env.REACT_APP_BASE_MODULE_URL}${image}`}
                                width={773}
                                height={366}
                                alt="campaign-banner-item"
                                className="object-contain"
                            />
                        </motion.div>

                        {/* Text Section */}
                        <motion.div
                            variants={SlideUp(0.2)}
                            initial="initial"
                            whileInView="animate"
                            className="flex flex-col lg:gap-4 lg:items-start xs:items-center"
                        >
                            <h2 className="text-white text-shadow-custom font-normal xs:text-sm lg:text-[30px] leading-7 md:leading-8 lg:leading-9">
                                {title}
                            </h2>
                            <p className="text-secondary text-shadow-custom font-bold text-sm lg:text-[30px] italic uppercase leading-10 md:leading-[3rem]">
                                {slogan}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCampaignBanner;
