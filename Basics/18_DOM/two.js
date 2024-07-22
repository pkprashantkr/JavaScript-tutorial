// DOM Stands for Document Object Model
// The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document. 
// The DOM represents a document with a logical tree

// window is the global object
// document is the part of window object.


// Accessing Elements by ID
    //  document.getElementById('idName')           //Returns HTML Collection

// Changing Content in the element containing that id
    //  document.getElementById('idName').innerHTML = "<h1> Prashant Kumar </h1>"


// Access value of attributes-----------
    // document.getElementById('idName').id                // Will give id name
    // document.getElementById('idName').className         // Will give class name

// getAttribute()---------------
    // document.getElementById('idName').getAttribute('class')         // Will value of class attribute
    // document.getElementById('idName').setAttribute('attributeName', 'attributeValue')         // Will set value of attribute to attributeValue


// give style--------------------
    // document.getElementById('idName').style.backgroundColor = 'blue'     //giving background blue color
    // document.getElementById('idName').style.color = 'green'              //giving text green color
    // document.getElementById('idName').style.padding = '2px'              //giving padding of 2px
    // document.getElementById('title').style.borderRadius = '10px'         //giving radius of 10px


// Accessing value inside the accessed id

    // by innerText
    // document.getElementsById('idName').innerText      // will only give the text displayed on the webpage
    // by textContent
    // document.getElementsById('idName').textContent      // will give the whole content of the tag
    
    // by innerHTML
    // document.getElementsById('idName').innerHTML      // will give the whole html tag



// querySelector(): Returns first element passed in the argument. ==================================

    // document.querySelector('h1')         // Returns first h1 tag
    // document.querySelector('#idName')         // Returns first HTML of that id
    // document.querySelector('.class')         // Returns first HTML of that class 
    // document.querySelector('input[type = "password"]')         // Returns first input tag with type password.
    // document.querySelector('p: first-child]')         // Returns first child of para tag
    // document.querySelector('ul').querySelector('li').style.backgroundColor = 'red'           // selecting li under ul tag to change its colour to red.
    // document.querySelector('ul').querySelector('li').innerText = "One modified"             // Changing text inside li tag



// querySelectorAll(): Returns all number of element passed on the page in the argument. ======================

    // document.querySelectorAll('h1')         // Returns NodeList of all h1 tag in the page which is not a pure array. have some functions of array like foreach etc but not all.

    // Changing text color of li using querySelectorAll
        // const tempList = document.querySelectorAll('li')        // storing in variable as we cannot directly manipulate the querySelectorALl as it returns NodeList.
        // tempList[0].style.color = "green"                       // changing color of first li
        // tempList[1].style.color = "green"                       // changing color of second li


    // using foreach loop on the NodeList
        /*
            tempList.forEach( function (item) {
                item.style.backgroundcolor = "blue"
                })
        */



// Accessing Elements by Class Name
    //  document.getElementsByClassName('heading')          // Returns HTML Collection