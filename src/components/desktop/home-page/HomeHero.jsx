import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomImage from '../../common/CustomImage';
import useTrans from '../../../../lib/hooks/useTrans';
import { formatRate } from '../../../utils/formatRate';
import RelatedGamesSlide from './RelatedGamesSlide';
import { ButtonAnimation, SlideLeft, SlideRight, SlideUp } from '../../../utils/animation';
import Link from 'next/link';

const HomeHero = ({ dataHero, gameHot, isMobile }) => {
    const trans = useTrans();

    return (
        <div id="hero-section" className="relative w-full">
            <div className="lg:container mx-auto relative z-20">
                <div className="flex flex-col items-center justify-center lg:py-20 px-5 md:px-10">
                    {/* HERO SECTION TITLE */}
                    <div className="capitalize font-bold lg:text-[80px] xs:text-[30px] text-center p-10">
                        <motion.h2
                            className="text-white leading-none"
                            variants={SlideUp(0.2)}
                            initial="initial"
                            whileInView="animate"
                        >
                            {trans.homeHero.title.white} <p className="text-secondary">NextAds</p>
                        </motion.h2>
                    </div>
                    {/* FIRST CONTENT */}
                    {dataHero.map((item, index) => (
                        <div
                            className="grid grid-cols-12 justify-between items-center gap-6 my-4"
                            key={`dataHero1-${index}`}
                        >
                            {index % 2 === 0 ? (
                                <>
                                    <motion.div
                                        className="lg:col-span-6 xs:col-span-12"
                                        variants={isMobile ? SlideUp(0.2) : SlideRight(0.2)}
                                        initial="initial"
                                        whileInView="animate"
                                    >
                                        <CustomImage
                                            src={`${process.env.REACT_APP_BASE_MODULE_URL}${item.image}`}
                                            width={716}
                                            height={452}
                                            alt="hero-1"
                                            className="hover:scale-110 transform transition duration-300 w-full"
                                        />
                                    </motion.div>

                                    <div className="col-span-1"></div>

                                    <div className="lg:col-span-5 xs:col-span-12 flex justify-end">
                                        <div className="py-10">
                                            <motion.h3
                                                className="lg:text-[40px] xs:text-xl text-secondary leading-none"
                                                variants={SlideUp(0.4)}
                                                initial="initial"
                                                whileInView="animate"
                                            >
                                                {item.title}
                                            </motion.h3>
                                            <motion.p
                                                className="text-white italic lg:text-base xs:text-sm mt-5"
                                                variants={SlideUp(0.6)}
                                                initial="initial"
                                                whileInView="animate"
                                            >
                                                {item.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="lg:col-span-5 lg:order-1 xs:order-2 xs:col-span-12 flex flex-col gap-4">
                                        <motion.h3
                                            className="lg:text-[40px] xs:text-xl text-secondary leading-none"
                                            variants={SlideUp(0.2)}
                                            initial="initial"
                                            whileInView="animate"
                                        >
                                            {item.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-white italic lg:text-base xs:text-sm mt-3"
                                            variants={SlideUp(0.4)}
                                            initial="initial"
                                            whileInView="animate"
                                        >
                                            {item.description}
                                        </motion.p>
                                        <motion.button
                                            className="uppercase text-[#1F0163] border border-solid border-1 bg-secondary rounded-md font-semibold p-2 w-max shadow-lg lg:text-lg xs:text-sm"
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
                                            <Link href="/event-game">{trans.free_experience}</Link>
                                        </motion.button>
                                    </div>

                                    <div className="col-span-1 lg:order-1"></div>

                                    <motion.div
                                        className="lg:col-span-6 xs:col-span-12 lg:order-2 xs:order-1"
                                        variants={isMobile ? SlideUp(0.2) : SlideLeft(0.2)}
                                        initial="initial"
                                        whileInView="animate"
                                    >
                                        <CustomImage
                                            src={`${process.env.REACT_APP_BASE_MODULE_URL}${item.image}`}
                                            alt="hero-2"
                                            width={716}
                                            height={452}
                                            className="hover:scale-110 transform transition duration-300"
                                        />
                                    </motion.div>
                                </>
                            )}
                        </div>
                    ))}

                    {/* THIRD CONTENT */}
                    <div className="grid grid-cols-12 justify-between items-center my-4 gap-6">
                        <div className="lg:col-span-6 xs:col-span-12">
                            <div className="bg-black-gradient rounded-3xl p-4 pb-0">
                                <div className="flex flex-col items-start gap-4">
                                    <div className="flex gap-2 w-full">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Link href={`/game-campaign${gameHot[0].slug}`}>
                                                <CustomImage
                                                    src={`${process.env.REACT_APP_BASE_MODULE_URL}${gameHot[0].thumbnail}`}
                                                    alt="hero item"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </motion.div>
                                        <div className="w-full">
                                            <motion.p
                                                className="text-white font-bold text-[30px]"
                                                variants={SlideUp(0.2)}
                                                initial="initial"
                                                whileInView="animate"
                                            >
                                                <Link href={`/game-campaign${gameHot[0].slug}`}>
                                                    {gameHot[0].name}
                                                </Link>
                                            </motion.p>
                                            <motion.p
                                                className="text-white font-semibold text-base"
                                                variants={SlideUp(0.4)}
                                                initial="initial"
                                                whileInView="animate"
                                            >
                                                <span className="italic font-normal">Platform: </span>Desktop, Tablet
                                            </motion.p>
                                            <div className="flex flex-col md:flex-row justify-between">
                                                <motion.p
                                                    className="text-white font-semibold flex items-center gap-2 text-base"
                                                    variants={SlideUp(0.6)}
                                                    initial="initial"
                                                    whileInView="animate"
                                                >
                                                    <span className="italic font-normal">Rating: </span>
                                                    {formatRate(gameHot[0].rate)}
                                                </motion.p>

                                                <motion.p
                                                    className="text-white font-semibold flex items-center gap-2 text-base"
                                                    variants={SlideUp(0.8)}
                                                    initial="initial"
                                                    whileInView="animate"
                                                >
                                                    <span className="italic font-normal">Vote: </span>
                                                    {gameHot[0].vote}
                                                </motion.p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full bg-[#183D5E] h-[1px]"></div>
                                    <motion.div
                                        className="text-center w-full"
                                        variants={SlideRight(0.4)}
                                        initial="initial"
                                        whileInView="animate"
                                    >
                                        <p className="text-center text-white font-bold text-[30px]">Related Games</p>
                                        <RelatedGamesSlide data={gameHot.slice(1)} />
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1"></div>

                        <div className="lg:col-span-5 xs:col-span-12 flex flex-col gap-4">
                            <motion.h3
                                className="lg:text-[40px] xs:text-[20px] text-secondary uppercase"
                                variants={SlideUp(0.2)}
                                initial="initial"
                                whileInView="animate"
                            >
                                {trans.homeHero['hero_title_3']}
                            </motion.h3>
                            <motion.p
                                className="text-white italic lg:text-base xs:text-sm"
                                variants={SlideUp(0.4)}
                                initial="initial"
                                whileInView="animate"
                            >
                                Giải pháp toàn diện tạo sự hấp dẫn cho các chiến dịch marketing. Tăng cảm giác gắn kết
                                và động lực làm việc cho nhân viên của mình thông qua hình thức game hóa với chi phí tối
                                ưu, tiện lợi.
                            </motion.p>
                            <motion.button
                                className="uppercase text-[#1F0163] border border-solid border-1 bg-secondary rounded-md font-semibold p-2 w-max shadow-lg lg:text-lg xs:text-sm"
                                variants={SlideUp(0.6)}
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
                                <Link href="/game-campaign">{trans.discover_now}</Link>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
