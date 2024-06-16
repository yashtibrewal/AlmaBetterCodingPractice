

function extractNumbers(setence){

    if(typeof setence == 'string'){

        const regex = new RegExp(/\d+\.?\d+/g);
        return setence.match(regex).map(num=>parseFloat(num));
        
    }

}

console.log(extractNumbers("The price of the product is $250.50 2"));

function validURL(url){

    const regex = /^(http)(s)?:\/\/www\.(\w+)\.(\w{2,5})\/$/g;
    return regex.test(url);

}

console.log(validURL("https://www.example.com/"));
console.log(validURL("example.com"));

function removeVowels(sentence){

    return sentence.replace(/(a|e|i|o|u)/g,'');

}

console.log(removeVowels("Hello, World!"));

const a = [1, 2, 3];
const b = a.reduce((acc, x) => acc.concat([x, x]), []);
console.log(b);
