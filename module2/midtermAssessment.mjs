var miceAndCheese = function (reward1, reward2, k) {
    // Your code goes here
    const max = [];
    for (let i = 0; i < reward1.length; i++) {
        if (reward1[i] > reward2[i]) {
            max.push(reward1[i]);
        } else {
            max.push(reward2[i]);
        }

    }
    max.sort((a, b) => b - a);
    max.slice(0, k);
    return max.reduce((acc, item) => acc + item, 0);
};

// console.log(miceAndCheese([1,1,3,4], [4,4,1,1],2));

var findRestaurant = function (list1, list2) {
    // Your code goes here

    let result = [];
    let min = Math.min();
    for (let i = 0; i < list1.length; i++) {
        const item = list1[i];
        const index = list2.indexOf(item);
        if (index >= 0) {
            if (i + index < min) {
                result = [];
                result.push(item);
                min = i + index;
            } else if (i + index === min) {
                result.push(item);
            }
        }
    }

    return result;
};

// console.log(findRestaurant( ["happy","sad","good"],["sad","happy","good"]))


var toGoatLatin = function (sentence) {

    // Your code goes here
    const result = [];
    const vowel = /[a|e|i|o|u]/g;
    if (typeof sentence === 'string') {

        let a = 'a';
        let newWord = '';
        for (let word of sentence.split(" ")) {
            newWord = '';
            if (vowel.test(word[0])) {
                newWord = word + "ma" + a;
            } else {
                newWord = word.split("").slice(1, word.length).join("") + word[0] + "ma" + a;
            }
            result.push(newWord);

            a += 'a';
        }
    }
    return result.join(" ");
};

// console.log(toGoatLatin("I speak Goat Latin"));


var largeGroupPositions = function (s) {
    // Your code goes here
    const result = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {

        start = i;
        end = start + 1;
        while (end < s.length) {
            if (s[start] == s[end]) {
                end++;
            } else {
                break;
            }
        }
        if (end - start >= 3) {
            result.push([start, end - 1]);
            i = end - 1;
        }
    }
    return result;
};

// console.log(largeGroupPositions("abcdddeeeeaabbbcd"));


const intersect = function (nums1, nums2) {
    // your Code Goes Here
    const intersect = []
    for (let num of nums1) {

        const index = nums2.indexOf(num)
        if (index > -1) {
            nums2.splice(index, 1);
            intersect.push(num)
        }
    }
    return intersect;
};

//  console.log(intersect([4,9,5], [9,4,9,8,4]));

var largestNumber = function (nums) {

    const buckets = {};

    for (let i = 0; i < 10; i++) {
        buckets[i] = [];
    }

    for (let num of nums) {

        buckets[num.toString()[0]].push(num);

    }


    for (let i = 0; i < 10; i++) {
        buckets[i].sort((a, b) => b - a);
    }
    console.log(buckets);
    const result = [];


    for (let i = 9; i >= 0; i--) {
        result.push(...buckets[i]);
    }


    return result.join("");

};

// console.log(largestNumber([70,2,20]));
// console.log(largestNumber( [3,30,34,5,9]));

/**
 * My attempt, incorrect.
 * @param {*} nums 
 * @returns 
 */
var maxSumDivThree = function (nums) {
    // Your code goes here
    let sum = 0;
    const remaindersOne = [];
    let one = 0;
    const remaindersTwo = [];
    let two = 0;
    for (let num of nums) {
        switch (num % 3) {
            case 0: sum += num; break;
            case 1: remaindersOne.push(num); one++; break;
            case 2: remaindersTwo.push(num); two++; break;
        }
    }

    remaindersOne.sort((a, b) => b - a);
    remaindersTwo.sort((a, b) => b - a);



    return sum;
};

// console.log(maxSumDivThree([3, 6, 5, 1, 8]));
// console.log(maxSumDivThree([8]));
// console.log(maxSumDivThree([3, 6, 5, 1, 8, 5, 5]));

/**
 * Platform Correct code.
 * @param {*} nums 
 * @returns 
 */
var maxSumDivThreePortal = function (nums) {
    let N = nums.length;
    let buckets = [...Array(N + 1)].map(_ => Array(3).fill(0));
    for (let i = 1; i <= N; ++i) {
        buckets[i] = [...buckets[i - 1]];
        for (let j of [0, 1, 2]) {
            let sum = nums[i - 1] + buckets[i - 1][j];
            buckets[i][sum % 3] = Math.max(buckets[i][sum % 3], sum);
        }
    }
    return buckets[N][0];
};
// console.log(maxSumDivThreePortal([3, 6, 5, 1, 8]));
// console.log(maxSumDivThreePortal([3, 6, 5, 1, 8, 5, 5]));
// console.log(maxSumDivThreePortal([8]));


var haveConflict = function (event1, event2) {
    // Your code goes here
    const eventOneStartTime = new Date("01-01-01-" + event1[0]);
    const eventOneEndTime = new Date("01-01-01-" + event1[1]);
    const eventTwoStartTime = new Date("01-01-01-" + event2[0]);
    const eventTwoEndTime = new Date("01-01-01-" + event2[1]);


    if (eventOneEndTime.getTime() < eventTwoStartTime.getTime()) {
        return false;
    }
    else if (eventTwoEndTime.getTime() < eventOneStartTime.getTime()) {
        return false;
    }

    return true;
};

console.log(haveConflict(["01:15", "02:00"], ["14:00", "15:00"]));
console.log(haveConflict(["01:00", "02:00"], ["01:20", "03:00"]));
console.log(haveConflict(["01:15", "02:00"], ["02:00", "03:00"]));