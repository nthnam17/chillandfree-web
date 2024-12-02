import { FC, memo, useContext } from 'react';
import Head from 'next/head';

const Metatags = ({ metaTitle, metaDescription, metaSlug, thumbnail, logo, keywords, canonical }) => {
    return (
        <Head>
            <title>{metaTitle}</title>
            <meta charSet="UTF-8" />
            <link rel="surl" href={metaSlug}></link>
            <link rel="canonical" href={canonical} />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={keywords}></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta property="og:url" content={metaSlug}></meta>
            <meta property="og:title" content={metaTitle}></meta>
            <meta property="og:description" content={metaDescription}></meta>
            <meta property="og:image" content={thumbnail}></meta>
            <meta property="og:type" content="homes"></meta>
            <meta property="og:image:height" content="630"></meta>
            <meta property="og:image:width" content="1200"></meta>
            <meta property="twitter:url" content={metaSlug}></meta>
            <meta property="twitter:title" content={metaTitle}></meta>
            <meta property="twitter:description" content={metaDescription}></meta>
            <meta property="twitter:image" content={thumbnail}></meta>
        </Head>
    );
};

export default memo(Metatags);
