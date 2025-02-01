You can link Javascript file to HTML using ```<script src="script.js"></script>``` at the end of body part
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Link Example</title>
</head>
<body>
    <h1>Hello, JavaScript!</h1>
    <p> my paragraph </p>
    <button id="mybutton">this is my button</button>

    <!-- Link the JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
```

```javascript
function myFunction(num1, num2, operation) {
    let result;
    
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                return "Error: Division by zero is not allowed";
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Invalid operation";
    }

    // ${result} means "result" should be treated as a variable instead of a string (work with '' indead of "")
    return `The result is ${result}`;
}

console.log(myFunction(8, 5, "+"));


function squareArray(arr) {
    let squaredUsingForLoop = [];
    let squaredUsingForEach = [];

    // Using for loop
    for (let i = 0; i < arr.length; i++) {
        squaredUsingForLoop.push(arr[i] * arr[i]);
    }

    // Using .forEach()
    // Initialize an empty array squaredUsingForEach.
    // Use .forEach() to iterate through the array and push the squared values into the new array.
    arr.forEach(function(num) {
        squaredUsingForEach.push(num * num);
    });
    // ES6 Syntax
    arr.forEach(num => squaredUsingForEach.push(num * num));

    // Returns an object
    return {
        forLoop: squaredUsingForLoop,
        forEach: squaredUsingForEach
    };
    
}

// Override the original array
function square(numbers){
    numbers.forEach(myFunction);
    function myFunction(item, index, arr) {
        arr[index] = item * item;
    }
    return numbers;
}

const numbers = [1, 2, 3, 4, 5];
console.log(squareArray(numbers));
console.log(square(numbers));



document.getElementById("mybutton").addEventListener("mouseover", changecolor);
function changecolor(){
    document.getElementById("mybutton").style.color = "blue";
}
document.getElementById("mybutton").addEventListener("mouseout", (e) => {document.getElementById("mybutton").style.color = "pink";});


const butoon = document.getElementById("mybutton");
```


