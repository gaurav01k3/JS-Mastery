// clone nodes

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true); // true means deep cloning
ul.append(li);
ul.prepend(li2);