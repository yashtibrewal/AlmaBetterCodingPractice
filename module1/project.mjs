
export function calculateBMI(weight, height) {
    // Write your code here
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


export function convertTemperature(temperature, unit) {
    // Write your code here
    if (unit === "C") {
        const fahrenheit = temperature * 9 / 5 + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5 / 9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}


export function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    let tipAmount = billAmount * tipPercentage;
    let totalAmount = billAmount + tipAmount;
    return totalAmount.toFixed(2);
}


export function isPalindrome(str) {
    // Write your code here
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr == reversedStr;
}

export function countVowels(str) {
    // Write your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}
/**
 * Improvised Perspective to the Coding Problem
 */

export function findLongestWord(sentence) {
    // Write your code here
    const words = sentence.split(' ');
    let maxLength = 0;

    for (let word of words) {
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

// Do not modify the below lines
// module.exports = { findLongestWord };

export function titleCase(sentence) {
    // write your code here
    const words = sentence.toLowerCase().split(' ');

    return words.map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');

}

// Do not modify the below lines
// module.exports = { titleCase };

export function countOccurrences(str, char) {

    return str.split("").filter((item) => item == char).length;
}

// Do not modify the below lines
// module.exports = { countOccurrences };

export function calculateTotal(cart) {

    return cart.reduce((total, cart) => total + (cart.price * cart.quantity), 0)
}

// Do not modify the below lines
// module.exports = { calculateTotal };

export function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        switch (i % 3 === 0 && i % 4 === 0) {
            case true: result.push("FizzBuzz"); break;
            case false:
                switch (i % 3 === 0) {
                    case true: result.push("Fizz");
                        break;
                    case false:
                        switch (i % 4 == 0) {
                            case true:
                                result.push("Buzz");
                                break;
                            case false:
                                result.push(i.toString());
                                break;
                        }
                        break;
                }
                break;
        }
    }

    return result;
}

// Do not modify the below lines
// module.exports = { fizzBuzz };
/**
 * Logic Build Coding Questions
 */

// Write a JavaScript function findPrimes that takes a positive integer n as input and returns an array of prime numbers less than or equal to n.
export function findPrimes(num) {

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

    const primes = [];

    for (let i = 2; i <= num; i++) {

        if (isPrime(i)) {
            primes.push(i);
        }

    }
    return primes;
}

// Write a JavaScript function reverseString that takes a string as input and returns the string with its characters reversed.
export function reverseString(str) {
    let result = '';
    if (typeof str == "string") {
        result = str.split("").reverse().join("");
    }
    return result;
}

// Write a JavaScript function signOfProduct that takes an array of integers as input and returns the sign of the product of all the integers in the array.
export function signOfProduct(arr) {

    let sign = 1;

    if (Array.isArray(arr)) {
        if (arr.includes(0)) {
            sign = 0;

        }
        else {

            for (let item of arr) {
                if (item > 0) {
                    continue;
                } else {
                    sign = sign == -1 ? 1 : -1;
                }
            }
        }

    }
    return sign;

}

// Write a JavaScript function checkSign that takes three numbers as input and returns a string representing the signs of the numbers.
export function checkSign(...args) {

    let result = ["+", "+", "+"];

    for (let item of args) {
        if (item < 0) {
            result.shift();
            result.push("-");
        }
    }
    return result.join("");
}

// Imagine you're working on a blog platform. Write a JavaScript function generateSlug that takes a title string and generates a URL-friendly slug by replacing spaces with hyphens and converting the text to lowercase.
export function slugGenerator(word) {
    let result = '';

    if (typeof word == 'string') {
        result = word.toLowerCase().split(" ").join("-").concat(".com");
    }
    return result;
}

// Given an array of strings wordsDict and two distinct strings word1 and word2, which are both present in the array. Write a JavaScript function shortestDistance that returns the minimum distance between the positions of word1 and word2 within the list of words.
export function wordDist(arr, wordOne, wordTwo) {
    let result = -1;
    if (Array.isArray(arr)) {
        const acc1 = [];
        const acc2 = [];
        arr.reduce(
            (acc, item, index) => {
                if (item == wordOne) {
                    acc.push(index);
                }
                return acc;
            }, acc1
        )
        arr.reduce(
            (acc, item, index) => {
                if (item == wordTwo) {
                    acc.push(index);
                }
                return acc;
            }, acc2
        )
        if (acc1.length && acc2.length) {
            result = Math.min();
            for (let dist1 of acc1) {
                for (let dist2 of acc2) {
                    if (Math.abs(dist1 - dist2) < result) {
                        result = Math.abs(dist1 - dist2);
                    }
                }
            }
        }
    }
    return result;
}

// You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.
// Write a JavaScript function findMove that takes a string as input and calculates all the possible states of the string after a valid move has been made and return the states in an array of strings.
export function flipGame(str) {
    const result = [];
    function flip(arr, pos1, pos2) {
        const copy = [...arr];
        copy[pos1] = arr[pos1] == '+' ? '-' : '+';
        copy[pos2] = arr[pos2] == '+' ? '-' : '+';
        return copy.join("");
    }
    const strArray = str.split("");
    let res = [];
    for (let i = 0; i < strArray.length - 1; i++) {
        if (strArray[i] == strArray[i + 1]) {
            res = flip(strArray, i, i + 1);
            result.push(res);
        }
    }
    return result;
}

// Write a JavaScript function swapConsecutiveCharacters that takes a string as input and rearranges the consecutive characters within the string in a swapped manner and returns a swapped string.
export function swapConsecutiveCharacters(str) {

    let result = '';
    if (typeof str == 'string')
        for (let i = 0; i < str.length; i += 2) {

            if (i + 1 < str.length) {
                result += str[i + 1];
                result += str[i];
            } else {
                result += str[i];
            }

        }


    return result;
}

export function arrayIntersection(arrOne, arrTwo) {

    const setOne = new Set(arrOne);
    const result = [];
    for (let item of setOne) {
        if (arrTwo.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

export function insertSeven(str) {

    let result = "";
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        result += str[i];

        if (/^[a-zA-Z]$/.test(str[i])) {
            counter++;
            if (counter == 6) {
                result += "7";
                counter = 0;
            }
        }

    }

    return result;

}