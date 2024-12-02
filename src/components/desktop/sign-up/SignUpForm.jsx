import React, { useState } from 'react';
import CustomImage from '../../common/CustomImage';
import nameIcon from '/public/images/icon_ten.png';
import passwordIcon from '/public/images/mk.png';
import phoneIcon from '/public/images/icon_phone.png';
import emailIcon from '/public/images/email.png';
import companyIcon from '/public/images/icon_cty.png';
import showIcon from '/public/images/eyes.png';
import hideIcon from '/public/images/eyes1.png';
import Link from 'next/link';
import useTrans from '../../../../lib/hooks/useTrans';
import { customFetch } from '../../../utils/customFetch';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const SignUpForm = ({ logo, isMobile }) => {
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const router = useRouter();

    const trans = useTrans();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordConfirmVisibility = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    };

    const validate = () => {
        let newErrors = {};

        if (!name.trim() || name === '') {
            newErrors.name = trans.validate_full_name;
            toast.error(trans.validate_full_name);
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phone.trim()) {
            newErrors.phone = trans.validate_phone;
            toast.error(trans.validate_phone);
        } else if (!phoneRegex.test(phone)) {
            newErrors.phone = trans.validate_phone_2;
            toast.error(trans.validate_phone_2);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = trans.validate_email;
            toast.error(trans.validate_email);
        } else if (!emailRegex.test(email)) {
            newErrors.email = trans.validate_email_2;
            toast.error(trans.validate_email_2);
        }

        if (!companyName.trim()) {
            newErrors.companyName = trans.validate_company;
            toast.error(trans.validate_company);
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validateErrors = validate();
        setError(validateErrors);

        if (password !== passwordConfirm) {
            toast.error(trans.password_mismatch);
            setError('Passwords do not match');
            return;
        }

        try {
            if (Object.keys(validateErrors).length === 0 && isChecked) {
                const bodyData = JSON.stringify({
                    name,
                    phone,
                    email,
                    company_name: companyName,
                    password,
                });

                const res = await customFetch('/studio/customer/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: bodyData,
                });

                if (res.error.code === 200) {
                    toast.success(trans.sign_up_success);
                    router.push('/thong-bao');

                    console.log(res);
                } else {
                    const errorData = await res.json();
                    setError(errorData.message || 'An error occurred during signup.');
                    toast.error(errorData.message || 'An error occurred during signup.');
                }
            } else {
                console.log('Validation errors present');
            }
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };

    console.log(error);

    return (
        <div className="bg-white bg-opacity-30 p-6 rounded-3xl shadow-lg">
            <div className="flex flex-col lg:gap-4 xs:gap-1 items-center mb-6">
                <Link href="/">
                    <CustomImage
                        src={`${process.env.REACT_APP_BASE_MODULE_URL}${logo}`}
                        alt="logo"
                        width={129}
                        height={80}
                    />
                </Link>

                <p className="text-white font-semibold text-[25px] capitalize">{trans.menu['sign_up']}</p>
            </div>
            <form onSubmit={handleSubmit}>
                {/* NAME */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                        <CustomImage src={nameIcon} alt="name icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 left-10 flex items-center">
                        <div className="w-[1px] h-[50%] bg-[#999393]"></div>
                    </div>
                    <input
                        type="text"
                        className="pl-12 pr-3 py-2 md:text-base xs:text-sm rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-primary-studio italic"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={trans.user_name}
                        required
                    />
                </div>

                {/* PHONE */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                        <CustomImage src={phoneIcon} alt="phone icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 left-10 flex items-center">
                        <div className="w-[1px] h-[50%] bg-[#999393]"></div>
                    </div>
                    <input
                        type="tel"
                        className="pl-12 pr-3 py-2 md:text-base xs:text-sm rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-primary-studio italic"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={trans.phone}
                    />
                </div>

                {/* EMAIL */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                        <CustomImage src={emailIcon} alt="email icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 left-10 flex items-center">
                        <div className="w-[1px] h-[50%] bg-[#999393]"></div>
                    </div>
                    <input
                        type="email"
                        className="pl-12 pr-3 py-2 md:text-base xs:text-sm rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-primary-studio italic"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={trans.email}
                        required
                    />
                </div>

                {/* COMPANY */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                        <CustomImage src={companyIcon} alt="company icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 left-10 flex items-center">
                        <div className="w-[1px] h-[50%] bg-[#999393]"></div>
                    </div>
                    <input
                        type="text"
                        className="pl-12 pr-3 py-2 md:text-base xs:text-sm rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-primary-studio italic"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder={trans.company_name}
                        required
                    />
                </div>

                {/* PASSWORD */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3  gap-1">
                        <CustomImage src={passwordIcon} alt="password icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 left-10 flex items-center">
                        <div className="w-[1px] h-[50%] bg-[#999393]"></div>
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="pl-12 pr-10 py-2 md:text-base xs:text-sm rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-primary-studio italic"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={trans.password}
                    />
                    <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer "
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <CustomImage src={showIcon} alt="show icon" width={16} height={16} />
                        ) : (
                            <CustomImage src={hideIcon} alt="hides icon" width={16} height={16} />
                        )}
                    </span>
                </div>

                {/* PASSWORD CONFIRM */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3  gap-1">
                        <CustomImage src={passwordIcon} alt="password icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 left-10 flex items-center">
                        <div className="w-[1px] h-[50%] bg-[#999393]"></div>
                    </div>
                    <input
                        type={showPasswordConfirm ? 'text' : 'password'}
                        className="pl-12 pr-10 py-2 md:text-base xs:text-sm rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-primary-studio italic"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        placeholder={trans.password_confirm}
                    />
                    <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer "
                        onClick={togglePasswordConfirmVisibility}
                    >
                        {showPasswordConfirm ? (
                            <CustomImage src={showIcon} alt="show icon" width={16} height={16} />
                        ) : (
                            <CustomImage src={hideIcon} alt="hides icon" width={16} height={16} />
                        )}
                    </span>
                </div>

                {/* CHECKED */}
                <div className="flex justify-between my-4">
                    <div className="flex items-center gap-2">
                        <input
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            type="checkbox"
                            id="agreement"
                            className="accent-primary-studio"
                        />
                        <label htmlFor="agreement" className="text-[#F4F4F4] lg:text-base xs:text-xs w-full">
                            {trans.sign_up_term}{' '}
                            <span>
                                <Link href="/dieu-khoan-su-dung" className="text-primary-studio underline">
                                    {trans.term_of_use}
                                </Link>
                            </span>{' '}
                            {trans.sign_up_term_2}
                        </label>
                    </div>
                </div>

                {/* SUBMIT */}
                <button
                    type="submit"
                    className={`w-full ${
                        !isChecked ||
                        name === '' ||
                        phone === '' ||
                        email === '' ||
                        companyName === '' ||
                        password === '' ||
                        passwordConfirm === ''
                            ? 'opacity-50'
                            : 'opacity-100'
                    } text-white bg-studio-gradient py-2 rounded-md font-semibold transition duration-200`}
                    disabled={
                        !isChecked ||
                        name === '' ||
                        phone === '' ||
                        email === '' ||
                        companyName === '' ||
                        password === '' ||
                        passwordConfirm === ''
                    }
                >
                    {trans.menu['sign_up']}
                </button>

                <div className="flex justify-center mt-4">
                    <p className="text-white">
                        {trans.already_a_member}{' '}
                        <span>
                            <Link href="/dang-nhap" className="text-primary-studio underline">
                                {trans.menu['sign_in']}
                            </Link>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
