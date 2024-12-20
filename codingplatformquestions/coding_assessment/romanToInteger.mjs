/**
 * 
 * @param {string} s 
 */
function romanToInt(s) {
    // your code goes here

    function baseValues (s) {
        switch(s) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }

    let sum = 0, i=0;

    // if next letter exists and greater then present
    // treat it specially.
    while(i<s.length){
        if(baseValues(s[i+1]) > baseValues(s[i]) && i+1<s.length){
            sum = sum + baseValues(s[i+1]);
            sum = sum - baseValues(s[i]);
            i++;
        }else{
            sum = sum + baseValues(s[i]);
        }
        i++;

    }
    return sum;
}

console.log(romanToInt('MMMCMXCIX')) // 3999
console.log(romanToInt('DLV')) // 555
console.log(romanToInt('IV')) // 4
console.log(romanToInt('IX')) // 9
console.log(romanToInt('VL')) // 45
console.log(romanToInt('MI')) // 1001
console.log(romanToInt('XD')) // 490
console.log(romanToInt('CM')) // 900
