// Whether JS is a typesafe language means variables can be declared without using any of these below but it is not a good practice.

// Hoisting: In JS, Variable and functions are hoisted which means there declaration is moved on the top of code.
// Hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. 
// In turn, this allows us to use functions, variables, and classes before they are declared.
// Ex:
    console.log(a);         // This will not give error as other languages do, but in js this will give undefined.
    var a = 12;


// There are 3 types of variables in JS

// 1) var : It is not used nowadays because of the issue in block scope & functional scope. It can be modified same as let but also outside this file.

var pass = "abcdef"
pass = "httre"
console.log(pass);


// 2) let : It can be modified and more usable in modern JS.

let email = "abc@gmail.com"
email = "efg@gmail.com"
console.log(email);


// 3) const : It cant be changed when assigned.

const Id = 1234
//Id = 4353     // This re-assignment of Id is not allowed.
console.log(Id);


// ----------------------

// If no value is assigned to any variable then it will have undefined value.

let noVar;

console.table([email, pass, Id, noVar]);       // To print multiple variables in table format with one line of code.