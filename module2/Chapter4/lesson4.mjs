function letterCombinationOfAPhoneNumber(num) {
    if (num == '') {
        return '[]';
    }
    const dict = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    const results = [];
    const digits = num.split("");

    function backtrack(str, idx) {

        if (idx === digits.length) {
            results.push(str);
            return;
        }
        const digitsString = dict[digits[idx]];

        for (let i = 0; i < digitsString.length; i++) {

            backtrack(str + digitsString[i], idx + 1);
        }

    }
    backtrack('', 0);
    return results;
}

// console.log(letterCombinationOfAPhoneNumber(23));
// console.log(letterCombinationOfAPhoneNumber(3));

// function combinationSum(nums,target){

//     let results = new Set();

//     function backtrack(arr, sum){

//         if(sum>target)return;
//         if(sum===target){
//             let copy = [...arr];
//             copy = copy.sort((a,b)=>a-b);
//             results.add(JSON.stringify(copy));
//             return;
//         }

//         for(let i=0;i<nums.length;i++){
//             arr.push(nums[i]);
//             backtrack(arr,sum+nums[i]);
//             arr.pop();
//         }

//     }
//     const arr = [];
//     backtrack(arr, 0 );

//     let resultArray = [...results].map((item)=>{
//         return JSON.parse(item);
//     });

//     return resultArray;
// }

function combinationSum(nums, target) {

    const results = [];

    function backtrack(sum, idx, arr) {

        if(sum > target){
            return ;
        }
        
        if(sum === target){
            results.push([...arr]);
            return ;
        }

        for(let i=idx;i<nums.length;i++){
            arr.push(nums[i]);
            backtrack(sum+nums[i],i,arr)
            arr.pop();
        }

    }
    const arr = [];
    backtrack(0,0,arr)
    return results;
}

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2, 3, 5], 1));

function wordBreak(str, arr) {

    for (let word of arr) {

        const regex = new RegExp(word, 'g');
        while (str.indexOf(word) != -1) {
            str = str.slice(0, str.indexOf(word)) + str.slice(str.indexOf(word) + word.length, str.length);
        }

    }
    return str == '';
}

// console.log(wordBreak('almabetter', ["alma", "better"]));
// console.log(wordBreak('applepenapple', ["apple", "pen"]));
// console.log(wordBreak('catsandog', ["apple", "pen"]));