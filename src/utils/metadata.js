export function generatePageMetadata({ title, description, url = '', image = '' }) {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'en_US',
            url: `${process.env.REACT_APP_BASE_MODULE_URL}${url}`,
            siteName: 'Nextads',
            images: [{ url: `${webUrl}${image}`, width: 1200, height: 630 }],
        },
        icons: {
            icon: `${process.env.REACT_APP_BASE_MODULE_URL}/images/image-default.png`,
        },
    };
}
