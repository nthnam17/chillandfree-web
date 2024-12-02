import React, { useState } from 'react';
import Link from 'next/link';
import { validateEmail } from '../../../utils/validate';
import { customFetch } from '../../../utils/customFetch';
import { toast } from 'react-toastify';
import useTrans from '../../../../lib/hooks/useTrans';

const GameCampaignForm = ({ gameId }) => {
    const trans = useTrans();
    const [isCheckedFirst, setIsCheckedFirst] = useState(false);
    const [isCheckedSecond, setIsCheckedSecond] = useState(false);
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [errorCompanyName, setErrorCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [content, setContent] = useState('');
    const [errorContent, setErrorContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCheckFirstChange = (e) => {
        setIsCheckedFirst(e.target.checked);
    };

    const handleCheckSecondChange = (e) => {
        setIsCheckedSecond(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isCheckedFirst && isCheckedSecond) {
            if (fnValidate()) return;
            setLoading(true);
            const payload = {
                fullName: name,
                email,
                message: content,
                gameId,
                companyName,
            };

            try {
                const res = await customFetch('/web/contact', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                });

                if (res.error.code === 201) {
                    toast.success(trans.submit_form_success);
                    setTimeout(() => window.location.reload(), 2000);
                }
            } catch (error) {
                toast.error(trans.submit_form_failed);
            } finally {
                setLoading(false);
            }
        }
    };

    const fnValidate = () => {
        let isError = false;

        if (!name) {
            isError = true;
            setErrorName('Vui lòng nhập nội dung');
        }

        if (!companyName) {
            isError = true;
            setErrorCompanyName('Vui lòng nhập nội dung');
        }

        if (!email) {
            isError = true;
            setErrorEmail('Vui lòng nhập nội dung');
        }

        if (email && !validateEmail(email)) {
            isError = true;
            setErrorEmail('Nội dung không hợp lệ');
        }

        if (!content) {
            isError = true;
            setErrorContent('Vui lòng nhập nội dung');
        }

        return isError;
    };

    return (
        <div className="rounded-xl bg-campaign-detail p-4 border-[1px] mb-4 border-white">
            <form className="grid grid-cols-12 gap-4" onSubmit={handleSubmit}>
                <div className="col-span-12 grid grid-cols-12">
                    <div className="mb-4 col-span-12 flex flex-col gap-2">
                        <label htmlFor="name" className="text-white text-base font-medium">
                            {trans.name}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="bg-[#FFFFFF30] rounded-lg p-2 italic text-white"
                            placeholder={trans.name_input}
                            onChange={(e) => {
                                setName(e.target.value);
                                setErrorName('');
                            }}
                        />
                        {errorName && <p className="text-red-600">{errorName}</p>}
                    </div>
                    <div className="mb-4 col-span-12 flex flex-col gap-2">
                        <label htmlFor="companyName" className="text-white text-base font-medium">
                            {trans.company_name}
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            className="bg-[#FFFFFF30] rounded-lg p-2 italic text-white"
                            placeholder={trans.company_name_input}
                            onChange={(e) => {
                                setCompanyName(e.target.value);
                                setErrorCompanyName('');
                            }}
                        />
                        {errorCompanyName && <p className="text-red-600">{errorCompanyName}</p>}
                    </div>
                    <span className="text-sm text-[#FE0505] italic col-span-12">{trans.note_warning}</span>

                    <div className="mb-4 col-span-12 flex flex-col gap-2">
                        <label htmlFor="email" className="text-white text-base font-medium">
                            {trans.email}
                        </label>
                        <input
                            id="email"
                            name="email"
                            className="bg-[#FFFFFF30] rounded-lg p-2 italic text-white"
                            placeholder={trans.email_input}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setErrorEmail('');
                            }}
                        />
                        {errorEmail && <p className="text-red-600">{errorEmail}</p>}
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="h-full">
                        <div className="mb-4 col-span-12 flex flex-col gap-2 h-full">
                            <label htmlFor="content" className="text-white text-base font-medium">
                                {trans.message}
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                className="bg-[#FFFFFF30] rounded-lg p-2 italic h-full text-white"
                                placeholder={trans.message_input}
                                onChange={(e) => {
                                    setContent(e.target.value);
                                    setErrorContent('');
                                }}
                            />
                            {errorContent && <p className="text-red-600">{errorContent}</p>}
                        </div>
                    </div>
                </div>

                <div className="col-span-12 ">
                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="agreement_1"
                            checked={isCheckedFirst}
                            onChange={handleCheckFirstChange}
                            className="mt-1"
                        />
                        <label htmlFor="agreement_1" className="text-white italic text-sm">
                            {trans.campaign_confirm}
                        </label>
                    </div>

                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="agreement_2"
                            checked={isCheckedSecond}
                            onChange={handleCheckSecondChange}
                            className="mt-1"
                        />
                        <label htmlFor="agreement_2" className="text-white italic text-sm">
                            {trans.campaign_confirm_2}
                        </label>
                    </div>

                    <p className="text-white italic text-sm">{trans.campaign_subscribe}</p>
                </div>

                <div className="col-span-12 mt-4 flex flex-col gap-4">
                    <button
                        type="submit"
                        className="bg-gradient-to-b from-gradient-start to-gradient-end text-white rounded-lg px-6 py-2 font-semibold disabled:opacity-50 w-max"
                        disabled={!isCheckedFirst || !isCheckedSecond || loading}
                    >
                        {trans.submit}
                    </button>

                    <p className="text-sm italic text-white">{trans.campaign_note}</p>
                </div>
            </form>
        </div>
    );
};

export default GameCampaignForm;
