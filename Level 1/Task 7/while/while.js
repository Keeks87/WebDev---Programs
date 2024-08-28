/*
● Write a program that always asks the user to enter a number.
● When the user enters -1, the program should stop requesting the user to enter
a number.
● The program must then calculate the average of the numbers entered, excluding
the -1.
● Make use of the while loop repetition structure to implement the program.
*/

let userNumber = prompt('Please enter a number or -1 to exit: ')
let counterVariable = 0;

while (userNumber != -1) {
    let userNumber = prompt('Please enter a number or -1 to exit: ')
    totalNumbers += userNumber
    totalCount += counterVariable
    console.log(totalNumbers)
    console.log(totalCount)
}

