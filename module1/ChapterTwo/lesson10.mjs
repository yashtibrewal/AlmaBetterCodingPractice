var x = 1;
function myFunc() {
    console.log(x);
}
var y = function () {
    var x = 2;
    myFunc();
};
y();