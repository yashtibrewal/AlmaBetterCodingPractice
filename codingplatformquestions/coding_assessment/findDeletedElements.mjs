
const  findDeletedElements =function findDeletedElements(N, K, V, A) {
    // Your Code Goes Here
    const totalItems = N+K;
    const total = A.reduce((acc,item)=>acc+item,0);
    const missingSum = V*totalItems - total;
    const eachMissingNumber = missingSum/K;
    const min = Math.min(...A);
    const max = Math.max(...A);
    if(eachMissingNumber >= min && eachMissingNumber <= max){
        const result = new Array(K);
        result.fill(eachMissingNumber);
        return result;
    }
    return "Mistake";
};

console.log(findDeletedElements(5,2,10,[4,8,12,16,20]));
console.log(findDeletedElements(6,3,9,[1,2,3,4,5,7]));