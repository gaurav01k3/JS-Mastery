// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll

// const navItems = document.getElementsByClassName('nav-item'); // HTML collection

// console.log(navItems); // gives array like objects - HTML collection
// console.log(navItems[0]);

const navItems = document.querySelectorAll('.nav-item'); // NodeList

console.log(navItems); // give array like node list
console.log(navItems[1]);