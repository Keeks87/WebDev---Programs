/*
There are multiple quadrilaterals, all with their own properties. Create a
program that receives the length of each side and the angles of each corner
(these can be hard-coded) and determines whether the shape is a square, a
rectangle, a rhombus or a parallelogram.

● The properties of each are as follows:
    ○ Square:All sides equal, all corners 90 degrees.
    ○ Rectangle:Opposite sides equal, all corners 90 degrees.
    ○ Rhombus:All sides equal, opposite angles equal. Two opposite corners are
    less than 90 degrees, the other two corners are more than 90 degrees.
    ○ Parallelogram: Opposite sides equal, opposite angles equal.Two opposite
    corners are less than 90 degrees,the other two corners are more than 90
    degrees.
*/

// Get the sides and angles for the shape from the user
alert('This program determines what kind of quadrilateral we are working with')
let userSide1 = prompt('Input the first side of the shape: ')
let userSide2 = prompt('Input the second side of the shape: ')
let userCorner1 = prompt('Input the first corner of the shape: ')
let userCorner2 = prompt('Input the second corner of the shape: ')

// Do calculations for Square
if (userSide1 == userSide2 && userCorner1 == userCorner2) {
    alert("You created a Square. ")
}

// Do calculations for Rectangle
else if (userSide1 != userSide2 && userCorner1 == userCorner2) {
    alert("You created a Rectangle. ")
}

// Do calculations for Rhombus
else if (userSide1 == userSide2 && userCorner1 != userCorner2) {
    alert("You created a Rhombus. ")
}

// Do calculations for Parallelogram
else if (userSide1 != userSide2 && userCorner1 != userCorner2) {
    alert("You created a Parallelogram. ")
}

// Do calculations for Parallelogram
else {
    alert("This is not a quadrilateral. ")
}
