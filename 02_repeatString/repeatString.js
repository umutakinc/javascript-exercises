const repeatString = function(str, repeatNum) {
    let result = "";
    if (repeatNum < 0) {
        result = "ERROR";
    }
    for (let i = 0; i < repeatNum; i++) {
        result += str;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
