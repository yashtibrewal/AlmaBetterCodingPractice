

function Consecutive(arr) {
    // Your code goes here
    let counter = 0;

    arr = arr.sort((a, b) => a - b);

    for (let i = 1; i < arr.length; i++) {
        counter += arr[i] - arr[i - 1] - 1;
    }


    return counter;

}

console.log(Consecutive([4, 8, 6]));
console.log(Consecutive([5, 10, 15]));