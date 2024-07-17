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

    2) Memory Creation Phase will allocate memory for: This is the first cycle
        
        line 1:         val1    => undefined
        line 2:         val2    => undefined
        line 3 to 6:    addNum  => definition
        line 7:         result1 => undefined
        line 8:         result2 => undefined

    3) Execution Phase:
        line 1:     val1 <= 10
        line 2:     val2 <= 5
        line 7: This will create one more execution context. It will have a new variable environment + execution thread. The memory phase and execution phase will again get applied.

                a) Memory Creation Phase: val1 => undefined
                                          val2 => undefined
                                          total => undefined

                b) Execution Phase: num1 => 10
                                    num2 => 5
                                    total => 15         // Then the total will be returned to the Global Execution.

                After that this New Variable Environment will get deleted.

        line 8: Again another execution context will be made and executed. The memory phase and execution phase will again get applied.

                a) Memory Creation Phase: val1 => undefined
                                          val2 => undefined
                                          total => undefined

                b) Execution Phase: num1 => 10
                                    num2 => 2
                                    total => 12         // Then the total will be returned to the Global Execution.

                After that this New Variable Environment will also get deleted.
*/




// Call Stack

/*
    Let's take an example to understand process of call stack.

        // function one(){
        //     console.log("One")
        // }
        // function two(){
        //     console.log("Two")
        // }
        // function three(){
        //     console.log("Three")
        // }
        // one()
        // two()
        // three()


    => In the above program, lets visualize the stack

a)              |                |
                |                |  Here, The Global Execution will always be present already in the  stack
                |________________|  
                |     one()      |  Then, function one() will get pushed in the stack and popped when completed.
    two()       |________________|  
    three()     |Global Execution| 
                |________________|


                |                |
b)              |                |  one()
                |                |  
                |     two()      |  
                |________________|  Then, function two() will get pushed in the stack and popped when completed. 
    three()     |Global Execution|  
                |________________|


                |                |
                |                |
 c)             |                |  one()
                |     three()    |  two()
                |________________|   
                |Global Execution|  
                |________________| Then, function three() will get pushed in the stack and popped when completed
                
*/