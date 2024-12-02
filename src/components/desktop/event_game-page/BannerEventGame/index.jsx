import { motion } from 'framer-motion';
import { SlideUp } from '../../../../utils/animation';
import CustomImage from '../../../common/CustomImage';
import styles from './Banner.module.css';
import useTrans from '../../../../../lib/hooks/useTrans';

const BannerEventGame = ({ title, slogan, image }) => {
    const trans = useTrans();

    return (
        <div className={styles.bg}>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex justify-center items-center">
                        <div>
                            <motion.h2
                                className="text-white font-normal text-[30px] text-shadow-custom"
                                variants={SlideUp(0.2)}
                                initial="initial"
                                whileInView="animate"
                            >
                                {title}
                            </motion.h2>
                            <motion.h2
                                className="font-inter font-bold uppercase italic text-secondary text-[40px] text-shadow-custom"
                                variants={SlideUp(0.4)}
                                initial="initial"
                                whileInView="animate"
                            >
                                {slogan}
                            </motion.h2>
                            <motion.button
                                className={styles.btn}
                                variants={SlideUp(0.6)}
                                initial="initial"
                                whileInView="animate"
                                whileHover={{ y: -5 }}
                            >
                                {trans.start_now}
                            </motion.button>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="mt-10 md:mt-0"
                    >
                        <CustomImage
                            src={`${process.env.REACT_APP_BASE_MODULE_URL}${image}`}
                            width={716}
                            height={340}
                            alt="hero-2"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BannerEventGame;
