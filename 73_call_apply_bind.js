// call, apply and bind

//--------------> call 

// any function can also be call like
// myFunc.call(); 


function About(hobby) {
    console.log(this.firstName, this.age, hobby);
}

const user1 = {
    firstName: "gaurav",
    age: 8,
    about: function (hobby) {
        console.log(this.firstName, this.age, hobby);
    }
}

const user2 = {
    firstName: "mohit",
    age: 9
}

// our aim was to call about for user2 but it is not present inside user2 so by using call(); we can call about of user1 and pass user2 that means now 'this object' inside about will refer to user2

// user1.about.call(user2, 'guitar');

// user1.about.call(); // this will not refer to any obj because by using call() , you must pass some object


// now best thing could be define about outside ok


// About.call(user1, "dance");
// About.call(user2, "singing");



//----------------->apply

//apply is same as call nut pass args as array[]
// About.apply(user1, ["guitar"]);



//---------------->bind
// bind is also same but it returns function which you have to call then you get the results as call()
const func = About.bind(user1, "guitar");
func();