// elem.insertAdjacentHTML(where, html)
// beforebegin // before
// afterbegin; // prepend
// beforeend; // append
// afterend; // after


const todoList = document.querySelector(".todo-list");

todoList.insertAdjacentHTML("beforeend","<li> before end");
todoList.insertAdjacentHTML("afterbegin","<li> after begin");