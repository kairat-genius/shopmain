export const formatPrice = (price) => {
    const isNegative = price < 0;
    const absolutePrice = Math.abs(price);

    const integerPart = new Intl.NumberFormat('de-DE', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(Math.floor(absolutePrice));

    const decimalPart = (absolutePrice % 1).toFixed(2).split('.')[1];
    return `${isNegative ? '-' : ''}${integerPart},${decimalPart}`;
};