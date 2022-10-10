// array destructuring

const array = ["val1", "val2", "val3", "val4"];
// let var1 = array[0];
// let var2 = array[1];


// OR 

let [var1, var2] = array;

// let [a, , b] = array; // skip val2 from array

console.log(var1, " ", var2);
// console.log(a, " ", b);

// const newArray = array.slice(2);

// or 

let [a, b, ...newArray] = array;

console.log(newArray);