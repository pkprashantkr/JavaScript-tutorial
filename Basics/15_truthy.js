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

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}





// Nullish Coalescing Operator (??):