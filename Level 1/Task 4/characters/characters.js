/*
● Ask the user to input an uppercase letter, a lowercase letter or a number.
● If the character is an uppercase letter, output their character and "is an
uppercase letter." E.g."R is an uppercase letter."
● If the character is a lowercase letter, output their character and "is a
lowercase letter." E.g."g is a lowercase letter."
● If the character is a number, output their character and "is a number." E.g.
"6 is a number."
● If the character is none of these, output their character and "is not a
letter or number". E.g."? is not a letter or number."
● Hint1: you may want to research the functions to UpperCase(),
toLowerCase() and Number.isInteger()
● Hint2: A Special character to uppercase is equal to a special character to
lowercase.
*/

// Get the initial input from the user
let usersInput = prompt('input a letter or a number: ')

// Convert the user's input and check for uppercase, lowercase and integer
let userUppercase = usersInput.toUpperCase()
let userLowercase = usersInput.toLowerCase()
let userInteger = Number(usersInput)

// Check for number
if (Number.isInteger(userInteger)){
    console.log(`${usersInput} is a number.`);
}

// Check for special characters
else if (userUppercase === userLowercase){
    console.log(`${usersInput} is not a letter or number`);
}

// Check for uppercase
else if (usersInput === userUppercase){
    console.log(`${usersInput} is an uppercase letter`);
}

// Check for lowercase
else if (usersInput === userLowercase){
    console.log(`${usersInput} is an lowercase letter`);
}

// Check for lowercase
else {
    console.log('Invalid input');
}
