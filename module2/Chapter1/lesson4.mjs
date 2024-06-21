let arr = [69, 92, 45, 7, 28];


// console.log(arr[3]);
// console.log(arr.includes(7));
// console.log(arr.unshift(33));
// console.log(arr.map(num => num - 5));


// Your code here.

function deepEqual(objA, objB) {

    if (typeof objA == typeof objB) {

        if (typeof objA == 'object') {

            if (Array.isArray(objA) && Array.isArray(objB)) {

                if (objA.length != objB.length) return false;

                for (let i = 0; i < objA.length; i++) {
                    if (!deepEqual(objA[i], objB[i])) return false;
                }
                return true;
            } else {

                if (Array.isArray(objA) || Array.isArray(objB)) {
                    return false;
                }

                if (objA instanceof Map && objB instanceof Map) {

                    // handle map

                }

                // handle set and other object types...

                let keys = Object.keys(objA);
                for (let key of keys) {
                    if (key in objB) {
                        if (!deepEqual(objA[key], objB[key])) return false;
                    } else {
                        return false;
                    }
                }

            }
        } else {
            // for primitive data types
            return objA === objB;
        }

    } else {
        return false;
    }

}

// let obj = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// // → false
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// console.log(deepEqual([1,2,3,4],[1,2,3,4]));
// console.log(deepEqual([1,2,3,4],[1,2,2,4]));

// const mapA = new Map();
// const mapB = new Map();
// mapA.set("key","value");
// mapB.set("key","value");
// console.log(deepEqual(mapA,mapB));


function primeInDiagonal(nums) {

    function isPrime(num) {

        if (num == 1 || num == 2) {
            return true;
        }

        if (typeof num == "number") {

            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    return false;
                }
            }

            return true;
        }
        return false;
    }

    if (Array.isArray(nums) && Array.isArray(nums[0])) {

        let highestPrime = -Infinity;
        for (let i = 0; i < nums.length; i++) {

            if (isPrime(nums[i][i]) && nums[i][i] > highestPrime) {
                highestPrime = nums[i][i];
            }

            if (isPrime(nums[i][i]) && nums[i][i] > highestPrime) {
                highestPrime = nums[i][nums.length - i - 1];
            }
        }
        return highestPrime;
    }

}

// console.log(primeInDiagonal([[1, 2, 3], [5, 6, 7], [9, 10, 11]]));
// console.log(primeInDiagonal([[1, 2, 3], [5, 17, 7], [9, 11, 10]]));

function smallestFormedNumber(nums1, nums2) {

        const commonElements = nums1.filter(num => nums2.includes(num));

        if (commonElements.length) {

            return commonElements.sort((a, b) => a - b)[0];

        }

        let digitOne = nums1.sort((a, b) => a - b)[0];
        let digitTwo = nums2.sort((a, b) => a - b)[0];

        if (digitOne < digitTwo) {
            return digitOne * 10 + digitTwo;
        } else if (digitOne > digitTwo) {
            return digitTwo * 10 + digitOne;
        } else {
            return digitOne;
        }

}

// console.log(smallestFormedNumber([4, 1, 3], [5, 7]));
// console.log(smallestFormedNumber([3, 5, 2, 6], [3, 1, 7]));

function mostCommonWord(sentence, banned) {

    if (typeof sentence == 'string') {

        sentence = sentence.toLocaleLowerCase().match(/[a-z ]/g).join("");
        const words = sentence.split(" ");
        const frequency = {};

        for (let word of words) {
            if (!banned.includes(word)) {
                if (word in frequency) {
                    frequency[word] = frequency[word] + 1;
                } else {
                    frequency[word] = 1;
                }
            }
        }

        const keys = Object.keys(frequency);
        const scores = Object.values(frequency);
        const scoresCopy = [...scores];
        scoresCopy.sort((a,b)=>b-a);
        return keys[scores.indexOf(scoresCopy[0])];
        
    }

}

console.log(mostCommonWord("a.",["hit"]));
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",["hit"]));