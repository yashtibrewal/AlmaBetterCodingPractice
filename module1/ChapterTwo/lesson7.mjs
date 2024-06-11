
// declarationTwo(); //Not allowed here.
// declarationThree();  //Not allowed here.

function declaration(num){ // Hoisted
    console.log("test");
    const declarationTwo = function(){ // Not Hoisted.
        console.log(num);
    }
    declarationTwo();
}


declaration();

const declarationThree = ()=>{console.log("test3")}; // not Hoisted.

// declarationTwo.call();
// declarationThree();


function closureAdd(num){
    return numTwo=>num+numTwo;
}

const add = closureAdd(5);
console.log(add(3));
console.log(add(7));

function secondHighest(nums){

    if(Array.isArray(nums)){
        
        let highest = 0;
        for(let num of nums){
            highest = num>highest?num:highest;
        }
        const numsCopy = Array.from(nums);
        // console.log(numsCopy);
        nums.splice(nums.findIndex(num=>num==highest),1);
        highest = 0;
        for(let num of nums){
            highest = num>highest?num:highest;
        }
        return numsCopy.findIndex((item)=>item==highest);
    }

    return null;

}

console.log(secondHighest([5, 2, 8, 1, 9, 9]));

function uniqueStamps(numbers){

    if(Array.isArray(numbers)){
        const mySet = new Set();
        numbers.forEach(num=>{mySet.add(num)});
        const result = [];
        mySet.forEach(item=>{result.push(item)})
        return result;
    }
    return null;

}

console.log(uniqueStamps([1, 2, 3, 2, 4, 4, 5]));


const func = (function(x){
    return x*x;
}(10));

console.log(func)


console.log(add(1,2,3));
