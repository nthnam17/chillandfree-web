import { motion } from 'framer-motion';
import { ButtonAnimation, SlideLeft, SlideRight, SlideUp } from '../../../../utils/animation';
import useTrans from '../../../../../lib/hooks/useTrans';
import { formatCurrency } from '../../../../utils/formatCurrency';
import CustomImage from '../../../common/CustomImage';
import GameCampaignMain from '../../game-campaign/GameCampaignMain';
import Pagination from '../../../common/Pagination';
import { useEffect, useState } from 'react';
import { customFetch } from '../../../../utils/customFetch';
import Link from 'next/link';

const EventGame = ({ dataPage, isMobile }) => {
    const trans = useTrans();
    const [dataGame, setDataGame] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setDataGame(dataPage.game.items);
        setTotalPage(dataPage.game.totalPages);
        setCurrentPage(dataPage.game.pageIndex);

    }, [dataPage.game]);

    const handlePageChange = async (page) => {
        try {
            let param = [`pageIndex=${page}`, `pageSize=12`, `homePageSlug=${dataPage.slug}`].filter(Boolean).join('&');

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
        <div className="lg:container lg:px-0 xs:px-4 m-auto">
            <div className="intro font-inter italic text-white py-10 text-center text-[23px] font-semibold">
                {dataPage.description}
            </div>

            <div className="text-white">
                <div className="text-center">
                    <motion.h2
                        className="text-[40px] text-secondary"
                        variants={isMobile ? SlideUp(0.2) : SlideRight(0.2)}
                        initial="initial"
                        whileInView="animate"
                    >
                        {trans.menu['event_game']}
                    </motion.h2>
                    <motion.p
                        className="text-white text-[25px]"
                        variants={isMobile ? SlideUp(0.4) : SlideLeft(0.4)}
                        initial="initial"
                        whileInView="animate"
                    >
                        {trans.event_game_sub}
                    </motion.p>
                </div>

                {/* BENEFIT SECTION CONTENT */}
                <div className="w-full py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-6 my-4">
                        {dataPage.galaxy.map((item, index) => (
                            <motion.div
                                className="outline-item h-full"
                                key={index}
                                variants={isMobile ? SlideUp(0.2 * index) : SlideRight(0.2 * index)}
                                initial="initial"
                                whileInView="animate"
                                whileHover={{ y: -5 }}
                            >
                                <div className="benefit-item-inner flex flex-col items-center h-full">
                                    <div className="h-1/3 px-4 my-10">
                                        <CustomImage
                                            src={`${process.env.REACT_APP_BASE_MODULE_URL}${item.image}`}
                                            width={270}
                                            height={170}
                                            alt={`benefit_${item.id}`}
                                            className="w-full h-full object-cover "
                                        />
                                    </div>
                                    <div className="h-1/3">
                                        <p className="text-primary text-lg text-center overflow-hidden text-ellipsis line-clamp-2">
                                            {item.title}
                                        </p>
                                    </div>
                                    <div className="h-1/3">
                                        <p className="text-white text-base text-center italic overflow-hidden text-ellipsis line-clamp-3">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gói game */}
            <div className="text-white">
                <div className="text-center">
                    <motion.h2
                        className="text-[40px] text-secondary uppercase"
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                    >
                        {trans.pack_game}
                    </motion.h2>
                    <motion.p
                        className="text-white text-[25px]"
                        variants={SlideUp(0.4)}
                        initial="initial"
                        whileInView="animate"
                    >
                        {trans.event_game_sub}
                    </motion.p>
                </div>
                <div className="w-full py-10 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xs:grid-cols-1 justify-between items-center gap-6 my-4">
                        {dataPage.packageGame.map((item, index) => (
                            <motion.div
                                className="package-item text-center text-[#51FBB4] text-[25px] relative"
                                key={index}
                                variants={isMobile ? SlideUp(0.2 * index) : SlideLeft(0.2 * index)}
                                initial="initial"
                                whileInView="animate"
                                whileHover={{ y: -5 }}
                            >
                                {item.is_hot == 1 && (
                                    <p className="best absolute top-[1.1rem] right-[-2.5rem] uppercase text-[13px]">
                                        best seller
                                    </p>
                                )}
                                <div className="py-10 px-5">
                                    <div className="h-[240px] md:h-[260px] flex justify-center">
                                        <CustomImage
                                            src={`${process.env.REACT_APP_BASE_MODULE_URL}${item.image}`}
                                            alt={`benefit`}
                                            width={282}
                                            height={260}
                                            className="object-cover hover:scale-110 transform transition duration-300"
                                        />
                                    </div>
                                    <p className="font-spaceAge text-center uppercase py-3">{item.title}</p>
                                    <p className="text-white text-lg italic pb-3 overflow-hidden text-ellipsis line-clamp-3 h-[96px]">
                                        {item.description}
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-1 md:gap-4 xs:gap-2">
                                        <div className="text-[30px]">
                                            <p className="xs:text-2xl font-extrabold">
                                                {formatCurrency(Number(item.price))}
                                            </p>
                                            <p className="xs:text-2xl font-semibold">VND</p>
                                        </div>
                                        <div className="flex justify-center items-center self-center">
                                            <motion.button
                                                className=" text-[#1F0163] bg-yellow-gradient rounded-md font-semibold px-5 py-3 w-max shadow-lg lg:text-lg xs:text-sm"
                                                {...ButtonAnimation(
                                                    0.9,
                                                    1.1,
                                                    'linear-gradient(180deg, #8563ff 0%, #090c4e 100%)',
                                                    '#fff',
                                                    10,
                                                    600,
                                                )}
                                            >
                                                <Link href="/lien-he">{trans.contact_us}</Link>
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 justify-between items-center my-8">
                <div className="lg:col-span-5 lg:order-1 xs:order-2 xs:col-span-12 flex flex-col gap-4">
                    <motion.h3
                        className="lg:text-[40px] xs:text-xl text-secondary leading-none"
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                    >
                        {trans.you_can}
                    </motion.h3>
                    <motion.p
                        className="text-white italic lg:text-base xs:text-sm"
                        variants={SlideUp(0.4)}
                        initial="initial"
                        whileInView="animate"
                    >
                        {trans.create_game}
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
                            10,
                            600,
                        )}
                    >
                        {trans.free_experience}
                    </motion.button>
                </div>

                <div className="col-span-1"></div>

                <motion.div
                    className="lg:col-span-6 xs:col-span-12 lg:order-2 xs:order-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <CustomImage
                        src={`${process.env.REACT_APP_BASE_MODULE_URL}${dataPage.image}`}
                        width={716}
                        height={340}
                        alt="hero-2"
                        className="hover:scale-110 transform transition duration-300"
                    />
                </motion.div>
            </div>

            {/* LIST GAME */}
            <div className="flex flex-col gap-6 items-center md:container mt-10 md:mt-0 pb-8">
                <h2 className="text-secondary font-normal text-[28px] md:text-[36px] lg:text-[40px] text-shadow-custom text-center uppercase">
                    list game
                </h2>

                <div className="space-y-8">
                    <div className="grid grid-cols-12 gap-4 md:gap-6 xs:mb-5">
                        {dataGame.map((item, index) => (
                            <div key={index} className="lg:col-span-4 md:col-span-6 xs:col-span-12">
                                <GameCampaignMain isMobile={isMobile} data={item} slug={`/event-game`} />
                            </div>
                        ))}
                    </div>
                    <Pagination total={totalPage} currentPage={currentPage} onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
    );
};

export default EventGame;
