
function testPassByValue(arr){

    arr.prop = "changed"

}



const myObb = {prop:"value"};

testPassByValue(myObb);

console.log(myObb);