
var mySqrt = function(x) {
    // Your code goes here
    let i=1;
    while(i*i<=x)i++;
    return --i;
};

console.log(mySqrt(8));
console.log(mySqrt(4));
console.log(mySqrt(2));