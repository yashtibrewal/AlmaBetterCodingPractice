

function isPowerOfTwo(n) {
    // changed to &&
    return n > 0 && (n & (n - 1)) === 0;
}

// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(64));

function minAddToMakeValid(s) {
    let open = 0, close = 0;

    for (let c of s) {
        if (c === '(') open++;
        // changed to open--
        else if (open) open--;
        // changed to close++
        else close++;
    }
    return open + close;
};

// console.log(minAddToMakeValid("(()"));
// console.log(minAddToMakeValid("())"));
// console.log(minAddToMakeValid("()))(("));


function callPoints(operations) {
    // removed equal to sign
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            // added const
            const sum = operations[i - 2] + operations[i - 1];
            operations[i] = sum;
        } else if (operations[i] === "D") {
            // added const
            const newD = operations[i - 1] * 2;
            operations[i] = newD;
        } else if (operations[i] === "C") {
            operations.splice(i - 1, 2);
            i = i - 2;
        } else {
            const item = +operations[i];
            operations[i] = item;
        }
    }

    // to calculate the totalSum only
    let totalSum = 0;
    // removed equal to sign 
    for (let i = 0; i < operations.length; i++) {
        totalSum += operations[i];
    }

    return totalSum;
};

// console.log(callPoints(["5","2","C","D","+"])); // 30
// console.log(callPoints(["5","-2","4","C","D","9","+","+"])); // 27
// console.log(callPoints(["1","C"])); // 0

function sortPeople(names, heights) {
    // removed paranthesis
    let length = heights.length;
    let map = new Map();
    // remove equal to sign
    for (let i = 0; i < length; i++) {
        map.set(heights[i], names[i]);
    }
    heights.sort((a, b) => b - a);
    let res = [];
    for (let height of heights) {
        res.push(map.get(height));
    }
    return res;
};

// console.log(sortPeople(["Mary","John","Emma"],[180,165,170])) // Output: ["Mary","Emma","John"]
// console.log(sortPeople(["Alice","Bob","Bob"],[155,185,150])) // Output:  ["Bob","Alice","Bob"]
// console.log(sortPeople( ["Sarah", "David", "Lily"],[155, 160, 150])) // Output: ["David","Sarah","Lily"]


function findErrorNums(nums) {

    // changed to set since we only require set
    const set = new Set();
    const output = [];
    let maxValue = 0;

    // removed equal to sign to run the loop from 0 to n-1
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (set.has(num)) output.push(num);
        set.add(num);

        maxValue = Math.max(maxValue, num);
    }

    // added starting number logic
    let startingNumber = maxValue - nums.length + 1;

    /**
     * we add a check for starting number for edge case,    
     * because if the max value is 8, and length of arary is 9
     * starting number will result to 0 which does not follow the constraint.
     */

    if (startingNumber == 0) {
        startingNumber = 1;
        maxValue++;
    }

    // changed starting number logic.
    for (let i = startingNumber; i < maxValue + 1; i++) {
        // added a not operator to only push missing number
        if (!set.has(i)) {
            output.push(i);
            break;
        }
    }

    return output;
};

// console.log(findErrorNums([1, 2, 2, 4]));
// console.log(findErrorNums([3, 2, 3, 4, 5]));
// console.log(findErrorNums([1, 2, 3, 4, 5, 6, 7, 8, 8]));
// console.log(findErrorNums([2, 3, 4, 5, 6, 7, 8, 8, 9]));


function isHappy(n) {
    // Helper function to calculate the sum of squares of digits
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    const set = new Set();
    let sum = n;
    do {
        set.add(sum);
        sum = calculateSumOfSquares(sum);
    } while (!set.has(sum));

    return sum === 1;
}

// console.log(isHappy(19));
// console.log(isHappy(4));
// console.log(isHappy(7));

function isPalindrome(n) {

    n = n.toString();
    let left = 0, right = n.length - 1;

    while (left < right) {

        if (n[left] != n[right]) return false;
        left++; right--;
    }

    return true;

}

// console.log(isPalindrome(12321));
// console.log(isPalindrome(1451));
// console.log(isPalindrome(12345));

var fairCandySwap = function (aliceSizes, bobSizes) {
    let sumAlice = 0, sumBob = 0;

    for (let i = 0; i < aliceSizes.length; i++) {
        sumAlice += aliceSizes[i];
    }

    for (let i = 0; i < bobSizes.length; i++) {
        sumBob += bobSizes[i];
    }

    let sum = (sumAlice + sumBob) / 2;

    for (let i = 0; i < aliceSizes.length; i++) {
        let a = aliceSizes[i];

        let b = sum - (sumAlice - a);

        if (bobSizes.includes(b))
            return [a, b];
    }
};

// console.log(fairCandySwap([1,1],[2,2]));
// console.log(fairCandySwap([1,2],[2,3]));

function nextGreatestLetter(letters, target) {
    // linear search

    // usage of set
    const set = new Set(letters);

    let ans = letters[0];
    let found = false;

    // using for each on set to find the first item greater then target.
    set.forEach(item => {
        if (!found && item > target) {
            found = !found;
            ans = item;
        }
    });

    return ans;
}

// console.log(nextGreatestLetter(["c","f","j"], "a"));
// console.log(nextGreatestLetter(["c","f","j"], "c"));
// console.log(nextGreatestLetter(["x","x","y","y"], "z"));
// console.log(nextGreatestLetter(["a","b","c","d","e","f","j"], "c"));


var searchRange = function (nums, target) {

    //O(log n) binary search approach.

    let l = 0, r = nums.length - 1;
    let mid = 0;
    let found = false;
    while (l <= r) {
        mid = r - Math.floor((r - l) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            found = true;
            break;
        }
    };

    if (!found) return [-1, -1];

    l = mid;
    r = mid;

    while (nums[l] == target) l--;
    l++;
    while (nums[r] == target) r++;
    r--;

    return [l, r];

}


// console.log(searchRange([5, 7, 7, 8, 8,8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 9));

function findPeakElement(nums, l = 0, r = nums.length) {

    // if the index of an element is not found following the constraints.
    if (r < l) return -1;

    let mid = r - Math.floor((r - l) / 2);

    // for any element whih is not the edge element of an array
    if (mid - 1 >= 0 && mid + 1 < nums.length
        && nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid]) return mid;

    // for first element of an array
    if (mid - 1 == -1 && mid + 1 < nums.length
        && nums[mid + 1] < nums[mid]) return mid;

    // for last element of an array
    if (mid + 1 == nums.length && mid - 1 >= 0
        && nums[mid - 1] < nums[mid]) return mid;

    let idx = findPeakElement(nums, l, mid - 1);
    if (idx != -1) return idx;

    idx = findPeakElement(nums, mid + 1, r);
    return idx;
}

// console.log(findPeakElement([1, 2, 3, 1]));
// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
// console.log(findPeakElement([6, 7, 7, 3, 5, 6, 7]));


function sortColors(nums) {

    const zeros = new Array(nums.filter(item => item == 0).length);
    zeros.fill(0);
    const ones = new Array(nums.filter(item => item == 1).length);
    ones.fill(1);
    const twos = new Array(nums.length - zeros.length - ones.length);
    twos.fill(2);

    return zeros.concat(ones).concat(twos);
}

// console.log(sortColors([2, 0, 2, 1, 1, 0]));
// console.log(sortColors([2, 0, 1]));

function maxCount(nums) {
    // Write your code inside this function only.

    let pos = 0, neg = 0;

    // using binary search we find the lowest positive integer.

    let l = 0, r = nums.length - 1;
    let mid = 0;
    while (l <= r) {

        mid = r - Math.floor((r - l) / 2);
        if (nums[mid] < 0) {
            l = mid + 1;
        } else if (nums[mid] > 0) {
            r = mid - 1;
        } else {
            l = mid;
            break;
        }

    }

    // l would be 0 or the lowest positive integer
    while (nums[l] == 0) l++;

    pos = nums.length - l;

    while (nums[l] >= 0) l--;

    neg = l + 1;

    return Math.max(pos, neg);
}

// console.log(maxCount([-2, -1, -1, 1, 2, 3]));
// console.log(maxCount([-3, -2, -1, 0, 0, 1, 2]));
// console.log(maxCount([5, 20, 66, 1314]));

function minimumSum(num) {

    num = num.toString();
    let min = Math.min();
    let numberOne = [], numberTwo = [];

    // Complexity is maximum O(k log k) i.e. O(4 log 4) i.e. O(1) 
    function updateMin() {

        const num1 = parseInt([...numberOne].sort().join(""));
        const num2 = parseInt([...numberTwo].sort().join(""));


        if (parseInt(num1) + parseInt(num2) < min) min = num1 + num2;

    }

    // Complexity is O(2^k) i.e. O(2^4) i.e. O(16) i.e. O(1)
    function recur(i) {

        if (i > 4) return;

        // no more digits to split.
        // comparing both nums
        if (numberOne.length + numberTwo.length == 4) {

            if (numberOne == "" || numberTwo == "") return;

            updateMin();

            return;
        }

        numberOne.push(parseInt(num[i]));
        recur(i + 1);

        numberOne.pop()
        numberTwo.push(parseInt(num[i]));
        recur(i + 1);

        numberTwo.pop();
    }

    recur(0)

    return min;
}

// console.log(minimumSum(9342));
// console.log(minimumSum(4009));


function transitionPoint(arr) {
    // Write your code inside this function only.

    let l = 0, r = arr.length - 1;
    let mid;

    while (l <= r) {

        mid = r - Math.floor((r - l) / 2);

        if (arr[mid] == 0) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }


    }

    return l < arr.length ? l : -1;

}
// console.log(transitionPoint([0,0,0,1,1]));
// console.log(transitionPoint([0,0,0,0]));


// Traditional Approach

var missingNumber = function (arr) {
    let n = arr.length;
    let hashSet = new Set();

    // Add all elements of array to hashset
    for (let i = 0; i < n; i++) {
        hashSet.add(arr[i]);
    }

    // Check each integer from 1 to n
    for (let i = 1; i <= n; i++) {
        // If integer is not in hashset, it is the missing integer
        if (!hashSet.has(i)) {
            return i;
        }
    }

    // If no integer is missing, return n+1
    return 0;
};

// Optimized Approach

var missingNumber = function (arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};


// Provide your comparison here.

/**
    Analysis:

    Traditional Approach:
        Space Comp. : O(n)
        Time Comp. : O(n)

    Optimized Approach:
        Space Comp. : O(1)
        Time Comp. : O(n^2)
    
    Traditional approach is faster but requires more space.
    Optimized Approach is more memory efficient but requires more time.
*/

// Traditional Approach

class Solution1 {
    duplicateCheck(str) {
        //code here
        let temp = '' + str[0];
        for (let i = 0; i < str.length; i++) {
            if (temp.indexOf(str[i]) == -1) {
                temp = temp + str[i];
            }
        }
        return temp;
    }
}

// Optimized Approach

class Solution2 {
    duplicateCheck(str) {
        const p = new Set(str);
        const t = [...p];
        return t.join("");
    }
}

// Provide your comparison here.

/**
    Analysis
    
    Assume the input string length is n.

    Traditional Approach:
        Space Comp. : O(n)  // temp varaible
        Time Comp. : O(n^2)  // index of is O(n) and it is running for n times.

    Optimized Approach:
        Space Comp. : O(n)
        Time Comp. : O(n)
    
    Omtimized Approach is faster in terms of time complexity.
    Both approaches are same w.r.t to space complexity.

*/

// Traditional Approach

function chunkArrayInGroups1(arr, size) {
    let temp = [];
    const result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}

// Optimized Approach

function chunkArrayInGroups2(arr, size) {
    // Break it up.
    const newArr = [];
    let i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;
}



// Provide your comparison here.

/**
    Analysis:
    
    Traditional Approach:
        Space Comp. : O(n)  
        Time Comp. : O(n)  

    Optimized Approach:
        Space Comp. : O(n)
        Time Comp. : O(n)
    
    Both programs in general are equivalent in terms of complexities.
    Optimized approach is easier to read then the tradional approach.
*/

// Traditional Approach

function enchantedArrayShuffling1(originalArray) {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    const shuffledArray = [];

    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        if (left === right) {
            shuffledArray.push(sortedArray[left]);
        } else {
            shuffledArray.push(sortedArray[left]);
            shuffledArray.push(sortedArray[right]);
        }

        left++;
        right--;
    }

    return shuffledArray;
}

// Optimized Approach

function enchantedArrayShuffling2(originalArray) {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    const shuffledArray = [];

    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        shuffledArray.push(sortedArray[left++]);
        shuffledArray.push(sortedArray[right--]);
    }

    if (left === right) {
        shuffledArray.push(sortedArray[left]);
    }

    return shuffledArray;
}



// Provide your comparison here.


/**
    Analysis:
    
    Traditional Approach:
        Space Comp. : O(n)  
        Time Comp. : O(n log n)  

    Optimized Approach:
        Space Comp. : O(n)
        Time Comp. : O(n log n)
    
    Both programs in general are equivalent in terms of complexities.
    Optimized approach is more concise.

*/

// Traditional Approach

function findPairWithSum1(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
}

// Optimized Approach

function findPairWithSum2(array, targetSum) {
    const numMap = {};

    for (let i = 0; i < array.length; i++) {
        const difference = targetSum - array[i];
        if (numMap[array[i]]) {
            return [difference, array[i]];
        }
        numMap[difference] = true;
    }

    return [];
}



// Provide your comparison here.




/**
    Analysis:
    
    Traditional Approach:
        Space Comp. : O(1)  
        Time Comp. : O(n^2)  

    Optimized Approach:
        Space Comp. : O(n)
        Time Comp. : O(n)
    
    Optimized Approach is faster, but requires more space.
    Traditional Approach is more memory efficient but requires more time.

*/

// Worst Case

function worstmaxBitwise(arr) {
    // Write your code inside this function only.

    if (arr.length == 0) return 0;

    if (arr.length == 1) return arr[0];

    let max = Math.max();

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] & arr[j]) > max) {
                max = arr[i] & arr[j];
            }
        }
    }

    return max;

}

// console.log(worstmaxBitwise([2, 3, 4, 5, 6]));
// console.log(worstmaxBitwise([10, 12, 6, 8]));

// Best Case

function bestmaxBitwise(arr) {

    // finding elements which confirm the constraint
    /**
     * Based on the binary pattern, we can find the count of numbers
     * which fall in that pattern, if there are 2 or more, we can update
     * the result to that pattern.
     * @param {number} pattern binary pattern, e.g. 01100.
     * @returns {boolean}
     * 
     * Space Comp. O(1)
     * Time Comp. O(n)
     */
    function hasTwoOrMoreElements(pattern) {

        let count = 0;

        for (let item of arr) {
            if ((pattern & item) == pattern) {
                count++;
            }

        }

        return count > 1;
    }

    let result = 0;
    let pattern;

    // outer time complexity O(32) i.e. O(1)
    for (let i = 31; i >= 0; i--) {

        pattern = Number(Math.pow(2, i));

        // we check how many numbers agree to the result + pattern
        if (hasTwoOrMoreElements(pattern | result)) {
            result = result | pattern;
        }

    }

    return result;

    // Final Complexity O(n)
}

// console.log(bestmaxBitwise([2, 3, 4, 5, 6]));
// console.log(bestmaxBitwise([10, 12, 6, 8]));

// Worst Case

/**
 * 
 * @param {[][]} image 
 */
function worstflipAndInvertImage(image) {

    let size = image.length;

    let newImage = new Array(size);

    for (let i = 0; i < size; i++) {

        newImage[i] = new Array(size);

    }

    for (let i = 0; i < size; i++) {

        newImage[i] = [...(image[i].reverse().map(item => item == 1 ? 0 : 1))]

    }

    return newImage;

    // Time Comp. O(n*n)
    // Space Comp. O(n*n)
}

// console.log(worstflipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
// console.log(worstflipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]));
// Best Case

/**
 * 
 * @param {[][]} image 
 */
function bestflipAndInvertImage(image) {
    // Write your code inside this function only.

    let size = image.length;
    let l, r;
    for (let i = 0; i < size; i++) {

        l = 0;
        r = size - 1;

        for (let j = 0; j < Math.ceil(size / 2); j++) {

            [image[i][j], image[i][r - j]] = [image[i][r - j] == 0 ? 1 : 0, image[i][j] == 0 ? 1 : 0];

        }


    }

    return image;

    // Time Comp. O(n*n/2) i.e O(n*n)
    // Space Comp. O(1) // inplace computation
}

// console.log(bestflipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
// console.log(bestflipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]));

function worstasteroidCollision(arr) {

    /**

        Logic implemented based on understanding of the question.
        The biggest astroids of the same direction win.

        If the higest negative astroid is -5, then all positive astroid of 6 and above live.

        Time Comp. O(n log n)

    */

    // Write your code inside this function only.
    if (arr && arr.length == 0) return [];


    arr = arr.sort((a, b) => a - b);

    if (arr[0] > 0) return arr; // no negative astroid.
    if (arr[arr.length - 1] < 0) return arr; // no positive astroid.

    // finding the first positive astroid
    let min = 0;
    let idx = -1, i = 0;

    for (let item of arr) {
        if (item > min) {
            idx = i;
            break;
        };
        i++;
    }

    let left = idx - 1;
    let right = idx;

    let destroyed = [];

    while (left > -1 && right < arr.length) {

        if (Math.abs(arr[left]) > Math.abs(arr[right])) {
            destroyed.push(right);
            right++;
        } else if (Math.abs(arr[left]) < Math.abs(arr[right])) {
            destroyed.push(left);
            left--;
        } else {

            destroyed.push(left);
            destroyed.push(right);
            left--;
            right++;

        }

    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (destroyed.includes(i)) continue;

        result.push(arr[i]);

    }

    return result;

}

// console.log(worstasteroidCollision([1, -5, 7, 9, -10, -11]));
// console.log(worstasteroidCollision([5, 6, 8, -6, 1]));

// Best Case

function bestasteroidCollision(arr) {

    /**

        Logic implemented based on understanding of the question.
        The biggest astroids of the same direction win.

        If the strongest negative astroid is -5, then all positive astroid of 6 and above live.

        Time Comp. O(n)

    */

    let result = [];

    function opposites(astroidOne, astroidTwo) {

        if (astroidOne < 0) return astroidTwo > 0;
        else return astroidTwo < 0;
    }

    let strongestNegativeAstroid = Math.min(...arr);
    let strongestPositiveAstroid = Math.max(...arr);

    if (strongestNegativeAstroid == strongestPositiveAstroid) return [];

    if (Math.abs(strongestPositiveAstroid) > Math.abs(strongestNegativeAstroid)) {
        for (let item of arr) {

            if (item > Math.abs(strongestNegativeAstroid)) result.push(item);

        }
        return result;
    } else {

        for (let item of arr) {

            if (Math.abs(item) > strongestPositiveAstroid) result.push(item);

        }
        return result;
    }


}

// console.log(bestasteroidCollision([1, -5, 7, 9, -10, -11]));
// console.log(bestasteroidCollision([5, 6, 8, -6, 1]));


function worstfindRelativeRanks(score) {
    // Write your code inside this function only.

    // Sorting the array O(n long n)
    const scoreCopy = [...score];
    scoreCopy.sort((a, b) => b - a);

    const result = [];

    // traversing O(n)
    for (let i = 0; i < score.length; i++) {

        switch (score[i]) {

            case scoreCopy[0]:
                result.push("Gold Medal"); break;

            case scoreCopy[1]:
                result.push("Silver Medal"); break;

            case scoreCopy[2]:
                result.push("Bronze Medal"); break;

            default:
                // finding index O(n)
                const idx = scoreCopy.indexOf(score[i]);
                result.push((idx + 1).toString());

        }


    }

    // Final Time Complexity: O(n^2)
    // Final Space COmplexity: O(n)

    return result;

}

// console.log(worstfindRelativeRanks([5, 4, 3, 2, 1]));
// console.log(worstfindRelativeRanks([10, 3, 8, 9, 4, 11, 14]));

// Best Case

/**
 * 
 * @param {[]} score 
 */
function bestfindRelativeRanks(score) {

    let dict = [];

    // Time Comp. O(n)
    for (let i = 0; i < score.length; i++) {
        dict.push([score[i], i]);
    }

    // Time Comp. O(n log n)
    // Sorts based on descending order of the score.
    dict = dict.sort((a, b) => -a[0] + b[0]);

    // Time Comp. O(n)
    for (let i = 0; i < score.length; i++) {
        // inserting ranks
        dict[i].push(i + 1);
    }

    // Time Comp. O(n log n)
    // Sorts based on increasing order of the index positions.
    dict = dict.sort((a, b) => a[1] - b[1]);

    const ranks = [];

    // Time Comp. O(n)
    for (let i = 0; i < score.length; i++) {

        const item = dict[i];
        // 0th position is the score.
        // 1st position is the index
        // 3rd position is the rank

        ranks.push(item[2].toString());
    }

    // Time Comp. O(n)
    ranks[ranks.indexOf('1')] = 'Gold Medal';
    ranks[ranks.indexOf('2')] = 'Silver Medal';
    ranks[ranks.indexOf('3')] = 'Bronze Medal';

    return ranks;

    // Time Complexity: O(n log n)
    // Space Complexity: O(n)
}


// console.log(bestfindRelativeRanks([5, 4, 3, 2, 1]));
// console.log(bestfindRelativeRanks([10, 3, 8, 9, 4, 11, 14]));

// Worst Case

function worstLengthOfLastWord(s) {
    // Write your code inside this function only.

    const arr = s.trim().split(" ");

    return arr[arr.length - 1].length;

    // Space Complexity = O(n)
    // Time Complexity = O(n)

}

// console.log(worstLengthOfLastWord("Hellow WOrld"));
// console.log(worstLengthOfLastWord("fly me to the moon "));
// console.log(worstLengthOfLastWord("luffy is still joyboy"));


// Best Case

function bestLengthOfLastWord(s) {
        // Write your code inside this function only.
        s = s.trim();
        let len = s.length;
        let result = 0;
        for (let i = len - 1; i >= 0; i--) {

            if (s[i] == ' ') { break; }
            result++;

        }
        return result;
        // Space Complexity = O(1)
        // Time Complexity = O(n)
    }

// console.log(bestLengthOfLastWord("Hellow WOrld"));
// console.log(worstLengthOfLastWord("fly me to the moon "));
// console.log(worstLengthOfLastWord("luffy is still joyboy"));
