// how to iterate object


const person = {
    name: "gaurav",
    "age": 22,
    hobbies: [
        "guitar",
        "sleeping",
        "dancing"
    ]
}


// Loops to iterate objects
// 1. for in loop
// 2. object.keys


//1
// for (let key in person) {
//     // console.log(person[key]);

//     // console.log(`${key} : ${person[key]}`);
//     console.log(key, ":", person[key]);
// }


//2
// This gives the array of keys 
// console.log(Object.keys(person));

const arr = Object.keys(person);
console.log(arr);

for (let i of arr) {
    console.log(person[i]);
}
