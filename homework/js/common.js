"use strict";
//#1
var array = [2, 3, 2, 10];

function isEmpty(array) {
    for (var key in array) {
        return true;
    }
    return false
}

function sumData(array) {
    if (isEmpty(array)) {
        var sumData = 0;
        for (var key in array) {
            sumData += array[key]
        }
        return sumData;
    }
}


//#2
var codeObj = {
    'length': [45, 109, 32, 39, 1, 0]
};

function codeSum(array) {
    codeObj.length[23] = 90;
    var sumData = 0;
    for (var i in array) {
        if (typeof array[i] === 'number')
            sumData += array[i];
    }
    return sumData;

}
// codeSum(codeObj.length);

//#3

var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];

function bubble(data) {
    var x = data.length;
    for (var i = 0; i < x - 1; i++) {
        for (var j = 0; j < x - 1 - i; j++) {
            if (data[j + 1] < data[j]) {
                var y = data[j + 1];
                data[j + 1] = data[j];
                data[j] = y;
            }
        }
    }
    return data;
}
