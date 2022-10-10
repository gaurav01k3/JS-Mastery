// difference between dot and bracket

const key = "email";

const person = {
    name: "gaurav",
    "age": 22,
    "person hobbies": [
        "guitar",
        "sleeping",
        "dancing"
    ]
}

// console.log(person["person hobbies"]);

person[key] = "gaurav@gmail.com";
console.log(person);

