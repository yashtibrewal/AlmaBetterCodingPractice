

function isLeapYear(year){

    if(year%400 == 0){
        return true;
    }
    if(year%100 != 0 && year%4==0){
        return true;
    }
    return false;

}

console.log(isLeapYear(1600));
console.log(isLeapYear(2004));
console.log(isLeapYear(1500));

function toLowerCase(story){
    return story.toLowerCase();
}

console.log(toLowerCase("THis is a story."));

function lastWordLength(sentence){

    const words = sentence.split(" ");
    
    return words[words.length-1].length;

}

console.log(lastWordLength("Hello Worlds"));