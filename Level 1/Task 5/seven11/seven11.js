/*
Create a program to determine if a number input by the user is divisible by
7 and 11, either 7 or 11, or neither.
● Output the answer, depending on the result, with one of the following
statements:
    ○ "[input] is divisible by both 7 and 11."
    ○ "[input] is divisible by 11."
    ○ "[input] is divisible by 7."
    ○ "[input] is divisible by neither 7 nor 11."
*/

// Get the number from the user
alert('Lets determine if a number is divisible by 7 and 11, either 7 or 11, or neither.')
let numberFromUser = prompt('Please enter a number: ')

// Check remainder and output case for divisible by 7 and 11
if ((numberFromUser % 7 == 0) && (numberFromUser % 11 == 0)) {
    console.log(`${numberFromUser} is divisible by both 7 and 11 `)
}

// Check remainder and output case for divisible by 7
else if (numberFromUser % 7 == 0) {
    console.log(`${numberFromUser} is divisible by 7 `)
}

// Check remainder and output case for divisible by 11
else if (numberFromUser % 11 == 0) {
    console.log(`${numberFromUser} is divisible by 11 `)
}

// Check remainder and output case for divisible by 7 and 11
else if ((numberFromUser % 7 != 0) && (numberFromUser % 11 != 0)) {
    console.log(`${numberFromUser} is divisible by neither 7 nor 11 `)
}
