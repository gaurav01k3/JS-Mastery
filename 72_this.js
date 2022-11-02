// console.log(this);
// console.log(window);


// "use strict"
// this inside function reffers to global window object 
function myFunc() {
    console.log(this);
}

myFunc();


// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.