import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import CustomImage from '../../common/CustomImage';
import LeftArrow from '/public/images/left-arrow.png';
import RightArrow from '/public/images/right-arrow.png';
import NumberImage from '/public/images/number-section.png';
import useTrans from '../../../../lib/hooks/useTrans';
import { SlideLeft, SlideUp } from '../../../utils/animation';
import { formatNumber } from '../../../utils/formatNumber';

const NumberSection = ({ dataAchiments, isMobile }) => {
    const trans = useTrans();

    return (
        <div id="number-section" className="relative w-full mt-10 md:mt-0">
            <div className="lg:container mx-auto relative z-20">
                <div className="flex flex-col items-center justify-center px-5 md:px-10">
                    {/* NUMBER SECTION TITLE */}
                    <motion.div
                        className="capitalize font-bold lg:text-[40px] xs:text-xl text-center flex items-center justify-center"
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                    >
                        <CustomImage src={LeftArrow} alt="left-arrow" />
                        <h2 className="text-white bg-[#51FBB41A] leading-5 md:leading-[50px] px-1 md:px-6">
                            {trans.homeNumber.title.white}
                            <span className="text-secondary">{trans.homeNumber.title.yellow}</span>
                        </h2>
                        <CustomImage src={RightArrow} alt="right-arrow" />
                    </motion.div>

                    {/* NUMBER SECTION CONTENT */}
                    <div className=" w-full">
                        <div className="grid grid-cols-12 justify-between items-stretch gap-6 my-6">
                            {dataAchiments.map((item, index) => (
                                <motion.div
                                    className="lg:col-span-3 xs:col-span-6 outline-item text-center p-4 flex flex-col justify-between h-full"
                                    variants={isMobile ? SlideUp(0.2 * index) : SlideLeft(0.2 * index)}
                                    initial="initial"
                                    whileInView="animate"
                                    key={`number-${index}`}
                                >
                                    <div className="number-item-inner flex flex-col justify-center h-full">
                                        {/* Parent div for p and h5 */}
                                        <div className="flex flex-col justify-between h-full">
                                            <p className="font-bold lg:text-xl md:text-base xs:text-sm text-white uppercase min-h-[48px] flex items-center justify-center">
                                                {item.title}
                                            </p>
                                            <h5 className="font-normal lg:text-3xl md:text-2xl xs:text-xl text-primary">
                                                {formatNumber(item.count)}+
                                            </h5>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-12 justify-between items-center gap-6 my-6">
                            <div className="col-span-12 outline-item border-2s number-item">
                                <div className="number-item-inner">
                                    <CustomImage src={NumberImage} alt="number image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberSection;
