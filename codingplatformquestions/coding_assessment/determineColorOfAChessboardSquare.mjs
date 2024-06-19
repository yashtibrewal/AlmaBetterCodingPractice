var squareIsWhite = function (coordinates) {
    // Your code goes here

    const letter = coordinates.split("")[0];
    const digit = parseInt(coordinates.split("")[1]);

    function isWhite(num){
        return num%2!=0;
    }

    switch(letter){

        case 'a': return isWhite(1+digit);
        case 'b': return isWhite(2+digit);
        case 'c': return isWhite(3+digit);
        case 'd': return isWhite(4+digit);
        case 'e': return isWhite(5+digit);
        case 'f': return isWhite(6+digit);
        case 'g': return isWhite(7+digit);
        case 'h': return isWhite(8+digit);

    }

};

console.log(squareIsWhite('a1'));
console.log(squareIsWhite('h3'));