import React, { useState } from 'react';
import CustomImage from '../../common/CustomImage';
import { motion } from 'framer-motion';
import homeLogo from '/public/images/home.png';
import gmailLogo from '/public/images/gmail.png';
import phoneLogo from '/public/images/phone.png';
import { SlideUp } from '../../../utils/animation';
import useTrans from '../../../../lib/hooks/useTrans';
import Link from 'next/link';

const ContactForm = ({ data, isMobile }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const trans = useTrans();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = trans.validate_full_name;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = trans.validate_phone;
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = trans.validate_phone_2;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = trans.validate_email;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = trans.validate_email_2;
        }

        return newErrors;
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0 && isChecked) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setFormData({
                    fullName: '',
                    phone: '',
                    email: '',
                    message: '',
                });
                setIsChecked(false);
            }, 2000);
        }
    };

    return (
        <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="bg-[#1A1B46] rounded-[10px] lg:p-10 xs:p-4"
        >
            {/* INFO */}
            <div className="grid grid-cols-12 gap-4">
                <div className="lg:col-span-5 xs:col-span-12">
                    <p className="text-primary text-base font-semibold">{data.title}</p>
                    <ul>
                        <li className="flex items-center gap-4 my-4">
                            <CustomImage
                                src={homeLogo}
                                alt="home"
                                width={isMobile ? 16 : 24}
                                height={isMobile ? 16 : 24}
                            />
                            <span className="text-white lg:text-lg xs:text-sm">
                                {trans.address}: {data.general.address}
                            </span>
                        </li>
                        <li className="flex items-center gap-4 my-4">
                            <CustomImage
                                src={gmailLogo}
                                alt="gmail"
                                width={isMobile ? 16 : 24}
                                height={isMobile ? 16 : 24}
                            />
                            <span className="text-white lg:text-lg xs:text-sm">
                                {trans.email}: {data.general.email}
                            </span>
                        </li>
                        <li className="flex items-center gap-4 my-4">
                            <CustomImage
                                src={phoneLogo}
                                alt="phone"
                                width={isMobile ? 16 : 24}
                                height={isMobile ? 16 : 24}
                            />
                            <span className="text-white lg:text-lg xs:text-sm">
                                {trans.hotline}: {data.general.phone}
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="lg:col-span-7 xs:col-span-12 w-full overflow-hidden">
                    <div className="flex justify-center items-center">
                        <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={data.general.map}
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* INPUT FIELD */}
            <form className="grid grid-cols-12 gap-4 mt-8" onSubmit={handleSubmit}>
                <div className="lg:col-span-5 xs:col-span-12 grid grid-cols-12">
                    {/* Full Name */}
                    <div className="mb-4 col-span-12 flex flex-col gap-2">
                        <label htmlFor="fullName" className="text-white lg:text-base xs:text-sm font-medium">
                            {trans.name}
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`bg-[#FFFFFF30] rounded-lg p-2 italic text-white lg:text-base xs:text-sm ${
                                errors.fullName ? 'border-red-500' : ''
                            }`}
                            placeholder={trans.name_input}
                        />
                        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
                    </div>

                    {/* Phone */}
                    <div className="mb-4 col-span-12 flex flex-col gap-2">
                        <label htmlFor="phone" className="text-white lg:text-base xs:text-sm font-medium">
                            {trans.phone}
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`bg-[#FFFFFF30] rounded-lg p-2 italic text-white lg:text-base xs:text-sm ${
                                errors.phone ? 'border-red-500' : ''
                            }`}
                            placeholder={trans.phone_input}
                        />
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                    </div>

                    {/* Email */}
                    <div className="mb-4 col-span-12 flex flex-col gap-2">
                        <label htmlFor="email" className="text-white lg:text-base xs:text-sm font-medium">
                            {trans.email}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`bg-[#FFFFFF30] rounded-lg p-2 italic text-white lg:text-base xs:text-sm ${
                                errors.email ? 'border-red-500' : ''
                            }`}
                            placeholder={trans.email_input}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>
                </div>

                {/* Message */}
                <div className="lg:col-span-7 xs:col-span-12">
                    <div className="h-full">
                        <div className="mb-4 col-span-12 flex flex-col gap-2 h-full">
                            <label htmlFor="message" className="text-white lg:text-base xs:text-sm font-medium">
                                {trans.message}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`bg-[#FFFFFF30] rounded-lg p-2 italic h-full text-white lg:text-base xs:text-sm ${
                                    errors.message ? 'border-red-500' : ''
                                }`}
                                placeholder={trans.message_input}
                            />
                            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                        </div>
                    </div>
                </div>

                {/* Agreement */}
                <div className="lg:col-span-5 xs:col-span-12 flex items-start gap-2">
                    <input
                        type="checkbox"
                        id="agreement"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="mt-1"
                    />
                    <label htmlFor="agreement" className="text-[#FE0505] lg:text-sm xs:text-xs w-full">
                        {trans.term}{' '}
                        <Link href="#" className="underline text-[#FE0505]">
                            {trans.policy}
                        </Link>
                    </label>
                </div>

                <div className="col-span-12 mt-4 flex lg:justify-start xs:justify-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-b from-gradient-start to-gradient-end text-white rounded-lg px-6 py-2 font-semibold disabled:opacity-50"
                        disabled={!isChecked || isSubmitting}
                    >
                        {isSubmitting ? trans.submitting : trans.submit}
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default ContactForm;
