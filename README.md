# Learn JS callbacks using Vanilla.js

## What is a callback

A callback is a function that is passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action.

<b>Example</b>

```js
// Step 1: Define a simple function that takes another function as a parameter
function greet(name, callback) {
    console.log("Hello, " + name);
    // Step 2: Invoke the callback function within the outer function
    callback();
}

// Define a callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Call the greet function with the sayGoodbye callback
greet("Alice", sayGoodbye);
```
<b>Calling a callback</b>

when you pass ```sayGoodbye``` without parentheses, you are passing the function itself as reference. If you add parentheses, it invokes the function immediately and passes the result (which is undefined as we are not returning anything) to ```greet``` function.
