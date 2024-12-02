import { Suspense } from 'react';
import Loading from '../components/common/loading';
import { useRouter } from 'next/router';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import { customFetch } from '../utils/customFetch';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { isMobile } from '../utils/userAgent';

const getUTMFont = localFont({
    src: '../../public/fonts/UTM BanqueB.ttf',
    variable: '--font-utm',
    weight: '100 900',
});

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps, mobile }) {
    const router = useRouter();
    // const { pathname } = router;

    const noLayout = ['/dang-nhap', '/dang-ky', '/quen-mat-khau', '/mat-khau-moi', '/thong-bao'];

    return (
        <>
            <Head>
                <link
                    rel="icon"
                    // href={`${process.env.REACT_APP_BASE_MODULE_URL}${globalData.favicon}`}
                    type="image/x-icon"
                />
            </Head>
            <Suspense fallback={<Loading />}>
                <div className={` ${inter.className} ${getUTMFont.variable} antialiased`}>
                    {noLayout.includes(router.pathname) ? (
                        <Component {...pageProps} logo={'/images/logo.png'} isMobile={mobile} />
                    ) : (
                        <>
                            <Header logo={'/images/logo.png'} isMobile={mobile} />
                            <main>
                                <Component {...pageProps} logo={'/images/logo.png'} />
                            </main>
                            <Footer data={''} />
                        </>
                    )}
                    {/* <ToastContainer /> */}
                </div>
            </Suspense>
        </>
    );
}

// MyApp.getInitialProps = async (appContext) => {
//     const { req } = appContext.ctx;

//     const cookies = req ? req.headers.cookie : null;

//     const getLangFromCookies = (cookies) => {
//         if (!cookies) return null;
//         const match = cookies.match(/(?:^|;\s*)lang=([^;]*)/);
//         return match ? match[1] : null;
//     };

//     const lang = (getLangFromCookies(cookies) || 'vi').toUpperCase();
//     const mobile = req ? isMobile(req.headers['user-agent']) : false;

//     try {
//         const res = await customFetch('/layout', {
//             headers: {
//                 'x-lang': lang,
//             },
//         });

//         if (res.error.code === 200) {
//             const { data } = res;
//             return { globalData: data, mobile };
//         }
//         return { globalData: null, mobile };
//     } catch (error) {
//         console.log('Lỗi:', error);
//         return { globalData: null, mobile };
//     }
// };

export default MyApp;
