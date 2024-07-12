function mycode(original) {
    var result = '';
    // original = original.toLowerCase();
    original = original.replace(/[A-Z]/g,'');  // If we do not want the capital characters

    const answer = [];

    function isDigit(char) {
        return /[0-9]/g.test(char);
    }

    /**
     * 
     * @param {string} char 
     * @param {number} times 
     */
    function rotate(char, times) {
        const lowerCaseA = 'a'.charCodeAt();
        let charCode = char.toLowerCase().charCodeAt(0);
        let rotatedCharCode = ((charCode - lowerCaseA - times + 26) % 26) + lowerCaseA;
        return String.fromCharCode(rotatedCharCode);
    }

    let pos = 1;

    for (let char of original) {

        if (isDigit(char)) {
            answer.push(char);
        } else if (pos % 5 == 0 && pos % 3 == 0) {
            answer.push(rotate(char, 3));
        } else if (pos % 3 == 0) {
            answer.push(rotate(char, 5));
        } else if (pos % 5 == 0) {
            answer.push(rotate(char, 9));
        } else {
            answer.push(rotate(char, 2));
        }
        pos++;
    }

    result = answer.join("");

    return result
}

console.log(mycode('Oofiebuc2Zaecheeh'));
console.log(mycode('h1dk7li7g001j4977783j552j38k23ic'));

