const RielCurrency = (money: number) => {
    const formatter = new Intl.NumberFormat('km-KH', {
      //  style: 'currency',
        currency: 'KHR',
        minimumFractionDigits: 0
    });
    const rielSymbol = '\u17DB';
    return  formatter.format(money)+' '+rielSymbol;
}
const USDCurrency = (money: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return  formatter.format(money);
}

export const UtilCurrency = {
    RielCurrency,
    USDCurrency
}