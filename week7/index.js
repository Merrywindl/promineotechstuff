// with this weeks assignment I have added a timed delay of 3-5 seconds between each Q & A as well as logging out the 
// question and the answer. Code will display everything effectively in nodemon as I have an aversion to speaking while recording and do so minimally.
// I feel this also best demonstrates the code I feel there are areas that could have been done better and welcome feedback.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executeActions() {
    console.log("Question 1");
    console.log("Step 1: Starting...");

console.log("Step 1: Create an array called ages");

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages.join(`, `)); // adding .join(`, `) converts it to a string to read easier

await delay(3000);
    console.log("Step 2: Starting....");

console.log("Step 2: difference between the first element and the last element");
let firstAge = ages[ages.length - 8];
let lastAge = ages[ages.length - 1]; // Get the last element programmatically
let difference = lastAge - firstAge;

console.log(`Difference between last and first age = ${difference}`);

await delay(3000);
    console.log("Step 3: Starting....");

console.log("Step 3: Add new age to the array");
var newage = 20
console.log(`new age = ${newage}`);
ages.push(newage); // Adding a new age into the array

await delay(3000);

console.log("Recalculate the difference after adding a new age");
lastAge = ages[ages.length - 1]; // Update the last element
difference = lastAge - firstAge;

console.log(`New difference between last and first age after adding an age: ${difference}`);

await delay(4000);
console.log("Step 4: Starting....");
console.log("Step 4: Calculate the average age using a loop");

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
    console.log(sum);
}

let averageage = sum / ages.length;
console.log(`Average age: ${averageage.toFixed(2)}`);

await delay(4000);
console.log("Question 2 Step 1: Starting....");
console.log("Question 2 Step 1: Create an array called names");

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

await delay(4000);
    console.log("Step 2: Starting....");

console.log("Step 2: Calculate the average number of letters per name");
let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length; // Add the length of each name to totalLetters
}

let averageLetters = totalLetters / names.length; // Calculate average
console.log(`Average number of letters per name: ${averageLetters.toFixed(2)}`); //Output the average, rounding to 2 decimal places

await delay(4000);
    console.log("Step 3: Starting....");
console.log("Step 3: Concatenate all the names together, separated by spaces");
let concatenatedNames = '';

for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i]; // Add the name to the string
    if (i < names.length - 1) { // Add a space if it's not the last name1
        concatenatedNames += ' ';
    }
}

console.log(`Concatenated names: ${concatenatedNames}`); // Output the concatenated names

await delay(5000);
console.log("Question 3: How do you access the last element of any array?");

await delay(5000);
console.log("You can access the last element of an array by using array.length -1");

await delay(4000);
console.log("Question 4: How do you access the first element of any array?");

await delay(5000);
console.log("You can access the first element in an array by using array[0]");

await delay(5000);
console.log("Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.")

await delay(5000);
console.log("Question 5 starting...");

var nameLengths = [] //This creates an array to store the name lengths
for (let i = 0; i< names.length; i++){
    nameLengths.push(names[i].length); //adds  the name lengths to the array
}
console.log(nameLengths);

await delay(4000);
console.log("Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");

await delay(4000);


console.log("Question 6 starting");

let sum2 = 0
for (let i = 0; i< nameLengths.length; i++){
    sum2 += nameLengths[i];
    console.log(sum2);
}

await delay(4000);
console.log("Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')");
console.log("Question 7 starting..");

repeatWord = (word, n) => word.repeat(n); //the kind of function to be used was not specified so I opted for a simpler arrow function
console.log(repeatWord('Hello', 3)); // Logs: 'HelloHelloHello' hello is what is passed in and the number indicates how many times it is accomplished

await delay(4000);
console.log("Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");
console.log("Question 8 starting...")
fullname = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullname(`John`, `Smith`));

await delay(4000);
console.log("Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");
console.log("Question 9 starting..");

 isSumGreaterThan100 = (array) => {
     sum3 = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum3 > 100;
};

console.log(ages.join (`, ` ) +" " + isSumGreaterThan100(ages));

await delay(4000);
console.log("Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.");
console.log("Question 10 starting..");

let averageAge = sum / ages.length
console.log(`${averageAge.toFixed(2)}`);

await delay(4000);
console.log("Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");
console.log("Question 11 Starting..");

let scores = [12, 15, 19, 34, 45, 66, 77, 88, 94]
let scoresSum = 0;
for (let i = 0; i < scores.length; i++) {
    scoresSum += scores[i];
    
}
let averageScore = scoresSum / scores.length

function greaterThan(a,b) {
    return a > b;
}
console.log(greaterThan(averageScore, averageAge));

await delay(4000);
console.log("Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50");
console.log("Question 12 Starting..");

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 11)); //I opted to demonstrate this works by using 3 different logouts
await delay(2000);
console.log(willBuyDrink(false, 15));
await delay(2000);
console.log(willBuyDrink(true, 10));

await delay(4000);
console.log("Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");
console.log("I did already make a function to calculate how much of my earnings from my 1099 job I had to report to unemployment each week which i will not log out but is commented out in the code");

/*Here is the function I created for personal use
function calculateReportableIncome(grossMiles, grossIncome, daysWorked) {
    const standardCommute = 32; // Miles per day for commuting
    const deductionRate = 0.67; // IRS standard mileage deduction rate

    // Calculate Deductible Miles
    var deductibleMiles = grossMiles - (daysWorked * standardCommute);
    
    // Ensure deductibleMiles is not negative
    if (deductibleMiles < 0) {
        deductibleMiles = 0; // You can't deduct negative miles
    }
    
    var incomeDeduction = deductibleMiles * deductionRate;
    var reportableIncome = grossIncome - incomeDeduction;

    return reportableIncome;
}

var grossMiles = 906.72; // miles driven before commute deduction
var grossIncome = 421.84; // gross income
var daysWorked = 4; // number of days worked

var result = calculateReportableIncome(grossMiles, grossIncome, daysWorked);
console.log(result);
*/
await delay(4000);
console.log("This conludes the week 7 coding assignment");

}
    executeActions();