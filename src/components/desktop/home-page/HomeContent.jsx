import React from 'react';
import CustomImage from '../../common/CustomImage';
import HeroItem from '/public/images/hero_item.png';
import HomeHero from './HomeHero';
import NumberSection from './NumberSection';
import PartnerSection from './PartnerSection';
import BenefitSection from './BenefitSection';

const HomeContent = ({ dataHero, gameHot, dataAchiments, dataPartner, dataBenefit, isMobile }) => {
    return (
        <div id="home-content">
            <HomeHero gameHot={gameHot} dataHero={dataHero} isMobile={isMobile} />
            <NumberSection dataAchiments={dataAchiments} isMobile={isMobile} />
            <PartnerSection dataPartner={dataPartner} isMobile={isMobile} />
            <BenefitSection dataBenefit={dataBenefit} isMobile={isMobile} />
        </div>
    );
};

export default HomeContent;
