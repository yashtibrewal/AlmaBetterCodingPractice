var findAndReplacePattern = function (words, pattern) {
    // Your code goes here

    /**
     * 
     * @param {string} word 
     * @param {string} pattern 
     */
    function matchPattern(word, pattern) {

        if (word.length != pattern.length) return false;

        let map = new Map();
        let reverseMap = new Map();
        for(let i=0;i<word.length;i++){
            if(map.has(pattern[i])){
                if(word[i]!=map.get(pattern[i])) return false;
            }else{
                map.set(pattern[i],word[i]);
            }
            if(reverseMap.has(word[i])){
                if(pattern[i]!=reverseMap.get(word[i])) return false;
            }else{
                reverseMap.set(word[i],pattern[i]);
            }
        }

        return true;
    }
    const result = [];
    for(let word of words){
        if(matchPattern(word,pattern)){
            result.push(word);
        }
    }
    return result;
};