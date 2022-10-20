const user1 = {
    firstName: "gaurav",
    age: 8,
    about() { // direct about syntax
        console.log(this.firstName, this.age);
    }
}


user1.about();