// ----------------------Dates-----------------

let myDate = new Date()         // Declaring Date.

// Different ways to print date
console.log(myDate);
console.log(myDate.toString());
console.log("toDateString: "+ myDate.toDateString());
console.log("toTimeString: "+ myDate.toTimeString());
console.log("toLocaleString: " + myDate.toLocaleString());
console.log("toISOString: " + myDate.toISOString());
console.log("toJSON: " + myDate.toJSON());
console.log("toLocaleDateString: " + myDate.toLocaleDateString());
console.log("toLocaleTimeString: " + myDate.toLocaleTimeString());


console.log(typeof myDate);     // Date is of Object type.


// to Declare Specific Date

let specificDate = new Date(2003, 5, 9)        // 0 here is January as months start from 0. And the date format is Year/Month/Date
console.log(specificDate.toDateString());


// To declare specific date and time

let specificDateTime = new Date(2003, 5, 9, 3, 40)      // date is in 
console.log(specificDateTime.toLocaleString());


// To declare date in specific format

let specificFormat = new Date("01-12-2043")
console.log(specificFormat.toLocaleString());
