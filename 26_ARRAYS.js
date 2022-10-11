"use strict"

// intro to arrays 
// reference type 
// how to create arrays


// PRIMMITIVE DATA TYPES IN JS
// nn ss bb u
// null
// number
// string
// Symbol
// BigInt
// booleans
// undefined


// REFERENCE DATA TYPES
// All reference types in JS are objects


// ARRAYS
// ordered collection of elements
// let fruits = ["apple", "kiwi", "papaya"];
// // [0,1,2]
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);


// let numbers = [1, 2, 3456, 56];
// console.log(numbers);


// let mixed = [1, "gaurav", null, undefined]
// console.log(mixed);


let fruits = ["apple", "kiwi", "papaya"];
let obj = {};
fruits[1] = "banana";

console.log(fruits);
console.log(typeof fruits);
console.log((Array.isArray(fruits)));
console.log((Array.isArray(obj)));




// Note :
// All reference types in JS are objects
// To check is it is specific array use is.Array method
// Arrays are mutable , its values can me manupulated in original