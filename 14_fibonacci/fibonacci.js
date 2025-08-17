const fibonacci = function(memberIndex) {

    let count;

    if (typeof memberIndex !== 'number') {
        count = parseInt(memberIndex)
    } else {
        count = memberIndex
    }

    if(count < 0) {
        return "OOPS";
    }

    if(count === 0) {
        return 0;
    }

    if(count === 1) {
        return 1;
    }

    return fibonacci(count-2) + fibonacci(count-1);
};

// Do not edit below this line
module.exports = fibonacci;
