// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };

    var result = {};

    while (currency > 0) {
        if (currency / 50 >= 1) {
            result.H = Math.floor(currency / 50);
            currency %= 50;
        }
        else if (currency / 25 >= 1) {
            result.Q = Math.floor(currency / 25);
            currency %= 25;
        }
        else if (currency / 10 >= 1) {
            result.D = Math.floor(currency / 10);
            currency %= 10;
        }
        else if (currency / 5 >= 1) {
            result.N = Math.floor(currency / 5);
            currency %= 5;
        }
        else {
            result.P = Math.floor(currency / 1);
            currency %= 1;
        }
    }
    return result;
}
