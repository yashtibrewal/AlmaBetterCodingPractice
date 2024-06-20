
function winorlose(s) {
    // Your code goes here
    let arsh = 0, opponent = 0;

    const scores = s.split("");
    for (let i = 0; i < scores.length; i++) {

        if (scores[i] == 1) {
            arsh++;
        } else {
            opponent++;
        }
    }
    if (arsh == 11 && opponent <= 9) {
        return "WIN";
    }
    if (opponent == 11 && arsh <= 9) {
        return "LOSE";
    }
    if (arsh >= 10 && opponent >= 10) {
        if (arsh - opponent == 2) {
            return "WIN";
        }
        if (opponent - arsh == 2) {
            return "LOSE";
        }

    }
}

console.log(winorlose("0101111111111"));
console.log(winorlose("1111111111222222222222"));