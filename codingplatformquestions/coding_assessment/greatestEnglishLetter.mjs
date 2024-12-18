var greatestLetter = function(s) {
     
    // Seperate out the Caps and smalls
    // O(N)
    const smalls = new Set(Array.from(s)
        .filter(ch => ch >= 'a' && ch <= 'z'));
    let larges = Array.from(s)
        .filter(ch => ch >= 'A' && ch <= 'Z');

    // O(N)
    larges = larges
        .filter(capialLetter => smalls.has(capialLetter.toLowerCase()));

    // O(N)
    if(Array.isArray(larges)) {
        larges = larges.reduce((prev, curr)=>prev > curr ? prev : curr, 'A');
        if(!larges.length) return '';
    }

    return larges[0];
};

console.log(greatestLetter("arRAzFif")); // R
console.log(greatestLetter("arAzFif")); // F
console.log(greatestLetter("aRAzFi")); // A
console.log(greatestLetter("aRAzFiZ")); // Z
console.log(greatestLetter("azi")); // empty string