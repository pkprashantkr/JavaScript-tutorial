const user = {
    username: "Prashant",
    price: 889,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);        // This refers to the current instance
        
        console.log(this);          // It will give the unchanged values of the object
    }
} 

user.welcomeMessage()

user.username = "Sam"
user.welcomeMessage()

console.log(this);                  // It will give empty object as we are using node to run the engine, earlier the browser was used and browser will give window as the global object...

// But if we will access this inside a function then,,,,,,,
function check(){
    console.log(this);
}
check()

// If we try to access any variable inside a function then,,,,,,,it will give undefined
function checkTwo(){
    let username = "Ravi"
    console.log(this.username);
}
checkTwo()



// ======================== Arrow function ==============================

// syntax of arrow function is
// () => {}

const chai = () => {
    console.log("This is arrow function")

    let username = "Prashant"           
    console.log(this.username);         // It gives undefined.

    console.log(this);                  // This gives empty object
}
chai()

// --------------------

// Basic arrow function usage and explicit return
const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(5,3));


// Implict return using arrow function
const addTwo = (num1, num2) => num1 + num2      // There is no need to write return

console.log(add(10,30));


// Return object using implicit return
// const objReturn = () => {username: "prashant"}       // This will give error as object is not inside ()

const objReturn = () => ({username: "prashant"})

console.log(objReturn());



