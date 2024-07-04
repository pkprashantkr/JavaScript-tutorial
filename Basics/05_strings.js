// Ways to declare Strings
const name = "Prashant"
const age = 21

const gameName = new String("PrashLucy")        // It is declared as objects which gives some additional functions to use.

// length
console.log(gameName.length);

// toUpperCase()
console.log(gameName.toUpperCase());           // Converts to Upper case

// toLowerCase()
console.log(gameName.toLowerCase());           // Converts to Lower case

// charAt()
console.log(gameName.charAt(2));               // Gives character at index

// indexOf()
console.log(gameName.indexOf('s'));            // Gives index of the element

// substring()
const newString = gameName.substring(0, 4)     // Gives a part of the string
console.log(newString);

// slice()
const anotherString = gameName.slice(-8, 7)     // Gives a part of the string and also takes negative values
console.log(anotherString);

// trim()
const newStringOne = "     Prashant     "
console.log(newStringOne);
console.log(newStringOne.trim());       // Removes extra spaces

// replace()
const stID = "Prashant Kumar"
console.log(stID.replace('s', 'p'));    // Replaces first element with another.

// includes()
const str = "Merry Christmas"
console.log(str.includes("Christ"));    // true
console.log(str.includes("christ"));    // false as it is case sensitive
console.log(str.includes("Merry"));     // true
console.log(str.includes("merry"));     // false

// split(separator, limit)
const str2 = "Prashant-kumar-jha-is-the-best"
console.log(str2.split('-'));       // Gives array of strings separated by a separator (-)

// There are many more functions which can be used on strings



// This is a old way of concatenating strings
console.log("The Student " + name + " is " + age + " years old");        


// This syntax is more used in the modern days and its more readable. This is known as String Interpolation
console.log(`The Student ${name} is ${age} years old`);     