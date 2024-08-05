/**
 * 
 * @param {[]} nums 
 */
var wiggleMaxLength = function (nums) {

    /**
     * 
     * @param {[]} nums 
     * @param {number} i 
     * @param {number} j 
     */
    function isWiggle(nums, i, j) {
        if (j - i <= 1) return false;
        for (let k = i + 1; k < j; k++) {
            if (toggle) {
                if (nums[i + 1] < nums[i]) {
                    return false;
                }
            } else {
                if (nums[i] < nums[i + 1]) {
                    return false;
                }
            }
        }
        return true;
    }

    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = 0; j + i < nums.length; j++) {
            if (isWiggle(nums, j, i)) {
                return i - j + 1;
            }
        }
    }
    return 0;
};
console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))