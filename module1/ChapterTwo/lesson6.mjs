

function multiply(num1,num2=2){
    return num1*num2;
}

console.log(multiply(1,3));
console.log(multiply(1));

function getFullName(firstName, lastName){
    return firstName+" "+lastName;
}

function isPrime(num){

    if(num == 1 || num == 2){
        return true;
    }

    if(typeof num =="number"){

        for(let i=2;i<num;i++){
            if(num%i==0){
                return false;
            }
        }

        return true;
    }
    return false;
}

function countOccurences(arr,target){

    let count = 0;
    if(Array.isArray(arr)){

        for(let i of arr){
            if(i==target) count++;
        }

    }
    return count;
    
}