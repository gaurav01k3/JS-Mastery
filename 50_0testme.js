// nn
// ss
// bb
// u

// console.log(typeof null)
// Number
// String
// Symbol
// Boolean
// BigInt
// undefined


// const age = 22;
// const fname = "22";

// console.log(typeof (age + ""));
// console.log(Number(fname));


// const val = prompt("Type a number");
// console.log(typeof val);

// const acc = [12, 2, 3, 4, 5];


// let [a, b, c, ...d] = [...acc];

// console.log(a, b, c, d);


// const arr = [23, 2, 32, 3, 23];

// const obj = {
//     fname: "gaurav",
//     lname: "kumar",
//     address: {
//         num: 2323,
//         loc: "delhi"
//     }
// }

// const { fname, lname, address: { loc } } = obj;

// const { ...obj2 } = { ...obj };

// console.log(obj2);

// const numbers = [1, 2, 3, 4, 5];

// // callback will retrun true or false 
// // if every return value is true then only res will be true else false

// // means in this case if every number is even
// const res = numbers.every((num) => num % 2 == 0);

// console.log(res);

// const obj = {
//     key1: "value1",
//     key2: "value2"
// }


// // const obj2 = obj; // this will point to same object

// // Else 

// // const Obj2 = { ...obj };
// const obj2 = Object.assign({}, obj);
// // copy obj to target { } and return its reference

// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);


// const user1 = {
//     firstName: "gaurav",
//     age: 8,
//     about: function (hobby) {
//         console.log(this.firstName, this.age, hobby);
//     }
// }

// const user2 = {
//     firstName: "mohit",
// }


// user1.about.call(user2);



function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 = function () {
        return this.age >= 18;
    }
    return user;
}


const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
