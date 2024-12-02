import React from 'react';
import CustomImage from '../../common/CustomImage';
import HeroThumb from '/public/images/hero_thumb.png';
import { formatRate } from '../../../utils/formatRate';
import GameCampaignForm from './GameCampaignForm';

const GameCampaignAction = ({ data }) => {
    return (
        <div className="lg:col-span-5 xs:col-span-12">
            <div className="rounded-xl bg-campaign-detail p-4 border-[1px] mb-4 border-white">
                <div className="flex justify-between w-full">
                    <div className="flex gap-2 w-full">
                        <CustomImage
                            src={`${process.env.REACT_APP_BASE_MODULE_URL}${data.thumbnail}`}
                            width={130}
                            height={130}
                            alt={data.name}
                            className="rounded-xl"
                        />
                        <div className="w-full">
                            <p className="text-white font-bold text-[18px] mb-2 md:text-[30px]">{data.name}</p>
                            <p className="text-white font-semibold text-sm mb-1">
                                <span className="italic font-normal">Platform: </span>
                                {data.platform.map((item) => item.name).join(', ')}
                            </p>
                            <div className="flex flex-col md:flex-row justify-between">
                                <p className="text-white font-semibold flex items-center gap-2 text-sm mb-1">
                                    <span className="italic font-normal">Rating: </span>
                                    {formatRate(data.rate)}
                                </p>
                                <p className="text-white font-semibold flex items-center gap-2 text-sm">
                                    <span className="italic font-normal">Vote: </span>
                                    {data.vote}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GameCampaignForm gameId={data.id} />
        </div>
    );
};

export default GameCampaignAction;
