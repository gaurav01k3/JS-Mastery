// how to clone array

let arr1 = [1, 2, 34];

// method1 
let arr2 = arr1.slice(0); // returns new arr from 0 to end

// method2
let arr3 = [].concat(arr1);

//method3
// spread operator 
let arr4 = [...arr1];

// console.log(arr1 === arr2);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


// how to concat array

let brr1 = [1, 2, 4, 5];


//method1
let brr2 = brr1.slice(0).concat(["hel", "bel"])

//method2
let brr3 = [...brr1, "helo", "belo"];


console.log(brr2);
console.log(brr3);