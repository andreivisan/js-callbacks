function processNumber(number, evenCallback, oddCallback) {
    console.log(number);

    if (number % 2 === 0) {
        evenCallback()
    } else {
        oddCallback()
    }
}

function evenCallback() {
    console.log("The number is even!");
}

function oddCallback() {
    console.log("The number is odd!");
}

processNumber(7, evenCallback, oddCallback);