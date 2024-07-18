// =================== Control Statement =================================

// 1) if Statement: It checks the condition inside the () then executes the code inside.
//                  The condition should always be true to execute the inside code


    // Equals to
    if(2 == 2){
        console.log("Equal");
    }

    // Less than
    if(1 < 2){
        console.log("Less than");
    }

    // Greater than
    if(4 > 2){
        console.log("Greater than");
    }

    // Less than or equal to
    if(2 <= 2){
        console.log("Less than or equal to");
    }

    // Greater than or equal to
    if(2 >= 2){
        console.log("Greater than or equal to");
    }

    // not equal to
    if(5 != 2){
        console.log("not equal to");
    }

    // strict quality operator (===): Checks for datatype also.
    if(2 === "2"){
        console.log("Strict quality operator");
    }

    if(2 !== "2"){
        console.log("Strict quality operator with not");
    }
    

// 2) if else Statement

    const temp = 56

    if(temp < 50){
        console.log("Temperature is less than 50");
    } else{
        console.log("Temperature is greater than 50");
    }


// 3) if else if Statement: Check multiple conditions

    const balance = 1200

    if(balance < 500){
        console.log("Less than 500");

    } else if(balance < 700){
        console.log("Less than 700");

    } else if(balance < 900){
        console.log("Less than 900");

    } else if(balance < 1200){
        console.log("Less than 1200");
    } else{
        console.log("Not valid");
    }

    // 4) Using Logical Operators

    const isLoggedIn = true
    const debitCard = true
    const isLoggedInFromGoogle = true
    const isLoggedInFromEmail = false

    // Logical AND (&&) operator: Returns true if both conditions are true
    if(isLoggedIn && debitCard){
        console.log("Shopping done.....!");
    }

    // Logical OR (||) operator: Returns true if one of the conditions is true
    if(isLoggedInFromEmail || isLoggedInFromGoogle){
        console.log("User Logged in successfully.......!");
    }



// 4) Switch Statement: Can check multiple cases

    const month = 7

    switch (month) {
        case 1:
                console.log("January");
            break;
        case 2:
                console.log("February");
            break;
        case 3:
                console.log("March");
            break;
        case 4:
                console.log("April");
            break;
        case 5:
                console.log("May");
            break;
        case 6:
                console.log("June");
            break;
        case 7:
                console.log("July");
            break;
        case 8:
                console.log("August");
            break;
        case 9:
                console.log("September");
            break;
        case 10:
                console.log("October");
            break;
        case 11:
                console.log("November");
            break;
        case 12:
                console.log("December");
            break;
    
        default:
                console.log("Invalid");
            break;
    }





