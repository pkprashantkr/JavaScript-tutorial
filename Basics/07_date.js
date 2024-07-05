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

let specificFormat = new Date("01-12-2043")     // In this month starts from 1.
console.log(specificFormat.toLocaleString());


// Time stamp

let myTimeStamp = Date.now()

console.log(myTimeStamp);                   // Time Stamp in milliseconds
console.log(specificFormat.getTime());      // Time Stamp from a specific date

console.log(Math.floor(Date.now() / 1000));     // Time Stamp in Seconds with floor value


// Some Date Functions

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());          // Gives day like Monday, Tuesday, etc and it starts from 1.
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth() + 1);        // Adding 1 so the months get started from 1
console.log(newDate.getSeconds());
console.log(newDate.getTime());


// To give some customization to Date

console.log(newDate.toLocaleDateString('default', {
        month: "long",          // Type ctrl + space to get suggestions
        weekday: "long",
        day: "2-digit" 
    })
);