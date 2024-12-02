import React, { useEffect, useState } from 'react';
import CustomImage from '../../common/CustomImage';
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight, SlideUp } from '../../../utils/animation';
import GameCampaignMain from './GameCampaignMain';
import Pagination from '../../common/Pagination';
import useTrans from '../../../../lib/hooks/useTrans';

const GameCampaignInfo = ({ gamification, game, isMobile, slug }) => {
    const [dataGame, setDataGame] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const trans = useTrans();

    useEffect(() => {
        setDataGame(game.items);
        setTotalPage(game.totalPages);
        setCurrentPage(game.pageIndex);
    }, [game]);

    const handlePageChange = async (page) => {
        try {
            let param = [`pageIndex=${page}`, `pageSize=12`, `homePageSlug=${slug}`].filter(Boolean).join('&');

            const res = await customFetch(`/web/game/gamePagination?${param}`, {
                headers: {
                    'x-lang': 'EN',
                },
            });

            if (res.error.code === 200) {
                const { data } = res;
                setDataGame(data.items);
                setTotalPage(data.totalPages);
                setCurrentPage(data.pageIndex);
            }
        } catch (error) {
            console.log('Lỗi:', error);
        }
    };

    return (
        <div className="bg-image pt-10 md:mt-0">
            <div className="p-4 md:p-10 container m-auto">
                <div className="flex flex-col gap-6 items-center">
                    <motion.h2
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                        className="text-secondary font-normal text-lg md:text-[36px] lg:text-[40px] text-shadow-custom text-center"
                    >
                        Gamification
                    </motion.h2>

                    <motion.p
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                        className="text-white font-normal xs:text-sm md:text-xl lg:text-[23px] text-center italic"
                    >
                        {trans.gamification_sub} <br /> {trans.gamification_sub_2}
                    </motion.p>

                    <div className="outline-item w-full">
                        <div className="campaign-item-inner lg:p-10 xs:p-4">
                            {gamification.map((item, index) =>
                                index % 2 === 0 ? (
                                    <motion.div
                                        variants={isMobile ? SlideRight(0.2) : SlideUp(0.2)}
                                        initial="initial"
                                        whileInView="animate"
                                        className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center lg:px-24 xs:px-8 my-4"
                                        key={`gamification-${index}`}
                                    >
                                        <div className="md:col-span-5">
                                            <CustomImage
                                                src={`${process.env.REACT_APP_BASE_MODULE_URL}${item.image}`}
                                                width={480}
                                                height={320}
                                                alt="campaign info 1"
                                            />
                                        </div>
                                        <div className="md:col-span-7 flex flex-col gap-2">
                                            <h3 className="text-primary text-base md:text-[28px] lg:text-[30px] md:text-left xs:text-center">
                                                {item.title}
                                            </h3>
                                            <p className="text-white italic text-sm md:text-lg md:text-left xs:text-center">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        variants={isMobile ? SlideUp(0.2) : SlideLeft(0.2)}
                                        initial="initial"
                                        whileInView="animate"
                                        className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center lg:px-24 xs:px-8 my-4"
                                        key={`gamification-${index}`}
                                    >
                                        <div className="md:col-span-7 flex flex-col gap-2 order-2 md:order-1">
                                            <h3 className="text-primary text-base md:text-[28px] lg:text-[30px] md:text-left xs:text-center">
                                                {item.title}
                                            </h3>
                                            <p className="text-white italic text-sm md:text-lg md:text-left xs:text-center">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="md:col-span-5 order-1 md:order-2">
                                            <CustomImage
                                                src={`${process.env.REACT_APP_BASE_MODULE_URL}${item.image}`}
                                                width={480}
                                                height={320}
                                                alt="campaign info 2"
                                            />
                                        </div>
                                    </motion.div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* LIST GAME */}
            <div className="flex flex-col gap-6 items-center container m-auto mt-10 md:mt-0 pb-8">
                <motion.h2
                    variants={SlideUp(0.2)}
                    initial="initial"
                    whileInView="animate"
                    className="text-secondary font-normal text-[28px] md:text-[36px] lg:text-[40px] text-shadow-custom text-center uppercase"
                >
                    list game
                </motion.h2>

                <div className="space-y-8 xs:pb-8">
                    <div className="grid grid-cols-12 gap-4 md:gap-6 xs:mb-5">
                        {dataGame.map((item, index) => (
                            <div className="lg:col-span-4 md:col-span-6 xs:col-span-12" key={index}>
                                <GameCampaignMain index={index} data={item} isMobile={isMobile} slug="/game-campaign" />
                            </div>
                        ))}
                    </div>
                    <Pagination total={totalPage} currentPage={currentPage} onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
    );
};

export default GameCampaignInfo;
