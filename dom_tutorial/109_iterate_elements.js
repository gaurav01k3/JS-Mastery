//loop

// let navItems = document.getElementsByTagName('a'); // HTML collection

// array like object --> indexing, length property


// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach -- X/NA



// HTML collection 

// simple loop
// for (let i = 0; i < navItems.length; i++) {
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// for of loop
// for (let el of navItems) {
//     el.style.backgroundColor = "#fff";
//     el.style.color = "green";
//     el.style.fontWeight = "bold";
// }

// to use forEach convert navItems to array
// navItems = Array.from(navItems); // changed to array
// navItems.forEach(el => {
//     el.style.backgroundColor = "#fff";
//     el.style.color = "green";
//     el.style.fontWeight = "bold";
// });



// NodeList


let navItems = document.querySelectorAll('a');
console.log(navItems);
// can use all the loops in case of NodeList
// simple for loop
// for of loop
// forEach
