// console.dir(this.document);

const btn = document.querySelector("button");

console.log(btn);

btn.addEventListener("click",(event)=>{
    console.log("You clicked on btn!!!");
})

console.log("After event performed!!");