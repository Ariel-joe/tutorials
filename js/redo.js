// Create a function called add that takes two numbers as parameters and returns their sum.


var add  = function(x,y) {
    return x + y;
}

// Create a function called multiply that takes two numbers as parameters and returns their product.

var multiply = function(num1, num2) {
    return num1 * num2;
}


// Write a function called isNumberEven that takes a number as input and returns true if the number is even, or false if it is odd.

var isNumberEven = function(z) {
    if (z % 2 === 0) {
        return true;
    } 
    else {
        return false
    }
}


// Create a function called maxOfTwo that takes two numbers as parameters and returns the larger number.

var maxOfTwo = function(x,y) {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}
console.log(maxOfTwo(1000,90));


// Create a function called convertCelsiusToFahrenheit that takes a temperature in Celsius and converts it to Fahrenheit.

function convertCelsiusToFahrenheit(Celsius) {
    return (Celsius * (9/5) +32);
}

// Create a function called reverseIt that takes a string as input and returns the string reversed.

var reverseIt = function (string) {
    return string.split('').reverse().join('');
}

// Create a function called calculateGrade that takes a score (0-100) as input and returns the corresponding grade based on the following criteria:

// 90-100: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Below 60: "F"

var calculateGrade = function (grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F"; 
    }
}

// Create a function called checkSeason that takes a month (as a number from 1 to 12) and returns the corresponding season:

// 1, 2, 3: "Winter"
// 4, 5, 6: "Spring"
// 7, 8, 9: "Summer"
// 10, 11, 12: "Fall"

function checkSeason(x) {
    if (x >= 1 && x <= 3) {
        return "Winter";
    } else if (x >= 4 && x <= 6) {
        return "Spring";
    } else if (x >= 7 && x <= 9) {
        return "Summer";
    } else if (x >= 10 && x <= 12) {
        return "Fall";
    } else {
        return "Invalid month";  // In case the input is outside the 1-12 range
    }
}


let count = 0;

while (count < 5) {
    // console.log("Count is: " + count);
    count++;
}


//Problem: Write a program that repeatedly asks the user to enter positive numbers. The program should keep a running total of the sum of all entered numbers. The loop should end when the user enters a negative number, and the program should then display the total sum of the positive numbers entered.

// Instructions:

// Use a while loop to ask the user to enter numbers.
// If the user enters a negative number, break the loop.
// Keep a running sum of all the positive numbers entered.
// After the loop ends, display the total sum of the positive numbers.




