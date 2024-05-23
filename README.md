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

## Asynchronous callbacks

JavaScript often uses callbacks for asynchronous operations, such as making HTTP requests, reading files, or setting timers.

<b>Example</b>

```setTimeout``` is a function that takes a callback and a delay in milliseconds, and it calls the callback after the specified delay.

## Callback Hell

As callbacks become nested and complex, they can lead to "callback hell." JavaScript introduced Promises to address this problem.

## Promises

### Intro to Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to chain operations and handle errors more gracefully.

- Pending: Initial state, neither fulfilled nor rejected.

- Fulfilled: Operation completed successfully.

- Rejected: Operation failed.

A Promise provides then() and catch() methods for handling success and failure.

### Steps to implement a Promise

1. Create a class MyPromise.

2. Maintain the state (pending, fulfilled, rejected) and value.

3. Implement the then and catch methods.

4. Handle resolve and reject to change the state and value.

### Promise Step-by-Step Execution Order

1. MyPromise Constructor Initialization

- A new MyPromise instance is created, and the executor function is passed to the constructor.

- The state is initialized to pending.

- The value is initialized to undefined.

- The handlers and catchers arrays are initialized to empty arrays.

2. Executor Function Execution

- The executor function (resolve, reject) => { ... } is immediately invoked with the resolve and reject functions as arguments.

3. setTimeout Scheduling

- The ```setTimeout``` function schedules the provided callback to be executed after 3000 milliseconds (3 seconds).

4. Returning MyPromise Instance

- The MyPromise constructor finishes execution and returns the newly created MyPromise instance.

5. Waiting Period

- During the 3-second delay, the promise is still in the pending state. Any .then() or .catch() calls during this period will add handlers to the respective arrays (handlers for .then(), catchers for .catch()).

6. setTimeout Callback Execution

- After 3 seconds, the setTimeout callback is executed.

- The ```console.log('fetching data from url ', url)``` statement is executed, logging the message to the console.

7. Simulate Error Condition

- The Math.random() function generates a random number between 0 and 1.

- If the random number is greater than 0.5, an Error object is created and assigned to the error variable. Otherwise, error is null.

- If error is null, a data object is created with { size: "2Mb", type: "mov" }.

8. Resolve or Reject

- If error is not null, the reject function is called with the error object

  - The reject function changes the state of the promise to rejected.

  - The reject function sets the value of the promise to the error object.

  - The reject function calls all the functions in the catchers array with the error object.

- If data is not null, the resolve function is called with the data object.

  - The resolve function changes the state of the promise to fulfilled.

  - The resolve function sets the value of the promise to the data object.

  - The resolve function calls all the functions in the handlers array with the data object.
  
### My step-by-step observation:

1. Constructor is being called

2. Executor function is being called and Set timeout of 3 seconds kicks in

3. ```Then``` function is called and a handler is being pushed.

4. ```Catch``` function is called and a catcher is being pushed.

5. Timeout is done, whateven happens inside the callback of the timeout is being called, the Math and all that.

6. Reject is being called.

7. The catcher function is being called.
