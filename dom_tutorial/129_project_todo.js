const input = document.querySelector(".form-todo input[type='text']");
const todoForm = document.querySelector(".form-todo");
const todoList = document.querySelector(".todo-list");


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === "") {
        alert("Empty todo not allowed!!!");
    } else {
        const newTodo = document.createElement("li");
        newTodo.innerHTML = `
        <span class="text">${input.value}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>
    `
        todoList.append(newTodo);
        input.value = "";
    }
})  



todoList.addEventListener("click",(e)=>{
    //check if user clicked on done button
    if(e.target.classList.contains("done")){
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through"
    }
    if(e.target.classList.contains("remove")){
        const li = e.target.parentNode.parentNode;
        li.remove();
    }

})