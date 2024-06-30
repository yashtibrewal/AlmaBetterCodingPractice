const selfDividingNumbers = function(left, right) {
    // Your Code Goes Here

    function isSelfDividingNumber(num){
        if(typeof num == 'number'){
            const digits = num.toString().split("").map(item=>Number(item));
            if(Array.isArray(digits) ){

                if(digits.includes(0)){
                    return false;
                }else{
    
                    for(let item of digits){
                        if(num%item!==0){
                            return false;
                        }
                    }
                    return true;
                }
            }
        }
        

    }

    const result = [];
    for(let i=left;i<=right;i++){
        if(isSelfDividingNumber(i)){
            result.push(i);
        }
    }
    return result;
};

console.log(selfDividingNumbers(1,22));