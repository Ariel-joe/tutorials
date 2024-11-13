// let totalNum = 0;
// let num;

// while (num >= 0) {
//     totalNum += num;
//     num = parseInt(prompt("Enter a positive value"));
// }  {
//     alert("total sum is: " + totalNum);
// }


// const secretNumber = 7;
// let userInput;

// while (secretNumber != userInput) {
//     userInput = parseInt(prompt("guess a number"));

//     if (userInput < secretNumber) {
//         console.log("too low");
//     } 
//     else if (userInput > secretNumber) {
//         console.log("too high");
//     }
//     else {
//         console.log("congratulations!")
//     }
// }


//Marc's function for season check;

// function seasons(months) {
//     if (months === 1 || months ===2 || months===3){
//         console.log("summer");
//     }
//     else if (months = 4 || months ===5|| months===6){
//         console.log("spring");
//     }
//     else if ( months = 7 || months===8|| months===9){
//         console.log("Autum"); 
//     }
//     else if (months = 10|| months===11|| months===12){
//         console.log("winter");
//     }
//     else {
//         console.log("invalid")
//     }
// }
// console.log(seasons(9));






//Write a while loop that prints numbers from 1 to 10.

// let num = 0;

// while(num < 10) {
//     num++;

//     console.log(num);
// }

// Write a while loop that calculates the sum of numbers from 1 to n, where n is a number provided by the user.
// let sum = 0;
// let num1 = 1;  
// let userInput = parseInt(prompt("Enter a number:"));  

// while (num1 <= userInput) {
//     sum += num1;  
//     num1++;  
// }

//Create a simple game where the user has to guess a secret number between 1 and 10. The game should use a while loop to keep asking the user to guess until they guess correctly.

// const secretCode = 9;
// let userCode;

// while (secretCode != userCode) {
//     userCode = parseInt(prompt("try again"));

//     if (userCode > secretCode) {
//         alert( "too high");
//     } 
//     else if (userCode < secretCode) {
//         alert( "too low");
//     }
//     else {
//         alert ( "congratulations");
//     }
// }


// Write a while loop that prints all even numbers between 1 and 20.

// let evenNumbers = 2;
// let stopPrint = 20;

// while (evenNumbers < stopPrint) {

//     console.log(evenNumbers);
//     evenNumbers += 2;
// }


// Create a function called fizzBuzz that takes a number n as input and prints the numbers from 1 to n. However, for multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both 3 and 5, print "FizzBuzz".

// function fizzBuzz(userInput) {
//     let num = 1;

//     while (num <= userInput) {
//         if (num % 3 === 0 && num % 5 === 0) {
//             console.log("fizzBuzz");
//         }
//         else if (num % 3 === 0 ) {
//             console.log("Fizz");
//         }
//         else if (num % 5 === 0) {
//             console.log("Buzz");
//         }
//         else {
//             console.log(num);
//         }
//         num++;
//     }
// }

// fizzBuzz(15);


// Create a function called getDayName that takes a number (1 to 7) representing the day of the week and returns the name of the day using a switch statement.


function getDayName (x) {
    switch (x) {
        case 1: 
        return "Monday";

        case 2:
        return "Tuesday";

        case 3:
        return "Wednesday";

        case 4:
        return "Thursday";

        case 5:
        return "Friday";

        case 6:
        return "Saturday";

        case 7:
        return "Sunday";

        default:
        return "invalid day";


    }
}
getDayName(1);

// Create a function called temperatureConverter that takes a temperature and a unit (Celsius or Fahrenheit). If the input is in Celsius, convert it to Fahrenheit, and vice versa. Use if-else to determine which conversion to perform.

function temperatureConverter (x, unit) {

    if (unit == "C") {
        return ((x * 9 / 5) + 32).toFixed(2) + " Fahrenheit";        
    }
    else if (unit == "F") {
        return ((x - 32) * 5 / 9).toFixed(2) + " Celsius";        
    }
    else {
        return "invalid choice";
    }
}
// console.log(temperatureConverter(300, "C"));

// Write a function called getGrade that takes a numeric score as input and returns the corresponding letter grade based on the following criteria:

// 90 and above: "A"
// 80 to 89: "B"
// 70 to 79: "C"
// 60 to 69: "D"
// Below 60: "F"

function getGrade (x) {
    if (x >= 90) {
        return "A";
    }
    else if (x >= 80) {
        return "B";
    }
    else if (x >= 70) {
        return "C";
    }
    else if (x >= 60) {
        return "D";
    }
    else {
        return "F"
    }
}
// console.log(getGrade(20));

// Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome (it reads the same forwards and backwards) and false otherwise. Ignore spaces, punctuation, and capitalization.

function isPalindrome (str) {

    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (cleanedStr === cleanedStr.split('').reverse().join('')) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isPalindrome("A man, a plan, a canal, Panama"));


// Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.

function multiplyFive (x) {
    return parseInt(x * 5);
}
console.log(multiplyFive(3));
console.log(multiplyFive(4));
console.log(multiplyFive(5));
console.log(multiplyFive(6));

// do while loop, the code block is executed first then the condition is checked. if the code is true, the code is executed again,if it is false the loop stops.

let count = 1;

do {
    console.log(count);  // Prints the value of count
    count++;             // Increments count
} while (count <= 5);


let password;

do {
    password = prompt("enter the correct password");
}
while (password !== "secret123")


// Here’s an example where we keep adding user input until they enter a negative number:

let sum = 0;
let number;

do {
    number = (parseInt(prompt("enter a number/ enter a negative number to stop:")));

    sum += number;
}
while (number >= 0)

console.log("the sum of positive numbers: " + sum)

// you need to create a script that keeps asking a user to guess a secret number between 1 and 10. The loop should continue until the user guesses the correct number:
// the program should generate a random number between 1 and 10.
// prompt the user to guess the number
// if the guess is incorrect, the program should tell the user whether the guess is too high or too low, and then ask for another guess.
// the loop should stop once the user guesses the correct number and display a success MessageChannel.




function guessNumber () {
    let secretNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    console.log(secretNumber);

    let userInput;

    while (secretNumber != userInput) {
        userInput = parseInt(prompt("enter an integer"));

        if (isNaN(userInput)) {
            alert( "please use a number between 1 and 10");
        }
        else if (userInput < secretNumber) {
            alert ("too low");
        }
        else if (userInput > secretNumber) {
            alert("too high");
        }
        else {
            alert ("congratulations");
        }
    }
}

    let secretNumber = Math.floor(Math.random() * 10  + 1);




for( var i = 1; i <= 10; i++) {
    
    console.log( (i),  (i**2));
}


var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

days.push('saturday');


// Challenge 1: Prime Number Checker
// Write a function called isPrime that checks whether a given number is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself.

// Requirements:

// The function should take one argument: num (the number to check).
// It should return true if the number is prime, and false if it is not.
// Bonus: Optimize your solution by checking divisors only up to the square root of the number.

function isPrime (x) {
    if ( x > 1 && x % 1 === 0 && x % x === 0 ) {
        return true;
    }
    else {
        return false;
    }
}

function isPrime(x) {
    if (x <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false; // If any number divides x, it is not prime
        }
    }
    
    return true; // If no divisors are found, x is prime
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false


// Write a function called sumDigits that takes a number as input and returns the sum of its digits. If the input is a negative number, treat the digits as positive.

// Requirements:

// The function should take one argument: num (the number whose digits need to be summed).
// Use a loop or recursion to sum the digits.
// Ensure the function works for both positive and negative numbers.

function sumDigits (num) {
    let positiveNumber = Math.abs(num);

    let cleanNum = positiveNumber.split();

    for (let i = 0; i <= positiveNumber; positiveNumber++ ) {
    
    }
}

function calllName () {
    alert("audrey natasha");
}



let firstNumber;
let secondNumber;

function sum(){

firstNumber = parseInt(prompt('Enter an integer'));
secondNumber = parseInt(prompt('Enter a second integer'));

if (isNaN(firstNumber) || isNaN(secondNumber)){
    alert('Enter a Number');
}
else{
    const result = (firstNumber + secondNumber) **2;

    console.log(result);
}

}




// function squareSum (num1, num2) {

//     if (isNaN(num1)) {
//         return "the first input is not a number";
//     }
//     else if (isNaN(num2)) {
//         return "the second input is not a number";
//     }
//     else {
//         return (num1**2) + (num2**2)
//     }   
    
// }

function squareSum (num1, num2) {

    if (num1 = isNaN(prompt("enter a number"))) {
        return "the first input is not a number";
    }
    else if 
    (num2 = isNaN(prompt("enter a number"))) {
        return "the second input is not a number";
    }
    else {
        return (num1**2) + (num2**2);
    }
}


function squareSum(num1, num2) {

    let num1 = parseInt(prompt("Enter the first number"));

    if (isNaN(num1)) {
        return "The first input is not a number.";
    }

    let num2 = parseInt(prompt("Enter the second number"));

    if (isNaN(num2)) {
        return "The second input is not a number.";
    }
    return (num1 ** 2) + (num2 ** 2);
}