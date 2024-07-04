
var generateParenthesis = function (n) {
    // Your code goes here

    function generatePattern(bin) {
        if (typeof bin == 'string') {

            bin = bin.replace(/0/g, '()');
            bin = bin.replace(/1/g, '(');
            let l = bin.match(/\(/g);
            let r = bin.match(/\)/g);
            if (l === null) l = 0; else l = l.length;
            if (r === null) r = 0; else r = r.length;
            const remain = l - r;
            const remainArr = new Array(remain);
            remainArr.fill(')');
            return bin += remainArr.join("");
        }
    }

    function appendPrefixZero(value, length) {
        let str = value.toString(2);
        if (str.length < length) {

            const zeros = new Array(length - str.length)
            zeros.fill('0');
            str = zeros.join('') + str;
            return str;
        }
        return str;
    }

    function reversePattern(pattern) {

        pattern = pattern.split("").reverse().join("");
        pattern = pattern.replace(/\(/g, '1');
        pattern = pattern.replace(/\)/g, '(');
        pattern = pattern.replace(/1/g, ')');
        return pattern;
    }


    const result = new Set();
    for (let i = 0; i < 2 ** n; i++) {
        let bin = appendPrefixZero(i, n);
        const pattern = generatePattern(bin);
        result.add(pattern);
        result.add(reversePattern(pattern));
    }

    return [...new Set(result)];
};

// console.log(generateParenthesis(0));
// console.log(generateParenthesis(1));
console.log(generateParenthesis(3));
// console.log(generateParenthesis(4));
// console.log(reversePattern('()()()'));

function powerOfTwo(n) {

    if (n < 1) {
        return false;
    }

    while (n % 2 == 0) {
        n /= 2;
    }
    return n == 1;
}

// console.log(powerOfTwo(1));
// console.log(powerOfTwo(3));

function permutation(arr) {
    const result = [];

    function swap(arr, l, r) {

        [arr[l], arr[r]] = [arr[r], arr[l]];

    }
    function permute(arr, l, r) {

        if (r - l == 0) {
            result.push([...arr]);
        }

        // fix l and recur for l+1 to r

        for (let i = l; i <= r; i++) {
            swap(arr, l, i);
            permute(arr, l + 1, r)
            swap(arr, l, i);
        }

    }
    permute(arr, 0, arr.length - 1)
    return result;
}

// console.log(permutation([1,2,3]));
