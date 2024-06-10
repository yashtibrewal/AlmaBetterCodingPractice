
function isPalindrome(word){

    for(let i=0;i<word.length/2;i++){
        if(word.charAt(i)!=word.charAt(word.length-i-1)){
            return false;
        }
    }
    return true;
}

function signOfProduct(...nums){

    let sign = true;

    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            return 0;
        }else if(nums[i]<0){
            sign = !sign;
        }
    }

    return sign?1:-1;

}

function signChecker(...nums){

    let result = "";

    for(let i=0;i<nums.length;i++){

        if(nums[i]<0){
            result = result+"-";
        }else{
            result = "+"+result;
        }

    }
    return result;
}


// console.log(isPalindrome("test"));
// console.log(isPalindrome("racecar"));
// console.log(signOfProduct(1,0,-1));
// console.log(signOfProduct(-4,6,0));
// console.log(signOfProduct(2,3,5));
// console.log(signOfProduct(-2,-3,-1));
// console.log(signChecker(1,2,3));
// console.log(signChecker(-1,2,3));
// console.log(signChecker(-1,-2,3));
// console.log(signChecker(-1,-2,-3));