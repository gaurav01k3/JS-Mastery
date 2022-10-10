// use const for array

//heap memory ["mango","kiwi"] 0x11

const array1 = ["banana", "kiwi"]; // 0x11
array1.push("apple"); // valid in case of const cuz base address is not changing

// array1 = ["orange", "grapes"]; // not valid


console.log(array1);