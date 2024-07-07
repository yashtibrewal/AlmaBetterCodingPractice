var decodeString = function (str) {
    // Your code goes here

    let executionStack = [];
    const digitRegex = /[0-9]/g;

    for (let char of str) {

        if (char == ']') {
            let subStr = [];
            let popedElement = '';
            do {
                popedElement = executionStack.pop();
                if (popedElement != '[')
                    subStr.unshift(popedElement);

            } while (popedElement != '[');

            const digits = [];

            do {
                popedElement = executionStack.pop();
                if (digitRegex.test(popedElement))
                    digits.unshift(popedElement);
            } while (digitRegex.test(popedElement));

            executionStack.push(popedElement); // for the character we are not dealing with

            let size = Number(digits.join(""));

            const values = new Array(size);
            values.fill(subStr.join(""));
            executionStack.push(values.join(""));

        } else {
            executionStack.push(char);
        }

    }
    return executionStack.join("").replace(digitRegex, "");
};

// console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString("3[a2[c]]"));

var kthGrammar = function (n, k) {
    k--;
    // Your code goes here
    let str = '0';
    for (let i = 0; i < n; i++) {
        str = str.replace(/0/g, "ab");
        str = str.replace(/1/g, "10");
        str = str.replace(/ab/g, "01");
    }
    // console.log(str);
    return str[k];
};

// console.log(kthGrammar(1,1));

/**
 * 
 * 
 * A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime.
However, "3245" is not good because 3 is at an even index but is not even.
Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.

 */

var countGoodNumbers = function (n) {
    // You code goes here

    let counter = 1n;
    let flag = true;
    while (n > 0) {
        if (flag) {
            counter *= 5n;
        } else {
            counter *= 4n;
        }
        flag = !flag;
        n--;
    }

    counter = counter % (10n ** 9n + 7n);


    return Number(counter);

};

// console.log(countGoodNumbers(1));
// console.log(countGoodNumbers(4));
// console.log(countGoodNumbers(50));

var minNonZeroProduct = function (p) {
    // Your code goes here

    const max = (2 ** p - 2).toString(2).length;


    function getBinaryRepresentation(num) {

        num = num.toString(2);


        while (num.length < max) {
            num = '0' + num;
        }
        return num;
    }

    const nums = [];

    for (let i = 2 * p - 1; i > 0; i--) {

        nums.push(getBinaryRepresentation(i));

    }

    return nums;
};

// console.log(minNonZeroProduct(1));
// console.log(minNonZeroProduct(2));
// console.log(minNonZeroProduct(3));

function portalSoln(p) {
    p = BigInt(p)
    // r max range
    let r = (2n ** p) - 2n
    let mod = BigInt(1000000007)


    function rec(n, r) {
        // base case for 0
        if (n == 0n) return 1n
        // base case for 1
        if (n == 1n) return r % mod
        // if n is odd
        if (n % 2n != 0n) {
            const temp = rec((n - 1n) / 2n, r)
            return (r * (temp * temp) % mod) % mod
        }
        // if n is even
        else {
            const temp = rec(n / 2n, r) % mod
            return (temp * temp) % mod
        }
    }

    return (rec(r / 2n, r) * (r + 1n)) % mod
}

// console.log(portalSoln(1));
// console.log(portalSoln(2));
// console.log(portalSoln(3));


var monkeyMove = function (n) {

    return Number((2n ** BigInt(n) - 2n) % (10n ** 9n + 7n));


};

// console.log(monkeyMove(3));
// console.log(monkeyMove(4));

var isMatch = function (s, p) {
    // Your code goes here
    const pattern = p;
    const str = s;

    let pCounter = 0;
    let strCounter = 0;

    while (pCounter < pattern.length && strCounter < str.length) {

        switch (pattern[pCounter]) {

            case '.':
                strCounter++;
                pCounter++;
                break;
            case '*':
                pCounter--; // to point to the previous character

                if (pattern[pCounter] == '.') {

                    pCounter = pattern.length;
                    strCounter = str.length;

                } else {

                    while (str[strCounter] == pattern[pCounter]) {
                        strCounter++;
                    }
                    pCounter += 2;
                }
                break;
            default:
                if (pattern[pCounter] != str[strCounter]) return false;
                else { pCounter++; strCounter++; }
                break;

        }
    }

    if (strCounter != str.length) return false;
    if (pCounter != pattern.length) return false;

    return true;
};

function portalSolnMatch(s, p) {
    if (!p || !p.length) return !Boolean(s.length);
    const first_match = s.length && (p[0] === s[0] || p[0] === '.');

    if (p.length > 1 && p[1] === '*') {
        const condition1 = isMatch(s, p.substring(2));
        const condition2 = first_match && isMatch(s.substring(1), p);

        return condition1 || condition2;
    } else {
        return first_match && isMatch(s.substring(1), p.substring(1));
    }
}

// console.log(isMatch("aa", "a"));
// console.log(isMatch("ab", "a"));
// console.log(portalSolnMatch("aa", "a"));
// console.log(portalSolnMatch("ab", "a"));
// console.log(isMatch("aa", "a*"));
// console.log(isMatch("aaa", "a*"));
// console.log(isMatch("aaaaa", "a*"));
// console.log(isMatch("aa", ".*"));

var intToRoman = function (num) {
    // Your code goes here
    const symbols = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    let pos = values.length - 1;
    let result = [];
    while (num > 0) {

        if (num >= values[pos]) {
            result.push(symbols[pos]);
            num -= values[pos];
        } else {
            pos--;
        }

    }
    return result.join("");
};

// console.log(intToRoman(3) === 'III');
// console.log(intToRoman(9) === 'IX');
// console.log(intToRoman(58) === 'LVIII');
// console.log(intToRoman(1994)=== 'MCMXCIV'); //  
// console.log(intToRoman(3999)=== 'MMMCMXCIX'); //  

var numDecodings = function (s) {
    // Your code goes here

    if (s[0] == '0') return 0;

    function recur(i, presentStr) {

        if (i == s.length || presentStr[0] == '0') {
            return;
        }

        if (Number(presentStr) > 26 || Number(presentStr) < 1) {
            return;
        }

        if (i == s.length - 1) {
            counter++;
            return;
        }



        recur(i + 1, s[i + 1]); // do not take previous character
        recur(i + 1, presentStr + s[i + 1]) // take previous character


    }
    let counter = 0;

    recur(0, s[0]);
    return counter;
};

// console.log(numDecodings("12"));
// console.log(numDecodings("226"));
// console.log(numDecodings("2270"));
// console.log(numDecodings("06"));

var PredictTheWinner = function (nums) {
    // Your code goes here

    let playerOneWin = false;

    function backtrack(i, j, turn, playerOneTotal, palyerTwoTotal) {

        if (playerOneWin) return;

        if (j < i) {
            if (playerOneTotal > palyerTwoTotal) {
                playerOneWin = true;
            }
            return;
        }

        if (turn) {
            playerOneTotal += nums[i];
        } else {
            palyerTwoTotal += nums[i];
        }

        backtrack(i + 1, j, !turn, playerOneTotal, palyerTwoTotal);

        if (turn) {
            playerOneTotal -= nums[i];
            playerOneTotal += nums[j];
        } else {
            palyerTwoTotal -= nums[i];
            palyerTwoTotal += nums[j];
        }

        backtrack(i, j - 1, !turn, playerOneTotal, palyerTwoTotal);

    }

    backtrack(0, nums.length - 1, true, 0, 0);

    return playerOneWin;
};

// console.log(PredictTheWinner([1, 5, 233, 7]));
// console.log(PredictTheWinner([1, 5, 2]));


/**
 * Questions not solved.
 * Q2: Predict the winner.
 * Q5: Minimum non-zero product of array.
 * Q7: Regular Expression Matching.
 * Q9: Decode Ways -> Test case 3.
 */