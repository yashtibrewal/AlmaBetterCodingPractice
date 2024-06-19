var countEven = function(num) {
    // Your code goes here

    function isSumEven(num){
        let total = 0;
        total = num.toString().split("").map(x=>parseInt(x)).reduce((acc,cur)=>cur+acc,0);
        return total % 2 == 0;

    }

    let count = 0;
    for(let i=1;i<=num;i++){

        if(isSumEven(i))count++;
        
    }
    return count;

};

console.log(countEven(4));
console.log(countEven(30));