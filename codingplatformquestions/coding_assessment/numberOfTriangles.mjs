function findNumberOfTriangles(arr, n) {
    // Your code goes here
    if (n <= 2) {
        return 0;
    }

    function possibleTriangles(a, b, c) {

        let count = 0;

        if (a < b + c && b < a + c && c < a + b) count++;

        return count;
    }
    let side1, side2, side3;
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
        side1 = arr[i];
        for (let j = i + 1; j < n - 1; j++) {
            side2 = arr[j];
            for (let k = j + 1; k < n; k++) {
                side3 = arr[k];
                count += possibleTriangles(side1, side2, side3);
            }
        }
    }
    return count;
}

console.log(findNumberOfTriangles([3, 5, 4],3));
console.log(findNumberOfTriangles([6, 4, 9, 7, 8],5));