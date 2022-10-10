// block scope vs function scope 


// let and const are block scope
// var is function scope 


// {
//     // this is a block

//     let firstName = "gaurav";
//     const lastName = "kumar";
//     console.log(firstName);

//     // Note : let and const variables can only be accesses inside block where they were declared
// }

// let firstName = "garima";
// console.log(firstName);



// {
//     var firstName = "johnny";
// }

// console.log(firstName);
// Note: var can be used from anywhere


function myApp() {
    if (true) {
        var firstName = "soham";
        console.log(firstName);
    }
}
// console.log(firstName); // can access fistName
myApp();