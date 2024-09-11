/*
● Create a do-while loop in which you ask the user a multiple choice question.
If they choose the incorrect answer, they are asked if they want to try again:
if they answer that they do, they are asked the question again.
The program ends when the user either guesses correctly, or they do not wish to
guess again.

● Here is an example of the possible output:

What colour is the sky?
a. Purple
b. Pink
c. Blue
d. Yellow

Enter a, b, c, or d: [user enters b]
That’s incorrect! Would you like to try again? y/n: [user enters y]
[Question is asked again. User enters c]
That’s correct! [Program exits]
*/

// Opening alert for user
alert('Choose the correct answer. ')

let userChoice = prompt(`What colour is the sky?',
'a. Purple',
'b. Pink',
'c. Blue',
'd. Yellow`)

if (userChoice === 'c') {
    alert('Your choice is Blue. ')
    alert('That is correct!')
}
else {
    do {
        alert(`Your choice is ${userChoice}: `)
        rerunChoice = prompt('That is incorrect! Would you like to try again? y/n:')
    } while (userChoice !== 'c' );
}