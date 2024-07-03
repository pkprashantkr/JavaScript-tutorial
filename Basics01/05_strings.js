// Ways to declare Strings
const name = "Prashant"
const age = 21

const gameName = new String("PrashLucy")        // It is declared as objects which gives some additional functions to use.

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 7)
console.log(anotherString);

const newStringOne = "     Prashant     "
console.log();


// This is a old version of concatenating strings
console.log("The Student " + name + " is " + age + " years old");        


// This syntax is more used in the modern days and its more readable. This is known as String Interpolation
console.log(`The Student ${name} is ${age} years old`);     


