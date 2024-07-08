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
console.log(regularUser.fullname.lastname);                 // Accessing nested Objects


console.log("-------------------------------\n");

// Combining 2 objects together

const obj1 = {                      // Object 1
    1: "a",
    2: "b"
}
 
const obj2 = {                      // Object 2
    3: "c",
    4: "d"
}

const obj3 = {                      // Object 2
    5: "e",
    6: "f"
}

// Combining objects using Spread operator.
console.log("Combining Objects using Spread Operator: ");
const objSpread = {...obj1, ...obj2}            // Most used and easy way of combining objects. 
console.log(objSpread);


console.log("-------------------------\n");


const objAdd = { obj1, obj2}        // This will insert object inside object which is not good and not used in modern days.
console.log(objAdd);

console.log(obj1);                  // Value of obj1 before assigning


// Combining using assign()
const obj4 = Object.assign(obj1, obj2)          // assign(target, source) copies all enumerable own properties from one or more source  to a target object, which means the value of obj2 will get added in obj1 and will change the value of obj1 to new added value.

console.log(obj4);
console.log(obj1);                  // Value of obj1 after assigning


// Combining using assign() with {}
const obj5 = Object.assign({}, obj1, obj2, obj3)        //Another syntax to combine objects, here, {} assures that the objects are combined and assigned to the new or empty object.

console.log(obj5);
console.log(obj1);                  // Here, after using {}, the obj1 is not altered and all the values are added assigned in obj5.





// ARRAY OF OBJECTS

// Declaring objects inside an array
const Users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    }
]

console.log(Users[0].email);            // Accesing object member from array
console.log(Users[1].email);            // Accesing object member from array
console.log(Users[2].email);            // Accesing object member from array



// Accessing values and keys from the object

const apple = {
    colour: "Red",
    shape: "Circle",
    taste: "Sweet",
    isTasty: true
}

console.log(Object.keys(apple));            // Returns keys of object in an array
console.log(Object.values(apple));          // Returns values of object in an array
console.log(Object.entries(apple));         // Returns each key and value pair in different arrays

// hasOwnProperty(key)
console.log(apple.hasOwnProperty("taste"));     // True     // Checks if the object contains the specific key or property
console.log(apple.hasOwnProperty("tasty"));     // False






// ================= DE-STRUCTURING OF OBJECTS ===========================================

const course = {
    coursename: "JS in hindi",
    price: 999,
    courseInstructor: "Prashant"
}

    // We Generally use this syntax to get data from object
console.log(course.courseInstructor);
console.log(course.courseInstructor);
console.log(course.courseInstructor);
console.log(course.courseInstructor);           // We have to write the whole thing everytime we access the property.

console.log("-----------------------------------\n");

// In the above syntax to print courseInstructor, the problem is that if we want to print courseInstructor multiple times, then we have to write course.courseInstructor every time.
// To minimize this typing or cleaning the code, we use the concept of de-structuring. 

// For ex:
const {courseInstructor} = course           // We put the value in {} that we want to extract and put the name of object after (=) from which we want to extract.

console.log(courseInstructor);              // Now, there is no need to write course.courseInstructor every time.

const {courseInstructor: instructor} = course       // We can give a short name to the property which will make it easy to access.

console.log(instructor);
console.log(instructor);
console.log(instructor);
console.log(instructor);                    // This made accessing courseInstructor easy.

// We will use this concept of Destructing of objects and arrays in React



/*
    JSON:
        JSON is a format for storing and transporting data.
        JSON is often used when data is sent from a server to a web page.

    Syntax of JSON:
        {
            "name": "Prashant",
            "course": "JS in Hindi"
            "price": "free"
        }

            OR

        [
            "name": "Prashant",
            "course": "JS in Hindi"
            "price": "free"
        ]


        We will use JSON API further.........................

*/



