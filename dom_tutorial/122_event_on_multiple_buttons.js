

const allButtons = document.querySelectorAll('button');

console.log(allButtons);

// btn1.addEventListener("click",()=>{
//     console.log("clicked one!!");
// })

for(let btn of allButtons){
    btn.addEventListener("click",function(){ // arrow function will not give output
        console.log(this.textContent);
    })
}


// they can also be used
// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })