// Immediately Invoked Function Expressions (IIFE)
// These are the functions which get immediately executed.
// Sometimes problem from pollution of global scope occures.
// To get rid of those problem IIFE is used.

// Insert the whole function inside () and after that write () for execution.

(function chai(){
    console.log(`DB Connected.....!`);
})();                                       // IIFE don't get ended by itself therefore a semicolon is needed


//