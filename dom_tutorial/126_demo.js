

const mainBtn = document.querySelector("button");
const body = document.body;

function randColorGen(){
    const red =  Math.floor(Math.random()*256);
    const green =  Math.floor(Math.random()*256);
    const blue =  Math.floor(Math.random()*256);
    const randonColor = `rgb(${red},${green},${blue})`; 
    return randonColor;
}


const col = document.querySelector("span");

mainBtn.addEventListener("click", ()=>{
    const randColor = randColorGen();
    body.style.backgroundColor = randColor;
    col.textContent = randColor;
})