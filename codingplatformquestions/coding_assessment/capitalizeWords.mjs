function capitalizeWords(str) {

    const arr = str.split(" ");
    const result = [];
    for (let item of arr) {

        if (typeof item == "string") {

            result.push(item.substring(0, 1).toUpperCase() + item.substring(1));

        }

    }

    return result.join(" ");

}

console.log(capitalizeWords("hello world"));

