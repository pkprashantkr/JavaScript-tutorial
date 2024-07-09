// FUNCTIONS in JS ------------------------

// Function is a block of code which is executed, whenever the function is called.

// Generally, if we want to print each letter of our name we will write below code everytime it is needed.
/*
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
*/
// But we can do this task by implementing functions and just call the function whenever you want.

const myName = function(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
    console.log("");
}
myName()
myName()
myName()
myName()            // Only call the function as much time you want



// Functions to add 2 numbers --------

function addTwoNum(num1, num2){             // Here, (num1, num2) are called parameters as it is in the function declaration
    let c = num1 + num2
    console.log(c);
} 
// addTwoNum()          // This will give NaN as no argument is passed in the function.
addTwoNum(5, 2)         // 7        // Here, (5, 2) will be called arguments as it is in the function call. 
addTwoNum(5, "2")       // 52
addTwoNum("5", 2)       // 52
addTwoNum(5, "a")       // 5a
addTwoNum(5, null)      // 5




// DIFFERENCE BETWEEN PRINTING AND RETURNING A VARIABLE.

// Geting sum using console.log()
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
    
} 
const result = addTwoNumbers(6,2)           // Here, Answer will get reflected as 8
console.log("Result: ", result);            // In this example, the sum is getting printed but it is not getting assigned in result variable therefore, it will give the value undefined.


// Getting sum using return
function sumNum(num1, num2){
    const sum = num1 + num2           
    return sum                              /// It is returning the value in sum, and after return statement, no statement gets executed.
} 
const sum = sumNum(7,4)
console.log("Sum: ", sum);                  // Here, the value of addition is getting assigned in sum variable.













