function compressVideo(frames) {
    // Your code goes here
    let count = 0, num;
    if (Array.isArray(frames)) {
        if (frames.length > 0) {

            num = frames[0];
            count++;

            for (let i = 0; i < frames.length; i++) {
                if (frames[i] == num) {
                    continue;
                } else {
                    num = frames[i];
                    count++;
                }
            }
        }

    }
    return count;

}

console.log(compressVideo([2,1,2,2,1]));
console.log(compressVideo([2,1,7,8,9,91,91]));
console.log(compressVideo([2,1,2,2]));