const sumAll = function(startNum, endNum) {

    // Başlangıç ve bitiş değerlerini alarak o aralıktaki sayıları toplayan fonksiyon. Negatif değerler ve sayı olmayan değerler kabul edilmez.

    let result = 0;

    if (
        (startNum < 0 || endNum < 0)
        || 
        (typeof startNum !== 'number' || typeof endNum !== 'number')
    ) {
        return "ERROR"
    }

    if (startNum > endNum) {
        for (let i = endNum; i <= startNum; i++) {
            result += i;
        }
    } else {
        for (let i = startNum; i <= endNum; i++) {
            result += i;
        }
    }


    return result
};

// Do not edit below this line
module.exports = sumAll;
