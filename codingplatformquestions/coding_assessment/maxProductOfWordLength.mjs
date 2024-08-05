var maxProduct = function (words) {
    // your code goes here


    let maxProduct = 0;

    /**
     * 
     * @param {[]} wordA 
     * @param {[]} wordB 
     */
    function containsCommonLetter(wordA, wordB) {

        for (let i = 0; i < 26; i++) {
            let char = String.fromCharCode('a'.charCodeAt(0) + i);
            if (wordA.includes(char) && wordB.includes(char)) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {

            if (!containsCommonLetter(words[i], words[j])) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }

        }
    }


    return maxProduct;


};
