import React from 'react';
import { motion } from 'framer-motion';
import GameIntroSlide from './GameIntroSlide';
import { SlideLeft, SlideRight, SlideUp } from '../../../utils/animation';
import useTrans from '../../../../lib/hooks/useTrans';
import Link from 'next/link';

const GameCampaignIntro = ({ dataGame, isMobile }) => {
    const trans = useTrans();

    return (
        <div className="bg-campaign-intro">
            <div className="p-20 md:px-0 lg:px-10 container m-auto">
                <div className="flex flex-col gap-4 items-center">
                    <motion.h2
                        variants={isMobile ? SlideUp(0.2) : SlideRight(0.2)}
                        initial="initial"
                        whileInView="animate"
                        className="text-secondary font-normal md:text-[40px] xs:text-lg text-shadow-custom leading-7 text-center mt-10 md:mt-0"
                    >
                        {trans.marketing_solution} <p className="text-white py-4">{trans.marketing_solution_2}</p>
                    </motion.h2>
                    <motion.button
                        variants={isMobile ? SlideUp(0.2) : SlideLeft(0.2)}
                        initial="initial"
                        whileInView="animate"
                        className="bg-gradient-to-b from-gradient-start to-gradient-end text-white rounded-md px-4 py-2 font-semibold lg:text-lg xs:text-sm uppercase my-4"
                    >
                        <Link href="/lien-he">{trans.advise}</Link>
                    </motion.button>
                    <div className="w-full">
                        <motion.div variants={SlideUp(0.2)} initial="initial" whileInView="animate" className="w-full">
                            <GameIntroSlide data={dataGame} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCampaignIntro;
