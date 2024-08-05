/**
 * 
 * @param {[]} arr 
 */
var minimumAbsDifference = function (arr) {
    // Your code goes here

    let minDiff = Math.min();

    arr = arr.sort((a, b) => a - b);

    const result = [];
    let diff;
    for (let i = 0; i < arr.length - 1; i++) {
        diff = arr[i + 1] - arr[i];
        if (diff < minDiff) {
            minDiff = diff;
            result.length = 0; // cleaning the array
        }
        if(diff == minDiff){
            result.push([arr[i],arr[i+1]]);
        }
    }



};