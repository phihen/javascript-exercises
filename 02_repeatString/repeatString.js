const repeatString = function(text, numberOfRepeats) {
    if(numberOfRepeats < 0) {
        return "ERROR";
    }

    let returnText = "";
    for(let i = 0; i<numberOfRepeats; i++) {
        returnText += text;
    }

    return returnText;
};

// Do not edit below this line
module.exports = repeatString;
