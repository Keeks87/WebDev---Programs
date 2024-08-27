/*
Note: For this task, you will need to create an HTML file to get input from a
user. If you need a refresher on how to do this, go back to the example.js
and index.html files in your Task 2 folder for a refresher.
● Create a JavaScript file called fortuneTeller.js.
● You are going to create a fortune teller based on information that you
receive from the user. You need to ask for the following information:

1.The user’s mother’s first name
2.The name of the street they grew up on
3.Their favourite colour as a child
4.Their current age
5.A number between 1 and 10

● With this information, you can work out the following:

a.(5) is the number of years in which they will meet their best friend.
b.Their best friend’s name will be (1) + (2).
c.(4) divided by (5) (rounded off) is the number of years in which they
will get married. (Hint: look up Math.round())
d.The remainder of (4) divided by (5) is how many children they will
have.
e.(4) minus (5) is in how many years they will dye their hair (3).
● Output the result of the above in a multiline string. For example, the output
may be:

In 7 years you are going to meet your best friend named Mary
Washington.
You will get married in 4 years and have 6 children.
In 20 years you are going to dye your hair blue.
*/

// Get the user's details
let usersMother = prompt('What is your Mothers first name? ')
let usersStreet = prompt('What is the name of the street you grew up on? ')
let usersColour = prompt('What was your favourite colour as a child? ')
let usersAge = prompt('What is your current Age? ')
let randomNumber = prompt('Choose a number between 1 and 10 ')

// Do some calculations
let yearsMarry = Math.round(usersAge / randomNumber)
let numberChildren = usersAge % randomNumber
let dyeHair = usersAge - randomNumber

// Output the result of the above in a multiline string
console.log(`In ${randomNumber} years you are going to meet your best friend
named ${usersMother} ${usersStreet}.
You will get married in ${yearsMarry} years and have ${numberChildren} children.
In ${dyeHair} years you are going to dye your hair ${usersColour}.`)
