
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
}

console.log(myXOR(1,2));
console.log(myXOR(3,5));