export function formatCurrency(amount) {
    if (typeof amount !== 'number') {
        throw new TypeError('Amount must be a number');
    }

    return amount.toLocaleString('vi-VN', { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export function formatCurrencyText(amount) {
    if (amount >= 1000 && amount < 1000000) {
        return (amount / 1000).toFixed(0) + 'K';
    } else if (amount >= 1000000) {
        return (amount / 1000000).toFixed(1) + 'M';
    }
    return amount.toString();
}
