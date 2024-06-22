

function isSentencePalindrome(sentence) {

    const regex = /[a-z]/g;

    if (typeof sentence == 'string') {

        const chars = sentence.toLocaleLowerCase().match(regex);
        if (chars != null) {
            return chars.join("") == chars.reverse().join("");
        }

    }
    return false;

}

// console.log(isSentencePalindrome("A man, a plan, a canal: Panama"));
// console.log(isSentencePalindrome("race a car"));

function findPatternOccurrences(str, pattern) {
    // Your code goes here
    const result = [];
    if (pattern.length == 0) {
        return [];
    }
    if (typeof str == 'string' && typeof pattern == 'string') {
        let patternLength = pattern.length;
        const regex = new RegExp(pattern, 'g');
        for (let i = 0; i <= str.length - patternLength; i++) {
            console.log(str.substring(i, i + patternLength) + ' ' + i + patternLength);
            if (regex.test(str.substring(i, i + patternLength))) {
                result.push(i);
            }
        }
    }
    return result;
}

// console.log(...findPatternOccurrences("abababa", "aba"));

function matchPattern(pattern, input) {
    // Your code goes here
    if (typeof pattern == 'string' && typeof input == 'string') {

        const patternItems = pattern.split("");
        const inputItems = input.split("");

        const dict = {};
        let item;
        for (let i = 0; i < pattern.length; i++) {
            item = patternItems[i];
            if (item in dict) {
                if (dict[item] != inputItems[i]) {
                    return false;
                }
            } else {
                dict[item] = inputItems[i];
            }

        }
        return true;
    }
}

console.log(matchPattern("xyyx", "abbc"));
console.log(matchPattern("xyyx", "abba"));