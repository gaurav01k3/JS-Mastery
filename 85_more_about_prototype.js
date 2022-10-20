// let numbers = [1, 2, 3];

// console.log(numbers.prototype); // undefined becoz sirf functions ke prototype hote h bro

// console.log(numbers.__proto__); // arrays ke pass various,methods hote h to ye iske __proto__ me kaha se aaye

// internally arrays are maade like this 
let numbers = new Array(12, 3, 4);
console.log(Array.isArray(Array)); // function h

// console.log(Array.prototype); // yaha se aaye ye sare functions.
// jab array bani to numbers ke __proto__ me new keyword se Array() ke prototype ke methods iske __proto__ me add ho gye

// console.log(Object.getPrototypeOf(numbers)); //__proto__
// or
// console.log(numbers.__proto__);



// prototype zaruri nahi object ho kuch bhi ho skta h chnage krenge toh

console.log(Array.prototype); //  is function ka prototype ek array h
console.log((function () { }).prototype); // is function ka prototype ek object h

