/*
    Synchronous JavaScript (Default):
        - It is a synchronous language which means the code runs in a particular sequence of instructions given in the program.
        - Each instruction waits for the previous instruction to complete its execution.
        - It a single threaded which means it executes on a single thread, which makes it slower than other languages. JS engine never be found alone, as it is always in a runtime environment like browser, nodejs, etc.


    Asynchronous JavaScript: 
        - Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI.
        - Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.


    Execution Context:
        - Execute one line of code at a time.
        - Each operation waits for the last one to complete before executing.

    
    BLOCKING CODE v/s NON-BLOCKING CODE

    Blocking Code: - It blocks the flow of the program
                   - It reads file synchronously, which means program has to wait till the file is read.
    
    Non-Blocking Code: - It does not block the flow of the program
                   - It reads file asynchronously, which means program doesn't has to wait till the file is read.

    Q. Which code is better to write Blocking or Non-blocking?
    ans. It depends on the usecase of the code.

*/

// setTimeout(): this makes us to set a time to execute a piece of code.

function greet() {
    console.log("hello");
}          
setTimeout(greet, 4000)     // 4s = 4000ms      // here, greet is used as callback function.


// we can also use setTimeout like this:

console.log("one");
console.log("two");
console.log("three");

setTimeout(() => {
    console.log("Hello");
}, 5000)

console.log("four");
console.log("five");


// Callbacks: A function passed as an argument to another function.

function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallBack){
    sumCallBack(a, b)
}

calculator(1, 2, sum)           // sum function is passed as callback.



// Callback Hell: - Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)
//                - This style of programming becomes difficult to understand and manage.

// Ex. We want to print 3 numbers each after 2 secs delay.

function getData(dataId, getNextData){      // taking dataId and next Data as arguments
    setTimeout(() => {
        console.log("data", dataId);        // printing dataID
        if(getNextData){                    // checking if nextData is present or not
            getNextData();                  // calling getNextData again
        }
    }, 2000);                               // timeout of 2s
}

getData(1, () => {                          // giving 1 as dataId and a callback function for next data
    getData(2, () => {                      // giving 2 as dataId and a callback function for next data
        getData(3);                         // giving 3 as dataId.
    });
});

// It is called nesting of callback functions. or Callback Hell because it is very difficult to read and understand. It is a problem in programming.


/* 
    Promises: - It is a solution of callback hell.
              - These are used to remove problem of callback hells.
              - Promise is for "eventual" completion of task. It is an object in JS.
*/

