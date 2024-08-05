var repeatedStringMatch = function (a, b) {
    // Your code goes here
    const recur = [];

    let compareA = recur.join("");
    let i =0;
    while(compareA.length <= b.length){
        if(compareA.includes(b)){
            return i;
        }
        compareA += a;
        i++;
    }
    if(compareA.includes(b)){
        return i;
    }
    return i;
};