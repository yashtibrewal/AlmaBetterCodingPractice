var findKthPositive = function(arr, k) {
    // Your code goes here   

    // Positive Numbers start from 1
    let start = 1;
    for(let i=0;i<arr.length;i++){

        if(start < arr[i]){

            if(arr[i] - start < k){
                k = k - (arr[i] - start);
                start = arr[i]+1;
                continue;
            }else{

                start--;
                return start+k;

            }

        }else if(start == arr[i]){

            start++;
            continue;
            
        }else {
            // not possible
            console.log("error");
        }

    }
    start--;
    return start+k;
};

console.log(findKthPositive([1,2,3,4,7,11],2));