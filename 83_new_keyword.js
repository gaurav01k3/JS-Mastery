function createUser(firstName, age) {
    console.log(this);
    this.firstName = firstName;
    this.age = age;
    return this;
}

createUser.prototype.about = function () {
    console.log(this.firstName, this.age);
}

const user1 = new createUser("gaurav", 22);


// new keyword
// 1. empty object this = {}
// 2. return this
// 3. user1 object ke __proto__ me createUser ke prototype ke mthods daal dega jo ham manually kr rhe the pehle
// ek tarike se ye kaam krta h
// const user = Object.create(createUser.prototype);

// user1.about();
// createUser.prototype.about(); // test
console.log(user1);







// ---------------> now


// contsructor function
// function CreateUser(firstName, lastName, email, age, address) {
//     // const user = Object.create(createUser.prototype);// X ye kam na kare ise ab this kr dega
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     return this;
// }
// CreateUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function () {
//     return this.age >= 18;
// }
// CreateUser.prototype.sing = function () {
//     return "la la la la ";
// }



// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());