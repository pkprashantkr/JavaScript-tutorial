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



// Check for the entered value by using if()

function loginUserMessage(username) {
    if(!username){                                      // Checking that valid username is entered other than undefined, null, etc.
        console.log("Please enter a valid username");
        return
    }
    return `${username} Just Logged in`
}

console.log(loginUserMessage("Prashant"));
console.log(loginUserMessage());            // Passing no value, so it will give undefined.



// For this above function, we can give a default value to the username by writing

function loginUserMessage2(username = "John") {         // giving default value to username as John
    if(!username){                                      
        console.log("Please enter a valid username");
        return
    }
    return `${username} Just Logged in`
}

console.log(loginUserMessage2());               // If no argument is passed then the default value will return
console.log(loginUserMessage("Prashant"));




// While passing the parameters, num1 and num2 are declared as parameters but when we call the function..
function calculateCartPrice1(num1){
    return num1
}
console.log(calculateCartPrice1(500, 644, 334, 584));       // Here, we are passing 4 arguments while only 1 was required. So, this will only give the value of 500 and 644.


// To tackle this above situation, We can use Rest operator (...)
// (...) this is also known as spread operator but its name is based on the usecase.
// Now, in this below example we take num1 parameter with (...) 
// which will make it flexible and put all the passed arguments in an array 

function calculateCartPrice2(...num1){
    return num1
}
console.log(calculateCartPrice2(500, 644, 334, 788, 643));      // Now, any number of arguments can be passed and all the values will be stored in an array.


// Here,

function calculateCartPrice3(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice3(500, 644, 334, 788, 643));      // Now, Only 334, 788 and 643 will get assigned in num 1, becoz 500 goes to val1 and 644 goes to val2.



// Passing object in function

const mainUser = {
    username: "mainuser@gmail.com",
    price: 322
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is Rs. ${anyobject.price}`);
}
handleObject(mainUser)              // Accessing object members by using function

handleObject({                      // directly passing an object in the function
    username: "direct@gmail.com",
    price: 568
})



// Passing arrays in function

const newArr = [200, 455, 674, 363]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(newArr));                     // Return 2nd value from newArr array
console.log(returnSecondValue([344, 535, 256, 654]));       // Return 2nd value from this array
