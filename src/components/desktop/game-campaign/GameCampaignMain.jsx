import React, { useState } from 'react';
import CustomImage from '../../common/CustomImage';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlideUp, SlideRight } from '../../../utils/animation';
import useTrans from '../../../../lib/hooks/useTrans';
import EventGameDemo from '../event_game-page/EventGameDemo';
import currencyIcon from '/public/images/currency_icon.png';
import { formatCurrency } from '../../../utils/formatCurrency';

const GameCampaignMain = ({ data, isMobile, index, slug }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const trans = useTrans();

    const handleDemoClick = (data) => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <motion.div
                variants={isMobile ? SlideUp(0.2 * index) : SlideRight(0.2 * index)}
                initial="initial"
                whileInView="animate"
                className="bg-[#1A1B46] rounded-[10px] p-2 flex flex-col h-full"
            >
                <div>
                    <div className="flex-shrink-0 h-[200px] w-full">
                        <CustomImage
                            className="rounded-md object-cover w-full h-full"
                            src={`${process.env.REACT_APP_BASE_MODULE_URL}${data.thumbnail}`}
                            alt={`game-campaign-${data.id}`}
                            width={450}
                            height={229}
                        />
                    </div>

                    <div className="flex-grow flex flex-col justify-between gap-4 mt-4">
                        <p className="text-white font-semibold lg:text-xl xs:text-sm overflow-hidden text-ellipsis line-clamp-2 ">
                            {data.name}
                        </p>

                        <div className="flex gap-4 pb-4">
                            {slug === '/event-game' ? (
                                <>
                                    <button className="rounded-full bg-primary text-white lg:px-8 lg:py-2 xs:px-3 xs:py-1 lg:text-base xs:text-[11px]">
                                        {trans.create_game}
                                    </button>
                                    <button
                                        onClick={() => handleDemoClick(data)}
                                        className="rounded-full bg-[#507E19] text-white lg:px-8 lg:py-2 xs:px-3 xs:py-1 lg:text-base xs:text-[11px]"
                                    >
                                        {trans.demo}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="rounded-full bg-primary text-white lg:px-8 lg:py-2 xs:px-3 xs:py-1 lg:text-base xs:text-[11px] flex items-center gap-2">
                                        <CustomImage src={currencyIcon} alt="currency-icon" width={22} height={22} />
                                        <span>{formatCurrency(data.price)} VND</span>
                                    </button>
                                    <button className="rounded-full bg-[#507E19] text-white lg:px-8 lg:py-2 xs:px-3 xs:py-1 lg:text-base xs:text-[11px]">
                                        <Link href={`${slug}${data.slug}`}>{trans.detail}</Link>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            <EventGameDemo isOpen={isModalOpen} onClose={handleCloseModal} slug={data.iframe} title={data.name} />
        </>
    );
};

export default GameCampaignMain;
