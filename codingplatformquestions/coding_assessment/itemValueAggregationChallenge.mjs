
/**
 * 
 * @param {[][]} items1 
 * @param {[][]} items2 
 */
const mergeSimilarItems = function (items1, items2) {
    // Your Code Goes Here 
    const dict = {};
    for (let item of items1) {
        if (dict[item[0]]) {
            dict[item[0]] = dict[item[0]] + item[1];
        } else {
            dict[item[0]] = item[1];
        }
    }

    for (let item of items2) {
        if (dict[item[0]]) {
            dict[item[0]] = dict[item[0]] + item[1];
        } else {
            dict[item[0]] = item[1];
        }
    }

    const result = [];
    for (let key of Object.keys(dict)) {
        result.push([parseInt(key), dict[key]]);
    }

    result.sort((a, b) => a[0] - b[0]);

    return result;
};

console.log(mergeSimilarItems([[1, 1], [4, 5], [3, 8]], [[3, 1], [1, 5]]));
console.log(mergeSimilarItems([[1, 1], [3, 2], [2, 3]], [[2, 1], [3, 2], [1, 3]]));
console.log(mergeSimilarItems([[1, 3], [2, 2]], [[7, 1], [2, 2], [1, 4]]));

