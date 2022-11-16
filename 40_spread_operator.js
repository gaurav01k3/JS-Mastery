//spread operator
// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element mdn-docs

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];


const newArray = [...array1, ...array2, 8, 9];
// console.log(newArray);

const array3 = [..."abc"]; // will spread abc 
const array4 = [..."12345678"];
// like a b c
// console.log(array3);
// console.log(array4);



//Spread operators in objects
const obj1 = {
    key1: "val1",
    key2: "val2",
}

const obj2 = {
    key1: "valUnique", //this will take priority
    key3: "val3",
    key4: "val4"
}

// const newObj = {
//     ...obj1, ...obj2,
//     key69: "val69"
// }

// const newObj = { ..."abc" }
// const newObj = { ...["item1", "item2"] }
const newObj = { ..."abcdefghijklmnopqrstuvwxyz" } // can be used in problem solving

console.log(newObj);


