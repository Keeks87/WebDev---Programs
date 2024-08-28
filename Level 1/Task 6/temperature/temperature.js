/*
Write the code that will do the following:

1.The user should be allowed to choose which calculation they want to do. The
first output that the user sees when the program runs should say:

In which metric is the temperature you are converting?
    C - Celsius
    F - Fahrenheit
    K - Kelvin

2.The user should then be asked to input the number they want to convert.

3.Next, the user should choose what they want to convert their current
temperature to. For example:

To which metric would you like to convert the temperature?
    C - Celsius
    F - Fahrenheit
    K - Kelvin

4.The program should print out the answer in the following format:
-273 °C is 0 K.

5.The program should be able to convert from any of the three metrics to any of
the three metrics.

Conversion formulae:

● Celsius from:
    ○ Fahrenheit: C = (F -32) x 5/9
    ○ Kelvin: C = K - 273.15

● Fahrenheit from:
    ○ Celsius: F = C x 9/5 + 32
    ○ Kelvin: F = k x 9/5 - 459.67

● Kelvin from:
    ○ Celsius: K = C + 273.15
    ○ Fahrenheit: K = (F + 459.67) x 5/9
*/

// Create first output for user to convert from
let conversionType = prompt(`In which metric is the temperature you are converting?
C - Celsius
F - Fahrenheit
K - Kelvin`
).toUpperCase()

// Ask user to input the number they want to convert
let userNumber = prompt('What number would you like to convert. ')

// Create second output for user to convert to
let conversionTo = prompt(`To which metric would you like to convert the temperature?
    C - Celsius
    F - Fahrenheit
    K - Kelvin`
).toUpperCase()

// Check conversion from Celsius to Fahrenheit
if (conversionType === 'C' && conversionTo === 'F') {
    let calculatedFahrenheit = (userNumber * 9/5 + 32)
    alert(calculatedFahrenheit)
}

// Check conversion from Celsius to Kelvin
else if (conversionType === 'C' && conversionTo === 'K') {
    let calculatedKelvin = (userNumber + 273.15)
    alert(calculatedKelvin)
}

// Check conversion from Fahrenheit to Celsius
else if (conversionType === 'F' && conversionTo === 'C') {
    let calculatedCelsius = ((userNumber -32) * 5/9)
    alert(calculatedCelsius)
}

// Check conversion from Fahrenheit to Kelvin
else if (conversionType === 'F' && conversionTo === 'K') {
    let calculatedKelvin = ((userNumber + 459.67) * 5/9)
    alert(calculatedKelvin)
}

// Check conversion from Kelvin to Celsius
else if (conversionType === 'K' && conversionTo === 'C') {
    let calculatedCelsius = (userNumber - 273.15)
    alert(calculatedCelsius)
}

// Check conversion from Kelvin to Fahrenheit
else if (conversionType === 'K' && conversionTo === 'F') {
    let calculatedFahrenheit = (userNumber * 9/5 - 459.67)
    alert(calculatedFahrenheit)
}

else {
    alert('You entered incorrect details')
}
