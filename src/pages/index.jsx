import HomeSlide from '../components/desktop/home-page/HomeSlide';
import HomeContent from '../components/desktop/home-page/HomeContent';
import { customFetch } from '../utils/customFetch';
import { isMobile } from '../utils/userAgent';
import MetaTags from '../components/common/meta-tags';
import ErrorPage from '../components/error-page';

// export async function getServerSideProps(context) {
//     const { req } = context;
//     const lang = req.cookies.lang || 'VI';
//     const mobile = isMobile(req.headers['user-agent']);

//     try {
//         const res = await customFetch('/page/', {
//             headers: {
//                 'x-lang': lang.toUpperCase(),
//             },
//         });

//         if (res.error.code === 200) {
//             const { data } = res;
//             return { props: { data, mobile } };
//         }
//         return {
//             props: { error: 'Lỗi' },
//         };
//     } catch (error) {
//         console.log('Lỗi:', error);
//         return {
//             props: { error: error.message },
//         };
//     }
// }

export default function Home({ mobile }) {
    // if (error) {
    //     return <ErrorPage />;
    // }

    return (
        <>
            <MetaTags
            // logo={data.image}
            // thumbnail={data.favicon}
            // keywords={data.meta_keyword}
            // metaTitle={data.meta_title}
            // metaDescription={data.meta_desctiption}
            // canonical={`${process.env.REACT_APP_BASE_MODULE_URL}/`}
            />

            {/* <HomeSlide dataSlider={data.slider} /> */}
            {/* <HomeContent
                gameHot={data.gameHot}
                dataHero={data.galaxy}
                dataAchiments={data.achiments}
                dataPartner={data.partner}
                dataBenefit={data.benefit}
                isMobile={mobile}
            /> */}
        </>
    );
}
