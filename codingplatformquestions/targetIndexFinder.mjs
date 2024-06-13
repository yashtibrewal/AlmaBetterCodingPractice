var searchInsert = function(nums, target){
    
    let l,r,m;
    l = 0; r = nums.length-1;
    function getM(l,r){
        return Math.floor((l+r)/2);
    }
    while(l<=r){
        m = getM(l,r);
        // console.log(m);
        if(nums[m] == target){
            return m;
        }else if (nums[m] > target){
            // go left
            r = m-1;
        }else{
            // go right
            l = m+1;
        }
    }
    return Math.ceil((l+r)/2);
};

console.log(searchInsert([1,2,3,6],5));