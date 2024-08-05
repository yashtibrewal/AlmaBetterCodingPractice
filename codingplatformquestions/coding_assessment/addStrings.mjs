
const addStrings = (num1, num2) => {
    // Your code goes here
    function addSingleDigitStrings(s1, s2, carry) {
        let zero = '0'.charCodeAt(0);
        let s1Val = s1.charCodeAt(0) - zero;
        let s2Val = s2.charCodeAt(0) - zero;
        carry = carry == '0' ? 0 : 1;
        let total = s1Val + s2Val + carry;
        if (total > 9) {
            carry = '1';
            total = total.toString()[1];
        } else {
            carry = '0';
            total = total.toString();
        }
        return [total, carry];
    }
    let num1Len = num1.length - 1;
    let num2Len = num2.length - 1;
    let carry = '0', total, result = '';
    while (num1Len >= 0 && num2Len >= 0) {
        [total, carry] = addSingleDigitStrings(num1[num1Len], num2[num2Len], carry);
        result = total + result;

        num1Len--; num2Len--;
    }
    while (num1Len >= 0) {
        [total, carry] = addSingleDigitStrings(num1[num1Len], '0', carry);
        result = total + result;
        num1Len--;
    }
    while (num2Len >= 0) {
        [total, carry] = addSingleDigitStrings(num2[num2Len], '0', carry);
        result = total + result;
        num2Len--;
    }

    if (carry == '1') {
        result = '1' + result;
    }

    return result;
};

console.log(addStrings("999999","1"));
console.log(addStrings("10009","1"));