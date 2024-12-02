'use client';
import React, { useEffect } from 'react';
import CustomImage from '../../common/CustomImage';
import { motion } from 'framer-motion';
import { SlideUp } from '../../../utils/animation';

const ContactBanner = ({ data }) => {
    return (
        <div className="relative w-full">
            <CustomImage
                src={`${process.env.REACT_APP_BASE_MODULE_URL}/${data.image}`}
                alt="contact-banner"
                width={1920}
                height={800}
                className="w-full h-auto"
            />

            <div className="absolute inset-0 flex justify-center items-center">
                <motion.div
                    variants={SlideUp(0.2)}
                    initial="initial"
                    whileInView="animate"
                    className="text-white font-bold text-center drop-shadow-2xl flex flex-col gap-4 px-4"
                >
                    <h2 className="text-[6vw] xs:text-sm lg:text-[48px] xl:text-[56px] text-white leading-loose">
                        {data.slogun}
                    </h2>

                    <div
                        className="xs:leading-[1.3] text-shadow-custom text-white text-[4vw] xs:text-xs lg:text-[24px] xl:text-[28px] max-w-4xl font-medium my-2"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    ></div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactBanner;
