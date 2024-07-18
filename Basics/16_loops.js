// =============== Loops or Iterations =====================

// 1) for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}


// Nested for

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop: ${i}`);

    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop value: ${j} and Inner loop ${i}`);
        
    }
    
}

// Accessing array through for loop

let myArr = ["flash", "batman", "superman"]
console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}



// Break and Continue Statements -----------------------------

// Break: Breaks the loop and comes out of it.
for (let i = 1; i < 20; i++){
    if(i == 15){
        console.log("Detected 15");
        break;
    }
    console.log(`Value of i is: ${i}`);
}


// Continue: Skips the specific iteration and continues to run the loop.
for (let i = 1; i < 20; i++){
    if(i == 15){
        console.log("Detected 15");
        continue;
    }
    console.log(`Value of i is: ${i}`);
}


// -----------------------------------------------------------------


// 2) while loop

let i = 0
while(i <= 10){
    console.log(i);
    i = i+2
}

// Accessing array using while loop

let myArr2 = ["shaktiman", "bahubali", "thangabali"]
let arr = 0

while(arr<myArr2.length){
    console.log(`Name of superhero is ${myArr[arr]}`);
    arr = arr + 1
}


// -----------------------------------------------------------------


// 3) do-while loop

let score = 1
do {
    console.log(`Score is ${score}`);
    score ++
} while (score <=10);



let score2 = 21
do {
    console.log(`Score 2 is ${score2}`);
    score2 ++
} while (score2 <=10);





