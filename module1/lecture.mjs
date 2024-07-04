

/**
 * 
 * @param {string or number parameter} str 
 * @returns boolean value if it is a number
 */
function isNumber(str) {
    if (typeof str == ' string') {
        return false;
    } else if (typeof str == 'number') {
        return true;
    }
    return false;
}


// console.log(isNumber('test'));
// console.log(isNumber(1));


/**
 * 
 * @param {expected a number} num 
 */
function printFibonacci(num) {

    if (!isNumber(num)) {
        console.log('not a number');
    }

    if (num == 0) {
        return;
    }
    if (num == 1) {
        console.log(0);
        return;
    }
    let a = 0;
    let b = 1;
    console.log(a,);
    for (let i = 0; i < num; i++) {

        console.log(b);
        [a, b] = [b, a + b];
    }
}

// printFibonacci(3);

function isPalindrome(num) {

    let newNum = 0;
    while (num > 0) {
        newNum = newNum * 10 + num % 10;
        num = Math.floor(num /= 10);
    }
    console.log(newNum);
}
