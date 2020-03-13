const padString = (string, number, symbol, position) => {
    const result = number - string.length;

    if (result <= 0) return string;

    const howManySymbols = symbol.repeat(result);

    if (symbol.length === 1) {

    } else (symbol.length > 1) {
        return 'write one symbol, please';
    }

    return position ? howManySymbols + string : string + howManySymbols; 
};

