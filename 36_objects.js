// objects or object literal

console.log("OBJECTS");

// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index


// how to create objects 
// key value pairs 

// key are always considered as string , but it is optional to give it under quotes
const person = {
    name: "gaurav",
    "age": 22,
    hobbies: [
        "guitar",
        "sleeping",
        "dancing"
    ]
}

// console.log(person);
// console.log(typeof person);


//how to access data from objects
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);
console.log(person["name"]);
console.log(person["age"]);

//how to add key-value pair

person.gender = "M";
person["isAdult"] = true;

console.log(person);
