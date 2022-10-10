//find method
const myArray = ["hello", "bro", "how", "are", "you"];


function isLength3(string) {
    return string.length === 3;
}

const res = myArray.find(isLength3); // retruns first string having length 3 then stops

console.log(res);


//realistic example
const users = [
    { userId: 1, firstName: "gaurav", age: 23 },
    { userId: 2, firstName: "shyam", age: 23 },
    { userId: 3, firstName: "raghav", age: 23 },
    { userId: 4, firstName: "soham", age: 23 },
]

// aim : user with id 3

const resUser = users.find((user) => user.userId === 3);

console.log(resUser);
