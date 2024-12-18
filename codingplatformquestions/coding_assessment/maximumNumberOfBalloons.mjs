var maxNumberOfBalloons = function(text) {
    // Your code goes here
    const balloon = {'b':1,'a':1,'l':2,'o':2,'n':1};
    const freq = {};
    // O(N)
    for(const ch of text) {
        // filtering letters only of the word
        if(balloon[ch]) {
            freq[ch] = freq[ch] ? freq[ch] + 1 : 1;
        }
    }
    console.log(freq);

    // division with floor and finding the min
    let min = Math.min(), temp;
    for(const ch of Object.keys(freq)) {
        temp = Math.floor(freq[ch]/balloon[ch]);
        min = Math.min(min,temp);
    }

    return min;
 };


console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("almabetter"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));