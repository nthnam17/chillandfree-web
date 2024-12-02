import React from 'react';

const Pagination = ({ total, currentPage, onPageChange }) => {
    const getPages = () => {
        const pages = [];
        let maxPagesToShow = 3; // Số trang tối đa hiển thị cùng lúc
        let halfWindow = Math.floor(maxPagesToShow / 2);

        // Nếu tổng số trang ít hơn hoặc bằng maxPagesToShow, hiển thị tất cả các trang
        if (total <= 10) {
            for (let i = 1; i <= total; i++) {
                pages.push(i);
            }
        } else {
            // Trường hợp tổng số trang lớn hơn maxPagesToShow
            if (currentPage <= halfWindow + 1) {
                console.log('hello 2');

                for (let i = 1; i <= maxPagesToShow; i++) {
                    pages.push(i);
                }
                pages.push('...'); // Dấu ba chấm sau
                pages.push(total); // Trang cuối
            } else if (currentPage >= total - halfWindow) {
                pages.push(1); // Trang đầu
                pages.push('...'); // Dấu ba chấm trước
                for (let i = total - maxPagesToShow + 1; i <= total; i++) {
                    pages.push(i);
                }
            } else {
                currentPage = Number(currentPage);
                halfWindow = Number(halfWindow);
                pages.push(1); // Trang đầu
                pages.push('...'); // Dấu ba chấm trước
                for (let i = currentPage - halfWindow; i <= currentPage + halfWindow; i++) {
                    pages.push(i);
                }
                pages.push('...'); // Dấu ba chấm sau
                pages.push(total); // Trang cuối
            }
        }
        return pages;
    };

    const handleClick = (page) => {
        if (page == currentPage || page == '...') return;
        onPageChange(page);
    };

    return (
        <div className="flex items-center justify-center space-x-2 mt-5">
            {/* Nút quay về trang đầu tiên */}
            <button
                className="px-4 py-2 border rounded-full hover:bg-blue-100 bg-white"
                onClick={() => onPageChange(1)}
                disabled={currentPage == 1}
            >
                &laquo;
            </button>

            {/* Hiển thị các trang */}
            {getPages().map((page, index) =>
                page == '...' ? (
                    <span key={index} className="px-4 py-2 w-11 h-11 rounded-full bg-[#C1C1C1] cursor-not-allowed">
                        {page}
                    </span>
                ) : (
                    <button
                        key={index}
                        onClick={() => handleClick(page)}
                        className={`py-2 border rounded-full hover:bg-[#643CF1] hover:border-[#643CF1] hover:text-white w-11 h-11 font-semibold ${
                            page == currentPage ? 'bg-[#643CF1] border-[#643CF1] text-white' : 'bg-white'
                        }`}
                    >
                        {page}
                    </button>
                ),
            )}

            {/* Nút đi tới trang cuối cùng */}
            <button
                className="px-4 py-2 border rounded-full hover:bg-blue-100 bg-white"
                onClick={() => onPageChange(total)}
                disabled={currentPage == total}
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;
