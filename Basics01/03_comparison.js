/* Basic Comparisons-----
    console.log(2>1);
    console.log(2>=1); 
    console.log(2<1);
    console.log(2<=1);  
    console.log(2==1); 
    console.log(2===1);         // This is called strict check as it also checks datatypes
    console.log(2!=1); 
*/

console.log("2" > 1);       // This will give true as it converts string into number
console.log("02" > 1);      // This will do the same


console.log("----------------------------------");

console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     //true

/* 
    Here, the reason is that an equality check (==) and conparisons (<,>,<=,>=) works differently.
    Comparisons convert null to number, treat it as 0. 
    Therefore, (null > 0) is false but (null >= 0) is true

*/