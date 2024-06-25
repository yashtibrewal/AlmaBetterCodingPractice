// STAGE 1  : Call stack is empty. // The code does not terminate.

function greeting() {
    return sayHi();
}
function sayHi() {
    return "Hi!";
}
setTimeout(() => {
    console.log(sayHi());
}, 1000);

// STAGE 2  : Call stack is empty. // The code does not terminate. // Heap has 1 function though

console.log(greeting());
// STAGE 3 : Call stack fills up with greetings and sayhi, then pops them goes to last stage.

// STAGE 4 : Call stack is empty. // Program does not terminate // Heap has 1 function though
 
// STAGE 5 : Call stack takes in the heap event, i.e. the set timeout event.

// STAGE 6  : Call stack is empty AND heap is empty. // The code terminates here.