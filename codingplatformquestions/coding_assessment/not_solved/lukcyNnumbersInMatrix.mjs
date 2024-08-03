var luckyNumbers = function (matrix) {
    // Your code goes here
    const luckyNumbers = [];
    const rowMins = [];
    for (let row of matrix) {
        rowMins.push(Math.min(...row));
    }


    return luckyNumbers;
};

console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]));
