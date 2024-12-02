import React, { useEffect, useState } from 'react';
import CustomImage from '../../common/CustomImage';
import nameIcon from '/public/images/icon_ten.png';
import passwordIcon from '/public/images/mk.png';
import showIcon from '/public/images/eyes.png';
import hideIcon from '/public/images/eyes1.png';
import Link from 'next/link';
import { customFetch } from '../../../utils/customFetch';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import useTrans from '../../../../lib/hooks/useTrans';

const SignInForm = ({ logo }) => {
    const trans = useTrans();
    const router = useRouter();
    const { callback } = router.query;
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await customFetch('/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
            });

            // const domain = callback ? '' : 'domain=.nextads.tektra.vn; ';
            // document.cookie = `token=${res.data.access_token}; path=/; ${domain}SameSite=None; ${
            //     !callback && 'Secure'
            // }`;

            if (callback) {
                document.cookie = `token=${res.data.access_token}; path=/; domain=.localhost; SameSite=None; Secure`;
            } else {
                document.cookie = `token=${res.data.access_token}; path=/; domain=.nextads.tektra.vn; SameSite=None; Secure`;
            }

            router.push(callback || 'https://studio.nextads.tektra.vn');
        } catch (error) {
            const errorMessage = error?.response?.data?.message || error?.message;

            if (errorMessage && errorMessage.includes('Tài khoản hoặc mật khẩu không trùng khớp!')) {
                toast.error(trans.sign_in_error);
            } else {
                toast.error(trans.error_encountered);
            }
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
                <p className="text-white font-semibold text-[25px] capitalize">{trans.menu['sign_in']}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <CustomImage src={nameIcon} alt="name icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 left-10 flex items-center">
                        <div className="w-[1px] h-[50%] bg-[#999393]"></div>
                    </div>
                    <input
                        type="email"
                        className="pl-12 pr-3 py-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-primary-studio italic"
                        placeholder={trans.email}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 gap-1">
                        <CustomImage src={passwordIcon} alt="password icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 left-10 flex items-center">
                        <div className="w-[1px] h-[50%] bg-[#999393]"></div>
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="pl-12 pr-10 py-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-primary-studio italic"
                        placeholder={trans.password}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <CustomImage src={showIcon} alt="show icon" width={16} height={16} />
                        ) : (
                            <CustomImage src={hideIcon} alt="hide icon" width={20} height={20} />
                        )}
                    </span>
                </div>
                <div className="flex justify-between my-4">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="save_sign_in" className="accent-primary-studio" />
                        <label htmlFor="save_sign_in" className="text-[#F4F4F4] lg:text-base xs:text-xs w-full">
                            {trans.save_sign_in}
                        </label>
                    </div>

                    <div className="">
                        <Link href="/quen-mat-khau" className="text-base text-[#5AF2FC]">
                            {trans.forget_password}
                        </Link>
                    </div>
                </div>
                <button
                    disabled={username === '' || password === ''}
                    type="submit"
                    className={`w-full bg-studio-gradient text-white py-2 rounded-md font-semibold transition duration-200 ${
                        username === '' || password === '' ? 'opacity-50' : 'opacity-100'
                    }`}
                >
                    {trans.menu['sign_in']}
                </button>
                <div className="flex justify-center mt-4">
                    <p className="text-white">
                        {trans.not_a_member}{' '}
                        <span>
                            <Link href="/dang-ky" className="text-primary-studio underline">
                                {trans.menu['sign_up']}
                            </Link>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
