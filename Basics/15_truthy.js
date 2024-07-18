// Here, the value of userEmail is hitesh@gmail.com which is a true value for if statement.

const userEmail = "hitesh@gmail.com"

if(userEmail){
    console.log("Got the user Email");
} else{
    console.log("Don't have user Email");
}


// If we give empty string value to the userEmail2, then it is a falsy or false value.
const userEmail2 = ""

if(userEmail2){
    console.log("Got the user Email");
} else{
    console.log("Don't have user Email");
}


// If we give empty array value to the userEmail3, then it is a true value.
const userEmail3 = []

if(userEmail3){
    console.log("Got the user Email");
} else{
    console.log("Don't have user Email");
}


// So, There are some falsy values which acts as a false value to the conditions such as,

// falsy values:
        // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:
        // "0", " ", [], {}, function(){}      
        //Empty array, Empty object, Function without definition, anything inside string, etc is truthy value.



// Check for empty array
const marks = []

if(marks === 0){
    console.log("Array is Empty");
}



//Check for empty object
const emptyObj = {}

if ( Object.keys(emptyObj).length === 0 ){

    console.log("Object is empty");
}



// Ternary Operator (?):

const price = 80
price >= 100 ? console.log("Equal or greater than 100") : console.log("less than 100")





// Nullish Coalescing Operator (??): The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val;
val = 5 ?? 10
console.log(val);

val = null ?? 30
console.log(val);

val = undefined ?? 53
console.log(val);

val = null ?? 40 ?? 24
console.log(val);
