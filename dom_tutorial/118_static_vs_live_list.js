//_static_vs_live_list

// querySelectorAll hame static list dete h elemnts ki
// getElementBySomething hame live list dete h elemnts ki


const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthli = document.createElement('li');
sixthli.textContent = "item 6";

// const ul  = document.querySelector(".todo-list");
ul.append(sixthli);

console.log(listItems);