
/**
 * 
 * @param {string} s 
 */
var reverseVowels = function (s) {
    // Your code goes here

    function isVovwel(char) {

        const vowelsCheck = ['a', 'e', 'i', 'o', 'u'];
        const result = vowelsCheck.includes(char);
        return result;
    }

    const vowels = [];

    for (let i = 0; i < s.length; i++) {
        if (isVovwel(s[i])) {
            vowels.push(s[i]);
        }

    }

    let result = '';
    let j = vowels.length - 1;
    for (let i = 0; i < s.length; i++) {

        if (isVovwel(s[i])) {

            result += vowels[j];
            j--;
        } else {
            result += s[i];
        }

    }

    return result;
};

console.log(reverseVowels("meetcode"));
console.log(reverseVowels("hello"));