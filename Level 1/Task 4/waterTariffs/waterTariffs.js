/*
● These are the level 3 water tariffs for the city of CapeTown taken from here:
Table in PDF

● The table states that the first 6000 litres will cost R15.73 per kilolitre.
Next, water consumption above 6000 litres but less than or equal to 10
500 litres will be charged at R22.38 per kilolitre.Therefore, a household
that has used 8000 litres will pay R139.14 (15.73x6+22.38x2). The table
carries on in this manner.
● Create a calculator to determine your water bill.
● The calculator should ask the user to input the number of litres of water
they have used, and it should output the total a mount in Rands (R) that
they need to pay.
*/

// Ask the user for the number of litres of water they used
let userWaterUse = prompt('Please input the number of litres of water used: ')

// Condition for under 6kl water usage
if (userWaterUse <= 6000) {
    let usageStep1 = ((userWaterUse / 1000) * 15.73)
    console.log(`Your total amount due is R ${usageStep1}`)
}

// Condition for over 6kl and under 10.5kl water usage
else if (6000 < userWaterUse <= 10500) {
    let usageStep2 = ((userWaterUse / 1000) * 15.73) +
    (((userWaterUse - 6000) / 1000) * 22.38)
    console.log(`Your total amount due is R ${usageStep2}`)
}

// Condition for over 10.5kl and under 35kl water usage
else if (10500 < userWaterUse <= 35000) {
    let usageStep3 = ((userWaterUse / 1000) * 15.73) +
    (((userWaterUse - 6000) / 1000) * 22.38) +
    (((userWaterUse - 10500) / 1000) * 31.77)
    console.log(`Your total amount due is R ${usageStep3}`)
}

// Condition for over 35kl water usage
else {
    let usageStep4 = ((userWaterUse / 1000) * 15.73) +
    (((userWaterUse - 6000) / 1000) * 22.38) +
    (((userWaterUse - 10500) / 1000) * 31.77) +
    (((userWaterUse - 35000) / 1000) * 31.77)
    console.log(`Your total amount due is R ${usageStep4}`)
}
