var luckyNumbers = function (matrix) {
    // Your code goes here
    const luckyNumbers = [];
    const rowsLen = matrix.length;
    const colsLen = matrix[0].length;

    function minRow(rowNumber){
        let min = Math.min();
        let tempIndex = 0;
        for(let i=0;i<colsLen;i++){
            if(matrix[rowNumber][i] < min) {
                min = matrix[rowNumber][i]
                tempIndex = i;
            }
        }
        return tempIndex;
    }

    function isMaxInCol(colIndex, num) {
        
        for(let i=0;i<rowsLen;i++) {
            if(matrix[i][colIndex] > num){
                return false;
            }
        }
        return true;

    }

    for(let i=0;i<rowsLen;i++){
        const colIndex = minRow(i);
        // console.log(i,colIndex);
        if(isMaxInCol(colIndex, matrix[i][colIndex])){
            luckyNumbers.push(matrix[i][colIndex]);
        }
    }

    return luckyNumbers;
};


console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));
console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));




    // function minRow(row){
    //     let min = Math.min();
    //     let tempIndex = 0;
    //     for(let i=0;i<colsLen;i++){
    //         if(matrix[row][i] < min) {
    //             min = matrix[row][i]
    //             tempIndex = i;
    //         }
    //     }
    //     return tempIndex;
    // }

    // function maxCol(col){
    //     let max = Math.max();
    //     let tempIndex = 0;
    //     for(let i=0;i<rowsLen;i++){
    //         if(matrix[i][col] > max) {
    //             max = matrix[i][col]
    //             tempIndex = i;
    //         }
    //     }
    //     return tempIndex;
    // }

    // const rowMinsIndex = {}
    // const colMaxIndex = {}

    // for(let i=0;i<rowsLen;i++) {
    //     rowMinsIndex[i] = minRow(i);
    // }

    // for(let i=0;i<colsLen;i++) {
    //     colMaxIndex[i] = maxCol(i);
    // }

    // console.log(rowMinsIndex);
    // console.log(colMaxIndex);

    // for(let key of Object.keys(rowMinsIndex)){
    //     // keys are the row index.
    //     // values are the col index.
    //     const col = rowMinsIndex[key];
        
    //     col
        
    // }

    // return luckyNumbers;