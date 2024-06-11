import lodash from 'lodash';

function counter(num){

    let counter = num;

    const func = function(){
        return counter++;
    }

    return func;

}

// const newFunc = counter(10);
// console.log(newFunc());
// console.log(newFunc());
// console.log(newFunc());

function createCounter(init){

    let currentLapCount = init;

    const obj = {
        increment: ()=>{
            currentLapCount++;
            return currentLapCount;
        },
        decrement: ()=>{
            currentLapCount--;
            return currentLapCount;
        },
        reset: ()=>{
            currentLapCount = init;
            return currentLapCount;
        }
    }

    return obj;
}

// const createCounterFunc = createCounter(5);
// console.log(createCounterFunc.increment());
// console.log(createCounterFunc.reset());
// console.log(createCounterFunc.decrement());

// const chunk = lodash.chunk;

function createChunks(arr,size){
    let resArr = [], tempArr = [];
    
    for(let i=0; i<arr.length; i++){
        tempArr.push(arr[i]);

        if(tempArr.length == size){
            resArr.push(tempArr);
            tempArr = [];
        }
    }

    if(tempArr.length){
        resArr.push(tempArr);
    }

    return resArr;

}

function createChunksWithoutLoadash(arr,size){

    let result = [];
    let temp = [];

    for(let i=0;i<arr.length;i++){

        temp.push(arr[i]);

        if(temp.length == size){
            result.push(temp);
            temp = [];
        }
    } 
    temp.length ? result.push(temp) : undefined;

    return result;
}

console.log(createChunks([1,2,3,4,5],1));
console.log(createChunks([1,2,3,4,5],3));
console.log(createChunks([1,2,3,4,5],6));

console.log(createChunksWithoutLoadash([1,2,3,4,5],1));
console.log(createChunksWithoutLoadash([1,2,3,4,5],3));
console.log(createChunksWithoutLoadash([1,2,3,4,5],6));

