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












