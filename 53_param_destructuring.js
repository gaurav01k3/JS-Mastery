

//param destructuring


//object
//react


const person = {
    firstName: "gaurav",
    gender: "male"
}


function printDetails({ firstName, gender }) {
    console.log(firstName);
    console.log(gender);
}


printDetails(person);