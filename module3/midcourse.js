


const grayCode = function (n) {
    // Your code goes here

    const maxCount = Math.pow(2, n) - 1;

    const seenBefore = new Set();

    /**
     * returns a new number with a flipped bit never seen before.
     * @param {string} present - Takes in the present number in binary
     */
    function flip(present) {
        let num = present.split('');
        for (let i = present.length - 1; i >= 0; i--) {
            num[i] = num[i] == '1' ? '0' : '1';
            if (seenBefore.has(num.join(''))) {
                num[i] = num[i] == '1' ? '0' : '1';
            } else {
                return num.join('');
            }
        }
        return present;
    }

    /**
     * 
     * @param {number} num 
     * @returns {string}
     */
    function toBinaryWithPadding(num) {
        let result = num.toString(2);
        let padding = new Array(maxCount.toString(2).length - result.length).fill('0');
        return padding.join('') + result;
    }

    let start = toBinaryWithPadding(0);

    seenBefore.add(start);

    const result = [];
    result.push(parseInt(start, 2));
    for (let i = 0; i < maxCount; i++) {
        start = flip(start);
        seenBefore.add(start);
        result.push(parseInt(start, 2));
    }
    return result;
};

// console.log(grayCode(2));
// console.log(grayCode(1));


function minValue(A, B, N) {
    // Your code goes here
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    let sum = 0;

    for (let i = 0; i < N; i++) {
        sum += A[i] * B[i];
    }

    return sum;
}

// console.log(minValue([3, 1, 1], [6, 5, 4], 3));
// console.log(minValue([6, 1, 9, 5, 4], [3, 4, 8, 2, 4], 5));

var searchRange = function (nums, target) {

    // Your code goes here


    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    let found = false;
    while (left <= right) {

        mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            found = true;
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (!found) {
        return [-1, -1];
    }

    if (found) {
        left = mid;
        right = mid;
        while (nums[left - 1] == target) {
            left--;
        }
        while (nums[right + 1] == target) {
            right++;
        }
        return [left, right];
    }

};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 7, 8, 10], 7));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));

const lastRemaining = function (n) {
    // Your code goes here

    // init the game
    let arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    // start the game
    let flip = true;
    while (arr.length > 1) {
        console.log(arr);

        if (flip)
            arr = arr.filter((val, idx) => idx % 2 == 1);
        else
            arr = arr.filter((val, idx) => idx % 2 == 0);
        flip = !flip;
    }
    console.log(arr);
    return arr[0];
};


// console.log(lastRemaining(1));
// console.log(lastRemaining(9));

