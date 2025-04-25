const sumAll = function(numberA, numberB) {
    if(numberA < 0 || numberB < 0 || !Number.isInteger(numberA) || !Number.isInteger(numberB)) {
        return "ERROR";
    }

    let startNumber = Math.min(numberA, numberB);
    let endNumber = Math.max(numberA, numberB);
    let sum = 0;
    for(let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
