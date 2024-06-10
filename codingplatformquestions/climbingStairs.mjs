'use strict'
import readLine from "../readLine.mjs";

function climbStairs(n) {

    function recur(n,ways){
        if(n<0){
            return 0;
        }
        if(n==0){
            ways+=1;
            return ways;
        }else{
            ways += climbStairs(n-1,ways);
            ways += climbStairs(n-2,ways);
            return ways;
        }
    }
    return recur(n,0);
}



export default function executeClimbingStairsWays(){
    console.log("Enter input for climbing stairs");
    readLine.on('line', (num)=>{
        if(isNaN(parseInt(num))){
            console.log("Invalid input for climbing stairs.");
            return;
        }else{
            const result = climbStairs(num);
            console.log(result);
        }
    });
    
}
// export {climbStairs};