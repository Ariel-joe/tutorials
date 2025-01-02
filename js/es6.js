let marks = 40;

let view = (marks >= 40) ? 'pass': 'fail';

console.log(`you ${view} the exams`);





let age = 25;
let result  = (age >= 18) ? 'you are eligible to vote' : 'you are not eligible to vote'

console.log(result)




let a = 0;
let number = (a === 0) ? 'zero' : a > 0 ? 'positive' : 'negative';

console.log(`the number is ${number}`);




const multiply = (x, y) => {
    return x * y;
}
console.log(multiply(4, 5))





// Create a function that takes two arguments: name (string) and score (number).
// Use an arrow function to determine the grade based on the score:
// If the score is 90 or above, the grade is "A".
// If the score is 80 to 89, the grade is "B".
// If the score is 70 to 79, the grade is "C".
// If the score is 60 to 69, the grade is "D".
// If the score is below 60, the grade is "F".
// Return a message using a template literal that says:
// "Hello, [name]! Your score is [score] and your grade is [grade]."


const gradeView = (name, score) => {

    let grade = (score >= 90)? 'A': score >= 80 ? 'B': score >= 70 ? 'C': score >= 60 ? 'D' : 'F';

    return `Hello, ${name}! Your score is ${score} and your grade is ${grade}`;
}

console.log(gradeView("Joe", 80))




let	bubbleSort = (arr) => {

	let n = arr.length;

	if(arr.lenght < 2) {
		return arr;
	}
		

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {

			if(arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;
};

// let arr = [101, 234, 126, 986, 99, 67, 89, 120, 111, 230, 300, 540, 330, 200]

// console.log(bubbleSort(arr))












// const bubbleSort = arr => {
// 	let n = arr.length

// 	if (n <= 1) {
// 		return arr;
// 	}

// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < n - i - 1;j++) {

// 			if(arr[j] > arr[j + 1]) {
// 					let temp = arr[j]
// 					arr[j] = arr[j + 1]
// 					arr[j + 1] = temp;
// 			}
// 		}
// 	}

// 	return arr;
// }
// let arr = [3, 2, 8]

// console.log(bubbleSort(arr))





function snakecase (input) {
	 return input.trim().toLowerCase().replaceAll(" ", "_");
}
console.log(snakecase('I AM ARIEL JOE'));





const snakeCase = input => input.trim().toLowerCase().replaceAll(" ", "_");

console.log(snakeCase('joe yellow'))


const arr = [1, 2, 3, 4, 5, 6, 7]

// ARRAY METHODS.
console.log(arr.length)   
// this outputs the number of elements in the array

arr.toString()
console.log(arr.toString())
// converts an array to a string

arr.at()
console.log(arr.at(6))

// get's the element at the given index as the argument


arr.join()
console.log(arr.join())
console.log(arr.join(""))
console.log(arr.join("_"))
// joins the elements in the array, to a string

arr.pop()
console.log(arr.pop())
console.log(arr)
//  removes the last element and returns the popped element


arr.push()
console.log(arr.push(6))
console.log(arr)
// adds an element at the end of an array

arr.shift()
console.log(arr.shift())
console.log(arr)
// remove the first element and shift each element to a lower index

arr.unshift()
console.log(arr.unshift(100))
console.log(arr)
// adds new element at the beginning and shift each element to a higher index

arr.concat()
const arr2 = [101, 200, 300]
console.log(arr.concat(arr2)) 
// creates a new array by concatinating 2 given arrays

arr.slice()
console.log(arr.slice(0, 4))
// slices and create a subportion of an array

arr.splice()
console.log(arr.splice(900))
console.log(arr)
// replaces the elements in array, with the given element


// arr.filter
// console.log(arr.filter(6))
// console.log(arr)
// // returns elements of the array that pass the parameter condition

// arr.map(element, () => {
// 	return element * 2
// })
// console.log(arr)
// returns a transformed array based on the function passed
// const arr8 = [1, 2, 3, 4, 5, 6, 7];

// function multiply2(element, arr8) {

// 	arr8.forEach((element),() => {
// 	return element * 2;
// 	});

// return arr8;
// }
// console.log(multiply2(arr8))


// loops over each element, and calls the function everytime it loops

arr.reverse()
// reverse the position of the elements in array



const str = "Monocotiledone"
// STRING METHODS
str.split()
console.log(str.split(""))
console.log(str.split(" "))
console.log(str.split(","))
console.log(str.split("_"))
// splits the character of string based on the parameter given

// reverse() method
console.log(str.split('').reverse())
// reverses the character of a split string

// str.join() method
console.log(str.split('').reverse().join())
console.log(str.split('').reverse().join(""))
console.log(str.split('').reverse().join("_"))

// joins the character of a string based on the parameter given

str.toLowerCase()
console.log(str.toLowerCase())
// changes all the characters of a string to lowercase

str.toUpperCase()
console.log(str.toUpperCase())
// changes all the characters of a string to uppercase

str.charAt(9)
console.log(str.charAt(0))
// returns  the character at the specified index

str.trim()
console.log(str.trim())
// removes all the spaces at the start and end of a string

str.length
console.log(str.length)
// returns the number of characters in the string

str.slice()
console.log(str.slice(0, 7))
// cuts and returns the part of the cut string

str.concat()
const str2 = "dicotyledone"
console.log(str.concat(str2))
// used to merge 2 or more strings

str.replaceAll()
console.log(str.replaceAll("o", "_"))
// takes 2 parameters, the one to look for and the one to replace with




let a1  = 'banana';
let b = 'orange';

[a1, b] = [b, a1]

console.log(a1)
console.log(b)
