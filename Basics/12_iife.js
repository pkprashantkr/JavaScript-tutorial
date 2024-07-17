// Immediately Invoked Function Expressions (IIFE)
// These are the functions which get immediately executed.
// Sometimes problem from pollution of global scope occurs.
// To get rid of those problem IIFE is used.

// Insert the whole function inside () and after that write () for execution.


// Named IIFE as there is a name of the function which is chai.
(function chai(){
    console.log(`DB 1 Connected.....!`);
}) ();                                       // IIFE functions don't get ended by itself therefore, a semicolon is needed at the end.


// IIFE using arrow function
( () => {
    console.log(`DB 2 Connected.......!`);
}) ();


// Taking parameters in IIFE Functions
( (username) => {
    console.log(`DB 3 for ${username} Connected........!`);
}) ("Prashant");






