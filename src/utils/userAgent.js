// userAgent.js
export function isMobile(userAgent) {
    const mobileRegex = /Mobi|Android|iPhone|iPad|iPod/i; // Biểu thức chính quy để kiểm tra di động
    return mobileRegex.test(userAgent);
}
