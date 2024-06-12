function total(arr){

    let total = 0;

    if(Array.isArray(arr)){

        for(let item of arr){
            total+=item;
        }

    }
    return total;

}

function findSubarray(arr, sum) {
    // Your code goes here

    if(Array.isArray(arr) && typeof sum == "number"){

        for(let i=arr.length;i>0;i--){

            for(let j=0;j+i<arr.length;j++){

                if(total(arr.slice(j,j+i))==sum){
                    return arr.slice(j,j+i);
                }

            }

        }

    }

}

console.log(findSubarray([1,2,3,7,5],12));
console.log(findSubarray( [1,2,3,4,5,6,7,8,9,10] ,15));