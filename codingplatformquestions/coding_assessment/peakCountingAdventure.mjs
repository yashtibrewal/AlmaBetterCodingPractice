const countHillValley = function (nums) {
    // Your Code Goes Here 
    const seen = {};
    let result = 0;
    for (let i = 1; i < nums.length - 1; i++) {

        if (Object.keys(seen).includes(nums[i])) {
            let leftValue,rightValue;
            [leftValue,rightValue]=seem[nums[i]];

            // to check if the present num[i] still have the same leftval and right val.

            
            let l = i;
            let r = i;

            while (l >= 0 && nums[i] === nums[l]) {
                l--;
            }
            if (l < 0) {
                continue;
            }

            while (r < nums.length && nums[r] === nums[i]) {
                r++;
            }
            if (r === nums.length) {
                continue;
            }
            
            if(nums[l] == leftValue && nums[r] == rightValue){
                // same
            }

        } else {
            let l = i;
            let r = i;

            while (l >= 0 && nums[i] === nums[l]) {
                l--;
            }
            if (l < 0) {
                continue;
            }

            while (r < nums.length && nums[r] === nums[i]) {
                r++;
            }
            if (r === nums.length) {
                continue;
            }

            if (nums[l] < nums[i] && nums[r] < nums[i]) {
                result++; // hill
                seen[nums[i]] = [nums[l],nums[r]];
            }

            else if (nums[l] > nums[i] && nums[r] > nums[i]) {
                result++; // valley
                seen[nums[i]] = [nums[l],nums[r]];
            }
        }
        
    }
    return result;
};


console.log(countHillValley([2,4,1,1,6,5]));