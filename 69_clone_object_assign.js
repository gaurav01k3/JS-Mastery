// clone using object.assign



//memory

const obj = {
    key1: "value1",
    key2: "value2"
}


// const obj2 = obj; // this will point to same object

// Else 

// const Obj2 = { ...obj };
const obj2 = Object.assign({}, obj);
// copy obj to target { } and return its reference

// obj.key3 = "value3";
// console.log(obj);
console.log(obj2);