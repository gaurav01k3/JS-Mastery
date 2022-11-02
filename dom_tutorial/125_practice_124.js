
// event loop

// little practice 

console.log("script start!!!");

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.target.style.color = "gray";
        e.target.style.background = "yellow";
    })
})
