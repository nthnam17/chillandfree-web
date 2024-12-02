import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomImage from '../../common/CustomImage';
import LeftArrow from '/public/images/left-arrow.png';
import RightArrow from '/public/images/right-arrow.png';
import useTrans from '../../../../lib/hooks/useTrans';
import { SlideLeft, SlideUp } from '../../../utils/animation';

const BenefitSection = ({ dataBenefit, isMobile }) => {
    const trans = useTrans();

    return (
        <div id="benefit-section" className="relative w-full pb-20">
            <div className="lg:container mx-auto relative z-20 mt-10">
                <div className="flex flex-col items-center justify-center px-10">
                    {/* BENEFIT SECTION TITLE */}
                    <motion.div
                        className="capitalize font-bold lg:text-[40px] xs:text-base text-center flex items-center justify-center mb-10"
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                    >
                        <CustomImage src={LeftArrow} alt="left-arrow" className="h-auto max-h-full" />
                        <h2 className="text-white bg-[#51FBB41A] lg:px-6 xs:px-0 my-4 leading-5 md:leading-[50px]">
                            {trans.homeBenefit.title.white} <span className="text-secondary">nextads</span>
                        </h2>
                        <CustomImage src={RightArrow} alt="right-arrow" className="h-auto max-h-full" />
                    </motion.div>

                    {/* BENEFIT SECTION CONTENT */}
                    <div className=" w-full">
                        <div className="grid grid-cols-12 justify-between items-center gap-6 my-4">
                            {dataBenefit.map((item, index) => (
                                <motion.div
                                    className="lg:col-span-3 sm:col-span-6 xs:col-span-12 outline-item h-full"
                                    key={index}
                                    variants={isMobile ? SlideUp(0.2 * index) : SlideLeft(0.2 * index)}
                                    initial="initial"
                                    whileInView="animate"
                                >
                                    <div className="benefit-item-inner flex flex-col items-center h-full">
                                        <div className="h-1/3 px-4 my-10">
                                            <CustomImage
                                                src={`${process.env.REACT_APP_BASE_MODULE_URL}${item.image}`}
                                                width={168}
                                                height={168}
                                                alt={`benefit_${item.id}`}
                                                className="hover:scale-110 transform transition duration-300 w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="">
                                            <p className="text-primary text-lg text-center overflow-hidden text-ellipsis line-clamp-2">
                                                {item.title}
                                            </p>
                                        </div>
                                        <div className="pt-5">
                                            <p className="text-white text-base text-center italic overflow-hidden text-ellipsis line-clamp-5">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitSection;
