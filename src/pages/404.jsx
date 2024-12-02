import Link from 'next/link';
import React from 'react';
import useTrans from '../../lib/hooks/useTrans';

const PageNotFound = () => {
    const trans = useTrans();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl font-bold">Thông Báo</h1>
            <p className="mt-4 text-xl">{trans.page_not_found}</p>
            <Link href="/" className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                {trans.back_to_homepage}
            </Link>
        </div>
    );
};

export default PageNotFound;
