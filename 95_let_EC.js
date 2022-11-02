// console.log(firstName); 
//Uncaught ReferenceError: Cannot access 'firstName'before initialization but it is in memory

// TEMPORAL DEAD ZONE 

// let firstName = "Harshit";

// Uncaught ReferenceError: firstName is not defined
// this error will come if firstName is not in memory
// console.log(typeof firstName)


// note : let and const are also hoisted but not initialised

// jab tak variable uninitialised raha jab tak , TEMPORAL DEAD ZONE