/**
 * Format giá tiền theo định dạng "$ 99.00 USD"
 * @param {number} price - Giá tiền cần format
 * @returns {string} - Chuỗi đã format (ví dụ: "$ 99.00 USD" hoặc "$ 1,234.00 USD")
 */
export const formatPrice = (price) => {
    if (typeof price !== 'number' || isNaN(price)) {
        return '$ 0.00 USD';
    }
    // Format số với dấu phẩy phân cách hàng nghìn và 2 chữ số thập phân
    const formattedNumber = price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return `$ ${formattedNumber} USD`;
};

