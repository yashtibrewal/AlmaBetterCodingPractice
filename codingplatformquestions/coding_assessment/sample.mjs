
const double = x => x * 2;
const sqaure = x => x * x;

const compose1 = (...fns) => x => fns.reduce((y, f) => f(y), x);
const compose2 = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

// console.log(compose1(sqaure, double)(10));
// console.log(compose2(sqaure, double)(10));

let x = [1,2,3];

x.forEach((x)=>x*x);

console.log(x);
