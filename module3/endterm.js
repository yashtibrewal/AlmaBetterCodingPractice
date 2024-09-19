var heightChecker = function (heights) {
  // your code goes here

  const temp = [...heights].sort((a, b) => a - b);

  let counter = 0;

  for (let i = 0; i < temp.length; i++) {
    if (heights[i] !== temp[i]) counter++;
  }

  return counter;
};

/**
 * impure func
 * @param {[]} names 
 * @param {[]} heights 
 */
var sortPeople = function (names, heights) {
  // Your code goes here

  const dict = {};
  for (let i = 0; i < heights.length; i++) {
    dict[heights[i]] = names[i];
  }

  heights = heights.sort((a, b) => b - a).map(height => dict[height]);

  return heights;

};

/**
 * 
 * @param {[]} nums1 
 * @param {[]} nums2 
 */
var intersection = function (nums1, nums2) {

  const obj1 = {};
  for (let i = 0; i < nums1.length; i++) {
    obj1[nums1[i]] = true;
  }

  const set = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (obj1[nums2[i]]) {
      set.add(nums2[i]);
    }
  }

  return Array.from(set);
}

// console.log(intersection([1, 2, 2, 1], [2, 2]));

const getCommon = function (nums1, nums2) {
  // your Code Goes Here

  let c1 = 0, c2 = 0;

  while (c1 < nums1.length && c2 < nums2.length) {

    if (nums1[c1] == nums2[c2]) {
      return nums1[c1];
    } else {

      if (nums1[c1] < nums2[c2]) {
        c1++;
      } else {
        c2++;
      }

    }

  }

  return -1;

};


/**
 * 
 * @param {[number]} ages 
 */
var numFriendRequests = function (ages) {
  // Your cose goes here

  function canBeFriend(x, y) {

    switch (true) {
      case y <= ((0.5 * x) + 7): return false;
      case y > x: return false;
      case y > 100 && x < 100: return false;
      default: return true;
    }

  }
  let counter = 0;

  for (let i = 0; i < ages.length; i++) {
    for (let j = 0; j < ages.length; j++) {
      if (i != j && canBeFriend(ages[i], ages[j])) counter++;
    }
  }


  return counter;
}

// console.log(numFriendRequests([16, 16]));

/**
 * 
 * @param {[number]} buses 
 * @param {[number]} passengersArrivalTimings 
 * @param {number} capacity 
 */
const latestTimeToCatchBus = function (buses, passengersArrivalTimings, capacity) {
  // your Code Goes Here
  const sortComparator = (a, b) => b - a;
  buses.sort(sortComparator);
  passengersArrivalTimings.sort(sortComparator);

  /**
   * Objectives:
   * 1. Find a seat in a bus
   *  a. this means you can come earlier if based on data there is no seat later
   * 2. Come as late as possible.
   *  a. this means if there is an empty seat later in the bus, we can come at that point.
   */

  // TODO: think of logic regarding this.

};

/**
 * 
 * @param {[string]} words 
 * @returns 
 */
var oddString = function (words) {

  /**
   * 
   * @param {string} word 
   */
  function getDifferenceArray(word) {

    const difference = new Array(word.length - 1);

    for (let i = 0; i < word.length - 1; i++) {
      difference[i] = word.charCodeAt(i + 1) - word.charCodeAt(i);
    }

    return difference;
  }

  const freq = new Map();
  const result = words.map((word) => getDifferenceArray(word));


  for (let diff of result) {
    const key = JSON.stringify(diff);
    const count = !freq.get(key) ? 1 : freq.get(key) + 1;
    freq.set(key, count);
  }

  let uniqueArray;

  for (let key of freq.keys()) {
    if (freq.get(key) == 1) {
      uniqueArray = key;
      break;
    }
  }


  const resultIndex = result.findIndex((diffArray => JSON.stringify(diffArray) == uniqueArray));

  return words[resultIndex];

};

// console.log(oddString(["adc", "wzy", "abc"]));

/**
 * 
 * @param {[number,number]} rectangles 
 */
var countGoodRectangles = function (rectangles) {
  // Your code goes here
  const sqaureMaxLenths = rectangles.map(([a, b]) => a > b ? b : a);
  const maxLen = Math.max(...sqaureMaxLenths);
  return sqaureMaxLenths.filter(len => len == maxLen).length;

};


// console.log(countGoodRectangles([[5, 8], [3, 9], [5, 12], [16, 5]]));

/**
 * 
 * @param {[]} nums 
 */
var largestPerimeter = function (nums) {
  // Your code goes here
  if (nums.length >= 3) {

    /**
     * Calcs the perimeter of traingle if it is possible to made one
     * @param {[number]} sides
     */
    function calcPerimeter([side1, side2, side3]) {

      if (side1 + side2 <= side3) return 0;
      if (side2 + side3 <= side1) return 0;
      if (side1 + side3 <= side2) return 0;

      return side1 + side2 + side3;

    }

    let max = 0;

    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          const sides = [nums[i], nums[j], nums[k]];
          max = Math.max(calcPerimeter(sides), max);
        }
      }
    }

    return max;

  } else {
    throw new Error('Invalid Length');
  }
}