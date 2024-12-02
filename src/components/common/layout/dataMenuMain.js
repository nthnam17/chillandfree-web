import icon_home from '/public/images/icon_home.png';
import event_icon from '/public/images/game_event.png';
import campaign_icon from '/public/images/game camping.png';
import case_icon from '/public/images/case study.png';
import news_icon from '/public/images/news.png';
import contact_icon from '/public/images/contact.png';
import signInIcon from '/public/images/log-in.png';
import CustomImage from '../CustomImage';

export const dataMenuMain = [
    {
        id: 1,
        name: 'home',
        href: '/',
        icon: <CustomImage src={icon_home} alt="icon home" width={18} height={17} />,
    },
    {
        id: 2,
        name: 'event_game',
        href: '/event-game',
        icon: <CustomImage src={event_icon} alt="icon event" width={18} height={17} />,
    },
    {
        id: 3,
        name: 'game_campaign',
        href: '/game-campaign',
        icon: <CustomImage src={campaign_icon} alt="icon campaign" width={18} height={17} />,
    },
    {
        id: 4,
        name: 'case_study',
        href: '/case-study',
        icon: <CustomImage src={case_icon} alt="icon case" width={18} height={17} />,
    },
    {
        id: 5,
        name: 'news',
        href: '/tin-tuc',
        icon: <CustomImage src={news_icon} alt="icon news" width={18} height={17} />,
    },
    {
        id: 6,
        name: 'contact',
        href: '/lien-he',
        icon: <CustomImage src={contact_icon} alt="icon contact" width={18} height={17} />,
    },
    {
        id: 7,
        name: 'sign_in',
        href: '/dang-nhap',
        icon: <CustomImage src={signInIcon} alt="icon sign in" width={18} height={17} />,
    },
];
