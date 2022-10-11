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



//OBJECTS


const obj = {
    key1: 'value1',
    "key2": 'value2',
    hob: [
        "dance",
        "singing",
        "reading"
    ]
}


// console.log(obj.key1);
// console.log(obj['key1']);

obj.key3 = 'value3';


console.log(obj.hob);

for (let it of obj.hob) {
    console.log(it);
}