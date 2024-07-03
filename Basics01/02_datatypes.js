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
console.log("String to number");

let score = "33"
console.log("Score is in " + typeof score);
console.log("Value of Score is " + score);

let scoreInNumber = Number(score)
console.log("Score is in " + typeof scoreInNumber);
console.log("Value of Score is " + score);


console.log("----------------------------");
console.log("String to NaN");

let score2 = "33abc"
console.log("Score 2 is in " + typeof score2);

let score2InNumber = Number(score2)
console.log("Value of Score 2 is " + score2InNumber);        //value will be NaN which is Not a Number


console.log("----------------------------");
console.log("null to number");

let score3 = null
console.log("Score 3 is in " + typeof score3);

let score3InNumber = Number(score3)
console.log("Value of Score 3 is " + score3InNumber);


console.log("----------------------------");
console.log("Boolean true to number");

let score4 = true
console.log("Score 4 is in " + typeof score4);

let score4InNumber = Number(score4)
console.log("Value of Score 4 is " + score4InNumber);


console.log("----------------------------");
console.log("Boolean false to number");

let score5 = false
console.log("Score 5 is in " + typeof score5);

let score5InNumber = Number(score5)
console.log("Value of Score 5 is " + score5InNumber);


console.log("----------------------------");
console.log("undefined to NaN");

let score6 = undefined
console.log("Score 6 is in " + typeof score6);

let score6InNumber = Number(score6)
console.log("Value of Score 6 is " + score6InNumber);


/*
    Soo, It shows that.:
        "33" => 33
        "33abc" => NaN
        true => 1
        1 => true
        false => 0
        0 => false
        null => 0
        undefined => NaN
*/





// ECMA stands for European Computer Manufacturers Associatio which is a Script for JS Standards


// alert(4+3)       //This will cause error becoz we are using nodejs and not browser.

