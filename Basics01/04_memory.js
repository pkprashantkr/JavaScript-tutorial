/* Two types of memory are:
    1) Stack (primitive datatypes): You get copy of original variable. 
    2) Heap (non-primitive datatypes): You get reference of original variable.
*/

//------------ STACK -----------------
console.log("-----------------------Stack");

let myName = "Prashant"

let anotherName = myName        //Getting copy of myName
anotherName = "Ravi"     // Changing value of anotherName

console.log(myName);        // Will give Prashant
console.log(anotherName);      // Will give Ravi

// Value of myName is not changing becoz we are sharing copy of myName to anotherName in Stack and not the original reference.


//--------------- HEAP ---------------------
console.log("-----------------------Heap");

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne       // Passing reference of userOne

userTwo.email = "customer@gmail.com"    // Changing value of email in userTwo

console.log(userOne.email);     // Will give customer@gmail.com
console.log(userTwo.email);     // Will give customer@gmail.com

// Both are giving the same values as the reference of original variable is passed in heap and not the copy.