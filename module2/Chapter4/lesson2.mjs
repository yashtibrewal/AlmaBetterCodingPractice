
/**
 * Using tail recursion.
 * @param {*} acc 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function go(acc, a, b) {

    if (acc == 0) {
        return a;
    }
    if (acc == 1) {
        return b;
    }

    return go(acc - 1, b, a + b);

}

function fibonacci(n) {
    return go(n, 0, 1);

}

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));  


function isPowerOfFour(n){

    if(n<1){
        return false;
    }

    while(n%4==0){
        n/=4;
    }
    return n==1;

}
  
// console.log(isPowerOfFour(64));
// console.log(isPowerOfFour(6));
// console.log(isPowerOfFour(24));
// console.log(isPowerOfFour(1));


function isPowerOfThree(n){

    if(n<1){
        return false;
    }

    while(n%3==0){
        n/=3;
    }
    return n==1;


}

// console.log(isPowerOfThree(27));
// console.log(isPowerOfThree(0));
// console.log(isPowerOfThree(-1));

