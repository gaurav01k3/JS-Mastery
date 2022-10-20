// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key like array, number, string

// object literal
// key -> string
// key -> symbol
// const person = {
//     firstName: "harshit",
//     age: 7,
//     1: "one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for (let key in person) {
//     console.log(typeof key);
// }

//key value pair also in map

// const person = new Map();
// person.set('firstName', "Gaurav");
// person.set('age', 7);
// person.set(1, 'one');
// see here key is considered as number , in object it will considered as string

// Access
// console.log(person.get('age'));
// console.log(person.keys());

// for (let key of person.keys()) {
//     console.log(key, typeof key);
// }

// for (let [key, value] of person) { // it returns array which we have destructured
//     console.log(key, value);
// }


//Also
// const mp = new Map([['firstName', "harshit"]])
// console.log(mp);


const person1 = {
    id: 1,
    firstName: "Gaurav"
}


const extraInfo = new Map();
extraInfo.set(person1, { age: 8, gender: "male" });

console.log(extraInfo);

console.log(extraInfo.get(person1).age);


