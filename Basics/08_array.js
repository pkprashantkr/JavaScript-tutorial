// --------------------Arrays-----------------------
// Array is an object having collection of multiple items in single variable
// It can a mix of multiple datatypes.
// Arrays are re-sizable in js.

// Declare array
const arr = [4, 3, 2, 6, true, "Prashant"]

// Access array elements by index no.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

// 2nd way for declaring array
const myHeroes = new Array(1,2,3,4)
console.log(myHeroes);


console.log("\n--------------Array Methods----------\n");

// Array Methods

//push items in the array
arr.push(5, 867, 23, "Kumar")
console.log(arr);


//pop last item from the array
arr.pop()
console.log(arr);


//unshift adds an item in the beginning of array
arr.unshift(21)             // Will add 21 in the starting
console.log(arr);


//shift removes first item from the array
arr.shift()
console.log(arr);


//includes check if the given parameter is present in the array or not and returns true or false
console.log(arr.includes(42));
console.log(arr.includes("Prashant"));
console.log(arr.includes(true));
console.log(arr.includes(2));
console.log(arr.includes(66));
console.log(arr.includes(23));


//indexOf gives index no. of the given item in the array.
console.log(arr.indexOf("Prashant"));
console.log(arr.indexOf(6));
console.log(arr.indexOf(867));
console.log(arr.indexOf(23));
console.log(arr.indexOf(45));       // Gives -1 for the elements not present in the array


//join converts the elements of the array into string
const newArr = arr.join()

console.log(arr);
console.log(newArr);

console.log(typeof arr);            // arr is object
console.log(typeof newArr);         // newArr is string



// SLICE and SPLICE-------------------------------------

console.log("Before Slice: ", arr);        // Array before slice

const anotherArr = arr.slice(1,3)
console.log(`Spliced array is: ${anotherArr}`);
console.log("After Slice: ", arr);        // Array after slice

// -------------------------

console.log("Before Splice: ", arr);        // Array before splice

const anotherArr2 = arr.splice(1,3)
console.log(`Spliced array is: ${anotherArr2}`);
console.log("After Splice: ", arr);        // Array after splice


// It shows the difference between slice and splice that
// 1) slice doesn't include the last index given as range, while splice includes the last index given as range.
// 2) slice doesn't manipulate the original array while splice do manipulate the original array and remove the spliced elements from it.


// -----------------------------------------------------
console.log("\n-----------adding 2 arrays--------------------\n");
// Adding 2 arrays together

const marvel = ["thor", "hulk", "ironman"]
const dc = ["superman", "flash", "batman"]


//Let's use push() to add 2 array and see what happens

marvel.push(dc)                 // this is making a array inside the 1st array which is not good as if we want to access the elements inside the 2nd array, it is a confusing task

console.log(marvel[3][2]);      //accessing batman from 2nd array

console.log(marvel);        // And push() is manipulating the original array


//Let's use concat() to add 2 array and see what happens

// Declaring arrays again as marvel array was manipulated by push()
const marvel_heroes = ["thor", "hulk", "ironman"]
const dc_heroes = ["superman", "flash", "batman"]

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);
console.log(marvel_heroes);         // It shows that the original array is not manipulated by concat()



//Let's use Spread (...) operator to add 2 arrays


const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

// Spread operator treats every element in the array as an individual element.
// It is the most preferred way as it is easily scalable.


// ----------------------------------------------

// Let's take a condition where a array is given to us which is having arrays inside arrays like this

const another_arr = [1,2,4, [5,24,65], 64,6,[4,6,5, [5,6,8]]]
console.log(another_arr.flat(Infinity));                //In the place of infinity, we give the depth to which we want to flat the array.

// flat() returns a new array with all sub-array elements concatenated into it to the specified depth


// ----------------------------------------------------

console.log(Array.isArray("Prashant"));             // Checks if it is a array or not.

console.log(Array.from("Prashant"));

//To convert number into array from Array.from()
console.log(Array.from(String(4436343245), Number));

// String(4436343245), It converts number into string to make array then, using Number, to convert it into numbers again


// ---------------------------------------------------------

// Different method to make array from elements
 let score1 = 199;
 let score2 = 754;
 let score3 = 549;

 console.log(Array.of(score1, score2, score3));     



