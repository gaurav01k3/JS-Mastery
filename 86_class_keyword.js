// class keyword
// classes are fake in JS , matlab internally ye bhi aise hi cnstructor fucntions banake object retrun karegi

// function CreateUser(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
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

// const user1 = new CreateUser("gaurav", "kumar", "g@mail.com", 22, "Preet Vihar");

// console.log(user1);




// ab ham same kaam class keyword se karwaynge
class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }


    // below functions will automatically be add in __proto__ of object
    about() {
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return "la la la la ";
    }
}


const user1 = new CreateUser("gaurav", "kumar", "g@mail.com", 22, "Preet Vihar");

console.log(user1);
console.log(user1.__proto__);

