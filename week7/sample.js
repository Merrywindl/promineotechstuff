/*
var x = 30
function res1 (x){
    return x * 2;
}
var x = 50
let result = res1(x)
console.log(result);
*/

// Question 1

console.log("Step 1: Create an array called ages");

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages.join(`, `)); // adding .join(`, `) converts it to a string to read easier

console.log("Step 2: difference between the first element and the last element");
let firstAge = ages[0]; // first element
let lastAge = ages[ages.length - 1]; // Get the last element programmatically
let difference = lastAge - firstAge;

console.log(`Difference between last and first age = ${difference}`);


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter a new age: ', (userInput) => {
    let newAge = parseInt(userInput, 10);

    if (!isNaN(newAge) && Number.isInteger(newAge)) {
        console.log("Step 3: Add new age to the array");
        ages.push(newAge);

        // Recalculate the difference after adding a new age
        lastAge = ages[ages.length - 1];
        difference = lastAge - firstAge;

        console.log(`New difference between last and first age after adding an age: ${difference}`);

        // Calculate the average age
        let sum = 0;
        for (let i = 0; i < ages.length; i++) {
            sum += ages[i];
        }

        let average = sum / ages.length;
        console.log(`Average age: ${average}`);
    } else {
        console.log("Invalid input. Please enter a valid integer.");
    }

    readline.close();
});

    // Step 4: Calculate the average age using a loop
    let sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    }

    let average = sum / ages.length;
    console.log(`Average age: ${average}`);
} else {
    console.log("Invalid input. Please enter a valid integer.");
}

// Question 2

// Step 1: Create an array called names
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Step 2: Calculate the average number of letters per name
let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length; // Add the length of each name to totalLetters
}

let averageLetters = totalLetters / names.length; // Calculate average
console.log(`Average number of letters per name: ${averageLetters.toFixed(2)}`); // Output the average, rounding to 2 decimal places

// Step 3: Concatenate all the names together, separated by spaces
let concatenatedNames = '';

for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i]; // Add the name to the string
    if (i < names.length - 1) { // Add a space if it's not the last name
        concatenatedNames += ' ';
    }
}

console.log(`Concatenated names: ${concatenatedNames}`);

// Step 1: Create an array called names
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // reset names for clarity

// Step 2: Create a new array to hold the lengths of each name
let nameLengths = [];

// Step 3: Use a loop to iterate over the names array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length); // Add the length of each name to the nameLengths array
}

// Output the resulting nameLengths array
console.log(nameLengths);