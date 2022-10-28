// select element using query selector


const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const header = document.querySelector(".header");
console.log(header);

// const navItem = document.querySelector('.nav-item'); // will take first match
const navItem = document.querySelectorAll('.nav-item'); // selects all as NodeList

console.log(navItem);


