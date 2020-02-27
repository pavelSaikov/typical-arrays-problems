exports.min = function min(array) {
    if (arguments.length == 0) return 0;
    if (array.length == 0) return 0;

    let minItem = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minItem) minItem = array[i];
    }

    return minItem;
}

exports.max = function max(array) {
    if (arguments.length == 0) return 0;
    if (array.length == 0) return 0;

    let maxItem = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxItem) maxItem = array[i];
    }

    return maxItem;
}

exports.avg = function avg(array) {
    if (arguments.length == 0) return 0;
    if (array.length == 0) return 0;

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let average = sum / array.length;

    return average;
}