var firstUniqChar = function (s) {

    if (typeof s == "string") {

        const uniqueCharacters = new Set(Array.from(s));
        const arr = Array.from(s);
        // console.log(uniqueCharacters);
        let first = true, index = 0;
        for (let char of uniqueCharacters) {

            for (let i = 0; i < 2; i++) {

                if (first) {
                    index = arr.indexOf(char, index);
                    first = false;
                } else {
                    if (arr.indexOf(char, index + 1) == -1) {
                        return index;
                    } else {
                        first = true;
                        index = 0;
                    }
                }
            }

        }

    }
    return -1;
};

// console.log(firstUniqChar("almabetter"));
// console.log(firstUniqChar("almabetterlove"));


var calPoints = function (operations) {

    const scores = [];

    for (let operation of operations) {

        if (!isNaN(parseInt(operation))) {
            scores.push(parseInt(operation));
        } else {
            switch (operation) {

                case "C": scores.pop(); break;
                case "D": scores.push(scores[scores.length - 1] * 2); break;
                case "+": scores.push(scores[scores.length - 1] + scores[scores.length - 2]); break;

            }
        }
    }

    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total;
};

// console.log(calPoints( ["5","-2","4","C","D","9","+","+"]));



var longestPalindrome = function (s) {
    // Since we need longest substring, we start from length down to 1;
    if (typeof s == "string")
        for (let size = s.length; size > 0; size--) {

            for (let i = 0; i + size < s.length; i++) {

                if (s.slice(i, i + size).split("").reverse().join("") == s.slice(i, i + size)) {
                    return s.slice(i, i + size);
                }

            }

        }
    return "";

};

//  console.log(longestPalindrome("babad"));


function isAnagram(arr1,arr2){

    // console.log(arr1," " ,arr2);

    if(arr1.length != arr2.length){
        return false;
    }
    if(Array.isArray(arr1) && Array.isArray(arr2)){

        arr1 = arr1.sort();
        arr2 = arr2.sort();
        if(arr1.join("") == arr2.join("")){
            
            return true;
        }

    }

    return false;
}

var findAnagrams = function (s, p) {
    
    if(typeof s == "string" && typeof p == "string"){


        let pLength = p.length;
        let sLength = s.length;
    
        s = s.split("");
        p = p.split("");
        
        const result = [];
        for(let i =0;i<s.length;i++){
    
            if(isAnagram(s.slice(i,i+pLength),p)){
                result.push(i);
            }
    
        }
        return result;
    }
};

// console.log(findAnagrams("cbaebabacd","abc"));

function rotate(matrix) {

    const n  = matrix.length;
    let temp;
    for(let i=0;i<n;i++){

        for(let j=0;j<n;j++){

            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;

        }

    }

    for(let i=0;i<n;i++){


        for(let j=0;j<n/2;j++){

            temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-j-1];
            matrix[i][n-j-1] = temp;

        }

    }

 }
 