function countPairsWithSum(arr, K) {
    // Your code goes here

    let count = 0;
    let set = new Set();
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if(arr[i] + arr[j] === K){
                count++;
            }
        }
    }

    return count;
}