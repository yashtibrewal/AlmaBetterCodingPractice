const fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear'];

fruits.push("grapes");
fruits.pop();
fruits.shift();

function wordReverser(sentence) {

    let words = sentence.split(" ");

    words = words.reverse();
    words = words.join(" ");

    return words;

}

// console.log(wordReverser("Hello, world!"));


function palidromeDetector(arg) {

    let sentence = arg;
    sentence = sentence.toLowerCase();
    sentence = Array.from(sentence);
    sentence = sentence.filter((char) => {
        return char >= 'a' && char <= 'z';
    });

    const word = sentence.join("");
    const copy = sentence.reverse().join("");
    return copy == word;

}


console.log(palidromeDetector("palidromeDetector"));
console.log(palidromeDetector("Madam In Eden, I'm Adam"));

function rotateArray(arr, times) {
    if (arr.length == 0) {
        return [];
    }
    times = times % arr.length;
    let item;
    for (let i = 0; i < times; i++) {
        item = arr.pop();
        arr.unshift(item);
    }
    return arr;
}
console.log(rotateArray([7, 8, 9], 5));
console.log(rotateArray([1, 2, 3, 4, 5], 2));

