import React, { useEffect, useState } from 'react';

const EventGameDetail = ({ data }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        setContent(data.content);
    }, [data]);

    return (
        <div className="lg:col-span-7 xs:col-span-12 border-white ">
            <div className="rounded-xl bg-campaign-detail p-4 border-[1px] mb-4 border-white">
                <iframe
                    allowFullScreen={true}
                    src={data.iframe}
                    title={data?.name}
                    allow="autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write;"
                    sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups"
                    loading="eager"
                    data-hj-allow-iframe="true"
                    className="w-full h-[600px]"
                ></iframe>

                <p className="text-primary font-semibold text-[30px]">Reskin Notes</p>

                <p className="text-white" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
};

export default EventGameDetail;
