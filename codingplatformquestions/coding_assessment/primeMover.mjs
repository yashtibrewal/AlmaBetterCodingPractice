function PrimeMover(num) {
    if(num<1) return null;
    if(num==1) return 2;
    if(num==2) return 3;

    function isPrime(n) {

        if(n<0) return false;
        if(n==1) return false;
        if(n==2) return true;
        for(let i=2;i<n;i++){
            if(n%i == 0) {
                return false;
            }
        }
        return true;
    }

    let primeTracker;
    let prime = 2;

    while(num) {
        if(isPrime(prime)) {
            num--;
            primeTracker = prime;
        }
        prime++;
    }

    return primeTracker;
}

 console.log(PrimeMover(9));
 console.log(PrimeMover(100));