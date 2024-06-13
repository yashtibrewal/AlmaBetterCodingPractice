
function myXOR(x, y) {
    let binaryStringX = x.toString(2).split("");
    let binaryStringY = y.toString(2).split("");
    while(binaryStringX.length > binaryStringY.length){
        binaryStringY.unshift(0);
    }
    while(binaryStringY.length > binaryStringX.length){
        binaryStringX.unshift(0);
    }

    const result = [];

    for(let i=0;i<binaryStringX.length;i++){
        if(binaryStringX[i] == binaryStringY[i]){
            result.push(0);
        }else{
            result.push(1);
        }
    }

    return Number.parseInt(result.join(""),2);

}

console.log(myXOR(3,5));