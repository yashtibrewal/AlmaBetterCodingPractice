function sortColorsUsingBuckets(arr) {

  const freq = [0, 0, 0];

  for (let item of arr) {
    freq[item]++;
  }

  let result = [];
  for (let i = 0; i <= 2; i++) {
    const content = new Array(freq[i]);
    content.fill(i);
    result.push(...content);
  }
  return result;
}

// console.log(sortColorsUsingBuckets([2, 0, 2, 1, 1, 0]));

function findMissingInteger(arr) {

  const min = 0;
  const max = arr.length;

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }

}
// console.log(findMissingInteger([3, 0, 1]));

function largestNumber(num) {
  if (typeof num == 'number') {

    const arr = num.toString().split("").map(item => Number(item));
    const even = arr.filter(item => item % 2 === 0);
    const odd = arr.filter(item => item % 2 !== 0);
    let result = 0;

    Array.isArray(even) && (even.sort((a,b)=>a-b));
    Array.isArray(odd) && (odd.sort((a,b)=>a-b));


    for (let item of arr) {
      result = result*10;
      if (item % 2 == 0) {
        result += even.pop();
      }else{ 
        result += odd.pop();
      }
    }

    return result;
  }

}

// console.log(largestNumber(1234));
// console.log(largestNumber(6587));