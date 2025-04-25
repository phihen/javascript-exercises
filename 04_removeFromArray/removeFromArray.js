const removeFromArray = function(array, ...removeValues) {
    for(const value of removeValues) {
        let i = 0;
        while (i < array.length) {
            if (array[i] === value) {
                array.splice(i, 1);
            } else {
                ++i;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
