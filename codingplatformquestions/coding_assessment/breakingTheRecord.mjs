function recordBreaks(scores) {
    // Your code goes here

    let min = scores[0];
    let max = scores[0];
    const result = [0,0];
    for(let i=1;i<scores.length;i++){
        if(scores[i]<min){
            min = scores[i];
            result[1]++;
        }
        if(scores[i]>max){
            max = scores[i];
            result[0]++;
        }
    }
    return result;
}