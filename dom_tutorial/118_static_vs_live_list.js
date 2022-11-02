//_static_vs_live_list

// querySelectorAll hame static list dete h elements ki
// getElementBySomething hame live list dete h elements ki


const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthli = document.createElement('li');
sixthli.textContent = "item 6";

// const ul  = document.querySelector(".todo-list");
ul.append(sixthli);

console.log(listItems);