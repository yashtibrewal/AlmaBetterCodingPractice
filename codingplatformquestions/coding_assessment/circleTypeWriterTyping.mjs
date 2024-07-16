/**
 * 
 * @param {str} word 
 * @returns 
 */

const minTimeToType = function (word) {
    // Your Code Goes Here 

    function getTimeToChar(presentChar, targetChar) {

        let clockwise = 0, antiClockwise = 0;

        let presentCarVal = presentChar.charCodeAt(0);
        let targetCarVal = targetChar.charCodeAt(0);

        if (targetCarVal - presentCarVal > 0) {
            clockwise = Math.abs(targetCarVal - presentCarVal);
            antiClockwise = Math.abs(presentCarVal - targetCarVal + 26);
        } else {
            clockwise = Math.abs(targetCarVal - presentCarVal + 26);
            antiClockwise = Math.abs(presentCarVal - targetCarVal);
        }

        return Math.min(clockwise, antiClockwise);
    }

    let totalTime = 0;
    let presentChar = 'a';
    for (let char of word) {

        if (presentChar == char) {
            totalTime++;
            continue;
        }
        totalTime += getTimeToChar(presentChar, char);
        totalTime++; // for the char we will type
        presentChar = char;
    }
    return totalTime;
};

console.log(minTimeToType("bz"));