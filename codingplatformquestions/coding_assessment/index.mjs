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


function check_a_point(a, b, x, y, r) {

    return r >= Math.sqrt((a - x) ** 2 + (b - y) ** 2);

}

console.log(check_a_point(0, 0, 2, 2, 5));
console.log(check_a_point(4, 4, 6, 9, 3));

function myXOR(x, y) {

    x = x.toString(2).split("");
    y = y.toString(2).split("");

    while(x.length > y.length){

        y.unshift("0");

    }
    while(y.length > x.length){

        x.unshift("0");

    }
    const result = [];
    for(let i = 0;i<x.length;i++){
        if(x[i]==y[i]){
            result.push("0");
        }else{
            result.push("1");
        }
    }

    let res = parseInt(result.join(""),2);

    return res;
    assessment;
}

console.log(myXOR(1,2));
console.log(myXOR(3,5));