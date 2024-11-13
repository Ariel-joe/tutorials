const arr = [1, 2, 3, 4, 5, 6, 7]
arr.toString()
console.log(arr.toString())
// converts an array to a string

// ARRAY METHODS.
console.log(arr.length)   
// this outputs the number of elements in the array

arr.at()
console.log(arr.at(4))

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




const str = "Monocotiledone dycontyledone"
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
console.log(str.replaceAll("o", "*"))
// takes 2 parameters, the one to look for and the one to replace with








const fruits = ['banana', 'cherry', 'apple']

fruits.forEach(fruit => {
    console.log(fruit) ;    
    }
);


