// functions are objects in JS they have some props like objects 


function hello() {
    console.log("Hello from js");
}

// JS function === function + Object

// console.log(hello.name);

//you can add your own properties
hello.myownprop = "veru unique value";
console.log(hello.myownprop);


// name property-- -> tells function name;
// function provides more useful prperties


// jab bhi ham function banate h to hame ek object sath me attach milta h jisme ham key value add kr sakte h , aka
// prototype
//basically functions ke sath free milta h

// only functions provide prototype properties

hello.prototype.abc = "abc";
hello.prototype.func = function () {
    return "i am func";
}
console.log(hello.prototype.func()); // {}

console.log(hello.prototype);