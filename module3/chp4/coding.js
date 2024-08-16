const plusOne = function (digits) {
    // Your code goes here

    let carry = true;
    let temp = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (carry) {
            temp = 1 + digits[i];
        } else {
            temp = digits[i];
        }
        if (temp > 9) {
            carry = true;
            digits[i] = temp % 10;
        } else {
            carry = false;
            digits[i] = temp;
        }
    }

    if (carry) {
        digits.unshift(1);
    }

    return digits;
};

// console.log(plusOne([9,9]));

var findRepeatedDnaSequences = function (s) {
    // Your code goes here

    const result = new Set();

    for (let i = 0; i < s.length - 10; i++) {

        const sub = s.substring(i,i+10);

        for (let j = i+1 ; j < s.length; j++) {

            if(s.indexOf(sub,j) != -1){
                result.add(sub);
                j = s.length;
            }

        }
    }

    return Array.from(result);

};

// console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
// console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA'));


var buyChoco = function(prices, money) {
    // Your code goes here
    prices = prices.sort((a,b)=>a-b);

    if(prices[0]+prices[1]>money){
        return money;
    }else{
        return money - prices[0] - prices[1];
    }

};

console.log(buyChoco([1,2,2],3));