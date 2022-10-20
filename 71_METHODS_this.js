// methods
// function inside object


// const person = {
//     firstName: "gaurav",
//     age: 22,
//     about: function () {
//         console.log(`Person name is ${this.firstName} and age is ${this.age}`);
//         // console.log(this); // this here is object by whom this function is called = person = this
//     }
// }

// person.about();


function personInfo() {
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
}


const person1 = {
    firstName: "gaurav",
    age: 22,
    about: personInfo
}
const person2 = {
    firstName: "rahul",
    age: 22,
    about: personInfo
}
const person3 = {
    firstName: "riya",
    age: 22,
    about: personInfo
}

// jo bhi fucntion call karega this use reffer karega
person1.about();
person2.about();
person3.about();