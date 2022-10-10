//computed properties


const key1 = "obj1key1"
const key2 = "obj1key2"

const val1 = "myval1";
const val2 = "myval2";


// need
// const obj = {
//     objkey1 : "myval1";
//     objkey2 : "myval2";
// }

// obj[key1] = val1;
// obj[key2] = val2;

// or 

const obj = {
    [key1]: val1,
    [key2]: val1
}

console.log(obj);