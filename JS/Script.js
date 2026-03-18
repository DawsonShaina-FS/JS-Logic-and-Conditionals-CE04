/* Name: Shaina Dawson
Date: 03/16/2026
Assignment: CE04: Conditionals */

alert("Hello, welcome to the conditionals assignment!")

alert("Please open the console first, then refresh the page so that you can see the responses, as you move through the various prompts.")

// GRADE LETTER CALCULATOR

alert("First up is the Grade Letter Calculator. Give me the whole number grade and I will give you the letter grade.")


let numGrade = parseInt(prompt("What number grade did you get in class?"));

// Evaluates if a number less than 0 or greater than 100 is entered to prevent syntax error
if (numGrade < 0 || numGrade > 100) {
    console.log("You have entered an incorrect number, please refresh and try again");
}
else if (numGrade >= 90) {
    console.log("You have a " + numGrade + "%, which means you have earned an A in the class!");
}
else if (numGrade >= 80) {
    console.log("You have a " + numGrade + "%, which means you have earned a B in the class!");
}
else if (numGrade >= 70) {
    console.log("You have a " + numGrade + "%, which means you have earned a C in the class!");
}
else if (numGrade >= 60) {
    console.log("You have a " + numGrade + "%, which means you have earned an D in the class!");
}
else {
    console.log("You have a " + numGrade + "%, which means you have an F in the class!");
}

// PUMPKIN WEIGHT / COST CALCULATOR 

alert("Next up, it's Pumpkin Picking Time! Tell me how much your pumpkin weighs and I will tell you what it costs")

let pumpkinWeight = parseFloat(prompt("Please enter the weight of the pumpkin you picked!"));

let pumpkinCost;

// Evaluates if pumpkinWeight is less than 0 to prevent syntax error
if (pumpkinWeight < 0) {
    console.log("You have entered an incorrect weight for your pumpkin, please refresh and try again!")
}
else if (pumpkinWeight < 5.5) {
    pumpkinCost = pumpkinWeight * 1.00;

    console.log("Your pumpkin of " + pumpkinWeight + " lbs costs $" + pumpkinCost);
}
else if (pumpkinWeight >= 5.5 && pumpkinWeight < 10.75) {
    pumpkinCost = 0.90 * pumpkinWeight;

    console.log("Your pumpkin of " + pumpkinWeight + " lbs costs $" + pumpkinCost);
}
else if (pumpkinWeight >= 10.75 && pumpkinWeight < 25) {
    pumpkinCost = 0.80 * pumpkinWeight

    console.log("Your pumpkin of " + pumpkinWeight + " lbs costs $" + pumpkinCost);
}
else if (pumpkinWeight >= 25 && pumpkinWeight < 50) {
    pumpkinCost = 0.70 * pumpkinWeight
    console.log("Your pumpkin of " + pumpkinWeight + " lbs costs $" + pumpkinCost);
}
else if (pumpkinWeight >= 50 && pumpkinWeight <= 100) {
    pumpkinCost = 0.60 * pumpkinWeight

    console.log("Your pumpkin of " + pumpkinWeight + " lbs costs $" + pumpkinCost);
}
else if (pumpkinWeight > 100) {
    pumpkinCost = 0.50 * pumpkinWeight
    console.log("Your pumpkin of " + pumpkinWeight + " lbs costs $" + pumpkinCost);
}

//LOYALTY CARD PROBLEM

alert("The last problem is Loyalty Card. I will determine if you get a discount on your purchases!")

let firstItem = parseFloat(prompt("What is the cost of the first item?"));

let secondItem = parseFloat(prompt("What is the cost of the second item"));

let prefferedCustomer = prompt("Are you a preffered customer? Please enter yes, or no.");

let total;

if (prefferedCustomer == "yes") {
    // Sale price is orginialPrice * 0.85
    total = (firstItem + secondItem) * 0.85
    console.log("Your total purchase is $" + total + " which includes your 15% discount.");
}
else if (prefferedCustomer == "no") {
    total = firstItem + secondItem
    console.log("Your total purchase is $" + total);
}
else { // User input is invalid
    console.log("Invalid input, unable to calculate total. Please refresh and try again!");
}
