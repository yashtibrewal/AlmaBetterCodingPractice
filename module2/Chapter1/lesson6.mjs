function testPattern(sentence, pattern) {

    return new RegExp(pattern, 'g').test(sentence);

}

// console.log(testPattern("abcdefg", "cde"));
// console.log(testPattern("hello word", "abc"));

function longestCommonPrefix(arr) {

    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            return "";
        }
        const len = arr.length;
        let common = arr[0];
        let temp = "";
        for (let word of arr) {

            for (let i = 0; i < Math.min(common.length, word.length); i++) {

                if (common[i] == word[i]) {
                    temp += common[i];
                } else {
                    if (i == 0) {
                        return "";
                    }
                    break;
                }

            }

            common = temp;
            temp = "";

        }
        return common;

    }

}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));

function countSubStr(str,sub){
    if(typeof str == 'string' && typeof sub == 'string'){
        if(str.length < sub.length){
            return 0;
        }
        const subLen = sub.length; 
        let count = 0;

        for(let i=0;i < str.length-subLen +1;i++){

            if(str.substring(i,i+subLen) == sub){
                count++;
                i = i+subLen-1;
            }

        }
        return count;
    }
}


function longestRepeatedSubstring(sentence){

    if(typeof sentence == 'string'){

        const set = new Set();
        let subStr = "";
        for(let i=sentence.length;i>=2;i--){
            // since sentence's len cannot be repeated, hence starting from len - 2.
            
            for(let j=0;j<=sentence.length - i;j++){
                subStr = sentence.substring(j,j+i);
                if(set.has(subStr)){
                    return subStr;
                }else{
                    set.add(subStr);
                }
            }
    
        }
    }

}

console.log(longestRepeatedSubstring("banana"));
console.log(longestRepeatedSubstring("mississippi"));