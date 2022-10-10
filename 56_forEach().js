// important array methods


const numbers = [1, 2, 4, 5, 6, 7];


// this is actually forEach type function
function mulby2(number, index) {
    console.log("index is ", index);
    console.log(number + 2);
}
// mulby2(numbers[0], 0);


//for Each takes call back
// numbers.forEach((element, index) => {
//     console.log(element + " is at index " + index);
// });



const users = [
    { firstName: "gaurav", age: 23 },
    { firstName: "shyam", age: 23 },
    { firstName: "raghav", age: 23 },
    { firstName: "soham", age: 23 },
]


users.forEach((user) => {
    console.log(user.firstName);
})
// or 
for (let user of users) {
    console.log(user.firstName);
}