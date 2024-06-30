function linearSearch(arr, target){
    let index = 0;
    for(let item of arr){
        
        if(item === target){
            return index;
        }
        index++;
    }
    return -1;
}

// console.log(linearSearch([4,6,7,8,2,9,0],2));
// console.log(linearSearch([3,6,7,9,1,5],8));

function binarySearch(arr,target){

    // arr is sorted.
    let l=0;
    let r=arr.length-1;
    let mid;
    while(l<=r){
        mid = Math.floor((l+r)/2);
        if(arr[mid] == target){
            return mid;
        }else if (arr[mid]<target){
            l = mid+1;
        }else{
            r = mid-1
        }
    }
    return -1;
}

// console.log(binarySearch( [2,3,7,9,11],9));
// console.log(binarySearch( [-1,0,2,3,7,9,11],10));

function searchInsertPosition(arr,target){

    let l=0;
    let r=arr.length-1;
    let mid = Math.floor((l+r)/2);
    while(l<=r){
        mid = Math.floor((l+r)/2);
        if(arr[mid] == target){
            return mid;
        }else if (arr[mid]<target){
            l = mid+1;
        }else{
            r = mid-1
        }
    }
    if(target<arr[mid]){
        //add before mid
        return mid;
    }else{
        //add after mid
        return mid+1;
    }

}


console.log(searchInsertPosition( [2,3,7,9,11],9));
console.log(searchInsertPosition( [-1,0,2,3,7,9,11],10));
console.log(searchInsertPosition( [-1,0,2,3,7,9,11],8));