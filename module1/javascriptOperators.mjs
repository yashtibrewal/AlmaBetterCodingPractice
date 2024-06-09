
const checkForEven = function (num) {
    if (isNaN(parseInt(num))) {
        console.log("Not a number. Please enter a number;");
    } else if (num % 2 == 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
}

const natureOfNumbers = function (num) {
    if (isNaN(parseInt(num))) {
        console.log("Not a number. Please enter a number");
    } else if (num < 0) {
        console.log("Negative");
    } else if (num == 0){
        console.log("Zero");
    } else {
        console.log("Positive");
    }
}

const convertToMinutes = function (num) {
    
    if (isNaN(parseInt(num))) {
        console.log("Not a number. Please enter a number");
    } else if (num < 0) {
        console.log("Negative number added, need postive number to convert to minutes");
    } else if (num == 0){
        console.log("0");
    } else {
        console.log(num*60);
    }
}

export {
    checkForEven,
    natureOfNumbers,
    convertToMinutes
}

