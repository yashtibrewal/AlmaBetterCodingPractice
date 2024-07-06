var decodeString = function (str) {
    // Your code goes here

    let executionStack = [];
    const digitRegex = /[0-9]/g;

    for (let char of str) {

        if (char == ']') {
            let subStr = [];
            let popedElement = '';
            do {
                popedElement = executionStack.pop();
                if (popedElement != '[')
                    subStr.unshift(popedElement);

            } while (popedElement != '[');

            const digits = [];

            do {
                popedElement = executionStack.pop();
                if (digitRegex.test(popedElement))
                    digits.unshift(popedElement);
            } while (digitRegex.test(popedElement));

            executionStack.push(popedElement); // for the character we are not dealing with

            let size = Number(digits.join(""));

            const values = new Array(size);
            values.fill(subStr.join(""));
            executionStack.push(values.join(""));

        } else {
            executionStack.push(char);
        }

    }
    return executionStack.join("").replace(digitRegex, "");
};

// console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString("3[a2[c]]"));

var kthGrammar = function (n, k) {
    k--;
    // Your code goes here
    let str = '0';
    for (let i = 0; i < n; i++) {
        str = str.replace(/0/g, "ab");
        str = str.replace(/1/g, "10");
        str = str.replace(/ab/g, "01");
    }
    // console.log(str);
    return str[k];
};

// console.log(kthGrammar(1,1));
