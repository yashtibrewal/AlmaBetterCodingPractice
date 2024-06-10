"use strict"

import readLine from "../readLine.mjs";

// Palindrome is 2+ length.

function isPalindrome(word){

    for(let i=0;i<word.length/2;i++){
        if(word.charAt(i)!=word.charAt(word.length-i-1)){
            return false;
        }
    }
    return true;
}

function longestPalindrome(word){

    if(!(word instanceof String) && typeof word != "string"){
        console.log("Invalid Entry");
        return null;
    }

    let checkWord;
    for(let i=word.length;i>2;i--){

        for(let j=0;j+i-1<word.length;j++){

            checkWord = word.substring(j,j+i);
            if(isPalindrome(checkWord)){
                return checkWord;
            }
        }

    }

    return "none";

}

export default function executelongestPalindrome(){
    console.log("Enter input for longest palindrome");
    readLine.on('line', (word)=>{
        console.log(longestPalindrome(word));
    });
    
}