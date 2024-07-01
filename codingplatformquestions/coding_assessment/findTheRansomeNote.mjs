function canConstruct(ransomNote, magazine) {
    // Your code goes here
    const magzineChars = magazine.split("");
    for(let noteItem of ransomNote){
        if(magzineChars.includes(noteItem)){
            const  i = magzineChars.indexOf(noteItem);
            magzineChars.splice(i,1);
        }else{
            return false;
        }
    }
    return true;
};

console.log((canConstruct('aa','ab')));
console.log((canConstruct('a','b')));
console.log((canConstruct('aa','aab')));