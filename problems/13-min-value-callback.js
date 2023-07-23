/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, cb) {
    if (cb === undefined) {
        let rtnVal = smallestValue(array);
        return rtnVal;
    }
    else {
        let newArray = array.map(function (element) {
            return cb(element);
        });
        let rtnVal = smallestValue(newArray);
        return rtnVal;
    }
};

let smallestValue = function(array) {
    let smVal = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smVal) {
            smVal = array[i];
        }
    }
    return smVal;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
