/*
Create a JavaScript file called myVariables.js.
● Create the following variables with the correct datatypes(as indicated by
their names) as their values.You can choose the values themselves:
myFirstNumber,mySecondNumber,myFirstString,mySecondString and
myBoolean.
● Output the result of multiplying the two numerical variables.
● Concatenate the two strings and output the result.
● Using template literals,output a multiline string which might read as
follows:

The boolean is: true
The first number is: 6
The second number is: 5
6 x 5 = 30
The first string is: This is my first string.
The second string is: This is my second string!
These two together make: This is my first string. This is my
second string!
*/

// Define variables as per task
let myFirstNumber = 30
let mySecondNumber = 45
let myFirstString = "This string "
let mySecondString = "This other string "
let myBoolean = true

// Calculate the result of multiplying the two numerical variables and show in console
let resultMultiplying = myFirstNumber * mySecondNumber
console.log(`The result of multiplying the two numerical variables is ${resultMultiplying}`)

// Concatenate the two strings and output the result
console.log(`${myFirstString}` + `${mySecondString}`)

// Using template literals,output a multiline string
console.log(`The boolean is: ${myBoolean}
The first number is: ${myFirstNumber}
The second number is: ${mySecondNumber}
The result of multiplying the two numerical variables is ${resultMultiplying}
The first string is: ${myFirstString}
The second string is: ${mySecondString}
These two together make: ${myFirstString}` + `${mySecondString}`)
