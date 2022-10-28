// function execution context 

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName) {
    console.log(arguments, arguments[0]); // it is array like object
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("harshit", "sharma"); // iska ek alag function execution context create hoga
console.log(personName);


// let and const jab tak initialised ni hote tab tak temporal dead zone me rehte h 
