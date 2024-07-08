// There are two ways to create objects

// 1) By constructors: It makes Singleton, which means there is only single instance of the object.
// Object.create()



// 2) By Object Literals: It doesn't makes singleton.

// -----------Declaring Object----------
const JSUser = {
    name: "Prashant",
    age: 22,
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}


// -------------Override values of the key in object----------
JSUser.location = "Punjab"
console.log(JSUser.location); 

JSUser.age = "42"
console.log(JSUser.age); 

JSUser.isLoggedIn = true
console.log(JSUser.isLoggedIn); 




// --------------Accessing object elements---------------

// 1)
console.log(JSUser.age);           
// It is a correct way to access the key and element but it have some exceptions such as, 
// a) if we put key name into (""), we will not be able to access the key with this way like,
/*
    const JSUser = {
        name: "Prashant",
        "full name": "Prashant Kumar",          // Here, key is in double quotes.
        age: 22,
        location: "Delhi",
        isLoggedIn: false,
        lastLoginDays: ["Monday", "Thursday"]
    }

    console.log(JSUser.full name);           // This is not correct and will not access the full name

    console.log(JSUser["full name"])        // This is the right way
*/

// b) Let's suppose we want to include Symbol type of data into the object, this syntax will not be correct even if it will give right value. For ex:

const mySymbol = Symbol("key1")

const JSUser2 = {
    name: "Prashant",
    mySymbol: "myKey1",
    age: 22,
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

console.log(JSUser2.mySymbol);      // This is giving myKey1 which is right but it is not of Symbol type

console.log(typeof JSUser2.mySymbol);       // It is a String.




// 2)
console.log(JSUser["location"]);        // This is more preffered becoz it solves the problems in the above way


// a)
const JSUser3 = {
    name: "Prashant",
    "full name": "Prashant Kumar",          // Here, key is in double quotes.
    age: 22,
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

console.log(JSUser3["full name"])           // full name is accessible


// b)
const mySymbol2 = Symbol("key1")

const JSUser4 = {
    name: "Prashant",
    [mySymbol2]: "myKey1",
    age: 22,
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

console.log(JSUser4);      // This is giving myKey1 with right syntax and datatype Symbol


// Lock value of objects and make it unchangable
Object.freeze(JSUser4)
JSUser4.location = "Jaipur"             // This change is not reflecting
console.log(JSUser4.location);


console.log("\n------------------------------\n");

//Creating Functions

JSUser.greeting = function(){
    console.log("Hello User.....!");
}

console.log(JSUser.greeting);           // It don't executes function but, gives only function reference.
console.log(JSUser.greeting());         // This will execute the function


// getting name from object using function
JSUser.greeting2 = function(){
    console.log(`Hello JSUser, ${this.name}`);      //This refers to the instances of the object
}

console.log(JSUser.greeting2()); 



// Declaring objects under objects using Object Literals

const GoodUser = {
    email: "user@gmail.com",
    fullname: {
        firstname: "ravi",
        secondname: "ranjan"
    }
}

console.log(GoodUser);



console.log("\n------------------------------------\n");

// Declaring Objects using Constructor or Singleton-------------------------------------

// const tinderUser = {}                // This is the way of declaring a non-Singleton Object

const tinderUser = new Object()         // This is the way of declaring a Singleton Object

tinderUser.id = "12345"
tinderUser.name = "Prashant"
tinderUser.isLoggedIn = false

console.log(tinderUser);

console.log("------------------------------\n");


// Declaring objects under objects using singleton
const regularUser = new Object()

regularUser.email = "some@gmail.com"
regularUser.fullname = new Object()

regularUser.fullname.firstname = "Anjali"
regularUser.fullname.lastname = "Kumari"

console.log(regularUser.fullname.firstname);                // Accessing nested Objects 
console.log(regularUser.fullname.lastname);               


















