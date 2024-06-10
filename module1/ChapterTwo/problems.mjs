
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

function oddOrEvenSum(nums){


    const result = {
        oddSum:0,
        evenSum:0
    }

    for(let num of nums){
        if(num%2==0){
            result.evenSum = result.evenSum +num;
        }else{
            result.oddSum = result.oddSum +num;
        }
    }

    return result;
}


function distributeGrades(nums){

    const result = {
        A:0, B:0, C:0, D:0, F:0
    }

    for(let num of nums){
        switch(true){
            case num<60: result.F+=1;break;
            case num<70: result.D+=1;break;
            case num<80: result.C+=1;break;
            case num<90: result.B+=1;break;
            case num<101: result.A+=1;break;
            default: console.log("invalid Input");break;
        }
    }
    return result;

}

function simpleCalculator(operandOne,operandTwo,operator){
    console.log(typeof operandOne);
    if(!((operandOne instanceof Number) || (operandTwo instanceof Number))
    && (typeof operandOne != 'number' || typeof operandTwo != 'number')){
        return "Invalid input. Please enter numeric values.";
    }
    switch(operator){
        case '+':
            return operandOne + operandTwo;  
        case '-':
            return operandOne - operandTwo;
        case '*':
            return operandOne * operandTwo;
        case '/':
            return operandTwo == 0 ? "Cannot divide by zero." : operandOne / operandTwo;
        default: return "Unsupported operator. Please enter a valid operator (+, -, *, /).";
    }
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

// console.log(oddOrEvenSum([0,2,4]));
// console.log(oddOrEvenSum([1,7,8,6]));

// console.log(distributeGrades([85, 92, 78, 65, 95]));
// console.log(distributeGrades([76, 81, 60, 55, 88]));
// console.log(distributeGrades([92, 95, 87, 60, 72]));

// console.log(simpleCalculator(5, 2, '+')); // 7
// console.log(simpleCalculator(5, 2, '-')); // 3
// console.log(simpleCalculator(5, 2, '*')); // 10
// console.log(simpleCalculator(5, 2, '/')); // 2.5
// console.log(simpleCalculator(5, 0, '/')); // "Cannot divide by zero."
// console.log(simpleCalculator('5', 2, '+')); // "Invalid input. Please enter numeric values."
// console.log(simpleCalculator(5, 2, '&')); // "Unsupported operator. Please enter a valid operator (+, -, *, /)."
