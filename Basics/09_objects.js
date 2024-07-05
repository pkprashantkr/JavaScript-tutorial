// There are two ways to create objects

// 1) By constructors: It makes Singleton, which means there is only single instance of the object.
// Object.create()



// 2) By Object Literals: It doesn't makes singleton.

// Declaring Object
const JSUser = {
    name: "Prashant",
    age: 22,
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}


// Accessing object elements

// 1)
console.log(JSUser.location);           
// It is a correct way to access the key and element but it have some exceptions such as, 
// 1) if we put key name into (""), we will not be able to access the key with this way like,
/*
    const JSUser = {
        name: "Prashant",
        "full name": "Prashant Kumar",          // Here, key is in double quotes.
        age: 22,
        location: "Delhi",
        isLoggedIn: false,
        lastLoginDays: ["Monday", "Thursday"]
    }

    console.log(JSUser.full name)           // This is not correct and will not access the full name

    console.log(JSUser["full name"])        // This is the right way
*/

// 2) Let's suppose we want to include Symbol type of data into the object, Then it will not give Symbol datatype. For ex:

const mySymbol = Symbol("key1")



// 2)
console.log(JSUser["location"]);        // This is more preffered becoz 







