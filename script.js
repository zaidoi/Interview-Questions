function findMaxNumber(arr) {
    if (arr.length === 0) return null;

    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }

    return result;
}

console.log(findMaxNumber([12,13,15,15]));
module.exports = findMaxNumber;
