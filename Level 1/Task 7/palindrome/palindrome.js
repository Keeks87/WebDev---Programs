/*
● Write a program that asks the user to enter a word.
● Using awhile loop, the program must determine whether or not the word is a
palindrome, i.e. whether it reads the same forwards and backwards. An example
of a palindrome is the word “racecar”.
● Output the given word and whether or not it is a palindrome, e.g. “racecar is
a palindrome”
*/

// Opening message for user.
alert('This program check for Palindromes. ')

// Asks the user to enter a word
let userWord = prompt('Please enter a word to check: ')

// Split the string
let userWordArray = userWord.split()

let userWordReverse = userWordArray.reverse()
console.log(userWord)
console.log(userWordReverse)
