var combine = function (n, k) {
    // Your code goes here

    const result = [];

    /**
     * 
     * @param {number} i 
     * @param {[]} temp 
     * @param {number} remK 
     * @returns 
     */
    function recurse(i, temp) {

        if(temp.length > k) return;

        if (temp.length == k) {
            result.push([...temp]);
            return;
        }


        for (let j = i; j <= n; j++) {
            temp.push(j);
            recurse(j+1, temp);
            temp.pop();
        }

    }

    recurse(1,[],k)

    return result;
};

// console.log(combine(3, 1));
// console.log(combine(4, 2));
// console.log(combine(4, 3));

// var combine = function (n, k) {
//     let output = [];

//     const findCombinations = (start, combination) => {
//         if (combination.length > k) return;
//         if (combination.length === k) {
//             output.push([...combination]);
//             return;
//         }


//         for (let i = start; i <= n; i++) {
//             combination.push(i);
//             findCombinations(i + 1, combination);
//             combination.pop();
//         }
//     }

//     findCombinations(1, []);

//     return output
// };


console.log(combine(3, 1));
console.log(combine(4, 2));
console.log(combine(4, 3));
