// JS Execution Context

/*
    Everything in JS happens inside an Execution Context 
    Execution Context is like a big box which contains two components in it:

        1) Memory Creation Phase: 
            - Here, memory allocation is executed to the variables, functions, etc.
            - This memory component is also known as Variable Environment.
    
        2) Execution Phase:
            - Here, the code gets executed one line at a time and in a specific order as, JS is a Synchronous Single Threaded Language. 
            - This component is also known as Thread of Execution


    Let's take an example code to understand:

        // let val1 = 10
        // let val2 = 5
        // function addNum(num1, num2){
        //     let total = num1 + num2
        //     return total
        // }
        // var result1 = addNum(val1, val2)
        // var result2 = addNum(10,2)

    Here, Firstly

    1) Global Execution is run and it is allocation in (this)

    2) Memory Creation Phase will allocate memory for:
        
    
*/