// events 


// click

// 3 methods

// 1. using onClick attribute  
// 2. assigning function to onclick
const btn = document.querySelector(".btn-headline");

// 3.
// addEventListener - method 

// you can also make function outside , prefered arrow function
btn.addEventListener("click", () => {
    console.log("You clicked me!!");
})


