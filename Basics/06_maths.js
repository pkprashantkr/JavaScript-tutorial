// -----------------------Number-----------------------

const score = 100
console.log(score);

const balance = new Number(98.6547)         // Will give additional functions or properties
console.log(balance);

// toString
console.log(balance.toString());        // Convert the number into String

// toString
console.log(balance.toString().length);     // Now, it is a string and we can use string properties on it.

// toFixed
console.log(balance.toFixed(3));        //  Rounds the string to a specified number of digits after decimal.

// toPrecision
console.log(balance.toPrecision(3));        // Rounds off the string.

// toLocaleString
const hundreds = 10000000
console.log(hundreds.toLocaleString());     // Converts to International Number System

console.log(hundreds.toLocaleString('en-IN'));      // Converts to Indian Number System



// -----------------------------Maths-----------------------------


console.log(Math);

// abs
console.log(Math.abs(-7));      // Returns absolute value of a number which means non-negation value without sign.

// round
console.log(Math.round(4.7566));    // Rounds to the nearest integer without decimals

//  ceil
console.log(Math.ceil(4.3));        // Always gives upper value

// floor
console.log(Math.floor(4.7));       // Always gives lower value

// min
console.log(Math.min(4,6,2,7));     // Gives smallest number

// max
console.log(Math.max(4,6,2,7));     // Gives largest number

// random
console.log(Math.random());         // Gives random values like 0.1, 0.4, 0.7, 0.6, 0.8, etc.

console.log(Math.random() * 10 + 1);        // Gives value above 0 like 1.6, 3.6, 6.3, etc becoz this + 1 adds to 0.

// random with floor
console.log(Math.floor(Math.random() * 10 + 1));        // Gives a single random floor value 

// Giving range for the random number generating
const min = 40
const max = 50

console.log(Math.floor(Math.random() * (max - min + 1)) + min);     // Formula for giving range










