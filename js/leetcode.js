// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

var compose = function(functions) {
    return function(x) {
        
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x); 
        }
        return x; 
    };
};


// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

var once = function(fn) {
    let called = false; // This variable will keep track of whether fn has been called already

    return function(...args) {
        if (!called) { // Check if fn has been called
            called = true; // Mark fn as called
            return fn(...args); // Call and return the result of fn
        } else {
            return undefined; // Return undefined for subsequent calls
        }
    };
};


// function sevenBoom(arr) {
//     for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toString().includes('7')) {
//             return "Boom!";
//     }
// }	
// return "there is no 7 in the array";
// }

function sevenBoom (arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 7) {
            return "boom!";
        }
    }
            return "there is no 7 in the array";
        
    }


let arr = [2, 9, 4, 8, 8 , 10, 12, 6, 13, 25, 14, '7']

console.log(sevenBoom(arr));



// You are building a calculator that handles basic operations. Currently, you want to make sure operators like +, -, *, and / are only added if the last character in the display.value is a number. You already have display.value capturing the input string.

// Your task:

// Write a function safeAppendOperator that takes in two arguments:
// operator (a string, like '+', '-', '*', or '/')
// display (an object with a value property, representing the display of your calculator)
// Inside safeAppendOperator, use display.value && !isNaN(display.value[display.value.length - 1]) to check if it’s safe to append the operator.
// If the check passes, append the operator to display.value.
// If the check fails, return a message: "Cannot add operator without a number at the end."
// Bonus: If display.value is empty and the user tries to add an operator, return: "Cannot start with an operator."

function safeAppendOperator (operator,display) {

    if (display.value && !isNaN(display.value[display.value.length - 1])) {
        display.value += operator
        console.log(display.value)
    }
     else if (display.value === '') {
        console.log('Cannot start with an operator');

    }
     else {
        console.log('Cannot add operator without a number at the end');
    }        
}

let display = { value: "123" };
console.log(safeAppendOperator("+", display));
 
safeAppendOperator("-", display); 
safeAppendOperator("*", display); 



// Write a function called formatCalculation that:

// Takes two numbers and an operator as parameters.
// Verifies if the operator is valid (+, -, *, or /). If it's invalid, the function should return a message saying "Invalid operator".
// If the operator is valid, performs the calculation on the two numbers and returns the result.
// Use the isNaN() function to ensure the inputs are numbers. If either of the numbers is not a valid number, return "Invalid number".

function formatCalculation (num1, num2, operator) {

    if (!['+', '-', '*', '/'].includes(operator)) {
            return 'Invalid operator'; }
    

    if(operator != ('+', '-', '*', '/')) {
        return 'invalid operator';
    }
    else if (!isNaN(num1) || !isNaN(num2)) {
        return 'Invalid number'
    }
    else {
       let result =  eval(num1, operator, num2)
    }
}



// Question 1: Control Flow and Conditional Statements
// You have a variable that stores a temperature value in Celsius. Write a function that:

// Checks if the temperature is above 30, and if so, returns "It's hot today!"
// If the temperature is between 20 and 30, returns "It's a pleasant day."
// If the temperature is below 20, returns "It's cold today."
// Bonus: Ensure your function handles any invalid input (e.g., if someone enters text instead of a number).


let tempChecker = (x) => {

    (isNaN(x)) ? "please enter a number" : "valid number";    

    let temp = (x >= 30) ? "It's hot today!" : x > 20 && x < 30 ? "It's a pleasant day" : "It's cold today";

    return temp;
    
}

console.log(tempChecker('hello'));