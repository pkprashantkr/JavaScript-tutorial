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
    console.log(key);           // This will print both key and values
}

for (const [key, value] of map) {
    console.log(key, ": ", value);           // This will print key and values separately
}


// Access objects using forof loop
const myObj = {
    game1: 'NFS',
    game2: 'Football',
    game3: 'Tennis'
}

// for (const [key, value] of object) {
//     console.log(key, ": ", value);               // This will give error if try to print key & values separately
// }


//map.get is used to get the value from the key name.
console.log(map.get("IN"));         
console.log(map.get("AUS"));
console.log(map.get("USA"));


//map.size returns the number of key and value pairs
console.log("Map size before deletion: " + map.size);


//map.delete is used to delete the key and value pair from the map
map.delete("USA");

console.log("Map size after deletion: " + map.size);



// ---------------------------- forin loop ------------------------------------------------------


// Using forin loop to access keys and values in an object

const obj = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift by Apple'
}

for (const key in obj) {
    console.log(`${key} shortcut is for ${obj[key]}`);
}



// Using forin loop on arrays

const prog = ["js", "rb","py","java", "cpp"]

for (const key in prog) {
    // console.log(key);               // This will print the index values as keys
    console.log(prog[key]);            // This will give the values of array
}



// Using forin loop on map

const map2 = new Map()              

map2.set("AFC", "Africa")
map2.set("UK", "United Kingdom")
map2.set("GER", "Germany")

for (const keys in map2) {
    console.log(keys);              // This will not print anything as The map object is not iterable.
}




console.log("--------------------------- Foreach Loop----------------------------\n");
// ------------------------------------------- foreach -------------------------------------------------


const heroes = ["batman", "superman","flash","marvel", "hulk"]

// arrays already have foreach loop attached with it so we can directly use foreach by this...

// heroes.forEach(function (){})        // this is the syntax.          
heroes.forEach(function (item){                   
    
    // here foreach is taking function(item) as callback function where item is the elements in the array and write the body of function inside the {}.

    console.log(item);

})



// taking arrow function as callback function
heroes.forEach ( (item) => {
    console.log(item);
})



// pass reference of the function to foreach
function printHeroes(item){
    console.log(item);
}

heroes.forEach(printHeroes)         // The reference of the function is passed


// foreach also takes additional parameters such as index, array
heroes.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})



// Objects as elements in an array

const myCoding = [
    {
        langName: "Javascript",
        langFile: "js"
    },
    {
        langName: "C++",
        langFile: "cpp"
    },
    {
        langName: "Ruby",
        langFile: "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(item);              // Print both langName and langFile...
})


myCoding.forEach( (item) => {
    console.log(item.langName);              // Print langName...
})


myCoding.forEach( (item) => {
    console.log(item.langFile);              // Print langFile...
})



// foreach don't return anything

const heroes2 = ["batman", "superman","flash","marvel", "hulk"]

const values = heroes2.forEach( (item) => {
    console.log(item);
})

console.log(values);            // foreach is not returning any value to variable values



const value = heroes2.forEach( (item) => {
    return item                 // If we try to explicitly return by using return keyword, it still don't return.
})

console.log(values);            // foreach is not returning any value to variable values




// filter() is a function that takes callback function along with the condition to return the answer.
const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.filter( (num) => num > 4)        // here, the implicit return is taking place here.

console.log(newnums);


// explicit return
const mynums2 = [1,2,3,4,5,6,7,8,9,10]

const newnums2 = mynums.filter( (num) => {
    return num > 4                     // here, the implicit return will not take place, we have to use explicit return while using curly braces {}.
})        

console.log(newnums2);


// above functionality using foreach loop
mynums2.forEach( (num) => {
    if(num > 4){
        newnums.push(num)
    }
})

console.log(newnums2);


// Filter or search from the array of objects



// ====================== Pending ============================

