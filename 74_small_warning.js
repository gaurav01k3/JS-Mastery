

const user1 = {
    firstName: "gaurav",
    age: 8,
    about: function (hobby) {
        console.log(this.firstName, this.age, hobby);
    }
}



// don't do this mistake


// user2.about();

// const myFunc = user1.about;
// myFunc(); // this will now reffered to global object thats why not desired output

const myFunc = user1.about.bind(user1, "guitar");
myFunc();