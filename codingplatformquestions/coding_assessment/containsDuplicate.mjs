var containsDuplicate = function(nums) {
    // Your code goes here
    const mySet = new Set(nums);
    return nums.length != mySet.size;
};

console.log(containsDuplicate([1,2,3,4,1]));
console.log(containsDuplicate([1,2,3,4]));