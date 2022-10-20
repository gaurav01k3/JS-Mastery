//getters and setters

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("Gaurav", "Kumar", 22);

console.log(person1.fullName); //  bins iske function call hoga() ,  property ki tarah treat hoga -> setter
person1.fullName = "Rohit kumar";
console.log(person1.fullName);
