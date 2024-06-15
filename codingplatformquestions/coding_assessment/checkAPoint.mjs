
function check_a_point(a, b, x, y, r) {

    return r >= Math.sqrt((a - x) ** 2 + (b - y) ** 2);

}

console.log(check_a_point(0, 0, 2, 2, 5));
console.log(check_a_point(4, 4, 6, 9, 3));
