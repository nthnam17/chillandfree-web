import React, { useState, useEffect } from 'react';
import CustomImage from '../../common/CustomImage';
import emailIcon from '/public/images/email.png';
import Link from 'next/link';
import { customFetch } from '../../../utils/customFetch';
import { toast } from 'react-toastify';
import useTrans from '../../../../lib/hooks/useTrans';

const ForgetPasswordForm = ({ logo }) => {
    const [email, setEmail] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0);
    const [error, setError] = useState(null);

    const trans = useTrans();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await customFetch('/studio/customer/forgotPassword', {
                method: 'POST',
                body: JSON.stringify({ email }),
            });

            toast.success(trans.email_otp_noti);

            setIsDisabled(true);
            setEmail('');

            setRemainingTime(12);

            const interval = setInterval(() => {
                setRemainingTime((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(interval);
                        setIsDisabled(false);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } catch (error) {
            setError(error.message);
            console.log('Login failed:', error);
        }
    };

    return (
        <div className="bg-white bg-opacity-30 p-6 rounded-3xl shadow-lg">
            <div className="flex flex-col items-center gap-4 mb-6">
                <Link href="/">
                    <CustomImage
                        src={`${process.env.REACT_APP_BASE_MODULE_URL}${logo}`}
                        alt="logo"
                        width={129}
                        height={80}
                    />
                </Link>
                <p className="text-white font-semibold text-[25px] capitalize">{trans.forget_password}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <CustomImage src={emailIcon} alt="email icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 left-10 flex items-center">
                        <div className="w-[1px] h-[50%] bg-[#999393]"></div>
                    </div>
                    <input
                        type="email"
                        className="pl-12 pr-3 py-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-primary-studio italic"
                        placeholder={trans.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <button
                    disabled={isDisabled || email === ''}
                    type="submit"
                    className={`w-full bg-studio-gradient text-white py-2 rounded-md font-semibold transition duration-200 ${
                        isDisabled || email === '' ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                    }`}
                >
                    {isDisabled ? `${trans.otp} (${remainingTime}s)` : trans.otp}
                </button>

                <div className="flex justify-end my-4">
                    <div className="">
                        <Link href="/dang-nhap" className="text-base text-[#5AF2FC] underline">
                            {trans.menu['sign_in']}
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ForgetPasswordForm;
