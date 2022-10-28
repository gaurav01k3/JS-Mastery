// add new HTML to the page



// inner HTML to add html element

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
// todoList.innerHTML = "<li> this will overwrite the whole html</li>";

// todoList.innerHTML += "<li> this will </li>"; 
console.log(todoList.innerHTML);

// when to use or when not to use

// not use when 
// this is not efficient as it will also add previous html also

// use when want to chnage the whole html
