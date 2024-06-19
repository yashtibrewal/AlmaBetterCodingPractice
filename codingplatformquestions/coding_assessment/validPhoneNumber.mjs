function isValidPhoneNumber(phoneNumber) {
    // Your code goes here

    const regex = /^[7-9]{1}[0-9]{9}$/g;
    return regex.test(phoneNumber);

}

console.log(isValidPhoneNumber("1234567890"));
console.log(isValidPhoneNumber("9943423"));
console.log(isValidPhoneNumber("8879034882"));