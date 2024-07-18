// for of loop

//using on array
const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
}


//using on strings
const str = "Prashant"

for (const char of str) {
    console.log(`Each char is ${char}`);
}


console.log("-----------------------------------------------\n");



//========================== MAP ==============================================




// The Map object holds key-value pairs and remembers the original insertion order of the keys.

const map = new Map()               // Declaring map object

//map.set is used to set key and value.
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("AUS", "Australia")


console.log(map);                   // Accessing all the values in an object


// Accessing map elements from forof loop
for (const key of map) {
    console.log(key);
}


//map.get is used to get the value from the key name.
console.log(map.get("IN"));         
console.log(map.get("AUS"));
console.log(map.get("USA"));


//map.size returns the number of key and value pairs
console.log("Map size before deletion: " + map.size);


//map.delete is used to delete the key and value pair from the map
map.delete("USA");

console.log("Map size after deletion: " + map.size);











