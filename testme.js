//ARRAYS

// const array = [1, 2, 24, 5, 6];

// it is a refencre data tyep

// array.push("hello");
// console.log(Array.isArray(array));
// console.log(typeof array);


// array.push(10);
// array.pop();

// array.unshift(230);
// array.shift();

// const brray = array;
// brray.push("from abrray")
// console.log(array);

// const brr = array.slice(0).concat(["con"]);


// const crr = [].concat(array);

// console.log(crr, "->crr");
// console.log(brr, "->brr");

// console.log(array, "->arr");

// loops

// const langs = ["js", "c++", "java", "c#"];

// for (let l of langs) {
//     console.log(l);
// }


// for (let l in langs) {
//     console.log(langs[l]);
// }


// var des = [1, 2, 24, 5, 6];

// let [a, b, ...c] = des;

// console.log(a, b, c);

// --------------------------->

//OBJECTS


// const obj = {
//     key1: 'value1',
//     "key2": 'value2',
//     hob: [
//         "dance",
//         "singing",
//         "reading"
//     ]
// }


// console.log(obj.key1);
// console.log(obj['key1']);

// obj.key3 = 'value3';


// console.log(obj.hob);

// for (let it of obj.hob) {
//     console.log(it);
// }

// let key = "email";

// obj[key] = "gaurav@gmail.com";

// console.log(obj);


// for (let i in obj) {
//     console.log(obj[i]);
// }


// const obj2 = { ...obj, ...[1, 2, 3, 4] };

// console.log(obj2);


// const band = {
//     bandName: "hustle",
//     famousSong: "tera pyar sabbo",
//     year: 1982,
//     anotherSong: "rolla"
// }


// const { bandName: var1 } = band;

// console.log(var1);



// ----------------------------->


// function a() {
//     console.log("hello i am a function");
// }

// a();


// // assinging anonymous function to b
// const b = function () {
//     console.log("this is function expression");
// }

// b();

// // this is another way of function as arrow
// const c = () => {
//     console.log("this is arrow function");
// }

// c();


// console.log(x);
// let x = 10;

// y();

// var y = () => {
//     console.log("this is hoisting!");
// }


// lexical scope
// function func() {
//     var k = 10;
//     console.log(k);
// }

// console.log(k);


// function func1(b, ...a) {
//     console.log(a);
// }


// const arr = [1, 2, 3, 4, 56];

// func1(10, 1, 2, 3, 4, 5);



// const obj = {
//     key1: "val1",
//     key2: "val2"
// }

// function h({ ...obj }) {
//     console.log(obj);
// }

// h(obj);



// callback
// function f() {
//     console.log("Hello is Hello");
// }

// function j(f) {
//     f();

//     return function () {
//         console.log("i am retruned function");
//     }
// }

// j(f)();

const users = [1, 2, 3, 4, 5];



// For Each loop
// users.forEach((user, index) => {
//     console.log(user, index);
// })


// const arr = users.filter((el, index) => {
//     return el % 2 === 1;
// })

// console.log(arr);

// const sum = users.reduce((accum, val) => {
//     return accum + val;
// })
// console.log(sum);

// const arr = [6, 2, 2, 5, 7, 8, 2];

// arr.sort((a, b) => {
//     return a - b;
// })

// console.log(arr);


// const myarray = [1, 2, 3, 4, 5, 6, 78];

// myarray.fill(2, 5);

// console.log(myarray);


// from 66

// const st = new Set();

// st.add("as");
// st.add(1);
// st.add(2);
// st.add([1, 2, 2, 4, 4]);

// // console.log(st.has(2));

// for (let el of st) {
//     console.log(el);
// }

// console.log(st);



//map
// const mp = new Map();

// mp.set(3, 23);
// mp.set("firstname", "gaurav");

// console.log(mp.size);
// console.log(mp);

// for (let el of mp) {
//     console.log(el);
// }


// const obj = {
//     name: "gaurav",
//     age: 23
// }

// const objtest = {
//     key3: "value1",
//     key4: "value2"
// }

// // const obj2 = { ...obj };

// const obj2 = Object.assign(objtest, obj);

// obj2["key"] = "val";

// console.log(objtest);
// console.log(obj2);


// optional chaninig

// const obj = {
//     key1: "val",
//     key2: {
//         fname: "gaurav"
//     }
// }

// obj.key3;

// console.log(obj);
// console.log(obj.key3?.lname);

// this

// function c() {
//     console.log(this);
// }

// const a = {
//     fname: "gaurav",
//     key: c
// }

// b.call();
// a.key.call(a);

// const myFunc = a.key;
// a.key.call(a);
// const myFunc = a.key.bind(a);
// myFunc();


const a = {
    key1: "val1",
    key2: "val2"
}

const b = Object.create(a);

console.log(b);