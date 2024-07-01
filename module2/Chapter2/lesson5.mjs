/**
 * 
 * There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with an altitude equal to 0.
You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n). Return to the highest altitude of a point.
 */
function findHighestAltitude(arr) {

    let startingPoint = 0;
    let maxPoint = startingPoint;

    for (let gain of arr) {

        startingPoint += gain;
        if (startingPoint > maxPoint) {
            maxPoint = startingPoint;
        }
    }

    return maxPoint;
}

// console.log(findHighestAltitude([-5, 1, 5, 0, -7]));
// console.log(findHighestAltitude([-4, -3, -2, -1, 4, 3, 2]));


function KthLargestElement(arr, k) {
    
    const set = new Set(arr.map(item=>BigInt(item)));
    let result = arr[0];
    for (let i = 0; i < k; i++) {

        let max = Math.max();
        for (let item of set) {

            if (item > max) {
                max = item;
            }
        }

        set.delete(max);
        result = max;
    }

    return result.toString();
}

console.log(KthLargestElement(["3","6","7","10"],4));
console.log(KthLargestElement( ["2","21","12","1"],3));
var findKthLargest = function (arr, k) {
    // Your code goes here
    // arr = arr.map(item => Number(item))
    let result = arr[0];
    for (let i = 0; i < k; i++) {
        
        let maxIndex = -1;
        let max = Math.max();
        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > max) {
                max = arr[j];
                maxIndex = j;
            }
        }

        result = arr.splice(maxIndex, 1);
    }

    return result[0];
};


function interpolationSearch(arr,target){


    let pos;
    let left = 0;
    let right = arr.length-1;

    while(left<=right && arr[left]<=target && arr[right]>=target){

        pos = left + Math.floor((target-arr[left]) * (right-left)/(arr[right]-arr[left]));

        if(arr[pos] === target){
            return pos;
        }else if(arr[pos]<target){
            left = pos+1;
        }else{
            right = pos-1;
        }

    }

    return -1;

}

// console.log(interpolationSearch([1,3,5,14,21,25,26,27],25));
// console.log(interpolationSearch([1,3,5,14,21,25,26,27],27));
// console.log(interpolationSearch([1,3,5,14,21,25,26,27],1));