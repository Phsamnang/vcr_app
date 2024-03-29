const RielCurrency = (money: number) => {
    const formatter = new Intl.NumberFormat('km-KH', {
      //  style: 'currency',
        currency: 'KHR',
        minimumFractionDigits: 0
    });
    const rielSymbol = '\u17DB';
    return  formatter.format(money)+' '+rielSymbol;
}

export const UtilCurrency = {
    RielCurrency
}