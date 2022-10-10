// map method
// map(callback,index)

const numbers = [42, 26, 35, 89];

const square = (num) => {
    return num * num;
}

// map takes callback and returns new array 
// const squareNum = numbers.map(square);
// console.log(squareNum);


// const sqnum = numbers.map((num, index) => {
//     return `${num} : index is  ${index}`;
// })

// console.log(sqnum);



const users = [
    { firstName: "gaurav", age: 23 },
    { firstName: "shyam", age: 23 },
    { firstName: "raghav", age: 23 },
    { firstName: "soham", age: 23 },
]


const fNames = users.map((user) => {
    return user.firstName;
})

console.log(fNames);