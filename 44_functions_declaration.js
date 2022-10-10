'use strict'

function singSong() {
    console.log("Hello JS...");
}
singSong();



// Exam : 1
function add(num1, num2, num3) { //parameters
    return num1 + num2 + num3;
}
let res = add(4, 5, 9); //args
console.log(res);
console.log(undefined + undefined);



// Exam : 2
function isOddEven(number) {
    // if (number % 2 === 0) {
    //     return true;
    // }
    // return false;

    // OR 

    return number % 2 === 0;
}
console.log(isOddEven(33));


//Exam:3
function findIndex(array, target) {
    for (let i in array) {
        if (array[i] == target) {
            return i;
        }
    }
    return -1;
}


let arr = [1, 2, 4, 5];
console.log(findIndex(arr, 4));