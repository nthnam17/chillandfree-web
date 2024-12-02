import React, { useEffect } from 'react';
import CloseIcon from '../../../common/icons/close-icon';

const EventGameDemo = ({ isOpen, onClose, slug, title }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleClickOutside = (event) => {
        const modal = document.getElementById('modal');
        if (modal && !modal.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div id="modal" className="bg-white rounded-lg p-2 relative flex flex-col shadow-lg w-11/12 max-w-3xl">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-lg font-bold">
                        <CloseIcon size={20} fill="#000" />
                    </button>
                </div>
                <div className="rounded-xl bg-campaign-detail p-4 border-[1px] mb-4 border-white">
                    {slug && (
                        <iframe
                            allowFullScreen={true}
                            src={slug}
                            title={title}
                            allow="autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write;"
                            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups"
                            loading="eager"
                            data-hj-allow-iframe="true"
                            className="w-full h-[600px]"
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventGameDemo;
