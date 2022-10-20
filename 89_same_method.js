// super 

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

// const firstAnimal = new Animal("bird", 1);
// console.log(firstAnimal);
// console.log(firstAnimal.eat());



// Dog is sub class
class Dog extends Animal {

    constructor(name, age, speed) {
        super(name, age); // super matlb base class ki properties
        this.speed = speed;
    }

    eat() {
        return `eat func of dog class`;
    }

    run() {
        return `${this.name} is running at ${this.speed}`
    }

}

const tommy = new Dog("tommy", 2, "100kmph");
console.log(tommy);
console.log(tommy.eat()); // agr derived ka nahi hoga to base ka run ho jayga
console.log(tommy.isCute());
console.log(tommy.run()); 