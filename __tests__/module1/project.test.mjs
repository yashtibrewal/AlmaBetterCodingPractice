import * as project from '../../module1/project.mjs';




// All test cases assume constrained data and within processing power limit.

/**
 * Coding Problems Test Cases
 */

test('BMI to be normal', ()=>{
    expect(project.calculateBMI(65,1.75)).toEqual("Normal weight");
});

test('Temperature to be 77.00 F', ()=>{
    expect(project.convertTemperature(25,'C')).toEqual("77.00 F");
});

test('Temperature to be -40.00 C', ()=>{
    expect(project.convertTemperature(-40,'F')).toEqual("-40.00 C");
});

test('Bill amount to be 75.94', ()=>{
    expect(project.calculateTip(60.75,0.25)).toEqual("75.94");
});

test('Bill amount to be 99', ()=>{
    expect(project.calculateTip(90.00,0.10)).toEqual("99.00");
});

test('RaceCar is a palindrome', ()=>{
    expect(project.isPalindrome("RaceCar")).toEqual(true);
});

test('Hello is not a palindrom', ()=>{
    expect(project.isPalindrome("Hello")).toEqual(false);
});

test('Vowels in word', ()=>{
    expect(project.countVowels('AlmaBetter')).toEqual(4);
});

test('Vowels in sentence', ()=>{
    expect(project.countVowels('Coding is fun with fellow learners')).toEqual(10);
});

/**
 * Improvised Perspective to the Coding Problem Test Cases
 */

test('Longest Word Length to be 8', () => {
    expect(project.findLongestWord("Coding is fun with fellow learners"))
        .toEqual(8);
});

test('Longest Word Length to be 6', () => {
    expect(project.findLongestWord("The quick brown fox jumped over the lazy dog"))
        .toEqual(6);
});

test('Title Case 1', () => {
    expect(project.titleCase("Dream big, work hard, and stay focused"))
        .toEqual("Dream Big, Work Hard, And Stay Focused");
});

test('Title Case 2', () => {
    expect(project.titleCase("Be yourself; everyone else is already taken."))
        .toEqual("Be Yourself; Everyone Else Is Already Taken.");
});


test('Count Occurrences of a Character to be 3', () => {
    expect(project.countOccurrences("hello world", 'l'))
        .toEqual(3);
});

test('Count Occurrences of a Character to be 3', () => {
    expect(project.countOccurrences("Elephant", 'E'))
        .toEqual(1);
});

test('Shopping Cart Total to be 2200', () => {
    const cart1 = [
        { name: "Laptop", price: 1000, quantity: 1 },
        { name: "Phone", price: 500, quantity: 2 },
        { name: "Headphones", price: 50, quantity: 4 },
    ];
    expect(project.calculateTotal(cart1))
        .toEqual(2200);
});

test('Shopping Cart Total to be 114', () => {
    const cart2 = [
        { name: "Fruits", price: 10, quantity: 5 },
        { name: "Vegetables", price: 8, quantity: 3 },
        { name: "Dairy", price: 5, quantity: 2 },
        { name: "Snacks", price: 3, quantity: 10 },
    ];
    expect(project.calculateTotal(cart2))
        .toEqual(114);
});

test('Fizz Buzz for 12', () => {

    expect(project.fizzBuzz(12))
        .toEqual(["1", "2", "Fizz", "Buzz", "5", "Fizz", "7", "Buzz", "Fizz", "10", "11", "FizzBuzz"]);
});

test('Fizz Buzz for 5', () => {

    expect(project.fizzBuzz(5))
        .toEqual( ["1", "2", "Fizz", "Buzz", "5"]);
});


/**
 * Test cases for project.
 */

test('primes till 5', () => {
    expect(project.findPrimes(5)).toEqual([2, 3, 5]);
});

test('0 is not prime', () => {
    expect(project.findPrimes(0)).toEqual([]);
});

test('1 is not prime', () => {
    expect(project.findPrimes(1)).toEqual([]);
});

test('primes till 20', () => {
    expect(project.findPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
});


/**
 * Test cases for reverse string
 */
test('reversing Hello', () => {
    expect(project.reverseString("Hello")).toEqual("olleH");
});
test('reversing JavaScript', () => {
    expect(project.reverseString("JavaScript")).toEqual("tpircSavaJ");
});

/**
 * Test cases for signOfProduct.
 */

test('product of [2, -3, 5, 4] is -1', () => {
    expect(project.signOfProduct([2, -3, 5, 4])).toEqual(-1);
});

test('product of [1, 2, 0] is 0', () => {
    expect(project.signOfProduct([1, 2, 0])).toEqual(0);
});

test('product of [2, -3, 5, 4, -7] is 1', () => {
    expect(project.signOfProduct([2, -3, 5, 4, -7])).toEqual(1);
});

test('product of [2] is 1', () => {
    expect(project.signOfProduct([2])).toEqual(1);
});


/**
 * Test cases for check sign.
 */

test('sign of 2,5,7 is +++', () => {
    expect(project.checkSign(2, 5, 7)).toEqual('+++');
});


test('sign of -2,5,7 is ++-', () => {
    expect(project.checkSign(-2, 5, 7)).toEqual('++-');
});


test('sign of -2,5,-7 is +--', () => {
    expect(project.checkSign(-2, 5, -7)).toEqual('+--');
});


test('sign of -2,-5,-7 is ---', () => {
    expect(project.checkSign(-2, -5, -7)).toEqual('---');
});

/**
 * Test Cases for slug generator
 */

test('slug of Google', () => {
    expect(project.slugGenerator("Google")).toEqual("google.com");
});

test('slug of AlmaBetter Web Dev', () => {
    expect(project.slugGenerator("AlmaBetter Web Dev")).toEqual("almabetter-web-dev.com");
});

test('slug of Hello World', () => {
    expect(project.slugGenerator("Hello World")).toEqual("hello-world.com");
});

/**
 * Test Cases for word distance
 */

test('looking for minimum distance to be 1', () => {
    expect(project.wordDist(["practice", "makes", "perfect", "coding", "makes"]
        , "coding", "makes"
    )).toEqual(1);
});
test('looking for minimum distance to be 3', () => {
    expect(project.wordDist(["apple", "banana", "cherry", "apple", "date", "banana", "fig"]
        , "apple", "fig"
    )).toEqual(3);
});

/**
 * Test Cases for flip game
 */

test('looking for 3 ouputs to ++++', () => {
    const result = project.flipGame("++++");
    expect(result).toContain("--++");
    expect(result).toContain("+--+");
    expect(result).toContain("++--");
    expect(result.length).toBe(3);
});
test('looking for 2 ouputs to ++-++', () => {
    const result = project.flipGame("++-++");
    expect(result).toContain("---++");
    expect(result).toContain("++---");
    expect(result.length).toBe(2);
});

/**
 * Test cases for consequitive characters
 */

test('consecutive characters for abcdef', () => {

    expect(project.swapConsecutiveCharacters("abcdef")).toEqual("badcfe");

});

test('consecutive characters for AlmaBetter', () => {

    expect(project.swapConsecutiveCharacters("AlmaBetter")).toEqual("lAameBttre");

});

test('consecutive characters for Alumuni', () => {

    expect(project.swapConsecutiveCharacters("Alumuni")).toEqual("lAmunui");

});

/**
 * Test cases for array intersection
 */


test('array intersection with duplicates', () => {
    const result = project.arrayIntersection(
        [1, 2, 2, 3, 4, 5], [2, 3, 3, 6]
    );
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result.length).toBe(2);

});

test('array intersection without duplicates', () => {
    const result = project.arrayIntersection(
        [70, 20, 30, 50], [30, 40, 50, 60, 70]
    );
    expect(result).toContain(30);
    expect(result).toContain(50);
    expect(result).toContain(70);
    expect(result.length).toBe(3);

});


/**
 * Test cases for insert 7
 */

test('inserts 7 to Hello World and Universe!', () => {
    expect(project.insertSeven("Hello World and Universe!")).toEqual("Hello W7orld an7d Unive7rse!");
});

test('inserts 7 to Full Stack Web Development', () => {
    expect(project.insertSeven("Full Stack Web Development")).toEqual("Full St7ack Web7 Develo7pment");
});
