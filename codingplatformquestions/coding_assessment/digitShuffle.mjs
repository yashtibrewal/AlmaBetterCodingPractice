function isMultipleOfFive(n) {
    // Your code goes here

    const digits = n.toString().split("");
    return digits.includes("5") || digits.includes("0");

}