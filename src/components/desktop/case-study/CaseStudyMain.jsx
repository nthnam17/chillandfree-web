import React, { useEffect } from 'react';
import CustomImage from '../../common/CustomImage';
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight, SlideUp } from '../../../utils/animation';
import { formatDate } from '../../../utils/formatDate';
import useTrans from '../../../../lib/hooks/useTrans';

const CaseStudyMain = ({ data, index, isMobile }) => {
    const trans = useTrans();

    return (
        <div className="lg:p-10 md:p-8 sm:p-6 xs:p-4">
            <div className="grid grid-cols-12 gap-4 border-b-[1px] border-primary pb-10">
                <div className="col-span-12">
                    <div className="lg:flex justify-between w-full sm::flex-col">
                        <motion.div
                            variants={isMobile ? SlideUp(0.2) : SlideRight(0.2)}
                            initial="initial"
                            whileInView="animate"
                            className="flex flex-col my-4"
                        >
                            <p className="text-white text-lg font-semibold">{trans.project_name}</p>
                            <p className="italic text-white font-normal text-lg">{data.name}</p>
                        </motion.div>
                        <motion.div
                            variants={isMobile ? SlideUp(0.2) : SlideRight(0.4)}
                            initial="initial"
                            whileInView="animate"
                            className=" flex flex-col my-4"
                        >
                            <p className="text-white text-lg font-semibold">{trans.customer}</p>
                            <p className="italic text-white font-normal text-lg">{data.customer}</p>
                        </motion.div>
                        <motion.div
                            variants={isMobile ? SlideUp(0.2) : SlideRight(0.6)}
                            initial="initial"
                            whileInView="animate"
                            className=" flex flex-col my-4"
                        >
                            <p className="text-white text-lg font-semibold">{trans.fromTimeToTime}</p>
                            <p className="italic text-white font-normal text-lg">
                                {formatDate(data.date_from)} - {formatDate(data.date_to)}
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    variants={isMobile ? SlideUp(0.2) : SlideLeft(0.2)}
                    initial="initial"
                    whileInView="animate"
                    className="col-span-12"
                >
                    <CustomImage
                        src={`${process.env.REACT_APP_BASE_MODULE_URL}/${data.image}`}
                        alt={`case-study-${data.id}`}
                        className="w-full h-auto object-contain"
                        width={1200}
                        height={408}
                    />
                </motion.div>

                <motion.div
                    variants={isMobile ? SlideUp(0.2) : SlideRight(0.2 * index)}
                    initial="initial"
                    whileInView="animate"
                    className="col-span-12"
                >
                    <div className="lg:px-10 md:px-0">
                        <div
                            className="text-white italic font-normal text-lg text-center"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        ></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudyMain;
