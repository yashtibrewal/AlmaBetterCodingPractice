var capitalizeTitle = function (title) {
    // Your code goes here
    let words = title.split(" ");
    words = words.map(word => {
        if (word.length <= 2) return word.toLowerCase();
        let chars = word.split("");
        chars = chars.map((char, i) => {
            if (i == 0) return char.toUpperCase();
            return char.toLowerCase();
        })
        return chars.join("");
    });

    return words.join(" ");
};

console.log(capitalizeTitle("First leTTeR of EACH Word"));
