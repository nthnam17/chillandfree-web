import React from 'react';
import CustomImage from '../../common/CustomImage';
import caseStudyBanner from '/public/images/case-study-banner.png';
import { motion } from 'framer-motion';
import { SlideUp } from '../../../utils/animation';

const CaseStudyBanner = ({ image, slogan }) => {
    return (
        <div className="relative w-full case-study-banner">
            <CustomImage
                src={`${process.env.REACT_APP_BASE_MODULE_URL}/${image}`}
                alt="case-study-banner"
                width={1920}
                height={800}
                className="w-full h-auto"
            />

            {/* Text container */}
            <div className="absolute inset-0 flex justify-center items-center">
                <motion.div
                    variants={SlideUp(0.2)}
                    initial="initial"
                    whileInView="animate"
                    className="text-white text-4xl font-bold text-center drop-shadow-2xl flex flex-col gap-4"
                >
                    <h2 className="text-[6vw] leading-tight md:text-[30px] xs:text-lg">{slogan}</h2>
                    {/* <p className="text-secondary italic text-[6vw] md:text-[45px] xs:text-xl leading-tight">
                        gamification ấn tượng
                    </p> */}
                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudyBanner;
