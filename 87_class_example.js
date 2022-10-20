
// Animal is base class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating having age ${this.age}`;
    }

    isCute() {
        return this.age <= 1;
    }
}

const firstAnimal = new Animal("bird", 1);
console.log(firstAnimal);
console.log(firstAnimal.eat());



// Dog is sub class
class Dog extends Animal {

}

const tommy = new Dog("tommy", 2);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isCute());