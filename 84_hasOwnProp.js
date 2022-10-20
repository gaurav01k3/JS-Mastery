// contstructor function
function CreateUser(firstName, lastName, email, age, address) {
    // const user = Object.create(createUser.prototype);// X ye kam na kare ise ab this kr dega
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this; optional
}
CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}
CreateUser.prototype.sing = function () {
    return "la la la la ";
}



const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());


for (let key in user1) {
    if (user1.hasOwnProperty(key)) // proto se na laye
        console.log(key);
}