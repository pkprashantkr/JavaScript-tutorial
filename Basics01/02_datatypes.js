"use strict";       // Treats all Js code as newer version.


/*
    number: 1234, upto 2^53.
    bigInt: above 2^53
    string : "Name"
    boolean : true/false
    null : standalone value or empty
    undefined : not assigned
    symbol : for uniqueness
    object
*/

let name = "Prashant"
console.log(typeof name);

let age = 13;
console.log(typeof age);

let isLoggedIn = false
console.log(typeof isLoggedIn);

let box = null
console.log(typeof box);        // Its datatype is object

let state
console.log(typeof state);      // Its datatype is undefined

  


// TYPE CONVERSIONS

console.log("----------------------------");

let score = "33"
console.log("Score is in " + typeof score);
console.log("Value of Score is " + score);

let scoreInNumber = Number(score)
console.log("Score is in " + typeof scoreInNumber);
console.log("Value of Score is " + score);



let score2 = "33abc"
console.log("Score is in " + typeof score2);

let score2InNumber = Number(score2)
console.log("Score is in " + typeof score2InNumber);
console.log("Value of Score2 is " + score2InNumber);





// ECMA stands for European Computer Manufacturers Associatio which is a Script for JS Standards


// alert(4+3)       //This will cause error becoz we are using nodejs and not browser.

