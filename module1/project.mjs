/**
 * Logic Build Coding Questions
 */

// Write a JavaScript function findPrimes that takes a positive integer n as input and returns an array of prime numbers less than or equal to n.
export function findPrimes(num){

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

    const primes = [];

    for(let i=1;i<=num;i++){

        if(isPrime(i)){
            primes.push(i);
        }

    }
    return primes;
}
