// static methods and properties

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static classInfo() {
        return `this is staic methods`
    }

    static desc = "static property";

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("gaurav", "sharma", 3);


const info = Person.classInfo();// static methods ko bina objects ke access krenge
console.log(person1);
console.log(Person.desc);