// STAGE 1  : Call stack is empty. // The code does not terminate.

function greeting() {
    sayHi();
}
function sayHi() {
    return "Hi!";
}

// STAGE 2  : Call stack is empty. // The code does not terminate.

greeting();
// STAGE 3 : Call stack fills up with greetings and sayhi, then pops them goes to last stage.

// STAGE 4  : Call stack is empty. // The code terminates here.