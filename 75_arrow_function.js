// arrow function behaves differently

// arrow function this apne ek level upar wale to manta h , aur app iska this khud se de nhi skte call() method se bhi 
const user1 = {
    firstName: "gaurav",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }
}

user1.about.call(user1); // also give undefined