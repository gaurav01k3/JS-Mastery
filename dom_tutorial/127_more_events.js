// key press event
// mouse over events


const body = document.body;
console.log(body);

body.addEventListener("keypress",(e)=>{
    console.log(e.key,"pressed");
})

body.addEventListener("mouseover",(e)=>{
    console.log("mouse is on",e.target);
})