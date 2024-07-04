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

console.log(Math.abs(-7));      // Returns absolute value of a number which means non-negation value without sign.


console.log(Math.round(4.7566));    // Rounds to the nearest integer without decimals


console.log(Math.ceil(4.3));        // Always gives upper value


console.log(Math.floor(4.7));       // Always gives lower value


console.log(Math.min(4,6,2,7));     // Gives smallest number


console.log(Math.max(4,6,2,7));     // Gives largest number


console.log(Math.random());
console.log(Math.random() * 10 + 1);













