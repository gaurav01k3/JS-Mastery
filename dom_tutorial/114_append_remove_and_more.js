// document.createElement()
// append
// prepend
// remove

// const newTodoItem = document.createElement("li");

// const textNodeTodo = document.createTextNode("Tech students");
// newTodoItem.append(textNodeTodo);
// or 

// newTodoItem.textContent = "Teach students";

// append is same as appendChild
const todoList = document.querySelector(".todo-list");

// todoList.append(newTodoItem); // add to last
// todoList.prepend(newTodoItem); // add at start

// to remove todo 1
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);
// todoList.append(todo1);

// --------------------------------> 

// before
// after 
// they both work outside the element

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach students";

todoList.before(newTodoItem); // outside before the todo-list
todoList.after(newTodoItem); // outside after the todo-list