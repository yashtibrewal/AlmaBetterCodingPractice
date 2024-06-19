function isValidPassword(password) {
    //Your code goes here

    const regex = /^(?=.*\d)(?=.*[A-z])(?=.*[a-z])(?=.*[!@#$%^&()_+=-]).{8,}$/g;
    return regex.test(password);
}

console.log(isValidPassword("Abc123!@"));
console.log(isValidPassword("Abc3!@"));
console.log(isValidPassword("abc123"));