import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import CustomImage from '../../common/CustomImage';
import LeftArrow from '/public/images/left-arrow.png';
import RightArrow from '/public/images/right-arrow.png';
import SupportImage from '/public/images/support-img.png';
import useTrans from '../../../../lib/hooks/useTrans';
import { ButtonAnimation, SlideRight, SlideUp } from '../../../utils/animation';
import Link from 'next/link';

const PartnerSection = ({ dataPartner, isMobile }) => {
    const trans = useTrans();

    return (
        <div id="partner-section" className="relative w-full">
            <div className="lg:container mx-auto relative z-20 mt-10">
                <div className="flex flex-col items-center justify-center px-5 md:px-10">
                    {/* PARTNER SECTION TITLE */}
                    <motion.div
                        className="capitalize font-bold lg:text-[40px] xs:text-lg text-center flex items-center mb-10"
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                    >
                        <CustomImage src={LeftArrow} alt="left-arrow" className="h-full" />
                        <h2 className="text-white bg-[#51FBB41A] px-6 my-4 leading-10 md:leading-[50px]">
                            {trans.homePartner.title.white}
                            <span className="text-secondary">{trans.homePartner.title.yellow}</span>
                        </h2>
                        <CustomImage src={RightArrow} alt="right-arrow" />
                    </motion.div>

                    {/* PARTNER SECTION CONTENT */}
                    <div className=" w-full">
                        <div className="grid grid-cols-12 justify-between items-center gap-6 my-4">
                            {dataPartner.map((item, index) => (
                                <motion.div
                                    className="lg:col-span-3 xs:col-span-6"
                                    key={index}
                                    variants={isMobile ? SlideUp(0.2 * index) : SlideRight(0.2 * index)}
                                    initial="initial"
                                    whileInView="animate"
                                >
                                    <CustomImage
                                        src={`${process.env.REACT_APP_BASE_MODULE_URL}${item.image}`}
                                        width={346}
                                        height={130}
                                        alt={`partner-${item.id}`}
                                        className="hover:scale-110 transform transition duration-300"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* SUPPORT SECTION CONTENT */}
                    <div className=" w-full outline-item mt-6">
                        <div className="grid grid-cols-12 justify-between items-center gap-6 support-item-inner py-20">
                            <motion.div
                                className="lg:col-span-6 xs:col-span-12 flex items-center justify-center"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <CustomImage src={SupportImage} alt="support image" />
                            </motion.div>

                            <div className="lg:col-span-6 xs:col-span-12 flex flex-col gap-4">
                                <motion.p
                                    className="lg:text-[30px] lg:leading-loose xs:text-lg xs:leading-none text-white font-semibold"
                                    variants={SlideUp(0.2)}
                                    initial="initial"
                                    whileInView="animate"
                                >
                                    {trans.support_content}
                                </motion.p>

                                <motion.button
                                    className="uppercase text-[#1F0163] border border-solid border-1 bg-secondary rounded-md font-semibold py-2 px-6 w-max shadow-lg lg:text-base xs:text-sm"
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
                                    <Link href="/lien-he">{trans.support}</Link>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;
