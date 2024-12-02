import React, { useState } from 'react';
import CustomImage from '../../common/CustomImage';
import passwordIcon from '/public/images/mk.png';
import Link from 'next/link';
import { customFetch } from '../../../utils/customFetch';
import { toast } from 'react-toastify';
import useTrans from '../../../../lib/hooks/useTrans';
import { useRouter } from 'next/router';
import showIcon from '/public/images/eyes.png';
import hideIcon from '/public/images/eyes1.png';

const NewPasswordForm = ({ logo, token }) => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [error, setError] = useState(null);

    const router = useRouter();

    const trans = useTrans();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordConfirmVisibility = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            setError(trans.password_mismatch);
            toast.error(trans.password_mismatch);
            return;
        }

        try {
            const response = await customFetch('/studio/customer/verifyPasswordCustomer', {
                method: 'PUT',
                body: JSON.stringify({ password, token }),
            });


            toast.success(trans.new_password_success);

            router.push('/dang-nhap');
        } catch (error) {
            setError(error.message);
            console.log('Failed to set new password:', error);
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
                <h1 className="text-white font-semibold text-[25px] capitalize">{trans.new_password}</h1>
            </div>
            <form onSubmit={handleSubmit}>
                {/* PASSWORD */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <CustomImage src={passwordIcon} alt="password icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 left-10 flex items-center">
                        <div className="w-[1px] h-[50%] bg-[#999393]"></div>
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="pl-12 pr-3 py-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-primary-studio italic"
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

                {/* PASSWORD CONFIRM */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <CustomImage src={passwordIcon} alt="password confirm icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 left-10 flex items-center">
                        <div className="w-[1px] h-[50%] bg-[#999393]"></div>
                    </div>
                    <input
                        type={showPasswordConfirm ? 'text' : 'password'}
                        className="pl-12 pr-3 py-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-primary-studio italic"
                        placeholder={trans.password_confirm}
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required
                    />
                    <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500"
                        onClick={togglePasswordVisibility}
                    >
                        {showPasswordConfirm ? (
                            <CustomImage src={showIcon} alt="show icon" width={16} height={16} />
                        ) : (
                            <CustomImage src={hideIcon} alt="hide icon" width={20} height={20} />
                        )}
                    </span>
                </div>

                <button
                    disabled={password === '' || passwordConfirm === ''}
                    type="submit"
                    className={`w-full bg-studio-gradient text-white py-2 rounded-md font-semibold transition duration-200 *:
                    ${password === '' || passwordConfirm === '' ? 'opacity-50' : 'opacity-100'}
                        `}
                >
                    {trans.new_password}
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

export default NewPasswordForm;
