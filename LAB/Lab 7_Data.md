# Asynchronous JavaScript
- By default, JavaScript is a synchronous, single threaded programming language. 
- With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallel.
- For example, functions like fetching a remote API or accessing user’s camera can potentially take a longer time to execute. Which is where asynchronous programming is helpful.


## [Async and Promises](https://www.w3schools.com/js/js_async.asp)
- In JavaScript, asynchronous programming is solved using Promises.
- The keyword `async` before a function makes the function return a promise:
  ```javascript
  async function myFunction() {
    return "Hello";
  }
  ```
- A JavaScript Promise object can be:
  - Pending
  - Fulfilled
  - Rejected
- The Promise object supports two properties: state and result.
  - While a Promise object is "pending" (working), the result is undefined.
  - When a Promise object is "fulfilled", the result is a value.
  - When a Promise object is "rejected", the result is an error object.

## [Promises Method](https://www.w3schools.com/js/js_promise.asp)
- You cannot access the Promise properties state and result.
- You must use a Promise method to handle promises.
  ```javascript
  myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );
  ```
- Promise.then() takes two arguments, a callback for success and another for failure.
- Both are optional, so you can add a callback for success or failure only.
- An example:
  ```javascript
  async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  ```

## Await Syntax
- The `await` keyword can only be used inside an `async` function.
- The `await` keyword makes the function pause the execution and wait for a resolved promise before it continues:

## [useEffect](https://www.w3schools.com/react/react_useeffect.asp)


